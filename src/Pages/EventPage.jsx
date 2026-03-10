import { Link } from "react-router-dom"

function EventPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tech Innovation Conference 2026
      </h1>

      <p className="text-lg text-center max-w-xl mb-6">
        Join developers, designers, and entrepreneurs in Kigali to explore
        new innovations in technology, AI, and digital transformation.
      </p>

      <div className="mb-6 text-center">
        <p><strong>Date:</strong> June 20, 2026</p>
        <p><strong>Location:</strong> Kigali Convention Center</p>
      </div>

      <Link to="/register">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Register Now
        </button>
      </Link>

    </div>
  )
}

export default EventPage