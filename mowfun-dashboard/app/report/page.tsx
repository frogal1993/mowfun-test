import ReportHeader from "@/components/report/report-header"
import FeedingPerformanceSummary from "@/components/report/feeding-performance-summary"
import WeeklyFoodComposition from "@/components/report/weekly-food-composition"
import FavoriteAndCautionFoods from "@/components/report/favorite-and-caution-foods"
import WeeklyTrendInsights from "@/components/report/weekly-trend-insights"
import NutritionalBalanceReport from "@/components/report/nutritional-balance-report"
import FoodFatigueDetection from "@/components/report/food-fatigue-detection"
import CommunityRecommendations from "@/components/report/community-recommendations"
import BottomNavigation from "@/components/bottom-navigation"

export default function ReportPage() {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <ReportHeader />
      <main className="flex-grow overflow-y-auto p-4 space-y-6">
        <FeedingPerformanceSummary />
        <WeeklyFoodComposition />
        <FavoriteAndCautionFoods />
        <WeeklyTrendInsights />
        <NutritionalBalanceReport />
        <FoodFatigueDetection />
        <CommunityRecommendations />
      </main>
      <BottomNavigation activeItem="report" />
    </div>
  )
}

