import { Star } from "lucide-react"

const recommendations = [
  { name: "Salmon Delight", brand: "OceanWave", rating: 4.8, similarity: 85 },
  { name: "Chicken Feast", brand: "HealthyPaws", rating: 4.7, similarity: 82 },
]

export default function CommunityRecommendations() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Similar Cats' Favorites</h2>
      <p className="text-sm text-gray-600 mb-4">85% of similar cats are eating these foods and adapting well.</p>
      {recommendations.map((food) => (
        <div key={food.name} className="bg-blue-50 p-3 rounded-lg mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium">{food.name}</span>
            <span className="text-sm text-gray-600">{food.brand}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              {food.rating} Stars
            </span>
            <span className="text-sm text-green-600">{food.similarity}% Similarity</span>
          </div>
        </div>
      ))}
      <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
        See More Recommendations
      </button>
    </div>
  )
}

