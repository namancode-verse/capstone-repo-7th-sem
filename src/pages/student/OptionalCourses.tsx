import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StudentSidebar from "@/components/StudentSidebar";
import { Menu, BookOpen, Clock, User, Star, Filter } from "lucide-react";

const OptionalCourses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const optionalCourses = [
    {
      id: 1,
      name: "Machine Learning Fundamentals",
      code: "CS401",
      credits: 3,
      instructor: "Dr. Anderson",
      category: "AI/ML",
      difficulty: "Intermediate",
      duration: "3 months",
      type: "project",
      description: "Introduction to ML algorithms, supervised and unsupervised learning",
      prerequisites: ["Data Structures", "Statistics"]
    },
    {
      id: 2,
      name: "Web Development",
      code: "CS402",
      credits: 3,
      instructor: "Prof. Martinez",
      category: "Web Tech",
      difficulty: "Beginner",
      duration: "3 months",
      type: "project",
      description: "Full-stack web development using React, Node.js, and MongoDB",
      prerequisites: ["Programming Fundamentals"]
    },
    {
      id: 3,
      name: "Cybersecurity Essentials",
      code: "CS403",
      credits: 4,
      instructor: "Dr. Thompson",
      category: "Security",
      difficulty: "Advanced",
      duration: "4 months",
      type: "certification",
      description: "Network security, cryptography, and ethical hacking principles",
      prerequisites: ["Computer Networks", "Operating Systems"]
    },
    {
      id: 4,
      name: "Mobile App Development",
      code: "CS404",
      credits: 3,
      instructor: "Prof. Lee",
      category: "Mobile",
      difficulty: "Intermediate",
      duration: "3 months",
      type: "project",
      description: "Native and cross-platform mobile development using React Native",
      prerequisites: ["Programming Fundamentals", "Web Development"]
    },
    {
      id: 5,
      name: "Data Science Analytics",
      code: "CS405",
      credits: 4,
      instructor: "Dr. Patel",
      category: "Data Science",
      difficulty: "Advanced",
      duration: "4 months",
      type: "project",
      description: "Statistical analysis, data visualization, and predictive modeling",
      prerequisites: ["Mathematics for CS", "Database Systems"]
    },
    {
      id: 6,
      name: "Cloud Computing",
      code: "CS406",
      credits: 3,
      instructor: "Prof. Garcia",
      category: "Cloud",
      difficulty: "Intermediate",
      duration: "3 months",
      type: "certification",
      description: "AWS, Azure, containerization, and microservices architecture",
      prerequisites: ["Computer Networks", "Operating Systems"]
    }
  ];

  const categories = ["all", "AI/ML", "Web Tech", "Security", "Mobile", "Data Science", "Cloud"];
  
  const filteredCourses = selectedCategory === "all" 
    ? optionalCourses 
    : optionalCourses.filter(course => course.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "project" ? <BookOpen className="h-4 w-4" /> : <Star className="h-4 w-4" />;
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
                <h1 className="text-xl font-semibold text-foreground">Optional Courses</h1>
                <p className="text-sm text-muted-foreground">Choose electives that align with your career goals</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Filter Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{course.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {course.code}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(course.type)}
                      <span className="text-xs text-muted-foreground capitalize">{course.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
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
                    
                    {course.prerequisites.length > 0 && (
                      <div className="pt-2 border-t">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Prerequisites:</p>
                        <div className="flex flex-wrap gap-1">
                          {course.prerequisites.map((prereq, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {prereq}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-2 flex gap-2">
                      <Button className="flex-1">
                        Enroll
                      </Button>
                      <Button variant="outline" size="sm">
                        Request Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try selecting a different category to see available courses.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default OptionalCourses;