import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <Image src="/icons/logo.png" alt="logo" width={120} height={120} />
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between ga-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/">
            <Image src="/icons/logo.png" alt="logo" width={120} height={120} />
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
