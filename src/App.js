// import React from 'react';
// import SignIn from './SignIn';
// // import TextField from '@material-ui/core/TextField';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        latitude: null,
//        longitude: null,
//        userAddress: null
//     }

//     this.getLocation = this.getLocation.bind(this);
//     this.getCoordinates = this.getCoordinates.bind(this);
//     this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
//   }

//   getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);

//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }

//   getCoordinates(position) {
//     // console.log(position);
//     this.setState({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     });
//     this.reverseGeocodeCoordinates();
//   }

//   reverseGeocodeCoordinates() {
//     fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyC7LmwxhGW-LIDMZQxn2Isj-x0kNpTNb_A')
//       .then(response => response.json())
//       // .then(data => console.log(data))
//       .then(data => this.setState({userAddress: data.results[data.results.length-1].formatted_address}))
//       .catch(error => alert(error))
//   }

//   handleLocationError(error) {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         alert("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         alert("An unknown error occurred.");
//         break;

//       default:
//         alert("An unknown error occurred.(default)");
//         break;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>
//           React Geolocation Example
//         </h2>
//         <button onClick={this.getLocation}>Get Coordinates</button>
//         <h4>HTML5 Coordinates</h4>
//         <p>Latitude: {this.state.latitude}</p>
//         <p>Longitude: {this.state.longitude}</p>
//         <h4>Google Maps Reverse Geocoding</h4>
//         <p>Address: {this.state.userAddress}</p>
        
//       </div>
//     )
//   }
  
//   // <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=12&size=400x400&key=YOUR_API_KEY`} alt="" />}

  
// }


// export default SignIn;