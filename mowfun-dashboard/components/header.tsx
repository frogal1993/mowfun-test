import { Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/cat-avatar.jpg" alt="Cat" />
          <AvatarFallback>CT</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">Whiskers</h2>
          <p className="text-sm text-gray-500">2 years old</p>
        </div>
        <Button variant="ghost" size="sm">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="h-6 w-6" />
      </Button>
    </header>
  )
}

