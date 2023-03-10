import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Style from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { NavBar } from "@/Components/NavBar/NavBar";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import CountryTab from "@/Components/CountryTab/CountryTab";

export default function Home() {
  const restAPI = "https://restcountries.com/v3.1/all";
  const restAPI_name = "https://restcountries.com/v2/name/";
  const restAPI_region = "https://restcountries.com/v3.1/region/";

  const [filter, setFilter] = useState(false);
  const [searchCountryName, setSearchCountryName] = useState("");
  const [countriesData, setCountriesData] = useState();
  const [region, setRegion] = useState("");
  // const [countryInfo, setCountryInfo] = useState({});

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  // const setCountry = () => {
  //   if (countryInfo) {
  //     setCountriesData([]);
  //   } else {
  //     setCountriesData(countriesData);
  //   }
  // };

  //To Get All countries as page load
  const getAllCountries = async () => {
    const response = await fetch(`${restAPI}`);
    const data = await response.json();
    setCountriesData(data);
    //console.log(data);
  };

  //Search for a Country
  const getCountryByName = async (name) => {
    const response = await fetch(`${restAPI_name}${name}`);
    const data = await response.json();
    setCountriesData(data);
    // console.log(data);
  };
  //Get COuntry BY Region
  const getCountryByRegion = async (name) => {
    const response = await fetch(`${restAPI_region}${name}`);
    const data = await response.json();
    setCountriesData(data);
    // console.log(data);
  };

  // const filteredArray = countriesData
  //   .filter((country) => country.region.includes(region))
  //   .filter((country) =>
  //     country.name.common.toLowerCase().includes(searchCountryName)
  //   );

  useEffect(() => {
    getAllCountries();
  }, []);

  const countryData = {
    name: {
      common: "Chad",
      official: "Republic of Chad",
      nativeName: {
        ara: {
          official: "?????????????? ????????",
          common: "???????????",
        },
        fra: {
          official: "R??publique du Tchad",
          common: "Tchad",
        },
      },
    },
    tld: [".td"],
    cca2: "TD",
    ccn3: "148",
    cca3: "TCD",
    cioc: "CHA",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    idd: {
      root: "+2",
      suffixes: ["35"],
    },
    capital: ["N'Djamena"],
    altSpellings: ["TD", "Tchad", "Republic of Chad", "R??publique du Tchad"],
    region: "Africa",
    subregion: "Middle Africa",
    languages: {
      ara: "Arabic",
      fra: "French",
    },
    translations: {
      ara: {
        official: "?????????????? ????????",
        common: "????????",
      },
      bre: {
        official: "Republik Tchad",
        common: "Tchad",
      },
      ces: {
        official: "??adsk?? republika",
        common: "??ad",
      },
      cym: {
        official: "Gweriniaeth Tsiad",
        common: "Tsiad",
      },
      deu: {
        official: "Republik Tschad",
        common: "Tschad",
      },
      est: {
        official: "T??aadi Vabariik",
        common: "T??aad",
      },
      fin: {
        official: "T??adin tasavalta",
        common: "T??ad",
      },
      fra: {
        official: "R??publique du Tchad",
        common: "Tchad",
      },
      hrv: {
        official: "??adu",
        common: "??ad",
      },
      hun: {
        official: "Cs??d K??zt??rsas??g",
        common: "Cs??d",
      },
      ita: {
        official: "Repubblica del Ciad",
        common: "Ciad",
      },
      jpn: {
        official: "??????????????????",
        common: "?????????",
      },
      kor: {
        official: "?????? ?????????",
        common: "??????",
      },
      nld: {
        official: "Republiek Tsjaad",
        common: "Tsjaad",
      },
      per: {
        official: "???????????? ??????",
        common: "??????",
      },
      pol: {
        official: "Republika Czadu",
        common: "Czad",
      },
      por: {
        official: "Rep??blica do Chade",
        common: "Chade",
      },
      rus: {
        official: "???????????????????? ??????",
        common: "??????",
      },
      slk: {
        official: "??adsk?? republika",
        common: "??ad",
      },
      spa: {
        official: "Rep??blica de Chad",
        common: "Chad",
      },
      srp: {
        official: "?????????????????? ??????",
        common: "??????",
      },
      swe: {
        official: "Republiken Tchad",
        common: "Tchad",
      },
      tur: {
        official: "??ad Cumhuriyeti",
        common: "??ad",
      },
      urd: {
        official: "?????????????? ??????",
        common: "??????",
      },
      zho: {
        official: "???????????????",
        common: "??????",
      },
    },
    latlng: [15, 19],
    landlocked: true,
    borders: ["CMR", "CAF", "LBY", "NER", "NGA", "SDN"],
    area: 1284000,
    demonyms: {
      eng: {
        f: "Chadian",
        m: "Chadian",
      },
      fra: {
        f: "Tchadienne",
        m: "Tchadien",
      },
    },
    flag: "????????",
    maps: {
      googleMaps: "https://goo.gl/maps/ziUdAZ8skuNfx5Hx7",
      openStreetMaps: "https://www.openstreetmap.org/relation/2361304",
    },
    population: 16425859,
    gini: {
      2011: 43.3,
    },
    fifa: "CHA",
    car: {
      signs: ["TCH", "TD"],
      side: "right",
    },
    timezones: ["UTC+01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/td.png",
      svg: "https://flagcdn.com/td.svg",
      alt: "The flag of Chad is composed of three equal vertical bands of blue, gold and red.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/td.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/td.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [12.1, 15.03],
    },
  };

  return (
    <>
      <Head>
        <title>country</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>

      <div className={Style.Home}>
        <NavBar />
        <div className={Style.Home_box}>
          <div className={Style.Home_box_top}>
            <div className={Style.Home_box_top_search}>
              <input
                type="text"
                placeholder="search for a country..."
                value={searchCountryName}
                onChange={(e) => setSearchCountryName(e.target.value)}
              />
              <AiOutlineSearch
                className={Style.Home_box_top_search_icon}
                onClick={() => getCountryByName(searchCountryName)}
              />
            </div>
            <div
              className={Style.Home_box_top_filter}
              onClick={() => openFilter()}
            >
              <p>Filter by Region</p>
              {!filter ? (
                <RiArrowDropDownLine
                  onClick={() => openFilter()}
                  className={Style.Home_box_top_filter_icon}
                />
              ) : (
                <RiArrowDropUpLine className={Style.Home_box_top_filter_icon} />
              )}

              {filter && (
                <div className={Style.Home_box_top_filter_options}>
                  <p onClick={() => (getAllCountries(), openFilter())}>All</p>
                  <p
                    onClick={() => (getCountryByRegion("Africa"), openFilter())}
                  >
                    Africa
                  </p>
                  <p
                    onClick={() => (
                      getCountryByRegion("America"), openFilter()
                    )}
                  >
                    America
                  </p>
                  <p onClick={() => (getCountryByRegion("Asia"), openFilter())}>
                    Asia
                  </p>
                  <p
                    onClick={() => (
                      getCountryByRegion("Europpe"), openFilter()
                    )}
                  >
                    Europe
                  </p>
                  <p
                    onClick={() => (
                      getCountryByRegion("Oceania"), openFilter()
                    )}
                  >
                    Oceania
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* {countryInfo > 0 ? (
            <div className={Style.Home_box_countries}>
              <CountryTab data={countryInfo} />
            </div>
          ) : (
            <h3>Country not found</h3>
          )} */}

          {countriesData ? (
            <div className={Style.Home_box_countries}>
              {countriesData.map((country, i) => (
                <Link href={`/description?country=${country.name.common}`}>
                  <CountryTab
                    className={Style.Home_box_country}
                    key={i + 1}
                    data={country}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <h3>No Data</h3>
          )}
        </div>
        {/* <h1>{countryData.continents}</h1>
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
        <h1>{countryData.unMember}</h1> */}
      </div>
    </>
  );
}
