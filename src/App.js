import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [validationError, setValidationError] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");

  const [userlist, setuserlist] = useState([]);

  const handleUsername = (e) => {
    setusername(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlemobile = (e) => {
    setmobile(e.target.value);
  };

  /////////////////////////////////////////////////////////////////////////////

  /*const registerUser = () => {
    alert(`${username},${password},${email},${mobile}`);
  };*/

  const registerUser = () => {
    if (username == "" || password == "" || email == "" || mobile == "") {
      setValidationError(true);
      return;
    }

    const user = {
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };
    const newlist = [user, ...userlist];
    setuserlist(newlist);

    //to clear list
    setusername("");
    setpassword("");
    setmobile("");
    setemail("");
    setValidationError(false);
  };
  /////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h1 className="bg-dark text-light p-2 text-center">registration form</h1>
      <div>
        <input
          type="text"
          placeholder="enter Username"
          value={username}
          onChange={handleUsername}
          className={
            username == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={handlepassword}
          className={
            password == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter Email"
          value={email}
          onChange={handleemail}
          className={
            email == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter Mobile"
          value={mobile}
          onChange={handlemobile}
          className={
            mobile == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input type="button" value="register" onClick={registerUser} />
      </div>
      <hr />

      {userlist.map((item, index) => (
        <div key={index}>
          {item.username}
          {item.password}
          {item.email}
          {item.mobile}
        </div>
      ))}
    </div>
  );
}

/*===================================================*/
/*
import { useState } from "react";
import { Placeholder } from "react-bootstrap";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [validationError, setvalidationError] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");

  const [userlist, setuserlist] = useState([]);
  ///////////////////////////////////////////////////
  const handleusername = (e) => {
    setusername(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handlemobile = (e) => {
    setmobile(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };

  /*const RegisterUser = () => {
    alert(`${username},${password},${email},${mobile}`);
  };

  const RegisterUser = () => {
    if (username == "" || password == "" || mobile == "" || email == "") {
      setvalidationError(true);
      return;
    }

    const user = {
      username: username,
      password: password,
      mobile: mobile,
      email: email,
    };
    const newlist = [user, ...userlist];
    setuserlist(newlist);

    //to clear at the end
    setusername("");
    setpassword("");
    setmobile("");
    setemail("");
    setvalidationError(false);
  };

  return (
    <div>
      <h1 className="bg-warning p-2">registration form</h1>
      <div>
        <input
          type="text"
          Placeholder="Username"
          onChange={handleusername}
          className={
            username == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="password"
          Placeholder="password"
          onChange={handlepassword}
          className={
            password == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="email"
          Placeholder="email"
          onChange={handleemail}
          className={
            email == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="mobile"
          Placeholder="mobile"
          onChange={handlemobile}
          className={
            mobile == "" && validationError ? "border border-danger" : ""
          }
        />
      </div>
      <div>
        <input type="button" value="register" onClick={RegisterUser} />
      </div>

      <hr />
      {userlist.map((item, index) => (
        <div key={index}>
          {item.username}, {item.password}, {item.email}, {item.mobile}
        </div>
      ))}
    </div>
  );
}
*/

