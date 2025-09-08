import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import TeacherSidebar from "@/components/TeacherSidebar";
import { Menu, Search, Mail, Phone, Calendar, BookOpen, GraduationCap } from "lucide-react";

interface Student {
  id: number;
  name: string;
  studentId: string;
  email: string;
  phone: string;
  semester: string;
  project: string;
  domain: string;
  startDate: string;
  progress: number;
  status: "active" | "completed" | "on-hold";
}

const TeacherStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const students: Student[] = [
    {
      id: 1,
      name: "Alice Johnson",
      studentId: "STU2024001",
      email: "alice.johnson@college.edu",
      phone: "+1 (555) 123-4567",
      semester: "6th Semester",
      project: "AI-powered Chatbot",
      domain: "Machine Learning",
      startDate: "2024-09-01",
      progress: 75,
      status: "active"
    },
    {
      id: 2,
      name: "Bob Smith",
      studentId: "STU2024002",
      email: "bob.smith@college.edu",
      phone: "+1 (555) 234-5678",
      semester: "6th Semester",
      project: "E-commerce Platform",
      domain: "Web Development",
      startDate: "2024-09-15",
      progress: 60,
      status: "active"
    },
    {
      id: 3,
      name: "Carol Davis",
      studentId: "STU2024003",
      email: "carol.davis@college.edu",
      phone: "+1 (555) 345-6789",
      semester: "8th Semester",
      project: "Mobile Banking App",
      domain: "Mobile Development",
      startDate: "2024-08-01",
      progress: 100,
      status: "completed"
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "completed": return "success";
      case "on-hold": return "warning";
      default: return "secondary";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-success";
    if (progress >= 60) return "bg-warning";
    if (progress >= 40) return "bg-primary";
    return "bg-destructive";
  };

  const getStudentCounts = () => {
    return {
      total: students.length,
      active: students.filter(s => s.status === "active").length,
      completed: students.filter(s => s.status === "completed").length,
      onHold: students.filter(s => s.status === "on-hold").length,
    };
  };

  const counts = getStudentCounts();

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
                <h1 className="text-xl font-semibold text-foreground">List of Students</h1>
                <p className="text-sm text-muted-foreground">Students under your guidance</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Student Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-xl font-bold text-foreground">{counts.total}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                    <p className="text-xl font-bold text-foreground">{counts.active}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-xl font-bold text-foreground">{counts.completed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-navy/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-xl font-bold text-foreground">100%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Student List */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder-student.jpg" />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.studentId} • {student.semester}</p>
                        </div>
                        <Badge variant={getStatusColor(student.status) as any}>
                          {student.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">{student.project}</h4>
                          <p className="text-sm text-primary">{student.domain}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{student.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{student.phone}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Started: {new Date(student.startDate).toLocaleDateString()}</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">{student.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${getProgressColor(student.progress)} transition-all`}
                                style={{ width: `${student.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline">
                          <BookOpen className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                        {student.status === "active" && (
                          <Button size="sm">
                            Schedule Meeting
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No students found</h3>
              <p className="text-muted-foreground">No students match your search criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherStudents;