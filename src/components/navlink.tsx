"use client";

import Link from "next/link";
import DashboardIcon from "../assets/dashboard.svg";
import AccountsIcon from "../assets/accounts.svg";
import CreditCardsIcon from "../assets/credit-cards.svg";
import InvestmentsIcon from "../assets/investments.svg";
import LoansIcon from "../assets/loans.svg";
import PrivelegesIcon from "../assets/priveleges.svg";
import ServicesIcon from "../assets/services.svg";
import SettingsIcon from "../assets/setting.svg";
import TransactionsIcon from "../assets/transactions.svg";
import React from "react";

interface NavLinkProps {
  url?: string;
  displayName: string;
  isActive?: boolean | false;
  icon: number;
}

const icons = [
  DashboardIcon,
  TransactionsIcon,
  AccountsIcon,
  InvestmentsIcon,
  CreditCardsIcon,
  LoansIcon,
  ServicesIcon,
  PrivelegesIcon,
  SettingsIcon,
];

export default function NavLink({
  url,
  displayName,
  isActive,
  icon,
}: NavLinkProps) {
  return (
    <Link href={url ?? "/#"} className="flex flex-row items-center gap-9">
      <div
        className={`${
          isActive ? "bg-navActive" : "bg-transparent"
        } w-1.5 h-[60] rounded-e-lg`}
      ></div>

      {React.createElement(icons[icon], {
        color: isActive ? "rgb(45, 96, 255)" : "rgb(177, 177, 177)",
        width: "25px",
        height: "25px",
      })}

      <div
        className={`flex items-center text-[18px] font-inter ${
          isActive ? "text-navActive" : "text-navInactive"
        }`}
      >
        {displayName}
      </div>
    </Link>
  );
}
