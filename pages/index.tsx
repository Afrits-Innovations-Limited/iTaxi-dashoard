import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/reducerHooks";



export const Index: NextPage = () => {

  const router = useRouter();
  const token = useAppSelector(state => state.admin.token)


  useEffect(() => {
    if (token === null) {
      router.push("/login")
    } else {
      router.push("/dashboard")
    }
  }, [])


  return (

    <div>iTaxi</div>

  )
}

export default Index

