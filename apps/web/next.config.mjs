/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  async redirects() {
    return [
      {
        source: "/lavori/:path*",
        destination: "/it#projects",
        permanent: true,
      },
      {
        source: "/servizi",
        destination: "/it#contact",
        permanent: true,
      },
      {
        source: "/sviluppo-software-portogruaro",
        destination: "/it#contact",
        permanent: true,
      },
      {
        source: "/applicazioni-web-portogruaro",
        destination: "/it#contact",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
