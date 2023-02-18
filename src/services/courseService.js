import axios from "axios";

export const createCourse = async (data) => {
  const { access } = data;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };

  const response = await axios.post("/course/course/", data, config);
  if (response) {
    return response.data;
  }
};