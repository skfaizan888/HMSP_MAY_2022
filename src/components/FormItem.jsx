import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";

const Formdata = () => {
  const [pdata, setPdata] = useState([]);
  const [adres, setAdres] = useState([]);
  const [educat, setEducat] = useState([]);
  const getData = () => {
    const personal = JSON.parse(sessionStorage.getItem("personData"));
    setPdata(personal);
    console.log(personal);
    const Adress = JSON.parse(sessionStorage.getItem("address"));
    setAdres(Adress);
    console.log(Adress);
    const Education = JSON.parse(sessionStorage.getItem("education"));
    setEducat(Education);
    console.log(Education);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>View Data</h1>
      <Grid container spacing={2}>
        {pdata.map((item) => {
          return (
            <div>
              <p>
                {" "}
                <b>FullName:</b> {item.fname} {item.mname} {item.lname}{" "}
              </p>
            </div>
          );
        })}
      </Grid>
      {adres.map((elem) => {
        return (
          <div>
            <h1>{elem.Hno}</h1>
          </div>
        );
      })}
      {/* {educat.map((item) => {
        return (
          <div>
            <h1>{item.ssc}</h1>;<h1>{item.univercity}</h1>;
            <h1>{item.persentage}</h1>;
          </div>
        );
      })} */}
    </div>
  );
};

export default Formdata;
