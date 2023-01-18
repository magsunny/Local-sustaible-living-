export default function Button({ onClick, type, label }) {
  return (
    <button 
        className="inline-flex items-center justify-center rounded-md z-20 text-sm text-white bg-gradient-to-r from-emerald-500 to-blue-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 "
        onClick={onClick}
        type={type}
    >
        <span className="px-3 py-2 text-sm font-semibold hover:rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {label}
        </span>  
    </button>
  )
}
