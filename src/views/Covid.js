import { useEffect, useState } from "react";
import axios from "axios";

const Covid = (props) => {
  const [covid, setCovid] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDataCovid() {
      setLoading(true);
      const res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-11-01T00:00:00Z"
      );
      const data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = item.Date.split("T")[0];
          return item;
        });
        data.reverse();
      }
      console.log("res", data);
      setCovid(data);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    getDataCovid();
  }, []);

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
          {!loading &&
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
          {loading && (
            <tr>
              <td colSpan={5}>Loading ....</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
