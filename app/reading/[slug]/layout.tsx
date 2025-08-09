import { books } from '@/src/data/books'
import type { Metadata } from 'next'

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const book = books.find((b) => b.slug.split('/').pop() === params.slug && !b.slug.endsWith('.png'))
  
  if (!book) {
    return {
      title: 'Book Not Found'
    }
  }
  
  return {
    title: book.title,
    description: `By: ${book.author} - Read: ${book.date} - Rating: ${book.rating}/10`,
    openGraph: {
      title: book.title,
      description: `By: ${book.author} - Read: ${book.date} - Rating: ${book.rating}/10`,
      images: [book.coverImage]
    }
  }
}

export function generateStaticParams() {
  // only include slugs from HTML pages, skip image entries
  return books
    .map((b) => b.slug)
    .filter((s) => s && !s.endsWith('.png'))
    .map((s) => ({ slug: s.split('/').pop()! }))
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
