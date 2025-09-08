import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TeacherSidebar from "@/components/TeacherSidebar";
import { Menu, Bell, Search, Users, UserCheck, ClipboardList, TrendingUp, Calendar } from "lucide-react";

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const quickStats = [
    { icon: ClipboardList, label: "Pending Requests", value: "4", color: "bg-warning" },
    { icon: Users, label: "Active Students", value: "12", color: "bg-primary" },
    { icon: UserCheck, label: "Completed Projects", value: "8", color: "bg-success" },
    { icon: TrendingUp, label: "Success Rate", value: "94%", color: "bg-navy" },
  ];

  const recentRequests = [
    { 
      student: "John Doe", 
      project: "Machine Learning Classification", 
      domain: "AI/ML", 
      requestedDate: "2 days ago",
      status: "pending"
    },
    { 
      student: "Sarah Wilson", 
      project: "E-commerce Web App", 
      domain: "Web Development", 
      requestedDate: "3 days ago",
      status: "pending"
    },
    { 
      student: "Mike Johnson", 
      project: "Mobile Fitness Tracker", 
      domain: "Mobile Development", 
      requestedDate: "1 week ago",
      status: "accepted"
    },
    { 
      student: "Emily Davis", 
      project: "Blockchain Voting System", 
      domain: "Blockchain", 
      requestedDate: "1 week ago",
      status: "pending"
    },
  ];

  const upcomingDeadlines = [
    { student: "Alex Thompson", project: "Data Analytics Dashboard", deadline: "Dec 15, 2024" },
    { student: "Lisa Garcia", project: "IoT Home Automation", deadline: "Dec 20, 2024" },
    { student: "David Chen", project: "Social Media Platform", deadline: "Dec 25, 2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TeacherSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
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
                <h1 className="text-xl font-semibold text-foreground">Welcome back, Dr. Anderson!</h1>
                <p className="text-sm text-muted-foreground">04 Oct 2024, Friday</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <Badge className="ml-1 h-2 w-2 p-0 bg-destructive"></Badge>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-teacher.jpg" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Hero Section */}
          <div className="mb-8 bg-gradient-to-r from-navy/10 to-primary/10 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Guide the Next Generation
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mentor students, review project requests, and shape future innovators
                </p>
                <div className="flex gap-3">
                  <Button>Review Requests</Button>
                  <Button variant="outline">View Students</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-navy/20 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-navy" />
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
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Requests */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Student Requests</CardTitle>
                  <CardDescription>Latest project guidance requests from students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRequests.map((request, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{request.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium text-foreground">{request.student}</h4>
                              <p className="text-sm text-muted-foreground">{request.requestedDate}</p>
                            </div>
                          </div>
                          <div className="ml-11">
                            <p className="font-medium text-sm">{request.project}</p>
                            <p className="text-xs text-primary">{request.domain}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {request.status === "pending" && (
                            <>
                              <Button size="sm" variant="destructive">Reject</Button>
                              <Button size="sm">Accept</Button>
                            </>
                          )}
                          {request.status === "accepted" && (
                            <Badge variant="secondary">Accepted</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Deadlines */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Project submission deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <h5 className="font-medium text-foreground text-sm">{deadline.student}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{deadline.project}</p>
                        <div className="flex items-center gap-1 text-xs text-destructive">
                          <Calendar className="h-3 w-3" />
                          <span>{deadline.deadline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    View All Deadlines
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;