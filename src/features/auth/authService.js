import axios from "axios";

export const login = async (data) => {
  const response = await axios.post("/auth/jwt/create/", data);
  if (response) {
    return response.data;
  }
};

export const fetchUser = async (access) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.get(`/auth/users/me/`, config);
  if (response) {
    return response.data;
  }
};

export const register = async (data) => {
  const response = await axios.post("/auth/users/", data);
  if (response) {
    return response.data;
  }
};
