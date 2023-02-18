import axios from "axios";

export const createEducation = async (eduData) => {
  const { access } = eduData;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${access}`,
    },
  };

  const response = await axios.post(
    "/instructor/education/create/",
    eduData,
    config
  );
  if (response) {
    return response.data;
  }
};
