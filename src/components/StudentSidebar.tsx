import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  CreditCard, 
  Calendar, 
  CheckSquare, 
  Settings, 
  Menu,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const StudentSidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/student/dashboard" },
    { icon: BookOpen, label: "Mandatory Courses", path: "/student/mandatory-courses" },
    { icon: GraduationCap, label: "Optional Courses", path: "/student/optional-courses" },
    { icon: CreditCard, label: "Credit Structure", path: "/student/credit-structure" },
    { icon: Calendar, label: "Current Semester", path: "/student/current-semester" },
    { icon: CheckSquare, label: "Pending Tasks", path: "/student/tasks" },
    { icon: Settings, label: "Profile Settings", path: "/student/profile" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-50 h-full bg-navy text-navy-foreground transition-all duration-300 lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "w-64"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-navy-light">
          <h2 className="text-lg font-semibold">NextGen</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="lg:hidden text-navy-foreground hover:bg-navy-light"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-2 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 h-11 text-navy-foreground hover:bg-navy-light",
                      isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-navy-light">
          <p className="text-xs text-navy-foreground/70 text-center">
            EduChoice Student Portal
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentSidebar;