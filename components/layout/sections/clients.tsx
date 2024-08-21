"use client";

import { clients } from "@/utils/clients";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Link from "next/link";

export const ClientsSection = () => {
  return (
    <section id="clients" className="mx-auto p-18 sm:p-32">
      <div className="mx-auto max-w-[100%]">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {clients.map(({ url, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-xl font-medium"
            >
              {/* <Image
                className="mr-2"
                src={icon}
                alt={name}
                sizes="100vw"
                width={0}
                height={32}
                style={{ filter: "grayscale(100%)" }}
              /> */}
              <Link
                href={url || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {name}
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
