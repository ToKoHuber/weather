"use client";
import LightLeft from "@/app/component/LightLeft";
import DarkRight from "@/app/component/DarkRight";
import Middle from "@/app/component/Middle";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulan Bator");
  const [searchValue, setSearchValue] = useState("");
  const [dayTemp, setDayTemp] = useState();
  const [nightTemp, setNightTemp] = useState();
  const [dayCondition, setDayCondition] = useState("");
  const [nightCondition, setNightCondition] = useState("");
  const [date, setDate] = useState();

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      let count = country.cities.map((city) => {
        return { city: city, country: country.country };
      });
      return count;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
    console.log(incomeCities);
  }

  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search);
    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      // "Ulaanbaatar" -> "ulaanbaatar" === "ulaa"
      //{city:"Ulaanbaatar", country: "Mongolia"} ->
      return city.city.toLowerCase().includes(search);
    });
    setSearched(filtered);
  };

  const handlerSelect = (city) => {
    setSelectedCity(city);
    setSearched([]);
    setSearchValue("");
    getTemp(city);
  };

  async function getTemp(selectedCity) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=35bdba08acb445e7bf421157250801&q=${selectedCity}`
    );

    const data = await result.json();
    let inComeMinTemp = data.forecast.forecastday[0].day.maxtemp_c;
    setDayTemp(inComeMinTemp);

    let inComeMaxTemp = data.forecast.forecastday[0].day.mintemp_c;
    setNightTemp(inComeMaxTemp);

    let inComeDayCondition = data.forecast.forecastday[0].day.condition.text;
    setDayCondition(inComeDayCondition);

    let inComeNightCondition =
      data.forecast.forecastday[0].hour[0].condition.text;
    setNightCondition(inComeNightCondition);

    let inComeDate = data.forecast.forecastday[0].date;
    setDate(inComeDate);
  }

  useEffect(() => {
    getData();
    getTemp(selectedCity);
  }, []);

  const renderIcon = () => {
    const dayCase = dayCondition?.toLowerCase();
    switch (true) {
      case dayCase.includes("sunny"):
        return <img src="./Sun.png" />;
        break;
      case dayCase.includes("cloud"):
        return <img src="./Clouds.png" />;
        break;
      case dayCase.includes("wind"):
        return <img src="./Wind.png" />;
        break;
      case dayCase.includes("rain"):
        return <img src="./Rain.png" />;
        break;
      case dayCase.includes("snow"):
        return <img src="./Snow.png" />;
        break;
      case dayCase.includes("heavy snow"):
        return <img src="./Heavy-snow.png" />;
        break;
      default:
        return <img src="./Sun.png" />;
    }
  };

  const renderNightIcon = () => {
    const nightCase = nightCondition?.toLowerCase();
    switch (true) {
      case nightCase.includes("sunny"):
        return <img src="./night-icon/Sun.png" />;
        break;
      case nightCase.includes("cloud"):
        return <img src="./night-icon/Clouds.png" />;
        break;
      case nightCase.includes("wind"):
        return <img src="./night-icon/Wind.png" />;
        break;
      case nightCase.includes("rain"):
        return <img src="./night-icon/Rain.png" />;
        break;
      case nightCase.includes("snow"):
        return <img src="./night-icon/Snow.png" />;
        break;
      case nightCase.includes("heavy snow"):
        return <img src="./night-icon/heavy-snow.png" />;
        break;
      default:
        return <img src="./night-icon/Sun.png" />;
    }
  };

  return (
    <div className="flex w-[100vw] h-[100vh] realative">
      <LightLeft
        searchHandler={searchHandler}
        searched={searched}
        handlerSelect={handlerSelect}
        selectedCity={selectedCity}
        dayTemp={dayTemp}
        dayCondition={dayCondition}
        date={date}
        searchValue={searchValue}
        renderIcon={renderIcon}
      />
      <DarkRight
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        nightCondition={nightCondition}
        date={date}
        renderNightIcon={renderNightIcon}
      />
      <div className="absolute size-full flex justify-center items-center">
        <Middle />
      </div>
    </div>
  );
}
