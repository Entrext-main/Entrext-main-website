"use client";

import React, { useEffect, useRef } from 'react';

interface BalatroComponentProps {
  spinRotation?: number;
  spinSpeed?: number;
  offsetX?: number;
  offsetY?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  contrast?: number;
  lighting?: number;
  spinAmount?: number;
  pixelFilter?: number;
  spinEase?: number;
  isRotate?: boolean;
  mouseInteraction?: boolean;
  className?: string;
}

function hexOrRgbToVec4(color: string): [number, number, number, number] {
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1], 10) / 255,
      parseInt(rgbMatch[2], 10) / 255,
      parseInt(rgbMatch[3], 10) / 255,
      rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1.0,
    ];
  }
  const hexStr = color.replace('#', '');
  if (hexStr.length === 3) {
    return [
      parseInt(hexStr[0] + hexStr[0], 16) / 255,
      parseInt(hexStr[1] + hexStr[1], 16) / 255,
      parseInt(hexStr[2] + hexStr[2], 16) / 255,
      1.0,
    ];
  } else if (hexStr.length === 6) {
    return [
      parseInt(hexStr.slice(0, 2), 16) / 255,
      parseInt(hexStr.slice(2, 4), 16) / 255,
      parseInt(hexStr.slice(4, 6), 16) / 255,
      1.0,
    ];
  }
  return [0.06, 0.18, 0.13, 1.0];
}

const vertexShaderSource = `
attribute vec2 a_position;
varying vec2 vUv;
void main() {
  vUv = 0.5 * (a_position + 1.0);
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform float uSpinRotation;
uniform float uSpinSpeed;
uniform vec2 uOffset;
uniform vec4 uColor1;
uniform vec4 uColor2;
uniform vec4 uColor3;
uniform float uContrast;
uniform float uLighting;
uniform float uSpinAmount;
uniform float uPixelFilter;
uniform float uSpinEase;
uniform bool uIsRotate;
uniform vec2 uMouse;
varying vec2 vUv;

vec4 effect(vec2 screenSize, vec2 screen_coords) {
  float pixel_size = length(screenSize.xy) / uPixelFilter;
  vec2 c = (floor(screen_coords / pixel_size) + 0.5) * pixel_size;
  vec2 uv = (c - 0.5 * screenSize.xy) / length(screenSize.xy) - uOffset;
  float uv_len = length(uv);

  vec2 mouseNorm = uMouse - 0.5;
  float mouseDist = length(uv - mouseNorm);
  float mouseInfluence = smoothstep(0.6, 0.0, mouseDist);

  float speed = (iTime * uSpinSpeed * 0.1) + (uIsRotate ? 0.5 : 0.0);
  speed += mouseInfluence * 0.1;

  float new_pixel_angle = atan(uv.y, uv.x) + speed - uSpinEase * 20.0 * (uSpinAmount * uv_len + (1.0 - uSpinAmount));
  vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
  uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);

  uv *= 30.0;
  float baseSpeed = iTime * uSpinSpeed;
  speed = baseSpeed + mouseInfluence * 2.0;

  vec2 uv2 = vec2(uv.x + uv.y);

  for(int i = 0; i < 5; i++) {
    uv2 += sin(max(uv.x, uv.y)) + uv;
    uv += 0.5 * vec2(
      cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121),
      sin(uv2.x - 0.113 * speed)
    );
    uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
  }

  float contrast_mod = (0.25 * uContrast + 0.5 * uSpinAmount + 1.2);
  float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
  float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
  float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
  float c3p = 1.0 - min(1.0, c1p + c2p);
  float light = (uLighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + uLighting * max(c2p * 5.0 - 4.0, 0.0);

  return (0.3 / uContrast) * uColor1 + (1.0 - 0.3 / uContrast) * (uColor1 * c1p + uColor2 * c2p + vec4(c3p * uColor3.rgb, c3p * uColor1.a)) + light;
}

void main() {
  vec2 uv = vUv * iResolution.xy;
  gl_FragColor = effect(iResolution.xy, uv);
}
`;

export const BalatroComponent: React.FC<BalatroComponentProps> = ({
  spinRotation = -2,
  spinSpeed = 4,
  offsetX = 0,
  offsetY = 0,
  color1 = 'rgb(11, 36, 27)', // Deep pine
  color2 = 'rgb(24, 66, 48)', // Mid forest
  color3 = 'rgb(243, 203, 66)', // Golden marigold accent
  contrast = 1.6,
  lighting = 0.5,
  spinAmount = 0.22,
  pixelFilter = 850,
  spinEase = 1.0,
  isRotate = false,
  mouseInteraction = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'high-performance' });
    if (!gl) return;

    // Create shader helper
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionAttr);
    gl.vertexAttribPointer(positionAttr, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = gl.getUniformLocation(program, 'iResolution');
    const uTime = gl.getUniformLocation(program, 'iTime');
    const uSpinRot = gl.getUniformLocation(program, 'uSpinRotation');
    const uSpinSpd = gl.getUniformLocation(program, 'uSpinSpeed');
    const uOffsetLoc = gl.getUniformLocation(program, 'uOffset');
    const uCol1 = gl.getUniformLocation(program, 'uColor1');
    const uCol2 = gl.getUniformLocation(program, 'uColor2');
    const uCol3 = gl.getUniformLocation(program, 'uColor3');
    const uCont = gl.getUniformLocation(program, 'uContrast');
    const uLight = gl.getUniformLocation(program, 'uLighting');
    const uSpinAmt = gl.getUniformLocation(program, 'uSpinAmount');
    const uPixelFilt = gl.getUniformLocation(program, 'uPixelFilter');
    const uSpinEs = gl.getUniformLocation(program, 'uSpinEase');
    const uRotate = gl.getUniformLocation(program, 'uIsRotate');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');

    let mouseX = 0.5;
    let mouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const col1Vec = hexOrRgbToVec4(color1);
    const col2Vec = hexOrRgbToVec4(color2);
    const col3Vec = hexOrRgbToVec4(color3);

    const render = (now: number) => {
      gl.useProgram(program);
      gl.uniform3f(uResolution, canvas.width, canvas.height, canvas.width / Math.max(1, canvas.height));
      gl.uniform1f(uTime, now * 0.001);
      gl.uniform1f(uSpinRot, spinRotation);
      gl.uniform1f(uSpinSpd, spinSpeed);
      gl.uniform2f(uOffsetLoc, offsetX, offsetY);
      gl.uniform4fv(uCol1, col1Vec);
      gl.uniform4fv(uCol2, col2Vec);
      gl.uniform4fv(uCol3, col3Vec);
      gl.uniform1f(uCont, contrast);
      gl.uniform1f(uLight, lighting);
      gl.uniform1f(uSpinAmt, spinAmount);
      gl.uniform1f(uPixelFilt, pixelFilter);
      gl.uniform1f(uSpinEs, spinEase);
      gl.uniform1i(uRotate, isRotate ? 1 : 0);
      gl.uniform2f(uMouseLoc, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      if (program) gl.deleteProgram(program);
      if (vertShader) gl.deleteShader(vertShader);
      if (fragShader) gl.deleteShader(fragShader);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
    };
  }, [
    spinRotation,
    spinSpeed,
    offsetX,
    offsetY,
    color1,
    color2,
    color3,
    contrast,
    lighting,
    spinAmount,
    pixelFilter,
    spinEase,
    isRotate,
    mouseInteraction,
  ]);

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  );
};
