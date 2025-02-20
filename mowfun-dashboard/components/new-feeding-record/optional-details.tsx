"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function OptionalDetails({ notes, setNotes }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsExpanded(!isExpanded)} className="w-full justify-between" variant="outline">
        Detailed Record (Optional)
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>
      {isExpanded && (
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Record any special observations…"
          className="mt-2"
          maxLength={300}
        />
      )}
    </div>
  )
}

