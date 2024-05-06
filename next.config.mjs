/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "omnitail.net",
            }
        ]
    }
};

export default nextConfig;
