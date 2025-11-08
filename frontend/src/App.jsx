
//tw ,daisyui,react-router,react-hot-toast,
 // react-query aka tanstack query,axios

import { Suspense, lazy } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./components/LoadingSpinner"; // We'll make this below 👇

// ⚡ Lazy load all your main pages
const HomePage = lazy(() => import("./pages/HomePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProblemsPage = lazy(() => import("./pages/ProblemsPage"));
const ProblemPage = lazy(() => import("./pages/ProblemPage"));
const SessionPage = lazy(() => import("./pages/SessionPage"));

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <LoadingSpinner />; // Loading while Clerk loads

  return (
    <>
      {/* Suspense enables lazy loading fallback UI */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public route */}
          <Route
            path="/"
            element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />}
          />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />}
          />

          <Route
            path="/problems"
            element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
          />

          <Route
            path="/problem/:id"
            element={isSignedIn ? <ProblemPage /> : <Navigate to="/" />}
          />

          <Route
            path="/session/:id"
            element={isSignedIn ? <SessionPage /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>

      {/* Global Toast Notifications */}
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
