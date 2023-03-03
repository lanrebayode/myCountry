import React, { useEffect } from "react";
import Image from "next/image";

import Style from "./CountryTab.module.css";
import germany from "../../public/ger.png";

const CountryTab = ({ data }) => {
  return (
    <div className={Style.CountryTab}>
      <div className={Style.CountryTab_box}>
        <Image
          className={Style.CountryTab_box_img}
          src={data.flags.png}
          alt="flag"
          width={200}
          height={150}
        />
        <div className={Style.CountryTab_box_details}>
          <h4>{data.name.common}</h4>
          <p>
            Population: <span>{data.population}</span>
          </p>
          <p>
            Region: <span>{data.continents}</span>
          </p>
          <p>
            Capital: <span>{data.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryTab;
