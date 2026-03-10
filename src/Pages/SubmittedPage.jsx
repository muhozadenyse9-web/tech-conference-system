// Correct
import { useEffect, useState } from "react"        // ✅ React provides useEffect
import { useNavigate } from "react-router-dom"     // ✅ Only routing functions here


function SubmittedPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem("registration")
    if (data) {
      setFormData(JSON.parse(data))
    } else {
      navigate("/") // If no registration, go back to event page
    }
  }, [])

  if (!formData) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">
          You Have Already Registered
        </h1>

        <p className="mb-4"><strong>Name:</strong> {formData.fullName}</p>
        <p className="mb-4"><strong>Email:</strong> {formData.email}</p>
        <p className="mb-4"><strong>Phone:</strong> {formData.phone}</p>
        <p className="mb-4"><strong>Ticket:</strong> {formData.ticket}</p>
        <p className="mb-4"><strong>Notes:</strong> {formData.notes}</p>

        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Edit Registration
        </button>
      </div>
    </div>
  )
}

export default SubmittedPage