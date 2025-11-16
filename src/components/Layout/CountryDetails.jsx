import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams();
    console.log(params);

    const [isPending, startTransition] = useTransition();
      const [country, setCountry] = useState([]);
    
      useEffect(() => {
        startTransition(async () => {
         const res = await getCountryIndData(params.id);
         console.log(res);
         
         setCountry(res);
        });
      }, []);
    
      if(isPending) return <Loader />;

    return (
        <h1>Hello Details</h1>
    );
};