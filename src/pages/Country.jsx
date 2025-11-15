import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";

export const Country = () => {

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
     const res = await getCountryData();
     console.log(res);
    });
  }, []);

  if(isPending) return <h1>Loading...</h1>;

  // return (

  // );
};

