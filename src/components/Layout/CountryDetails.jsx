import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
    const params = useParams();
    console.log(params);

    const [isPending, startTransition] = useTransition();
      const [countries, setCountries] = useState([]);
    
      useEffect(() => {
        startTransition(async () => {
         const res = await getCountryData(params.id);
         setCountries(res.data);
        });
      }, []);
    
      if(isPending) return <Loader />;

    return (
        <h1>Hello Details</h1>
    );
};