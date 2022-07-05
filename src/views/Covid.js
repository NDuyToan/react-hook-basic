import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../customize/fetch";

const Covid = (props) => {
  // const [covid, setCovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isErr, setIsErr] = useState(false);

  const url =
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-11-01T00:00:00Z";
  const { data: covid, isLoading, isErr } = useFetch(url);

  return (
    <div className="data-covid">
      <h2>Covid 19 tracking in VietNam</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            !isErr &&
            covid &&
            covid.length > 0 &&
            covid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Active}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading && !isErr && (
            <tr>
              <td colSpan={5}>Loading ....</td>
            </tr>
          )}
          {!isLoading && isErr && (
            <span> Have problem. Please try again!!</span>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
