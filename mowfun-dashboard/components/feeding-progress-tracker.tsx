export default function FeedingProgressTracker() {
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-4">
      <h3 className="font-semibold mb-2">Weekly Report Unlock</h3>
      <div className="w-full bg-blue-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
      </div>
      <p className="text-sm mt-2">5 Days Logged / Goal 10 Days</p>
    </div>
  )
}

