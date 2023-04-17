"use client";
import Link from "next/link";
import "./AppNavbar.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AppNavbar(){
  const navbarArr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Services",
      link: "/Service",
    },
    {
      name: "Pricing",
      link: "/Pricing",
    },
    {
      name: "Articles",
      link: "/Article",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
  ];
  const pathname = usePathname();
  const router = useRouter()
  return (
    <div>
      {console.log(router)}
      <nav className="navbar">
        <p className="header">AS/SO</p>

        <ul className="navbar_ul">
          {navbarArr.map((item) => (
            <li
              key={item.link}
              className={pathname === item.link ? "active navbar_title" : "navbar_title"}
              // style={{ color: active === item.name && "active" }}
            >
              <Link
                className="navbar_title"
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// export default AppNavbar;

// "use client"
// import { useRouter } from 'next/navigation'
// import React from 'react'

// export default function AppNavbar() {
//   const router = useRouter()
//   return (
//     <div>AppNavbar</div>
//   )
// }


