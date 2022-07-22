import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Checkbox, Button } from "@mui/material";
import "./Form.css";

const Form = () => {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const handclick = () => {
    setData([...data, user]);
    console.log(data);
  };

  const [pdata, Setpdata] = useState({});
  const [palldata, SetPalldata] = useState([]);

  const handlesavaddress = () => {
    SetPalldata([...palldata, pdata]);
  };

  const [eduuser, setEduuser] = useState({});
  const [edudata, setEdudata] = useState([]);

  const handleSave = () => {
    setEdudata([...edudata, eduuser]);
  };

  const handleStorage = () => {
    sessionStorage.setItem("personData", JSON.stringify(data));
    sessionStorage.setItem("address", JSON.stringify(palldata));
    sessionStorage.setItem("education", JSON.stringify(edudata));
  };
  return (
    <div>
      <h1 className="pheading">Job Application</h1>
      <marquee>
        <h5 className="marqu">Please Fill All Details Carefully.</h5>
      </marquee>
      <Grid>
        <Grid container className="prsnlcontainer">
          <Grid xs={12} className="prsnlHeading">
            <h1>Personal Details</h1>
          </Grid>
          <Grid xs={12}>
            <select className="selected">
              <option value="">Please Select</option>
              <option value="">Mr.</option>
              <option value="">Miss.</option>
              <option value="">Mrs.</option>
            </select>
          </Grid>
          <TextField
            required
            label="First Name"
            // defaultValue="First Name"
            sx={{ m: 3, width: "45ch" }}
            onChange={(e) => setUser({ fname: e.target.value })}
          />
          <TextField
            required
            label="Middel Name"
            // defaultValue="Middel Name"
            sx={{ m: 3, width: "45ch" }}
            onChange={(e) => setUser({ ...user, mname: e.target.value })}
          />
          <TextField
            required
            label="Last Name"
            // defaultValue="Last Name"
            sx={{ m: 3, width: "45ch" }}
            onChange={(e) => setUser({ ...user, lname: e.target.value })}
          />
          <TextField
            required
            label="Date Of Birth"
            // defaultValue="insert"
            type="date"
            sx={{ m: 3, width: "45ch" }}
            onChange={(e) => setUser({ ...user, date: e.target.value })}
          />
          <TextField
            required
            label="Email"
            // defaultValue="insert"
            type="email"
            sx={{ m: 3, width: "45ch" }}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            required
            label="Mobile"
            // defaultValue="insert"
            type="number"
            sx={{ m: 3, width: "45ch" }}
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
          <Button onClick={handclick} variant="contained" className="btn1">
            Save
          </Button>
        </Grid>

        <Grid container className="prsnlcontainer">
          <Grid xs={12} className="prsnlHeading">
            <h1>Address Details</h1>
          </Grid>
          <Grid xs={12}>
            <Checkbox id="permanant" />
            Permanant
          </Grid>
          <TextField
            required
            label="House No"
            onChange={(e) => Setpdata({ ...palldata, Hno: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Building Name"
            onChange={(e) => Setpdata({ ...palldata, Bno: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Street"
            onChange={(e) =>
              Setpdata({ ...palldata, streetno: e.target.value })
            }
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="City"
            onChange={(e) => Setpdata({ ...palldata, city: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="State"
            onChange={(e) => Setpdata({ ...palldata, state: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Pincode"
            onChange={(e) => Setpdata({ ...palldata, pincode: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <Grid xs={12}>
            <Checkbox label="residential" />
            Residential
          </Grid>
          <TextField
            required
            label="House No"
            onChange={(e) => Setpdata({ ...palldata, houseno: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Building Name"
            onChange={(e) =>
              Setpdata({ ...palldata, buildingname: e.target.value })
            }
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Street"
            onChange={(e) => Setpdata({ ...palldata, street: e.target.value })}
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="City"
            onChange={(e) =>
              Setpdata({ ...palldata, cityname: e.target.value })
            }
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="State"
            onChange={(e) =>
              Setpdata({ ...palldata, statename: e.target.value })
            }
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Pincode"
            onChange={(e) =>
              Setpdata({ ...palldata, picodeno: e.target.value })
            }
            sx={{ m: 3, width: "45ch" }}
          />
          <Button
            onClick={handlesavaddress}
            variant="contained"
            className="btn1"
          >
            Save
          </Button>
        </Grid>
        <Grid container className="prsnlcontainer">
          <Grid xs={12} className="prsnlHeading">
            <h1>Education Details</h1>
          </Grid>
          <div className="edctndiv">
            <TextField
              required
              label="SSC"
              onChange={(e) => setEduuser({ ssc: e.target.value })}
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="University"
              onChange={(e) =>
                setEduuser({ ...edudata, univercity: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Percentage"
              onChange={(e) =>
                setEduuser({ ...edudata, persentage: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Passing Year"
              onChange={(e) =>
                setEduuser({ ...edudata, pasingyr: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <Button variant="contained" className="btn">
              Save
            </Button>

            <TextField
              required
              label="HSC"
              onChange={(e) => setEduuser({ ...edudata, hsc: e.target.value })}
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="University"
              onChange={(e) =>
                setEduuser({ ...edudata, hscunivercity: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Percentage"
              onChange={(e) =>
                setEduuser({ ...edudata, hscpertance: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Passing Year"
              onChange={(e) =>
                setEduuser({ ...edudata, hscyear: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <Button variant="contained" className="btn">
              Save
            </Button>

            <TextField
              required
              label="Degree"
              onChange={(e) =>
                setEduuser({ ...edudata, degree: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="University"
              onChange={(e) =>
                setEduuser({ ...edudata, degreeuni: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Percentage"
              onChange={(e) =>
                setEduuser({ ...edudata, degreepercen: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Passing Year"
              onChange={(e) =>
                setEduuser({ ...edudata, degreeyear: e.target.value })
              }
              sx={{ m: 1, width: "30ch" }}
            />
            <Button onClick={handleSave} variant="contained" className="btn">
              Save
            </Button>
          </div>
        </Grid>
        <Link to="/form/submit">
          <Button
            variant="contained"
            onClick={handleStorage}
            color="success"
            className="btnsubmit"
          >
            Submit
          </Button>
        </Link>
        <Button variant="contained" color="error" className="btncancel">
          Cancel
        </Button>
      </Grid>
    </div>
  );
};

export default Form;
