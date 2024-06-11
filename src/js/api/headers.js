import {load} from "../storage/load.js"; // import the load function from the storage/load.js file

export const headers = (contentType) => {
  const token = load("token");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
