import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StudentSidebar from "@/components/StudentSidebar";
import { Menu, BookOpen, Clock, User, CheckCircle } from "lucide-react";

const MandatoryCourses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mandatoryCourses = [
    {
      id: 1,
      name: "Programming Fundamentals",
      code: "CS101",
      credits: 4,
      instructor: "Dr. Smith",
      semester: "1st Semester",
      duration: "3 months",
      status: "enrolled",
      description: "Introduction to programming concepts using Python and basic algorithms"
    },
    {
      id: 2,
      name: "Mathematics for CS",
      code: "MA101",
      credits: 3,
      instructor: "Prof. Johnson",
      semester: "1st Semester", 
      duration: "3 months",
      status: "enrolled",
      description: "Discrete mathematics, linear algebra, and statistical foundations"
    },
    {
      id: 3,
      name: "Data Structures",
      code: "CS201",
      credits: 4,
      instructor: "Dr. Wilson",
      semester: "2nd Semester",
      duration: "3 months",
      status: "available",
      description: "Arrays, linked lists, stacks, queues, trees, and graph algorithms"
    },
    {
      id: 4,
      name: "Database Systems",
      code: "CS202",
      credits: 3,
      instructor: "Prof. Davis",
      semester: "2nd Semester",
      duration: "3 months", 
      status: "available",
      description: "Relational databases, SQL, normalization, and database design"
    },
    {
      id: 5,
      name: "Operating Systems",
      code: "CS301",
      credits: 4,
      instructor: "Dr. Brown",
      semester: "3rd Semester",
      duration: "3 months",
      status: "upcoming",
      description: "Process management, memory management, file systems, and concurrency"
    },
    {
      id: 6,
      name: "Computer Networks",
      code: "CS302",
      credits: 3,
      instructor: "Prof. Taylor",
      semester: "3rd Semester", 
      duration: "3 months",
      status: "upcoming",
      description: "Network protocols, TCP/IP, network security, and distributed systems"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "enrolled": return "success";
      case "available": return "default";
      case "upcoming": return "secondary";
      default: return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "enrolled": return "Currently Enrolled";
      case "available": return "Available for Enrollment";
      case "upcoming": return "Upcoming Semester";
      default: return status;
    }
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
                <h1 className="text-xl font-semibold text-foreground">Mandatory Courses</h1>
                <p className="text-sm text-muted-foreground">Core curriculum requirements for your degree</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Enrolled</p>
                    <p className="text-xl font-bold text-foreground">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="text-xl font-bold text-foreground">2</p>
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
                    <p className="text-sm text-muted-foreground">Upcoming</p>
                    <p className="text-xl font-bold text-foreground">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandatoryCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{course.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {course.code}
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusColor(course.status) as any}>
                      {getStatusText(course.status)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="font-medium">{course.credits} Credits</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{course.instructor}</span>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-sm font-medium text-muted-foreground">
                        {course.semester}
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      {course.status === "enrolled" && (
                        <Button className="w-full" disabled>
                          Currently Enrolled
                        </Button>
                      )}
                      {course.status === "available" && (
                        <Button className="w-full">
                          Enroll Now
                        </Button>
                      )}
                      {course.status === "upcoming" && (
                        <Button className="w-full" variant="outline" disabled>
                          Available Next Semester
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MandatoryCourses;