import { getIP_TTA } from "./Ip";

const tokenLocalStorage = localStorage.getItem("token");

export const GET_DYNAMIC_URL = ( url ) => {
  return {
    method: "get",
    url: `${url}`,
    headers: {
      "Content-Type": "application/json",
      "x-token": tokenLocalStorage,
    },
  };
};


export const UPLOAD_IMAGE = (formData) => {
  return {
    method: "post",
    url: `${getIP_TTA()}api/upload/public`,
    headers: {
      "Content-Type": "multipart/form-data",
      // "x-token": tokenLocalStorage,
    },
    data: formData,
  };
};

export const CREATE_NEW_CATAGORIE = (data) => {
  return {
    method: "post",
    url: `${getIP_TTA()}api/expense_catagorie`,
    headers: {
      "Content-Type": "application/json",
      "x-token": tokenLocalStorage,
    },
    data: data,
  };
};


export const GET_CATEGORY_DETAIL = (categoryID) => {
  return {
    method: "get",
    url: `${getIP_TTA()}api/expense_catagorie/` + categoryID,
    headers: {
      "Content-Type": "application/json",
      "x-token": tokenLocalStorage,
    },
  };
};

export const EDIT_CATEGORY_ONE_DETAIL = (categoryID , data) => {
  return {
    method: "put",
    url: `${getIP_TTA()}api/expense_catagorie/` + categoryID,
    headers: {
      "Content-Type": "application/json",
      "x-token": tokenLocalStorage,
    },
    data: data,
  };
};

export const REMOVE_CATEGORY_ONE = (categoryID) => {
  return {
    method: "delete",
    url: `${getIP_TTA()}api/expense_catagorie/` + categoryID,
    headers: {
      "Content-Type": "application/json",
      "x-token": tokenLocalStorage,
    },
  };
};