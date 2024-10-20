/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },

            {
                protocol: "https",
                hostname: "ndbqcbbgigoygotysyae.supabase.co"
            }
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        })

        return config
    },
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination: "https://ndbqcbbgigoygotysyae.supabase.co/:path*"
            }
        ]
    }
}

module.exports = nextConfig
