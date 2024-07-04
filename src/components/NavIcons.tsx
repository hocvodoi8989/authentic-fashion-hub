"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const router = useRouter();
  const loggedIn = false;

  const handleProfile = () => {
    if (!loggedIn) {
      router.push("/login");
    }
    setProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/icons/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {profileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/icons/notification.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/icons/cart.png"
          alt="profile"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setCartOpen((prev) => !prev)}
              />
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-red rounded-full text-white text-sm flex items-center justify-center">2</div>
      </div>
      {cartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
