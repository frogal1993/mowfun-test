import { Star } from "lucide-react"

const favoriteFoods = [
  { name: "Mackerel & Lamb", rating: 4.9 },
  { name: "Chicken & Carrot", rating: 4.8 },
  { name: "Tuna & Pumpkin", rating: 4.7 },
]

const cautionFoods = [{ name: "Indoor Cat IN27W", rating: 3.2 }]

export default function FavoriteAndCautionFoods() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Favorite Foods</h2>
        {favoriteFoods.map((food) => (
          <div key={food.name} className="bg-green-50 p-3 rounded-lg mb-2 flex justify-between items-center">
            <span>{food.name}</span>
            <span className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              {food.rating}
            </span>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Caution Foods</h2>
        {cautionFoods.map((food) => (
          <div key={food.name} className="bg-red-50 p-3 rounded-lg mb-2 flex justify-between items-center">
            <span>{food.name}</span>
            <span className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              {food.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

