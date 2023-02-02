import "./App.css";
import BasicInfo from "./components/BasicInfo";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const newdata=await res.json();
    setData(newdata);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="box">
      {data.map((info) => {
        return (
          <BasicInfo
            company={info.company.name}
            contact={info.name}
            city={info.address.city}
            state={info.address.street}
            key={info.id}
            catchphrase={info.company.catchPhrase}
            address={info.address}
            username={info.username}
            email={info.email}
            phone={info.phone}
          />
        );
      })}
    </div>
  );
}

export default App;
