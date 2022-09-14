import cities from "../lib/city.list.json";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          matchingCities.push(city);
        }
      }
    }
    console.log(matchingCities);
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={onChange} />
    </div>
  );
}
