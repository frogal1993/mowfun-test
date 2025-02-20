import { Home, BarChart2, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BottomNavigation({ activeItem }: { activeItem: string }) {
  return (
    <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 flex justify-around py-2">
      <Button
        variant="ghost"
        size="icon"
        className={`flex flex-col items-center ${activeItem === "dashboard" ? "text-blue-500 font-bold" : ""}`}
      >
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Dashboard</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`flex flex-col items-center ${activeItem === "report" ? "text-blue-500 font-bold" : ""}`}
      >
        <BarChart2 className="h-6 w-6" />
        <span className="text-xs mt-1">Report</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`flex flex-col items-center ${activeItem === "profile" ? "text-blue-500 font-bold" : ""}`}
      >
        <User className="h-6 w-6" />
        <span className="text-xs mt-1">Profile</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`flex flex-col items-center ${activeItem === "settings" ? "text-blue-500 font-bold" : ""}`}
      >
        <Settings className="h-6 w-6" />
        <span className="text-xs mt-1">Settings</span>
      </Button>
    </nav>
  )
}

