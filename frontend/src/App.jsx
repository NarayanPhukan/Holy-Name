import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  About,
  AdminSignUp,
  Admission,
  BelowSocialbtn,
  Career,
  Complaints,
  Contact,
  Courses,
  Faculty,
  Footer,
  Gallery,
  Header,
  Home,
  Notice,
  Principal,
  StudentPortal,
} from "./Components/index";
import Layout from "./Layout";
import "./App.css";
import AdminLogin from "./Components/AdminLogin";
import AdminPage from "./Components/AdminPage";
import { SiteDataProvider } from "./context/SiteDataContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
        <Route path="career" element={<Career />} />
        <Route path="principal" element={<Principal />} />
        <Route path="courses" element={<Courses />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="admission" element={<Admission />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="notice" element={<Notice />} />
        <Route path="studentportal" element={<StudentPortal />} />
        <Route path="belowsocialbtn" element={<BelowSocialbtn />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="signup" element={<AdminSignUp />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>,
    ),
  );
  return (
    <SiteDataProvider>
      <RouterProvider router={router} />
    </SiteDataProvider>
  );
}

export default App;
