import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StudentSidebar from "@/components/StudentSidebar";
import { Menu, BookOpen, Clock, User, Calendar, Award } from "lucide-react";

const CurrentSemester = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSemesterCourses = [
    {
      id: 1,
      name: "Programming Fundamentals",
      code: "CS101",
      credits: 4,
      instructor: "Dr. Smith",
      type: "mandatory",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "Room 101",
      progress: 75,
      status: "ongoing"
    },
    {
      id: 2,
      name: "Mathematics for CS",
      code: "MA101", 
      credits: 3,
      instructor: "Prof. Johnson",
      type: "mandatory",
      schedule: "Tue, Thu - 10:30 AM",
      room: "Room 205",
      progress: 60,
      status: "ongoing"
    },
    {
      id: 3,
      name: "Web Development",
      code: "CS402",
      credits: 3,
      instructor: "Prof. Martinez",
      type: "elective",
      schedule: "Mon, Wed - 2:00 PM",
      room: "Lab 301",
      progress: 80,
      status: "ongoing" 
    },
    {
      id: 4,
      name: "English Communication",
      code: "EN101",
      credits: 2,
      instructor: "Dr. Wilson",
      type: "mandatory",
      schedule: "Fri - 11:00 AM",
      room: "Room 102",
      progress: 85,
      status: "ongoing"
    }
  ];

  const upcomingDeadlines = [
    {
      course: "Programming Fundamentals",
      assignment: "Final Project Submission",
      dueDate: "Dec 15, 2024",
      priority: "high"
    },
    {
      course: "Mathematics for CS", 
      assignment: "Assignment 3",
      dueDate: "Dec 10, 2024",
      priority: "medium"
    },
    {
      course: "Web Development",
      assignment: "Portfolio Website",
      dueDate: "Dec 20, 2024",
      priority: "high"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-success";
    if (progress >= 60) return "bg-warning";
    return "bg-destructive";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "default";
    }
  };

  const getTotalCredits = () => {
    return currentSemesterCourses.reduce((total, course) => total + course.credits, 0);
  };

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
                <h1 className="text-xl font-semibold text-foreground">Current Semester</h1>
                <p className="text-sm text-muted-foreground">Semester 1 - Fall 2024</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Semester Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                    <p className="text-xl font-bold text-foreground">{currentSemesterCourses.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Award className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Credits</p>
                    <p className="text-xl font-bold text-foreground">{getTotalCredits()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Clock className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Progress</p>
                    <p className="text-xl font-bold text-foreground">75%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Due Soon</p>
                    <p className="text-xl font-bold text-foreground">{upcomingDeadlines.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current Courses */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Enrolled Courses</CardTitle>
                  <CardDescription>Your current semester course load</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentSemesterCourses.map((course) => (
                      <div key={course.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-foreground">{course.name}</h4>
                              <Badge variant={course.type === "mandatory" ? "default" : "secondary"}>
                                {course.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-primary font-medium">{course.code}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-foreground">{course.credits}</div>
                            <div className="text-xs text-muted-foreground">credits</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{course.instructor}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{course.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{course.room}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${getProgressColor(course.progress)} transition-all`}
                                  style={{ width: `${course.progress}%` }}
                                />
                              </div>
                              <span className="text-xs font-medium">{course.progress}%</span>
                            </div>
                          </div>
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
                  <CardDescription>Keep track of important due dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium text-foreground text-sm leading-tight">{deadline.assignment}</h5>
                          <Badge variant={getPriorityColor(deadline.priority) as any} className="text-xs">
                            {deadline.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{deadline.course}</p>
                        <p className="text-xs font-medium text-destructive">{deadline.dueDate}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    View All Tasks
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

export default CurrentSemester;