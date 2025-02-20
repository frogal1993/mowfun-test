import { AlertTriangle } from "lucide-react"

export default function FoodFatigueDetection() {
  return (
    <div className="bg-orange-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
        Food Fatigue Alert
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        Mackerel & Lamb has been fed for 8 consecutive days. Consider rotating to a different flavor.
      </p>
      <h3 className="font-medium mb-1">Suggested Alternatives:</h3>
      <ul className="list-disc list-inside text-sm">
        <li>Chicken & Carrot</li>
        <li>Tuna & Pumpkin</li>
        <li>Beef & Green Peas</li>
      </ul>
    </div>
  )
}

