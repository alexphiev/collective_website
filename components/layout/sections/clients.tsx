'use client'

import { clients } from '@/utils/clients-utils'
import { Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'
import Link from 'next/link'
import { saEvent } from '@/utils/analytics-utils'

export const ClientsSection = () => {
  return (
    <section id="clients" className="py-10">
      <div className="container">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {clients.map(({ url, name }) => (
            <div
              key={name}
              className="flex items-center text-xl font-medium grayscale filter hover:filter-none md:text-xl"
            >
              {/* <Image
                className="mr-2"
                src={icon}
                alt={name}
                width={50}
                height={50}
              /> */}
              <Link
                href={url || ''}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                onClick={() => {
                  saEvent(`click_clients_${name}}`);
                }}
              >
                {name}
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
