
import Axios from "axios";

export const BASE_URL = "http://localhost:8001";
export const SERVER_URL = `${BASE_URL}/api`;

export async function axiosRequest(method, url, data = null, createToken) {
    let URL = `${SERVER_URL}/${url}`;
    return Axios({
      method: method,
      url: URL,
      headers: {
        // authorization: `Bearer ${token}`
        "Content-Type": "application/json",
      },
      data: data,
      withCredentials: true,
    })
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  }
  