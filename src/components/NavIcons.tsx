"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";
import { Popover } from "antd";
import Loading from "./Loading";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  // TEMPORARY
  // const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  // AUTH WITH WIX-MANAGED AUTH

  // const wixClient = useWixClient();

  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );

  //   console.log(loginRequestData);

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    console.log(logoutUrl)
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const profile = isLoggedIn ? (
    <div>
      <Link href="/profile">Profile</Link>
      <div className="mt-2 cursor-pointer" onClick={handleLogout}>
        {isLoading ? <Loading /> : "Logout"}
      </div>
    </div>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
  
  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Popover placement="bottom" content={profile} trigger="click">
        <Image
          src="/icons/profile.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          // onClick={login}
          // onClick={handleProfile}
        />
      </Popover>
      <Image
        src="/icons/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Popover placement="bottom" content={<CartModal />} trigger="click">
        <div className="relative cursor-pointer">
          <Image src="/icons/cart.png" alt="" width={22} height={22} />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center">
            {counter}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default NavIcons;
