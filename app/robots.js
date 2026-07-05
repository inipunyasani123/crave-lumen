export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://crave-lumen.vercel.app/sitemap.xml",
    host: "https://crave-lumen.vercel.app",
  };
}
