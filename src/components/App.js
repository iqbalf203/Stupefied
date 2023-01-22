import { useState, useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Split from "./Split";
import axios from "axios";

export default function App() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
      .then((response) => {
        setDetails(response.data.texts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Header />
      <Split details={details} />
    </div>
  );
}
