import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {session ? (
        <>
          <h1>Youre signin</h1>
          <button className="bg-gray-200 px-4 py-2" onClick={signOut}>
            SignOut
          </button>
        </>
      ) : (
        <>
          <h1>Youre not signin</h1>{" "}
          <button className="bg-gray-200 px-4 py-2" onClick={signIn}>
            SignIn
          </button>
        </>
      )}
    </div>
  );
}
