import axios from "axios";
import { format } from "date-fns";

export const createInstructor = async (data) => {
  const { access } = data;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${access}`,
    },
  };

  const response = await axios.post("/instructor/create/", data, config);
  if (response) {
    return response.data;
  }
};

export const getSingleInstructor = async (access, id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.get(`/instructor/update/${id}/`, config);
  if (response) {
    return response.data;
  }
};
