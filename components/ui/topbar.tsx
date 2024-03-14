"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./button";

function TopBar() {
  const pathname = usePathname();

  const item = [
    { title: "Home", href: "/" },
    {
      title: "See Schedule",
      href: "/schedule",
    },
    {
      title: "Booking List",
      href: "/booking-list",
    },
  ];

  const isLoggin = false;

  return (
    <nav className={`grid grid-cols-3 gap-10 pl-8 pr-20 pt-4 pb-12`}>
      <Image src="/images/logo.png" alt="test" width={92} height={92} />

      <div className="flex flex-row gap-3 mx-auto">
        {item.map((data) => (
          <Link
            className={`px-2 py-2 transition font-medium rounded-md hover:decoration-secondary/45 hover:text-primary/75 ${
              pathname === data.href &&
              "underline decoration-secondary text-primary font-semibold"
            }`}
            key={data.title}
            href={data.href}
          >
            {data.title}
          </Link>
        ))}
      </div>
      <div className="mt-auto justify-self-end">
        <div className="flex gap-8 items-center">
          {isLoggin ? (
            <>
              <h1>hi, user!</h1>
              <Button>logout</Button>
            </>
          ) : (
            <>
              <Button variant="secondary">Login</Button>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
