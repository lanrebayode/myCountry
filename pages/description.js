import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Style from "../styles/description.module.css";
import germany from "../public/ger.png";
import { NavBar } from "@/Components/NavBar/NavBar";

const description = () => {
  const router = useRouter();

  const country = router.query.country;

  console.log(country);

  useEffect(() => {
    console.log(country);
  }, []);

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
        <div className={Style.description_box_box1}>
          <Image src={germany} alt="flag" width={300} height={200} />
          <div className={Style.description_box_box1_right}>
            <h3>Germany</h3>
            <p>
              Capital: <span>Berlin</span>
            </p>
            <p>
              population: <span>38383393</span>
            </p>
            <p>
              Area: <span>38383393</span>
            </p>
            <p>
              Timezones: <span>38383393</span>
            </p>
            <p>
              unMember: <span>38383393</span>
            </p>
            <p>
              Region: <span>38383393</span>
            </p>
            <p>
              Languages: <span>38383393</span>
            </p>
            <p>
              Currencies: <span>38383393</span>
            </p>
          </div>

          <div className={Style.description_box_box2}></div>
        </div>
      </div>
    </div>
  );
};

export default description;
