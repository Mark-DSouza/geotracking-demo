import React, {useState, useEffect} from 'react'
import {API_KEY} from './.config.js';
import SignIn from './SignIn';

function App(props) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userRegion, setUserRegion] = useState("");         // State in USA
  const [userRegionCode, setUserRegionCode] = useState(""); // Abbr. name of State
  const [hasGeolocation, setHasGeolocation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.ipdata.co/?api-key=${API_KEY}`);
    request.setRequestHeader('Accept', 'application/json');
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          setHasGeolocation(true);
          const data = JSON.parse(this.responseText);
          setLatitude(data.latitude);
          setLongitude(data.longitude);
          setUserRegion(data.region);
          setUserRegionCode(data.region_code);
          console.log(`lat: ${data.latitude} long: ${data.longitude}`);
          console.log(data);
        }
        else {
          setHasGeolocation(false);
          console.error(`Status code: ${this.status.code}; Status text: ${this.statusText}`);
          setErrorMessage("Something went wrong, please retry");
        }
      }
    };
    request.send();
  }, []);

  function handleChange(event) {
    console.log(hasGeolocation, email, password)
    const {name, value} = event.target;
    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default: 
        console.error("handleChange() couldn't match event with value.");
    }
  }

  return (
    <SignIn
        args = {
                    {
                        latitude,
                        longitude,
                        email,
                        password,
                        userRegion,
                        userRegionCode,
                        errorMessage,
                        handleChange,
                        hasGeolocation
                    }
                }
    />
  )
}

export default App;