import { Button } from "@/components/ui/button"

const statusOptions = [
  { icon: "🍽️", label: "Finished Completely", value: "finished" },
  { icon: "🥄", label: "Ate Half", value: "half" },
  { icon: "⛔", label: "Barely Ate", value: "barely" },
]

export default function FeedingStatus({ feedingStatus, setFeedingStatus }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Feeding Status</h2>
      <div className="space-y-2">
        {statusOptions.map((option) => (
          <Button
            key={option.value}
            onClick={() => setFeedingStatus(option.value)}
            className={`w-full justify-start ${feedingStatus === option.value ? "bg-[#E8F5E9] border-2 border-[#50BFA5]" : "bg-white"}`}
            variant="outline"
          >
            <span className="mr-2">{option.icon}</span>
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

