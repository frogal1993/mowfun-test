import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", acceptance: 5, mood: "happy" },
  { day: "Tue", acceptance: 4, mood: "happy" },
  { day: "Wed", acceptance: 3, mood: "neutral" },
  { day: "Thu", acceptance: 5, mood: "happy" },
  { day: "Fri", acceptance: 2, mood: "stressed" },
  { day: "Sat", acceptance: 4, mood: "happy" },
  { day: "Sun", acceptance: 5, mood: "happy" },
]

export default function WeeklyTrendInsights() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Weekly Trend Insights</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
          <Tooltip />
          <Line type="monotone" dataKey="acceptance" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between mt-2">
        {data.map((item, index) => (
          <span key={index} className="text-xl">
            {item.mood === "happy" && "😻"}
            {item.mood === "neutral" && "😐"}
            {item.mood === "stressed" && "😿"}
          </span>
        ))}
      </div>
    </div>
  )
}

