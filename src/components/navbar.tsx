"use client";

import { usePathname } from "next/navigation";
import Logo from "../assets/logo.png";
import Image from "next/image";
import NavLink from "./navlink";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="h-screen border-solid border-border border-r">
      <div className="flex flex-row px-10 py-5">
        <div className="flex flex-row gap-2 py-3">
          <Image src={Logo} alt="Logo" width={36} height={36} />
          <span className="text-headline text-2xl font-black font-montserrat">
            BankDash.
          </span>
        </div>
      </div>

      <ul>
        <li>
          <NavLink
            icon={0}
            url="/dashboard"
            displayName="Dashboard"
            isActive={pathname === "/dashboard"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={1}
            url="/transactions"
            displayName="Transactions"
            isActive={pathname === "/transactions"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={2}
            url="/accounts"
            displayName="Accounts"
            isActive={pathname === "/accounts"}
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={3}
            displayName="Investments"
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={4}
            displayName="Credit Cards"
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={5}
            displayName="Loans"
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={6}
            displayName="Services"
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={7}
            displayName="My Priveleges"
          ></NavLink>
        </li>

        <li>
          <NavLink
            icon={8}
            displayName="Setting"
          ></NavLink>
        </li>
      </ul>
    </nav>
  );
}
