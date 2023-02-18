import axios from "axios";

export const createExp = async (expData) => {
  const { access } = expData;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.post(
    "/instructor/exprience/create/",
    expData,
    config
  );
  if (response) {
    return response.data;
  }
};
