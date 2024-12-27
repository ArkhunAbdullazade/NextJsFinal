"use client";

import Card from "@/components/card";

export default function QuickTransfer() {
    const transferPersons = [
        { image: "/person1.png", name: "Livia Bator", description: "CEO" },
        { image: "/person2.png", name: "Randy Press", description: "Director" },
        { image: "/person3.png", name: "Workman", description: "Designer" },
    ];

    return (
        <div>
            <h1 className="font-inter font-semibold text-[#343c6a] text-[22px] mb-[21px] sm:text-[18px] sm:mb-[16px]">
                Quick Transfer
            </h1>
            <Card height={"276px"} width={"445px"} padding={"35px 26px 35px 25px"}
            >
                <div className="flex">
                    {transferPersons.map((person, index) => (
                        <div
                            key={index}
                            className="h-[127px] w-[85px] flex flex-col items-center text-center mr-[28px]"
                        >
                            <img
                                alt="photo"
                                src={person.image}
                                className="w-[70px] h-[70px] object-cover"
                            />
                            <h1 className="text-[#232323] text-[16px] font-normal font-inter">
                                {person.name}
                            </h1>
                            <h1 className="text-[#718ebf] text-[15px] font-normal m-0">
                                {person.description}
                            </h1>
                        </div>
                    ))}
                    <div className="w-[50px] h-[50px] rounded-full shadow-[0px_0px_10px_#718EBF] flex items-center justify-center mt-[41px] text-center">
                        <h1>{">"}</h1>
                    </div>
                </div>

                <div className="flex items-center mt-[45px] gap-[10px]">
                    <h1 className="text-[#718ebf] font-normal text-[16px] whitespace-nowrap m-0 font-inter">
                        Write Amount
                    </h1>
                    <div className="relative w-[280px] h-[50px] flex">
                        <input
                            type="number"
                            step="any"
                            placeholder="525.50"
                            className="w-full h-full bg-[#edf1f7] text-[#718ebf] text-[16px] font-normal rounded-full px-[30px] pr-[135px] font-inter border-none outline-none"
                        />
                        <button
                            className="absolute right-0 top-0 h-full w-[125px] bg-[#1814f3] text-white text-[16px] font-medium rounded-full flex items-center justify-center border-none cursor-pointer font-inter"
                        >
                            Send
                            <svg
                                width="26"
                                height="23"
                                viewBox="0 0 26 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-[11px]"
                            >
                                <path
                                    d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
