import type { GetServerSidePropsContext, NextPage } from "next";
import { getServerAuthSession } from "@server/common/get-server-auth-session";
import VSandwichLayout from "components/scaffold/sandwich/VSandwichLayout";
import { NumberInput, TextInput } from "components/shared/Input";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
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
    <VSandwichLayout
      top={
        <div className="flex items-end gap-4 border-b bg-white p-4">
          <label className="label-top">
            Amount
            <NumberInput className="input w-24" />
          </label>
          <label className="label-top">
            Description
            <TextInput className="input w-80" />
          </label>
          <div className="flex-1"></div>
          <button className="btn-primary">Crear</button>
        </div>
      }
    >
      <p>Hello!</p>
    </VSandwichLayout>
  );
};

export default Page;
