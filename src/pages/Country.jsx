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
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout (() => {
      setLoading(false);
    }, 5000);

    startTransition(async () => {
     const res = await getCountryData();
     setCountries(res.data);
    });

    return () => clearTimeout(timer);
  }, []);

  if(loading) return (
    <div className="loader-center">
      <Loader />
    </div>
  );

  // console.log(search, filter);

  // search logic 
  const searchCountry = (country) => {
    if(search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // filter logic 
  const filterRegion = (country) => {
    if(filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic 
  const filterCountries = countries.filter(
    (country) =>searchCountry(country) && filterRegion(country)
  );
  

  return (
    <section className="container country-section">

     <SearchFilter
      search={search} 
      setSearch={setSearch} 
      filter={filter}  
      setFilter={setFilter}  
      countries={countries}
      setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {
          filterCountries.map((curCountry, index) => {
            return <CountryCard country = {curCountry} key={index} />;
          })
        }
      </ul>
    </section>
  );
};

