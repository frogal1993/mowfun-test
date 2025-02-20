"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import MoodSelector from "@/components/new-feeding-record/mood-selector"
import FoodSelector from "@/components/new-feeding-record/food-selector"
import FeedingStatus from "@/components/new-feeding-record/feeding-status"
import OptionalDetails from "@/components/new-feeding-record/optional-details"

export default function NewFeedingRecordPage() {
  const [mood, setMood] = useState("happy")
  const [selectedFood, setSelectedFood] = useState(null)
  const [feedingStatus, setFeedingStatus] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log({ mood, selectedFood, feedingStatus, notes })
  }

  const isFormValid = mood && selectedFood && feedingStatus

  return (
    <div className="w-full max-w-md mx-auto bg-[#F9F9F9] min-h-screen flex flex-col">
      <header className="bg-white p-4 flex items-center justify-between shadow-sm">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-bold">New Feeding Record</h1>
        <div className="w-6"></div> {/* Spacer for centering */}
      </header>

      <form onSubmit={handleSubmit} className="flex-grow p-4 space-y-6">
        <MoodSelector mood={mood} setMood={setMood} />
        <FoodSelector selectedFood={selectedFood} setSelectedFood={setSelectedFood} />
        <FeedingStatus feedingStatus={feedingStatus} setFeedingStatus={setFeedingStatus} />
        <OptionalDetails notes={notes} setNotes={setNotes} />

        <Button type="submit" className="w-full bg-[#50BFA5] hover:bg-[#3DA892] text-white" disabled={!isFormValid}>
          Submit Record
        </Button>
      </form>
    </div>
  )
}

