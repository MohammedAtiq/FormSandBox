import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [inpute, setInpute] = useState("");
  const [data, setData] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    if (inpute.length !== 0) {
      setData([...data, inpute]);
      setInpute("");
    } else {
      alert("non");
    }
  };

  const delet = (id) => {
    const newDta = data.filter((ite, idd) => idd !== id);
    setData(newDta);
  };

  const rever = (id) => {
    const val = data[id];
    const val2 = val.split("").reverse().join("");
    const temp = [...data];
    temp[id] = val2;
    setData(temp);
    console.log("temp", temp);
  };

  return (
    <div style={{ margin: "10px" }}>
      <p>atiq</p>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={inpute}
          onChange={(e) => setInpute(e.target.value)}
        />
        <button type="submit"> Add</button>
      </form>
      {data.map((items, id) => (
        <>
          <p onClick={() => rever(id)} key={id}>
            {id + 1} : {items}
          </p>
          <button onClick={() => delet(id)}>delete</button>
        </>
      ))}
    </div>
  );
};
export default App;

// useEffect(() => {
//   fetchApi();
// }, []);

// const fetchApi = async () => {
//   try {
//     const respnse = await fetch("");
//     const resp = await respnse.json();
//     console.log("resp", resp);
//   } catch (err) {
//     console.log(err);
//   }
// };
