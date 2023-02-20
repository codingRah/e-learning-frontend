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

export const getUsersAllCourse = async access => {
  const config = {
    headers : {
      'Content-Type' : 'application/json', 
      Authorization : `Bearer ${access}`
    }
  }
  const response = await axios.get("/course/user/courses/", config)
  if(response){
    return response.data
  }
}


export const fetchCourseCategory = async (access) => {
  const config = {
    headers : {
      'Content-Type' : "application/json",
      Authorization : `Bearer ${access}`
    }
  }

  const response = await axios.get("/course/course-category/", config)

  if(response) {
    return response.data
  }
}
