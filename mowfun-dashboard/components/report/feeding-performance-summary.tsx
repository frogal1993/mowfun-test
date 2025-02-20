import { Trophy, Utensils, XCircle } from "lucide-react"

export default function FeedingPerformanceSummary() {
  return (
    <div className="bg-teal-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold flex items-center">
          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
          Golden Bowl Award
        </h2>
        <span className="text-2xl font-bold text-teal-600">95 Points</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Great Performance! 🏆 Consistent logging helps build healthy eating habits.
      </p>
      <div className="flex justify-between text-sm">
        <span className="flex items-center">
          <Utensils className="h-4 w-4 mr-1 text-green-500" />
          +356 Meals Logged
        </span>
        <span className="flex items-center">
          <XCircle className="h-4 w-4 mr-1 text-red-500" />
          -2 Meal Refusals
        </span>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        <span className="text-2xl">🥇</span>
        <span className="text-2xl">🥈</span>
        <span className="text-2xl">🥉</span>
      </div>
    </div>
  )
}

