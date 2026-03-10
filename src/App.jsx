import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import EventPage from "./Pages/EventPage"
import RegisterPage from "./Pages/RegisterPage"
import ReviewPage from "./Pages/ReviewPage"
import ConfirmationPage from "./Pages/ConfirmationPage"
import SubmittedPage from "./Pages/SubmittedPage"

function App() {
  const registered = localStorage.getItem("registration") // check if user already registered

  return (
    <Router>
      <Routes>

        {/* Redirect returning users */}
        <Route path="/" element={registered ? <SubmittedPage /> : <EventPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/submitted" element={<SubmittedPage />} />

      </Routes>
    </Router>
  )
}

export default App