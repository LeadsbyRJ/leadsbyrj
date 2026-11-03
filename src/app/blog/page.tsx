import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Local SEO, Google Ads & Lead Gen Tips",
  description:
    "Local SEO, Google Ads, Google Business Profile, and lead generation insights from Leads by RJ. Practical tips for Orange County service businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section className="bg-radial-neon pt-12 sm:pt-16">
      <SectionHeading
        eyebrow="Blog"
        title="Local lead generation insights"
        description="Practical tips on Google Business Profile, websites that convert, Google Ads, and local SEO for Orange County service businesses."
      />

      {posts.length === 0 ? (
        <Card className="mx-auto max-w-lg text-center py-14">
          <p className="text-muted">Articles coming soon.</p>
          <div className="mt-6">
            <Button href="/#ranking-audit" className="neon-glow">
              Get Free Ranking Audit
            </Button>
          </div>
        </Card>
      ) : (
        <div className="mx-auto grid max-w-3xl gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="p-6">
              <p className="text-sm text-muted">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted">{post.description}</p>
              <div className="mt-4">
                <Button href={`/blog/${post.slug}`} variant="secondary" size="sm">
                  Read more
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <Button href="/#ranking-audit" className="neon-glow">
          Get Free Ranking Audit
        </Button>
      </div>
    </Section>
  );
}
