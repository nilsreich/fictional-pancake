import Link from "next/link";

export default function Topbar() {
  return (
    <div className=" bg-slate-800 text-slate-200 p-1">
      Menu
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}
