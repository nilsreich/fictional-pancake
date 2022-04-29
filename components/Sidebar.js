import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="bg-slate-100 border-r p-4 pr-8 min-h-screen flex flex-col">
      <Link href="/" disabled>
        <a
          className={`${router.asPath === "/" && "underline"}`}
        >
          Start
        </a>
      </Link>
      <Link href="/about">
      <a
          className={`${router.asPath === "/about" && "underline"}`}
        >
          ABout
        </a>
      </Link>
      
    </div>
  );
}
