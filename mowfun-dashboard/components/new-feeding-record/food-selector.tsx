"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Mock data for recent foods
const recentFoods = [
  { id: "A001", name: "Brand A Mackerel", recentRating: "😺😼🙂", usageCount: 24 },
  { id: "B002", name: "Brand B Chicken", recentRating: "🙂😺", usageCount: 18 },
]

export default function FoodSelector({ selectedFood, setSelectedFood }) {
  const [foods, setFoods] = useState(recentFoods)

  useEffect(() => {
    // TODO: Fetch recent foods from API
    // const fetchRecentFoods = async () => {
    //   const response = await fetch('/api/foods/recent?catId=12345')
    //   const data = await response.json()
    //   setFoods(data)
    // }
    // fetchRecentFoods()
  }, [])

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Select Food</h2>
      <div className="space-y-2">
        {foods.map((food) => (
          <Button
            key={food.id}
            onClick={() => setSelectedFood(food)}
            className={`w-full justify-between text-left ${selectedFood?.id === food.id ? "bg-[#E8F5E9] border-2 border-[#50BFA5]" : "bg-white"}`}
            variant="outline"
          >
            <div>
              <div>{food.name}</div>
              <div className="text-sm text-gray-500">Used {food.usageCount} times</div>
            </div>
            <div>{food.recentRating}</div>
          </Button>
        ))}
        <Button className="w-full" variant="outline">
          Select Other Food
        </Button>
      </div>
    </div>
  )
}

