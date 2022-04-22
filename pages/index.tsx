import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";


export const Index: NextPage = () => {

  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return <div></div>;
};

export default Index;
