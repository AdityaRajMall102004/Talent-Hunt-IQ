// import {useUser} from "@clerk/clerk-react";
// import { Navigate, Route,Routes } from "react-router";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import {Toaster} from "react-hot-toast";
// import ProblemsPage from "./pages/ProblemsPage";
// function App() {
//   const {isSignedIn} = useUser();
//   return (
//     <>
//     <Routes>
//       <Route path ='/' element={<HomePage/>}/>
//        <Route path ='/about' element={<AboutPage/>}/>
//        <Route path ='/problems' element={isSignedIn? <ProblemsPage/>:<Navigate to={"/"}/>}/>
//     </Routes>
//     <Toaster position="top-center" toastOptions={{duration:3000}}/>
//     </>
//   )
// };
// export default App
import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import SessionPage from "./pages/SessionPage";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;

//tw ,daisyui,react-router,react-hot-toast,
// react-query aka tanstack query,axios