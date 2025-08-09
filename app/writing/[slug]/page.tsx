import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import { writings } from '@/src/data/writings'

function findWritingBySlug(slug: string) {
  return writings.find((w) => !w.external && w.slug === slug)
}

function extractBetween(html: string, startMarker: RegExp, endMarker: RegExp) {
  const startMatch = startMarker.exec(html)
  if (!startMatch) return null
  const startIndex = startMatch.index + startMatch[0].length
  const endMatch = endMarker.exec(html.slice(startIndex))
  if (!endMatch) return null
  const endIndex = startIndex + endMatch.index
  return html.slice(startIndex, endIndex)
}

function rewriteArticleLinks(articleHtml: string): string {
  if (!articleHtml) return articleHtml

  return articleHtml.replace(/href="([^"]+)"/gi, (full, href: string) => {
    // Leave external links as-is
    if (/^[a-z]+:\/\//i.test(href) || href.startsWith('mailto:')) {
      return full
    }

    let normalized = href
      .replace(/^\.\.\//, '/')
      .replace(/^\.\//, '')

    // Map top-level pages
    normalized = normalized.replace(/^(?:\.\.\/)?index\.html$/i, '/')
    normalized = normalized.replace(/^(?:\.\.\/)?reading\.html$/i, '/reading')
    normalized = normalized.replace(/^(?:\.\.\/)?writing\.html$/i, '/writing')
    normalized = normalized.replace(/^(?:\.\.\/)?deep-dives\.html$/i, '/deep-dives')

    // Map writing and reading slugs
    normalized = normalized.replace(/^(?:\.\.\/)?writing\/([A-Za-z0-9-]+)\.html$/i, '/writing/$1')
    normalized = normalized.replace(/^(?:\.\.\/)?reading\/([A-Za-z0-9-]+)\.html$/i, '/reading/$1')

    // If still ends with .html and is relative, strip extension and ensure leading slash
    if (!/^[a-z]+:\/\//i.test(normalized) && /\.html$/i.test(normalized)) {
      normalized = normalized.replace(/\.html$/i, '')
    }
    if (!normalized.startsWith('/')) {
      normalized = '/' + normalized
    }

    return `href="${normalized}"`
  })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const w = findWritingBySlug(params.slug)
  if (!w) return { title: 'Writing Not Found' }
  return { title: w.title, description: w.description }
}

export function generateStaticParams() {
  return writings
    .filter((w) => !w.external)
    .map((w) => ({ slug: w.slug }))
}

export default function WritingPostPage({ params }: { params: { slug: string } }) {
  const w = findWritingBySlug(params.slug)
  if (!w) return notFound()
  const title = w.title
  let article = w.html ?? ''
  article = rewriteArticleLinks(article)

  return (
    <main className="max-w-prose mx-auto px-4 mt-16 pb-8 md:pb-40 relative">
      <Nav active="writing" />

      <section className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
        <article
          className="prose-sm"
          dangerouslySetInnerHTML={{ __html: article }}
        />
      </section>
    </main>
  )
}


