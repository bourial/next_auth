import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Signin() {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  const [email, setEmail] = useState("");

  if (status === "loading") return <p>Checking Authentication...</p>;

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);

    return <p>You're already signed in</p>;
  }

  const handlSubmit = e => {
    e.preventDefault();

    if (!email) return;

    signIn("email", { email, redirect: false });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-2">
      <form className="flex flex-col mb-4" onSubmit={handlSubmit}>
        <input
          className="border-2 border-gray-200 mb-1"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="bg-gray-200 px-4 py-1">Login</button>
      </form>
      <button
        className="bg-gray-200 px-4 py-2"
        onClick={() => signIn("github")}
      >
        Sign in with Github
      </button>
      <button
        className="bg-gray-200 px-4 py-2"
        onClick={() => signIn("twitter")}
      >
        Sign in with Twitter
      </button>
      <button
        className="bg-gray-200 px-4 py-2"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </div>
  );
}
