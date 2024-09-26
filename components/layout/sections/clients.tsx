"use client";

import { clients } from "@/utils/clients-utils";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Link from "next/link";
import Image from "next/image";

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
          {clients.map(({ url, name, icon }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-xl font-medium filter grayscale hover:filter-none"
            >
              {/* <Image
                className="mr-2"
                src={icon}
                alt={name}
                width={50}
                height={50}
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
