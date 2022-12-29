import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import styled from "styled-components";
import {
  AllJobs,
  AddJob,
  Stats,
  Profile,
  SharedLayout,
} from "./pages/dashboard";

const button = styled.button;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><SharedLayout/></ProtectedRoute> }>
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
