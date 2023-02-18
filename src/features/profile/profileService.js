import axios from "axios";

export const getProfile = async (data) => {
  const { access, username } = data;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.get(`/user/std/${username}/`, config);
  if (response) {
    localStorage.setItem("profile", JSON.stringify(response.data));
    return response.data;
  }
};

export const createProfile = async (profileData) => {
  const { access } = profileData;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.post("/user/std/create/", profileData, config);
  if (response) {
    localStorage.setItem("profile", JSON.stringify(response.data));
    return response.data;
  }
};

export const updateProfile = async (updatedData) => {
  const { access, username } = updatedData;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.put(
    `/user/std/update/${username}/`,
    updatedData,
    config
  );
  if (response) {
    localStorage.setItem("profile", JSON.stringify(response.data));
    return response.data;
  }
};

export const getProfilePic = async (id, access) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.get(`/user/profile-pic/${id}/`, config);
  if (response) {
    return response.data;
  }
};

export const uploadProfilePic = async (picData) => {
  const { access } = picData;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.post(
    "/user/profile-pic/create/",
    picData,
    config
  );
  if (response) {
    return response.data;
  }
};

export const updateProfilePic = async (picData) => {
  const { access, user, name } = picData;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${access}`,
    },
  };
  const response = await axios.put(
    `/user/profile-pic/update/${user}/`,
    picData,
    config
  );
  if (response) {
    return response.data;
  }
};
