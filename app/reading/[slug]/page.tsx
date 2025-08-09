'use client'

import { books } from '@/src/data/books'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

// Get book review from the book data
const getBookReview = (slug: string): string[] => {
  const book = books.find((b) => b.slug === slug)
  return book?.description || [
    "This is an excellent book that provides valuable insights and perspectives on its subject matter.",
    "The author presents their ideas in a clear and engaging way that makes complex topics accessible to readers.",
    "I found this book to be both informative and thought-provoking, offering practical wisdom that can be applied in various contexts."
  ]
}



export default function BookPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug.split('/').pop() === params.slug && !b.slug.endsWith('.png'))
  if (!book) return notFound()
  
  const review = getBookReview(params.slug)
  const bookshelfRef = useRef<HTMLDivElement>(null)
  const currentBookIndex = books.findIndex((b) => b.slug.split('/').pop() === params.slug)
  const [openIndex, setOpenIndex] = useState<number | null>(currentBookIndex)
  const router = useRouter()
  
  useEffect(() => {
    if (bookshelfRef.current && currentBookIndex >= 0) {
      const container = bookshelfRef.current
      
      // Restore scroll position from session storage first
      const savedScrollPosition = sessionStorage.getItem('bookshelf-scroll-position')
      if (savedScrollPosition) {
        container.scrollLeft = parseInt(savedScrollPosition, 10)
      }
      
      // Small delay to ensure layout is complete (open width applied) before measuring
      const timer = setTimeout(() => {
        if (!container) return
        const items = Array.from(container.querySelectorAll('a.book-item')) as HTMLElement[]
        const targetEl = items[currentBookIndex]
        if (!targetEl) return

        const containerWidth = container.clientWidth
        const currentScroll = container.scrollLeft

        // Compute element center in scroll coordinates (independent of margins/widths)
        const elementCenter = targetEl.offsetLeft + targetEl.clientWidth / 2

        const centerStart = currentScroll + containerWidth * 0.3
        const centerEnd = currentScroll + containerWidth * 0.7

        // Only scroll if not within center band
        if (elementCenter < centerStart || elementCenter > centerEnd) {
          const scrollLeft = elementCenter - containerWidth / 2
          container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' })
        }
      }, 180)
      
      // Save scroll position when user scrolls
      const handleScroll = () => {
        sessionStorage.setItem('bookshelf-scroll-position', container.scrollLeft.toString())
      }
      
      container.addEventListener('scroll', handleScroll)
      
      return () => {
        clearTimeout(timer)
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentBookIndex])
  
  return (
    <main className="max-w-prose mx-auto px-4 mt-16 pb-8 md:pb-40 relative">
      <Nav active="reading" />
      
      {/* Bookshelf Section with current book highlighted */}
      <section className="w-full mb-12 overflow-hidden border-b border-gray-200 pb-4">
        <div 
          ref={bookshelfRef}
          className="bookshelf-container flex items-center overflow-x-auto cursor-grab"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '0.5rem',
            overflowX: 'auto',
            cursor: 'grab',
            width: '100%'
          }}
        >
          {books.map((b, i) => {
            const isCurrentBook = b.slug.split('/').pop() === params.slug
            return (
              <Link
                key={b.slug}
                href={`/reading/${b.slug.split('/').pop()}`}
                className={`book-item ${openIndex === i ? 'open' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenIndex(i)
                  setTimeout(() => {
                    router.push(`/reading/${b.slug.split('/').pop()}`)
                  }, 450)
                }}
              >
                {/* Show cover for current book, spine for others */}
                {/* Spine */}
                <div
                  className="book-spine"
                  style={{
                    backgroundColor: b.spineColor,
                    color: b.textColor,
                  }}
                >
                  <span
                    style={{
                      pointerEvents: 'none',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      zIndex: 50,
                      height: '220px',
                      width: '41.5px',
                      opacity: 0.4,
                      filter: 'url(reading.html)'
                    }}
                  />
                  <h2
                    className="font-bold text-xs leading-tight mt-3 select-none overflow-hidden whitespace-nowrap text-ellipsis"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.75rem',
                      lineHeight: 1.33,
                      marginTop: '12px',
                      userSelect: 'none',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      maxHeight: '196px',
                      writingMode: 'vertical-rl'
                    }}
                  >
                    {b.title}
                  </h2>
                </div>

                {/* Cover */}
                <div className="book-cover-wrap">
                  <span
                    style={{
                      pointerEvents: 'none',
                      position: 'fixed',
                      top: 0,
                      right: 0,
                      zIndex: 50,
                      height: '220px',
                      width: '166px',
                      opacity: 0.4,
                      filter: 'url(reading.html)'
                    }}
                  />
                  <span
                    style={{
                      pointerEvents: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 50,
                      height: '220px',
                      width: '166px',
                      background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)'
                    }}
                  />
                  <img alt={b.title} src={b.coverImage} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
      
      {/* Book Details */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 no-article-styles">{book.title}</h1>
        <p className="text-base leading-6 mt-3 mb-3">
          <strong>By:</strong> {book.author} - <strong>Read:</strong> {book.date} - <strong>Rating:</strong> {book.rating}/10
        </p>
      </div>
      
      <article>
        {review.map((paragraph, index) => (
          <p key={index} className="text-base leading-6 mt-3 mb-3">
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  )
}


