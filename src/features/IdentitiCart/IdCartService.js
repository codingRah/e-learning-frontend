import axios from "axios";

export const createIDCart = async (IDdata) => {
  const { access } = IDdata;
  console.log(IDdata);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${access}`,
    },
  };

  const response = await axios.post(
    "/instructor/idcart/create/",
    IDdata,
    config
  );
  if (response) {
    return response.data;
  }
};
