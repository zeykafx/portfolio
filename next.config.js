/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "play-lh.googleusercontent.com",
			},
		],
	},
	async headers() {
		return [{
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "max-age=3600, public"
        }
      ]
    }];
	},
};

module.exports = nextConfig;
