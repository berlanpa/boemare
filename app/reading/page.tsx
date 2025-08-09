'use client'

import Link from 'next/link'
import { books } from '@/src/data/books'
import Nav from '@/components/Nav'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ReadingPage() {
  const bookshelfRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()
  
  useEffect(() => {
    if (bookshelfRef.current) {
      const container = bookshelfRef.current
      
      // Restore scroll position from session storage
      const savedScrollPosition = sessionStorage.getItem('bookshelf-scroll-position')
      if (savedScrollPosition) {
        container.scrollLeft = parseInt(savedScrollPosition, 10)
      }
      
      // Save scroll position when user scrolls
      const handleScroll = () => {
        sessionStorage.setItem('bookshelf-scroll-position', container.scrollLeft.toString())
      }
      
      container.addEventListener('scroll', handleScroll)
      
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  
  return (
    <main className="max-w-prose mx-auto px-4 mt-16 pb-8 md:pb-40 relative">
      <Nav active="reading" />
      
      {/* Bookshelf Section */}
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
          {books.map((book, i) => (
            <Link
              key={book.slug}
              href={`/reading/${book.slug.split('/').pop()}`}
              className={`book-item ${openIndex === i ? 'open' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                setOpenIndex(i)
                // center the clicked book considering expanded width before navigation
                const container = bookshelfRef.current
                if (container) {
                  const items = Array.from(container.querySelectorAll('a.book-item')) as HTMLElement[]
                  const targetEl = items[i]
                  if (targetEl) {
                    const containerWidth = container.clientWidth
                    const elementCenter = targetEl.offsetLeft + targetEl.clientWidth / 2
                    const scrollLeft = Math.max(0, elementCenter - containerWidth / 2)
                    container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
                  }
                }
                // allow animation to play before navigation
                setTimeout(() => {
                  router.push(`/reading/${book.slug.split('/').pop()}`)
                }, 450)
              }}
            >
              {/* Book spine */}
              <div
                className="book-spine"
                style={{
                  backgroundColor: book.spineColor,
                  color: book.textColor,
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
                  {book.title}
                </h2>
              </div>

              {/* Book cover (hidden by default, shown on hover) */}
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
                <img alt={book.title} src={book.coverImage} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Detailed Book Sections */}
      <section className="w-full">
        {books.map((book, index) => (
          <div key={book.slug} className="w-full">
            <div className="flex flex-col gap-2">
              {index > 0 && (
                <hr className="opacity-60 border-0 border-b border-gray-200 w-full mb-3" />
              )}
              <div className="flex flex-row items-start gap-6">
                <img
                  alt={book.title}
                  src={book.coverImage}
                  className="border border-gray-200 w-auto flex-shrink-0 book-cover"
                />
                <div className="flex flex-col items-start flex-grow gap-2">
                  <Link 
                    href={`/reading/${book.slug.split('/').pop()}`}
                    className="text-inherit hover:underline transition-all duration-150 ease-out cursor-pointer no-underline outline-2 outline-transparent"
                  >
                    <h2 className="text-xl font-bold leading-tight">{book.title}</h2>
                  </Link>
                  <p className="text-gray-600">{book.author}</p>
                  <p className="text-gray-500">
                    Read: {book.date} • Rating: {book.rating}/10
                  </p>
                  <article className="prose-sm">
                    {book.description.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-base leading-6 mt-3 mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </article>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}


