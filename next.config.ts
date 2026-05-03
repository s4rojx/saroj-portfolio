import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        // Apply X-Frame-Options: DENY to all routes except static files like resume.pdf
        source: "/((?!resume\.pdf).*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Allow resume.pdf to be embedded (no X-Frame-Options restriction)
        source: "/resume.pdf",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Type", value: "application/pdf" },
        ],
      },
    ];
  },
};

export default nextConfig;
