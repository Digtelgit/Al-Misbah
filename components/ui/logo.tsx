import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/MisbahLogo.png";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={175} height={32} />
    </Link>
  );
}
