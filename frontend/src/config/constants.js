let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "http://localhost:8000/";
}

export const Tampa_Bay = { lat: 27.964157, lng: -82.452606 };
export const API_SERVER = BACKEND_SERVER;
