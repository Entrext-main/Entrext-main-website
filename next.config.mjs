/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare tunnels rotate their subdomain on each restart (e.g.
  // recently-census-moses-horizontal.trycloudflare.com), so allow the whole
  // *.trycloudflare.com namespace. Add more entries here for other tunnels.
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.ngrok-free.app",
    "*.ngrok.io",
  ],
  async redirects() {
    return [
      // /ecosystem was renamed/retired in favour of the home page hero (founder
      // ecosystem positioning) and /advertise. 301 preserves indexed SEO equity.
      { source: "/ecosystem", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
