import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 flex flex-col gap-1 \ ">
        <span className="text-muted-foreground font-extralight">
          POWERED BY
        </span>
        <Link href="https://safedep.io">
          <Image
            src="/safedep-logo.png"
            alt="SafeDep Logo"
            width={145}
            height={32}
          />
        </Link>
      </div>

      <div>
        <Button className="text-sm" asChild>
          <Link href="https://github.com/apps/safedep" target="_blank">
            <>
              <FaGithub className="mr-2" />
              Install Github App
            </>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
