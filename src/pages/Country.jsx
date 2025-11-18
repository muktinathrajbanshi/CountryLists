import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
     const res = await getCountryData();
     setCountries(res.data);
    });
  }, []);

  if(isPending) return <Loader />;

  console.log(search, filter);
  

  return (
    <section className="container country-section">

     <SearchFilter
      search={search} 
      setSearch={setSearch} 
      filter={filter}  
      setFilter={setFilter}  
      />

      <ul className="grid grid-four-cols">
        {
          countries.map((curCountry, index) => {
            return <CountryCard country = {curCountry} key={index} />;
          })
        }
      </ul>
    </section>
  );
};

