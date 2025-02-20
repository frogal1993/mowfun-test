import Header from "./header"
import DailySummary from "./daily-summary"
import FeedingRecords from "./feeding-records"
import FeedingProgressTracker from "./feeding-progress-tracker"
import BottomNavigation from "./bottom-navigation"
import QuickAddRecord from "./quick-add-record"

export default function Dashboard() {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow overflow-y-auto p-4">
        <DailySummary />
        <FeedingRecords />
        <FeedingProgressTracker />
      </main>
      <BottomNavigation />
      <QuickAddRecord />
    </div>
  )
}

