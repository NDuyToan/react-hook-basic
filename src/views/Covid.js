import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = (props) => {
  // const [covid, setCovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isErr, setIsErr] = useState(false);
  const today = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const copyToday = today.clone();
  const preDay = copyToday.subtract(30, "days");

  const url = `https://api.covid19api.com/country/vietnam?from=${today.toISOString()}&to=${preDay.toISOString()}`;
  const url1 =
    "https://api.covid19api.com/country/vietnam?from=2022-07-04T17:00:00.000Z&to=2022-06-04T17:00:00.000Z";
  const url2 =
    "https://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";
  console.log("url: ", url);
  const { data: covid, isLoading, isErr } = useFetch(url2);

  return (
    <div className="data-covid">
      <h2>Covid 19 tracking in VietNam</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
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
            covid.map((item, index) => {
              return (
                <tr key={item.ID}>
                  <td>{index + 1}</td>
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
              <td colSpan={6}>Loading ....</td>
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
