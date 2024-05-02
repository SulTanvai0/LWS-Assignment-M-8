import Loading from "@/app/loading";
import Login from "@/components/auth/Login";
import { Suspense } from "react";

export const metadata = {
  title: "Khana Khazana - Login",
  description: "Khana Khazana app here you will find food recipe",
  openGraph: {
    images: [
      {
        url: `https://lws-assignment-m-8.vercel.app/api/og?title=Khana Khazana - Login`,
        width: 900,
        height: 400,
      },
    ],
  },
};

const LogInPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    </>
  );
};

export default LogInPage;
