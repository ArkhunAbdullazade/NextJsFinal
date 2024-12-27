import Image from "next/image";
import User from "../assets/user.png";
import SearchIcon from "../assets/search.svg";
import SettingsIcon from "../assets/settings.svg";
import NotificationsIcon from "../assets/notifications.svg";

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full py-5 px-10 items-center border-b">
      <div className="font-inter font-semibold text-[28px] text-headline">Overview</div>

      <div className="flex flex-row gap-[30] items-center">
        <div className="items-center flex flex-row bg-backgroundElements py-4 px-6 rounded-[40] gap-4">
          <SearchIcon color="#718EBF" width={20} height={20}/>

          <input className="font-inter items-center bg-backgroundElements placeholder-placeholderForeground" placeholder="Search for something" />
        </div>

        <button className="p-3 bg-backgroundElements rounded-full flex items-center justify-center">
          <SettingsIcon color="#718EBF" width={25} height={25} />
        </button>

        <button className="p-3 bg-backgroundElements rounded-full flex items-center justify-center">
          <NotificationsIcon color="#FE5C73" width={25} height={25} />
        </button>

        <Image src={User} alt="user image" />
      </div>
    </header>
  );
}
