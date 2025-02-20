import { Button } from "@/components/ui/button"

const moods = [
  { emoji: "😺", label: "Happy" },
  { emoji: "🙂", label: "Calm" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "🤔", label: "Picky" },
  { emoji: "😠", label: "Resistant" },
]

export default function MoodSelector({ mood, setMood }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Mood Selection</h2>
      <div className="flex justify-between">
        {moods.map((m) => (
          <Button
            key={m.label}
            onClick={() => setMood(m.label.toLowerCase())}
            className={`text-2xl p-2 ${mood === m.label.toLowerCase() ? "bg-[#E8F5E9] border-2 border-[#50BFA5]" : "bg-white"}`}
            variant="outline"
          >
            {m.emoji}
          </Button>
        ))}
      </div>
    </div>
  )
}

