import Image from "next/future/image";
import GappLogo from "@/images/logos/gapp.svg";

export function Logo(props) {
  return (
      <Image width="40" height="40" {...props}
          src={GappLogo}
          alt=""
          className="absolute inset-0 h-full"
      />
  )
}
