/**
 * Web Audio ambient soundscape engine for the Journey experience.
 * Fully synthetic, offline, zero-dependency.
 */

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;
  private windGain: GainNode | null = null;
  private windSource: AudioBufferSourceNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Warm low-pass filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(440, this.ctx.currentTime);
    this.filter.connect(this.masterGain);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play() {
    if (!this.ctx) this.init();
    if (!this.ctx || !this.masterGain || !this.filter) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Peaceful chord: C3, G3, D4, E4 (harmonics of open sky)
    const freqs = [130.81, 196.00, 293.66, 329.63];
    this.oscillators = freqs.map((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
      
      // Gentle detune for organic beating
      osc.detune.setValueAtTime((i - 1.5) * 4, this.ctx!.currentTime);
      
      gain.gain.setValueAtTime(0.04 / (i + 1), this.ctx!.currentTime);
      osc.connect(gain);
      gain.connect(this.filter!);
      
      osc.start();
      return osc;
    });

    // Create subtle pink/white noise for gentle wind in the clouds
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.04;
      }
      this.windSource = this.ctx.createBufferSource();
      this.windSource.buffer = noiseBuffer;
      this.windSource.loop = true;

      const windFilter = this.ctx.createBiquadFilter();
      windFilter.type = 'bandpass';
      windFilter.frequency.setValueAtTime(220, this.ctx.currentTime);
      windFilter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      this.windGain = this.ctx.createGain();
      this.windGain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      this.windSource.connect(windFilter);
      windFilter.connect(this.windGain);
      this.windGain.connect(this.masterGain);
      this.windSource.start();
    } catch {
      // Wind buffer fallback
    }

    // Fade in
    this.masterGain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 1.8);
    this.isPlaying = true;
  }

  public stop() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;
    this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch { /* noop */ }
      });
      this.oscillators = [];
      if (this.windSource) {
        try { this.windSource.stop(); this.windSource.disconnect(); } catch { /* noop */ }
        this.windSource = null;
      }
      this.isPlaying = false;
    }, 1300);
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundEngine();
