import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE.url}/blog/${post.slug}</link>
      <guid>${SITE.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${SITE.name} Blog</title>
    <link>${SITE.url}/blog</link>
    <description>Local SEO, Google Ads, and lead generation tips from Leads by RJ.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
