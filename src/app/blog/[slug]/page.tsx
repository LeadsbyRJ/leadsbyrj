import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section className="bg-radial-neon pt-12 sm:pt-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-muted">{post.date}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>

        <div className="prose prose-invert mt-8 max-w-none">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-6 text-center">
          <h2 className="text-xl font-semibold">Want a free ranking audit?</h2>
          <p className="mt-2 text-muted">
            Tell me your service and city. I’ll show you where you stand on Google and what to fix first.
          </p>
          <div className="mt-4">
            <Button href="/#ranking-audit" className="neon-glow">
              Get Free Ranking Audit
            </Button>
          </div>
        </div>
      </article>
    </Section>
  );
}
