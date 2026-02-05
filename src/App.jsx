import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import HotelProfiles from './Pages/Hotelprofile'
import { User, Search } from "lucide-react";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
      
          <header className="h-16 bg-white border-b flex items-center justify-between px-8">
            <div className="relative w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input placeholder="Search Users..." className="pl-10 w-full bg-slate-100 border-none rounded-md py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">reviewer@michotmarefia.com</span>
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center"><User size={18}/></div>
            </div>
          </header>

          <main className="p-8">
            <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/dashboard" element={<Dashboard />} />
  
  <Route path="/company" element={<div>Company Profiles Page</div>} />
  
  <Route path="/hotels" element={<HotelProfiles />} />

  <Route path="/users" element={<div>Users Management Page</div>} />
</Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
