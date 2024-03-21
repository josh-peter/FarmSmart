import Toast from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage";



import axios from "axios";
// import toast from "react-hot-toast";
// import { Base_URL } from "./utils/constant";
const Base_URL = "https://easyfynd.onrender.com";

interface ApiCallDTO {
    Url: string;
    Method: 'get' | 'post' | 'put' | 'delete ' | 'patch';
    Data?: any;  //body of request
    isFormData?: boolean
    silent?: any
}

export default async function APICall({  Url,
  Method,
  Data,
  isFormData = false,
  silent}: ApiCallDTO) {
  if (await AsyncStorage.getItem("token")) {
    const authToken = await AsyncStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    axios.defaults.headers.common["Content-Type"] = isFormData
      ? "multipart/form-data"
      : "application/json";
    axios.defaults.headers.common["cor"] = "no-cors";
  }
  // axios.defaults.withCredentials = true;
  axios.interceptors.response.use(
    (response) => {
      if (response?.data?.authorization) {
        localStorage.setItem("access_token", response.data.authorization);
      }
      return response;
    },
    (error) => {
      return error.response;
    }
  );

  let baseUrl = Base_URL;
  if (!baseUrl.endsWith("/")) {
    baseUrl = baseUrl + "/";
  }

  if (Url.startsWith("/")) {
    Url = Url.substring(1);
  }

  const response = await axios({
    method: Method,
    url: baseUrl + Url,
    data: Data,
    // timeout: timeoutOverride || process.env.REACT_APP_REQUEST_TIMEOUT,
  });

  if (response) {
    if (!response.status || response.status === 0) {
        if (!silent)
              Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
        // toast.error("Please check you network connection and try again");
      return null;
    }
    if (response.status === 401 || response.statusText === "Unauthorized") {
        localStorage.clear();
            Toast.show({
      type: 'error',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
    //   toast.error("Session expired. Please login again");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return null;
    }
    if (response.status >= 400 && response.status < 500) {
            console.log(response, "THE REAL ERROR");

      let message =
        "Sorry your request is invalid. please check your request and try again";
      if (response.data) {
        if (response.data.message) {
          message = `${response.data.message}`;
        } else {
          message = response.data;
        }
      }
      console.log(message, "THE REAL ERROR")
        if (!silent) {
              Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
      }
      return null;
    }
    if (response.status >= 500) {
            console.log(response, "THE REAL ERROR 500 ABOVE");

      let message =
        "Sorry your request cannot be processed at this moment please try again later";
      if (response.data.message) {
        message =` ${response.data.message}`;
      }
        if (!silent) {
              Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
      }
      return null;
    }
  } else {
    if (!silent) {
              Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
    }
  }

  return !response
    ? null
    : response.data
    ? response.data
    : { status: "success" };
}