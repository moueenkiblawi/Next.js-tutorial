
import React from 'react'

type PopUpProps = {
  onClose: () => void
}

const PopUp: React.FC<PopUpProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold">Server-Side Pop-Up</h2>
      <p>This is a server-rendered pop-up component.</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Close
      </button>
    </div>
  )
}

export default PopUp
