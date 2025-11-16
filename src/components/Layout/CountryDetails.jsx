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
         if(res.status === 200) {
             setCountry(res.data[0]);
         }
        });
      }, []);
    
      if(isPending) return <Loader />;

    return (
        <div className="card country-details-card container">
            <div className="container-card bg-white-box">
                <h1>{country.name.official}</h1>
            </div>
        </div>
    );
};