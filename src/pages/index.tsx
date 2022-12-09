import type { GetServerSidePropsContext, NextPage } from "next";
import { getServerAuthSession } from "@server/common/get-server-auth-session";
import { signIn } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}

const Page: NextPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border bg-white p-6">
        <h1 className="title">Finance@Cuybox</h1>
        <button className="btn-primary" onClick={() => signIn("google")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Page;
