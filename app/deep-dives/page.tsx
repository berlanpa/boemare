'use client'

import Nav from '@/components/Nav'
import { deepDives } from '@/src/data/deepDives'

export default function DeepDivesPage() {
  return (
    <main className="max-w-prose mx-auto px-4 mt-16 pb-8 md:pb-40 relative">
      <Nav active="deep-dives" />

      <section className="w-full">
        {/* Top rule */}
        <hr className="opacity-60 border-0 border-b border-gray-200 w-full mb-4" />

        {deepDives.map((item, idx) => (
          <div key={item.title} className="w-full">
            {/* Title, desc, links */}
            <div className="flex flex-col w-full">
              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-gray-600 pb-4">{item.description}</p>
              <div className="flex flex-row items-center text-sm text-blue-600 gap-6">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" className="hover:underline">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider between items */}
            {idx < deepDives.length - 1 && (
              <hr className="opacity-60 border-0 border-b border-gray-200 w-full my-4" />
            )}
          </div>
        ))}
      </section>
    </main>
  )
}


