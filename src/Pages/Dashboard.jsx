import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit } from "lucide-react";

export default function Dashboard() {
  const sections = [
    { title: "Account", items: ["Company Profiles", "Hotel Profiles", "Users"] },
    { title: "Listing", items: ["Amenities", "Bookings", "Car Listings"] }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-sm text-blue-500">Home › Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((sec) => (
          <Card key={sec.title}>
            <CardHeader className="bg-slate-50 border-b py-3">
              <CardTitle className="text-sm font-medium text-slate-500 uppercase tracking-wider">{sec.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {sec.items.map((item) => (
                <div key={item} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-slate-50">
                  <span className="text-blue-700 font-medium text-sm">{item}</span>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 h-8"><Plus size={14} className="mr-1"/> Add</Button>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 h-8"><Edit size={14} className="mr-1"/> Change</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}