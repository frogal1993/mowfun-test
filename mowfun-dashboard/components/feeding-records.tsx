import { Star, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const feedingRecords = [
  {
    id: 1,
    foodName: "Mackerel & Lamb",
    brand: "WanMeow Planet",
    type: "Main Food",
    rating: 5,
    time: "15:30",
    status: "loved",
  },
  {
    id: 2,
    foodName: "Chicken Delight",
    brand: "PurrfectBites",
    type: "Supplementary",
    rating: 3,
    time: "12:00",
    status: "accepted",
  },
  {
    id: 3,
    foodName: "Tuna Flakes",
    brand: "OceanTreats",
    type: "Freeze-Dried",
    rating: 1,
    time: "09:15",
    status: "rejected",
  },
]

export default function FeedingRecords() {
  return (
    <div className="space-y-4 mb-4">
      {feedingRecords.map((record) => (
        <div
          key={record.id}
          className={`
    p-4 
    rounded-lg 
    shadow-sm 
    flex 
    justify-between 
    items-center 
    ${record.status === "loved" ? "bg-green-100" : record.status === "accepted" ? "bg-orange-100" : "bg-red-100"}
  `}
        >
          <div>
            <h3 className="font-semibold">{record.foodName}</h3>
            <p className="text-sm text-gray-600">{record.brand}</p>
            <p className="text-xs text-gray-500">{record.type}</p>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < record.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{record.time}</p>
            <Button variant="ghost" size="sm" className="mt-2">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

