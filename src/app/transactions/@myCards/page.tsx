"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CreditCard {
  Balance: number;
  CardHolder: string;
  ValidThru: string;
  CardNumber: string;
}

export default function MyCards() {
  const [cards, setCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/cards");
        const data = await response.json();
        setCards(data.cards);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[18px] font-[600] text-[#343c6a]">My Cards</h1>
        <p className="text-[18px] font-[600] text-[#343c6a] cursor-pointer">
          + Add Card
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {(cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[25px] p-[24px_22px_20px_26px] border border-[#DFEAF2]"
              style={{
                height: "235px",
                width: "350px",
                backgroundImage:
                  index === 0 ? "linear-gradient(#4C49ED, #0A06F4)" : "linear-gradient(#FFFFFF, #FFFFFF)",
                color: index === 0 ? "#FFFFFF" : "#343C6A",
              }}
            >
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div>
                  <h2
                    className="text-[12px] font-[400]"
                    style={{
                      color: index === 0 ? "#FFFFFF" : "#718ebf",
                    }}
                  >
                    Balance
                  </h2>
                  <h1 className="text-[20px] font-[600]">
                    ${card.Balance.toLocaleString()}
                  </h1>
                </div>
                <div className="ml-auto">
                  <Image
                    alt="Bank Icon"
                    width={35}
                    height={35}
                    src={
                      index === 0
                        ? "data:image/png;base64,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"
                        : "data:image/png;base64,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"
                    }
                  />
                </div>
              </div>

              <div className="flex justify-between mb-[20px]">
                <div>
                  <h2
                    className="text-[12px] font-[400]"
                    style={{
                      color: index === 0 ? "#FFFFFF" : "#718ebf",
                    }}
                  >
                    CARD HOLDER
                  </h2>
                  <h1 className="text-[15px] font-[600]">{card.CardHolder}</h1>
                </div>
                <div>
                  <h2
                    className="text-[12px] font-[400]"
                    style={{
                      color: index === 0 ? "#FFFFFF" : "#718ebf",
                    }}
                  >
                    VALID THRU
                  </h2>
                  <h1 className="text-[15px] font-[600]">{card.ValidThru}</h1>
                </div>
              </div>

              <div
                className={`flex items-center border-t-[1px] ${
                  index === 0 ? "border-[#FFFFFF26]" : "#border-[DFEAF2]"
                } pt-[15px]`}
                style={{
                  marginLeft: "-26px",
                  marginRight: "-21px",
                }}
              >
                <h1 className="text-[22px] font-[600] ml-[26px]">
                  {card.CardNumber}
                </h1>
                <div className="ml-auto flex items-left relative">
                  <div
                    className={`w-[30px] h-[30px] ${index === 0 ? "bg-[#FFFFFF80]" : "bg-[#9199AF80]"} rounded-full absolute top-[-13] right-8`}
                    style={{
                      mixBlendMode: index === 0 ? "normal" : "multiply",
                    }}
                  ></div>
                  <div
                    className={`w-[30px] h-[30px] ${index === 0 ? "bg-[#FFFFFF80]" : "bg-[#9199AF80]"} rounded-full absolute top-[-13] right-4`}
                    style={{
                      mixBlendMode: index === 0 ? "normal" : "multiply",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
