import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Style from "../styles/description.module.css";
import germany from "../public/ger.png";
import { NavBar } from "@/Components/NavBar/NavBar";

const description = () => {
  const [countryData, setCountryData] = useState();
  const router = useRouter();
  const country = router.query.country;

  const restAPI_name = "https://restcountries.com/v2/name/";

  //Search for a Country
  const getCountryByName = async (country) => {
    const response = await fetch(`${restAPI_name}${country}`);
    const data = await response.json();
    //console.log(data[0]);
    setCountryData(data[0]);
    //console.log(countryData);
  };

  useEffect(() => {
    getCountryByName(country);
  }, []);

  //console.log(countryData);

  //console.log(country);

  {
    /* <h1>{countryData.continents}</h1>
        <h1>{countryData.area}</h1>
        <h1>{countryData.borders}</h1>
        <h1>{countryData.capital}</h1>
        <h1>{countryData.capitalInfo}</h1>
        <h1>{countryData.coatOfArms}</h1>
        <h1>{countryData.currencies}</h1>
        <h1>{countryData.demonyms}</h1>
        <h1>{countryData.flag}</h1>
        <h1>{countryData.independent}</h1>
        <h1>{countryData.languages}</h1>
        <h1>{countryData.maps}</h1>
        <h1>{countryData.region}</h1>
        <h1>{countryData.timezones}</h1>
        <h1>{countryData.unMember}</h1> */
  }

  return (
    <div className={Style.description}>
      <NavBar />
      <div className={Style.description_box}>
        {countryData ? (
          <div className={Style.description_box_box1}>
            <Image src={countryData.flag} alt="flag" width={300} height={200} />
            <div className={Style.description_box_box1_right}>
              <h3>{countryData.name}</h3>
              <div className={Style.description_box_box1_right_details}>
                <p>
                  Capital: <span>{countryData.capital} </span>
                </p>
                <p>
                  population: <span>{countryData.population}</span>
                </p>
                <p>
                  Area: <span>{countryData.area}sqKm</span>
                </p>
                <p>
                  Timezones: <span>{countryData.timezones}</span>
                </p>
                <p>
                  Region: <span>{countryData.region}</span>
                </p>
                <p>
                  Sub-Region: <span>{countryData.subregion}</span>
                </p>
                <p>
                  Languages: <span>{countryData.languages[0].name}</span>
                </p>
                <p>
                  Currencies: <span>{countryData.currencies[0].name}</span>
                </p>
              </div>
            </div>

            <div className={Style.description_box_box2}></div>
          </div>
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>
    </div>
  );
};

export default description;
