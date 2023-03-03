import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Style from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { NavBar } from "@/Components/NavBar/NavBar";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import CountryTab from "@/Components/CountryTab/CountryTab";

export default function Home({}) {
  const restAPI = "https://restcountries.com/v3.1/all";
  const restAPI_name = "https://restcountries.com/v2/name/";

  const [filter, setFilter] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [searchCountryName, setSearchCountryName] = useState("");
  const [region, setRegion] = useState("");
  // const [countryInfo, setCountryInfo] = useState({});

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const africa = () => {
    countriesData.filter((country) => country.region === "Africa");
  };
  const america = () => {
    countriesData.filter((country) => country.region === "America");
  };
  const europe = () => {
    countriesData.filter((country) => country.region === "Europe");
  };
  const asia = () => {
    countriesData.filter((country) => country.region === "Asia");
  };
  const oceania = () => {
    countriesData.filter((country) => country.region === "Oceania");
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
    console.log(countriesData[0]);
    console.log(data);
  };

  //Search for a Country
  const getCountryByName = async (name) => {
    const response = await fetch(`${restAPI_name}${name}`);
    const data = await response.json();
    console.log(name);
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const countryData = {
    name: {
      common: "Chad",
      official: "Republic of Chad",
      nativeName: {
        ara: {
          official: "جمهورية تشاد",
          common: "تشاد‎",
        },
        fra: {
          official: "République du Tchad",
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
    altSpellings: ["TD", "Tchad", "Republic of Chad", "République du Tchad"],
    region: "Africa",
    subregion: "Middle Africa",
    languages: {
      ara: "Arabic",
      fra: "French",
    },
    translations: {
      ara: {
        official: "جمهورية تشاد",
        common: "تشاد",
      },
      bre: {
        official: "Republik Tchad",
        common: "Tchad",
      },
      ces: {
        official: "Čadská republika",
        common: "Čad",
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
        official: "Tšaadi Vabariik",
        common: "Tšaad",
      },
      fin: {
        official: "Tšadin tasavalta",
        common: "Tšad",
      },
      fra: {
        official: "République du Tchad",
        common: "Tchad",
      },
      hrv: {
        official: "Čadu",
        common: "Čad",
      },
      hun: {
        official: "Csád Köztársaság",
        common: "Csád",
      },
      ita: {
        official: "Repubblica del Ciad",
        common: "Ciad",
      },
      jpn: {
        official: "チャド共和国",
        common: "チャド",
      },
      kor: {
        official: "차드 공화국",
        common: "차드",
      },
      nld: {
        official: "Republiek Tsjaad",
        common: "Tsjaad",
      },
      per: {
        official: "جمهوری چاد",
        common: "چاد",
      },
      pol: {
        official: "Republika Czadu",
        common: "Czad",
      },
      por: {
        official: "República do Chade",
        common: "Chade",
      },
      rus: {
        official: "Республика Чад",
        common: "Чад",
      },
      slk: {
        official: "Čadská republika",
        common: "Čad",
      },
      spa: {
        official: "República de Chad",
        common: "Chad",
      },
      srp: {
        official: "Република Чад",
        common: "Чад",
      },
      swe: {
        official: "Republiken Tchad",
        common: "Tchad",
      },
      tur: {
        official: "Çad Cumhuriyeti",
        common: "Çad",
      },
      urd: {
        official: "جمہوریہ چاڈ",
        common: "چاڈ",
      },
      zho: {
        official: "乍得共和国",
        common: "乍得",
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
    flag: "🇹🇩",
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
            <div className={Style.Home_box_top_filter}>
              <p>Filter by Region</p>
              {!filter ? (
                <RiArrowDropDownLine
                  onClick={() => openFilter()}
                  className={Style.Home_box_top_filter_icon}
                />
              ) : (
                <RiArrowDropUpLine
                  onClick={() => openFilter()}
                  className={Style.Home_box_top_filter_icon}
                />
              )}

              {filter && (
                <div className={Style.Home_box_top_filter_options}>
                  <p onClick={() => setRegion("Africa")}>Africa</p>
                  <p onClick={() => setRegion("America")}>America</p>
                  <p onClick={() => setRegion("Asia")}>Asia</p>
                  <p onClick={() => setRegion("Europe")}>Europe</p>
                  <p onClick={() => setRegion("Oceania")}>Oceania</p>
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
              {countriesData
                .filter((country) => {
                  return country.name.common
                    .toLowerCase()
                    .includes(searchCountryName);
                })
                .map((country, i) => (
                  <Link
                    href={`/description?country=${JSON.stringify(country)}`}
                  >
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
