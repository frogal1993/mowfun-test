import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuickAddRecord() {
  return (
    <div className="fixed bottom-20 right-4">
      <Button size="icon" className="rounded-full h-14 w-14 shadow-lg">
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}

