import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentLogin from "./pages/student/StudentLogin";
import StudentSignup from "./pages/student/StudentSignup";
import StudentDashboard from "./pages/student/StudentDashboard";
import MandatoryCourses from "./pages/student/MandatoryCourses";
import OptionalCourses from "./pages/student/OptionalCourses";
import CreditStructure from "./pages/student/CreditStructure";
import CurrentSemester from "./pages/student/CurrentSemester";
import StudentTasks from "./pages/student/StudentTasks";
import StudentProfile from "./pages/student/StudentProfile";
import TeacherLogin from "./pages/teacher/TeacherLogin";
import TeacherSignup from "./pages/teacher/TeacherSignup";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentRequests from "./pages/teacher/StudentRequests";
import TeacherStudents from "./pages/teacher/TeacherStudents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Student Routes */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/mandatory-courses" element={<MandatoryCourses />} />
          <Route path="/student/optional-courses" element={<OptionalCourses />} />
          <Route path="/student/credit-structure" element={<CreditStructure />} />
          <Route path="/student/current-semester" element={<CurrentSemester />} />
          <Route path="/student/tasks" element={<StudentTasks />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          
          {/* Teacher Routes */}
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignup />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/requests" element={<StudentRequests />} />
          <Route path="/teacher/students" element={<TeacherStudents />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
