import axios from "axios";

export const userTypes = async () => {
  const response = await axios.get("/user/user-type/");
  if (response) {
    return response.data;
  }
};
