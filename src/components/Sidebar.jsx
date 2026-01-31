import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Hotel, Users, Image as IconImage } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Company Profiles', path: '/company', icon: Building2 },
  { name: 'Hotel Profiles', path: '/hotels', icon: Hotel },
  { name: 'Users', path: '/users', icon: Users },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
        <span className="text-xl font-bold text-white tracking-tight">Marefiya Panel</span>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm",
              location.pathname === link.path ? "bg-blue-600 text-white" : "hover:bg-slate-800"
            )}
          >
            <link.icon size={18} /> {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}