import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import EventPage from "./Pages/EventPage"
import RegisterPage from "./Pages/RegisterPage"
import ReviewPage from "./Pages/ReviewPage"
import ConfirmationPage from "./Pages/ConfirmationPage"
import SubmittedPage from "./Pages/SubmittedPage"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<EventPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/review" element={<ReviewPage />} />

        <Route path="/confirm" element={<ConfirmationPage />} />

        <Route path="/submitted" element={<SubmittedPage />} />

      </Routes>
    </Router>
  )
}

export default App