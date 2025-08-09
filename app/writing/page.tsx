import { writings } from '@/src/data/writings'
import Nav from '@/components/Nav'
import Link from 'next/link'

export default function WritingPage() {
  return (
    <main className="max-w-prose mx-auto px-4 mt-16 pb-8 relative">
      <Nav active="writing" />
      <section className="w-full">
        {writings.map((post, index) => (
          <div key={post.url} className="w-full">
            {post.external ? (
              <a
                href={post.url}
                target="_blank"
                className="text-blue-700 hover:underline"
              >
                {post.title}
              </a>
            ) : (
              <Link
                href={post.url}
                className="text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
            )}
            <p className="text-base text-gray-500 mt-2">{post.date}</p>
            {index < writings.length - 1 && (
              <hr className="opacity-60 border-0 border-b border-gray-200 w-full my-3" />
            )}
          </div>
        ))}
      </section>
    </main>
  )
}


