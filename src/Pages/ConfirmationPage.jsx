// Correct
import { useEffect, useState } from "react"        // ✅ React provides useEffect
import { useNavigate } from "react-router-dom"     // ✅ Only routing functions here

function ConfirmationPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  // Load the saved registration from localStorage
  useEffect(() => {
    const data = localStorage.getItem("registration")
    if (data) {
      setFormData(JSON.parse(data))
    } else {
      // If no registration found, redirect to event page
      navigate("/")
    }
  }, [])

  if (!formData) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Registration Successful!
        </h1>
        <p className="mb-4">
          Thank you, <strong>{formData.fullName}</strong>, for registering for the
          Tech Innovation Conference 2026.
        </p>
        <p className="mb-6">
          Your <strong>{formData.ticket}</strong> ticket has been reserved.
        </p>
        <p className="text-gray-600">
          You can close this page or return to the event page.
        </p>
      </div>
    </div>
  )
}

export default ConfirmationPage