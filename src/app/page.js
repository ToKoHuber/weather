"use client";
import LightLeft from "@/app/component/LightLeft";
import DarkRight from "@/app/component/DarkRight";
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
    setSearchValue(search.toLowerCase());
    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      return city.toLowerCase().includes(search);
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

  return (
    <div className="flex w-[100vw] h-[100vh]">
      <LightLeft
        searchHandler={searchHandler}
        searched={searched}
        handlerSelect={handlerSelect}
        selectedCity={selectedCity}
        dayTemp={dayTemp}
        dayCondition={dayCondition}
        date={date}
        searchValue={searchValue}
      />
      <DarkRight
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        nightCondition={nightCondition}
        date={date}
      />
    </div>
  );
}
