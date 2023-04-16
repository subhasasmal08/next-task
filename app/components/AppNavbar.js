// "use client";
import React from "react";
import Link from "next/link";
import "./AppNavbar.css";
// import { useRouter } from "next/navigation";

export default function AppNavbar() {
  // const router = useRouter();
  // const pathname = usePathname();

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

  // console.log(typeof window, pathname);

  // if (typeof window !== undefined) {
  //   console.log("obje");
  // }
  return (
    <div>
      {/* {console.log("obje")} */}
      AppNavbar
      <nav>
        {/* {console.log(router)} */}
        <ul>
          {navbarArr.map((item) => (
            <li
              key={item.link}
              // className={router.pathname === "/Article" ? "active" : ""}
            >
              <Link href={item.link} style={{ textDecoration: "none" }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
