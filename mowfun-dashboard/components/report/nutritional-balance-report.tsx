import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const data = [
  { name: "Protein", value: 80, status: "High", color: "#4ade80" },
  { name: "Fat", value: 60, status: "Balanced", color: "#fbbf24" },
  { name: "Carbs", value: 20, status: "Minimal", color: "#60a5fa" },
]

export default function NutritionalBalanceReport() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Nutritional Balance Report</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-2 space-y-1">
        {data.map((item) => (
          <div key={item.name} className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span className="font-medium">{item.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <span className="font-medium">Nutrition Sources:</span> Fish, Chicken, Red Meat
      </div>
    </div>
  )
}

