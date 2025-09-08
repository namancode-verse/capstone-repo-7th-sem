import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">EduChoice</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              College Course Management System
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Choose Your Academic Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Streamline course selection, project guidance, and academic management 
            with our comprehensive platform designed for students and teachers.
          </p>
        </div>

        {/* Login Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Student Portal</CardTitle>
              <CardDescription className="text-lg">
                Access your dashboard, choose electives, manage tasks, and connect with guides
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/student/login">
                <Button size="lg" className="w-full mb-4">
                  Student Login
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                New student? <Link to="/student/signup" className="text-primary hover:underline">Create Account</Link>
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Teacher Portal</CardTitle>
              <CardDescription className="text-lg">
                Guide students, manage project requests, and oversee academic progress
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/teacher/login">
                <Button size="lg" className="w-full mb-4" variant="outline">
                  Teacher Login
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                New teacher? <Link to="/teacher/signup" className="text-primary hover:underline">Create Account</Link>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Course Management</h3>
            <p className="text-muted-foreground">Easily browse and select from mandatory and elective courses</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-warning" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Project Guidance</h3>
            <p className="text-muted-foreground">Connect with teachers for project supervision and mentorship</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Academic Planning</h3>
            <p className="text-muted-foreground">Track progress, manage deadlines, and plan your academic journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;