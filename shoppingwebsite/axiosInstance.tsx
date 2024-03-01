import axios from 'axios';

const baseURL = "http://localhost:3001/"; // Assuming you have BASE_URL in your .env file

const axiosInstance = axios.create({
baseURL ,
});

export default axiosInstance;


// import axios from 'axios';

// const baseURL = process.env.BASE_URL;

// const axiosInstance = axios.create({
//   baseURL,
// });

// export default axiosInstance;
