"use client"

import Image from "next/image";

const NavIcons = () => {
    return (
        <div className="flex items-center gap-4 xl:gap-6">
            <Image src="/icons/profile.png" alt="profile" width={22} height={22} className="cursor-pointer" />
            <Image src="/icons/notification.png" alt="profile" width={22} height={22} className="cursor-pointer" />
            <Image src="/icons/cart.png" alt="profile" width={22} height={22} className="cursor-pointer" />
        </div>
    )
}

export default NavIcons;