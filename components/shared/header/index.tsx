import Image from "next/image";
import Link from "next/link";

import Menu from "./menu";
import { APP_NAME } from "@/lib/constants";

import CategoryDrawer from "./categroy-drawer";
import Search from "./search";

const Header = async () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />

          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg" // In '/public' folder
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true} // Set it TRUE for main image
            />

            <span className="hidden lg:block fold-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <Search />
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
