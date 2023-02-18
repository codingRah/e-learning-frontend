import { Route, Routes } from "react-router-dom";
import {
  Landing,
  SignIn,
  UserType,
  SignUp,
  Dashboard,
  InsDashboard,
  InsProfile,
} from "./pages";
import InstructorDashboard from "./views/instructor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/type" element={<UserType />} />
        <Route path="/signup/:type" element={<SignUp />} />
        <Route path="/instructor/profile" element={<InsProfile />} />
        <Route path="/instructor/*" element={<InstructorDashboard />} />
        <Route path="/console/*" element={<Dashboard />} />
      </Routes>

      <ToastContainer
        position="top-right"
        theme="light"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="font-farsi"
      ></ToastContainer>
    </div>
  );
}

export default App;
