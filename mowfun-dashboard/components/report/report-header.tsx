import { ArrowLeft, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ReportHeader() {
  return (
    <header className="bg-white p-4 flex items-center justify-between shadow-sm">
      <Button variant="ghost" size="icon">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/cat-avatar.jpg" alt="Xiaohua" />
          <AvatarFallback>XH</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <h2 className="font-semibold">Xiaohua</h2>
          <p className="text-gray-500">4.2 kg | 2 years old | Mixed Breed</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="text-sm">
        March Report <ChevronDown className="h-4 w-4 ml-1" />
      </Button>
    </header>
  )
}

