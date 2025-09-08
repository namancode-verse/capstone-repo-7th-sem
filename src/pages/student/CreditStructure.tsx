import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StudentSidebar from "@/components/StudentSidebar";
import { Menu, BookOpen, Award, CreditCard } from "lucide-react";

const CreditStructure = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const semesterData = [
    {
      semester: "Semester 1",
      courses: [
        { name: "Programming Fundamentals", code: "CS101", credits: 4, type: "mandatory" },
        { name: "Mathematics for CS", code: "MA101", credits: 3, type: "mandatory" },
        { name: "English Communication", code: "EN101", credits: 2, type: "mandatory" },
        { name: "Physics for Engineers", code: "PH101", credits: 3, type: "mandatory" },
      ]
    },
    {
      semester: "Semester 2", 
      courses: [
        { name: "Data Structures", code: "CS201", credits: 4, type: "mandatory" },
        { name: "Database Systems", code: "CS202", credits: 3, type: "mandatory" },
        { name: "Web Development", code: "CS402", credits: 3, type: "elective" },
        { name: "Statistics", code: "MA201", credits: 2, type: "mandatory" },
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        { name: "Operating Systems", code: "CS301", credits: 4, type: "mandatory" },
        { name: "Computer Networks", code: "CS302", credits: 3, type: "mandatory" },
        { name: "Machine Learning", code: "CS401", credits: 3, type: "elective" },
        { name: "Software Engineering", code: "CS303", credits: 2, type: "mandatory" },
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        { name: "Algorithm Design", code: "CS401", credits: 4, type: "mandatory" },
        { name: "Cybersecurity", code: "CS403", credits: 3, type: "elective" },
        { name: "Mobile Development", code: "CS404", credits: 3, type: "elective" },
        { name: "Project Management", code: "MG101", credits: 2, type: "mandatory" },
      ]
    }
  ];

  const getTotalCredits = (courses: any[]) => {
    return courses.reduce((total, course) => total + course.credits, 0);
  };

  const getTypeColor = (type: string) => {
    return type === "mandatory" ? "default" : "secondary";
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
                <h1 className="text-xl font-semibold text-foreground">Credit Structure</h1>
                <p className="text-sm text-muted-foreground">Course-wise credit distribution across semesters</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Credits</p>
                    <p className="text-xl font-bold text-foreground">48</p>
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
                    <p className="text-sm text-muted-foreground">Mandatory</p>
                    <p className="text-xl font-bold text-foreground">32</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Award className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Electives</p>
                    <p className="text-xl font-bold text-foreground">16</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Semester-wise Credit Structure */}
          <div className="space-y-6">
            {semesterData.map((semester, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{semester.semester}</CardTitle>
                      <CardDescription>
                        {semester.courses.length} courses • {getTotalCredits(semester.courses)} total credits
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {getTotalCredits(semester.courses)} Credits
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t">
                    {semester.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="p-4 border-r border-b last:border-r-0 hover:bg-muted/30 transition-colors">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground text-sm leading-tight">{course.name}</h4>
                              <p className="text-xs text-primary font-medium">{course.code}</p>
                            </div>
                            <div className="text-right ml-2">
                              <div className="text-lg font-bold text-foreground">{course.credits}</div>
                              <div className="text-xs text-muted-foreground">credits</div>
                            </div>
                          </div>
                          <Badge 
                            variant={getTypeColor(course.type) as any}
                            className="text-xs"
                          >
                            {course.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Credit Distribution Chart */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Credit Distribution Overview</CardTitle>
              <CardDescription>Visual breakdown of mandatory vs elective credits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="font-medium">Mandatory Courses</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">32</div>
                    <div className="text-sm text-muted-foreground">66.7% of total</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-warning rounded"></div>
                    <span className="font-medium">Elective Courses</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">16</div>
                    <div className="text-sm text-muted-foreground">33.3% of total</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CreditStructure;