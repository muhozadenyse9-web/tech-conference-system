import { useState } from "react"
import { useNavigate } from "react-router-dom"

function RegisterPage() {
  const navigate = useNavigate()

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "Standard",
    dietary: "",
    notes: "",
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Save data temporarily in session storage for now
    sessionStorage.setItem("registrationTemp", JSON.stringify(formData))

    // Go to Review Page
    navigate("/review")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6">Register for the Event</h1>

        <label className="block mb-2">Full Name</label>
        <input 
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2">Email</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2">Phone</label>
        <input 
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2">Organization / Institution</label>
        <input 
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Ticket Type</label>
        <select 
          name="ticket"
          value={formData.ticket}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        <label className="block mb-2">Dietary Requirements</label>
        <input 
          type="text"
          name="dietary"
          value={formData.dietary}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Additional Notes</label>
        <textarea 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        ></textarea>

        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Review
        </button>
      </form>
    </div>
  )
}

export default RegisterPage