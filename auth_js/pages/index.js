import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const { push, asPath } = useRouter();

  // i handled the signin and signout and redirects with the push method to not reload the page
  const handleSignOut = async () => {
    const urlData = await signOut({ redirect: false, callbackUrl: "/" });
    push(urlData.url);
  };

  const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {session ? (
        <>
          <h1>Youre signin</h1>
          <button className="bg-gray-200 px-4 py-2" onClick={handleSignOut}>
            SignOut
          </button>
        </>
      ) : (
        <>
          <h1>Youre not signin</h1>{" "}
          <button className="bg-gray-200 px-4 py-2" onClick={handleSignIn}>
            SignIn
          </button>
        </>
      )}
    </div>
  );
}

// youtube video: https://www.youtube.com/watch?v=tgrvKGPmI04
