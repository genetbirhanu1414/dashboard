import React from 'react';
import { Card, CardContent } from "@/components/ui/card"; // Assumes '@' alias points to 'src'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // Ensure button.jsx exists in that folder too
import { Plus, ChevronRight, Search } from "lucide-react";
export default function HotelProfiles() {
  // Data based on your screenshot
  const hotels = [
    { id: 1, stars: 5, company: 'Aya Hotel::hotel' },
    { id: 2, stars: 4, company: 'Wassamar hotel::hotel' },
    { id: 3, stars: 4, company: 'Goha addis hotel::hotel' },
    { id: 4, stars: 3, company: 'Viraj Hotel & Restaurant::hotel' },
    { id: 5, stars: 5, company: 'Azzeman hotel::hotel' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* --- Action Header --- */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-slate-800">Hotel Profiles</h1>
          <nav className="text-sm flex items-center gap-2">
            <span className="text-gray-400">Home</span> 
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-gray-400">Account</span> 
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-blue-500 font-medium">Hotel Profiles</span>
          </nav>
        </div>

        <Button className="bg-[#00c292] hover:bg-[#00ab81] text-white flex items-center gap-2">
          <Plus size={18} />
          Add Hotel Profile
        </Button>
      </div>

      {/* --- Filter & Action Bar --- */}
      <Card className="mb-4 shadow-sm border-none">
        <CardContent className="p-4 flex items-center gap-4">
          <select className="border rounded px-3 py-1.5 text-sm bg-white outline-none w-48 border-slate-200">
            <option>---------</option>
            <option>Delete selected hotel profiles</option>
          </select>
          <Button variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700 h-9 px-4">
            Go
          </Button>
          <span className="text-sm text-slate-500 font-medium">0 of {hotels.length} selected</span>
        </CardContent>
      </Card>

      {/* --- Hotel Table --- */}
      <Card className="shadow-sm border-none overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-white">
                <th className="p-4 w-12 text-center">
                  <input type="checkbox" className="rounded accent-blue-600" />
                </th>
                <th className="p-4 text-sm font-semibold text-blue-600 cursor-pointer uppercase tracking-wider">
                  Stars
                </th>
                <th className="p-4 text-sm font-semibold text-blue-600 cursor-pointer uppercase tracking-wider">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr 
                  key={hotel.id} 
                  className={`border-b last:border-0 hover:bg-blue-50/50 transition-colors ${
                    index % 2 !== 0 ? 'bg-slate-50/50' : 'bg-white'
                  }`}
                >
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded accent-blue-600" />
                  </td>
                  <td className="p-4 text-sm text-blue-600 font-semibold">
                    {hotel.stars}
                  </td>
                  <td className="p-4 text-sm text-slate-700 font-medium">
                    {hotel.company}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}