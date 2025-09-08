import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StudentSidebar from "@/components/StudentSidebar";
import { cn } from "@/lib/utils";
import { Menu, Bell, Search, BookOpen, GraduationCap, CheckSquare, TrendingUp, Calendar } from "lucide-react";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const quickStats = [
    { icon: BookOpen, label: "Enrolled Courses", value: "8", color: "bg-primary" },
    { icon: GraduationCap, label: "Credits Completed", value: "72", color: "bg-success" },
    { icon: CheckSquare, label: "Pending Tasks", value: "3", color: "bg-warning" },
    { icon: TrendingUp, label: "Current GPA", value: "8.4", color: "bg-navy" },
  ];

  const recentActivities = [
    { type: "course", title: "Machine Learning Assignment Due", time: "2 days ago", status: "pending" },
    { type: "request", title: "Project Guide Request Sent", time: "3 days ago", status: "waiting" },
    { type: "grade", title: "Database Systems Grade Updated", time: "1 week ago", status: "completed" },
    { type: "enrollment", title: "Enrolled in Data Structures", time: "2 weeks ago", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StudentSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-card border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Welcome back, Sarah!</h1>
                <p className="text-sm text-muted-foreground">04 Oct 2024, Friday</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Hero Section */}
          <div className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Now, you can choose your own curriculum by your own, so start learning with NextGen
                </h2>
                <p className="text-muted-foreground mb-4">
                  Customize your academic journey with our flexible course selection system
                </p>
                <div className="flex gap-3">
                  <Button>Browse Courses</Button>
                  <Button variant="outline">View Schedule</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={cn("p-3 rounded-full", stat.color)}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Go to Linways</h3>
                <p className="text-sm text-muted-foreground">Access learning materials</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">1st Sem</h3>
                <p className="text-sm text-muted-foreground">Current semester</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="h-6 w-6 text-warning" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Personalized Curriculum</h3>
                <p className="text-sm text-muted-foreground">Customize your path</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckSquare className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Task List</h3>
                <p className="text-sm text-muted-foreground">Manage assignments</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest academic activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div>
                        <p className="font-medium text-foreground">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <Badge variant={activity.status === "completed" ? "secondary" : activity.status === "pending" ? "destructive" : "outline"}>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;