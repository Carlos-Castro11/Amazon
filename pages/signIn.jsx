import { getProviders, signIn, getSession } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            SALVE {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const providers = await getProviders();
  return {
    props: { providers },
  };
}