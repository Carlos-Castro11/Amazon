import { getProviders, signIn, getSession } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      <div className="bg-gradient-to-b from-amazon_blue to-amazon_blue-light h-screen mx-auto">
        <div className="">
          <img
            className="h-40 w-40 object-contain mx-auto "
            src="https://www.pentalic.com/wp-content/uploads/2018/12/Amazon-logo-white-small.png"
            alt=""
          />
        </div>
        <div className="rounded-md bg-gray-100 flex text-center mx-auto max-w-sm mt-20">
          <div className="mx-auto p-10">
            <h1 className="text-left font-bold relative text-3xl">Entrar</h1>
            <div className="absolute h-1 bg-gradient-to-r from-yellow-500 to-gray-100 -mt-1 w-64" />
            <div className="flex flex-col mt-10 text-white">
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button
                    className="bg-amazon_blue rounded-md mb-10 py-2 w-72"
                    onClick={() => signIn(provider.id)}
                  >
                    Entrar com {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
