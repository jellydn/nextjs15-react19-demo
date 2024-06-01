/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: {
			compilationMode: "annotation",
		},
		staleTimes: {
			dynamic: 30,
		},
		ppr: "incremental",
	},
};

export default nextConfig;
