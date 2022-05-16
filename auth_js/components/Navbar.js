import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <div className="h-10 bg-black text-white font-semibold flex justify-around items-center">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Link href="/api/auth/signin">
        <a
          onClick={e => {
            e.preventDefault();
            signIn();
          }}
        >
          SignIn
        </a>
      </Link>
      <Link href="/api/auth/signout">
        <a
          onClick={e => {
            e.preventDefault();
            signOut();
          }}
        >
          SignOut
        </a>
      </Link>
    </div>
  );
}
