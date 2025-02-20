import { Smile, Meh, Frown } from "lucide-react"

export default function DailySummary() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h2 className="font-semibold mb-2">Today (3)</h2>
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-2">
          <Smile className="text-green-500" />
          <Meh className="text-orange-500" />
          <Frown className="text-red-500" />
        </div>
        <span className="text-sm font-medium">3 meals recorded</span>
      </div>
      <p className="text-sm">Most loved: Mackerel & Lamb</p>
      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 w-2/3"></div>
      </div>
    </div>
  )
}

