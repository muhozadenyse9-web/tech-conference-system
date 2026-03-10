import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function ReviewPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  // Load data from sessionStorage when page loads
  useEffect(() => {
    const data = sessionStorage.getItem("registrationTemp")
    if (data) {
      setFormData(JSON.parse(data))
    } else {
      // If no data, redirect back to register page
      navigate("/register")
    }
  }, [])

  // Go back to edit
  const handleEdit = () => {
    navigate("/register")
  }

  // Confirm registration
  const handleConfirm = () => {
    // Save to localStorage for permanent storage
    localStorage.setItem("registration", JSON.stringify(formData))
    // Clear temporary sessionStorage
    sessionStorage.removeItem("registrationTemp")
    navigate("/confirm")
  }

  if (!formData) return null  // prevent render before data loads

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Review Your Registration</h1>

        <div className="mb-4">
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Organization:</strong> {formData.organization}</p>
          <p><strong>Ticket Type:</strong> {formData.ticket}</p>
          <p><strong>Dietary Requirements:</strong> {formData.dietary}</p>
          <p><strong>Notes:</strong> {formData.notes}</p>
        </div>

        <div className="flex justify-between mt-6">
          <button 
            onClick={handleEdit}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Edit
          </button>
          <button 
            onClick={handleConfirm}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage