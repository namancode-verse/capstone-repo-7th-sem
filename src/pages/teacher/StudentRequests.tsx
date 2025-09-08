import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TeacherSidebar from "@/components/TeacherSidebar";
import { Menu, Clock, User, BookOpen, Filter, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudentRequest {
  id: number;
  studentName: string;
  studentId: string;
  domain: string;
  projectTitle: string;
  description: string;
  requestDate: string;
  status: "pending" | "accepted" | "rejected";
  priority: "high" | "medium" | "low";
  semester: string;
}

const StudentRequests = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDomain, setFilterDomain] = useState("all");
  const { toast } = useToast();

  const [requests, setRequests] = useState<StudentRequest[]>([
    {
      id: 1,
      studentName: "John Doe",
      studentId: "STU2024001",
      domain: "Machine Learning",
      projectTitle: "ML Classification System",
      description: "Build a machine learning model for image classification using convolutional neural networks",
      requestDate: "2024-12-06",
      status: "pending",
      priority: "high",
      semester: "6th Semester"
    },
    {
      id: 2,
      studentName: "Sarah Wilson",
      studentId: "STU2024002",
      domain: "Web Development",
      projectTitle: "E-commerce Platform",
      description: "Full-stack e-commerce web application with React, Node.js, and MongoDB",
      requestDate: "2024-12-05",
      status: "pending",
      priority: "medium",
      semester: "6th Semester"
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      studentId: "STU2024003",
      domain: "Mobile Development",
      projectTitle: "Fitness Tracking App",
      description: "Cross-platform mobile app for fitness tracking with React Native",
      requestDate: "2024-12-01",
      status: "accepted",
      priority: "medium",
      semester: "6th Semester"
    },
    {
      id: 4,
      studentName: "Emily Davis",
      studentId: "STU2024004",
      domain: "Blockchain",
      projectTitle: "Voting System on Blockchain",
      description: "Decentralized voting system using Ethereum smart contracts and Web3",
      requestDate: "2024-11-30",
      status: "pending",
      priority: "high",
      semester: "6th Semester"
    }
  ]);

  const handleAccept = (requestId: number) => {
    setRequests(requests.map(req => 
      req.id === requestId ? { ...req, status: "accepted" as const } : req
    ));
    toast({
      title: "Request Accepted",
      description: "Student request has been accepted successfully.",
    });
  };

  const handleReject = (requestId: number) => {
    setRequests(requests.map(req => 
      req.id === requestId ? { ...req, status: "rejected" as const } : req
    ));
    toast({
      title: "Request Rejected",
      description: "Student request has been rejected.",
      variant: "destructive"
    });
  };

  const filteredRequests = requests.filter(request => {
    const statusMatch = filterStatus === "all" || request.status === filterStatus;
    const domainMatch = filterDomain === "all" || request.domain === filterDomain;
    return statusMatch && domainMatch;
  });

  const domains = ["all", ...Array.from(new Set(requests.map(req => req.domain)))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted": return "success";
      case "rejected": return "destructive";
      case "pending": return "warning";
      default: return "default";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "default";
    }
  };

  const getRequestCounts = () => {
    return {
      total: requests.length,
      pending: requests.filter(r => r.status === "pending").length,
      accepted: requests.filter(r => r.status === "accepted").length,
      rejected: requests.filter(r => r.status === "rejected").length,
    };
  };

  const counts = getRequestCounts();

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
                <h1 className="text-xl font-semibold text-foreground">Student Requests</h1>
                <p className="text-sm text-muted-foreground">Review and manage project guidance requests</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Request Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Requests</p>
                    <p className="text-xl font-bold text-foreground">{counts.total}</p>
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
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-xl font-bold text-foreground">{counts.pending}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Accepted</p>
                    <p className="text-xl font-bold text-foreground">{counts.accepted}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <XCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rejected</p>
                    <p className="text-xl font-bold text-foreground">{counts.rejected}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDomain} onValueChange={setFilterDomain}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Domain" />
              </SelectTrigger>
              <SelectContent>
                {domains.map((domain) => (
                  <SelectItem key={domain} value={domain}>
                    {domain === "all" ? "All Domains" : domain}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Request Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-student.jpg" />
                        <AvatarFallback>{request.studentName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{request.studentName}</CardTitle>
                        <CardDescription>{request.studentId} • {request.semester}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityColor(request.priority) as any} className="text-xs">
                        {request.priority}
                      </Badge>
                      <Badge variant={getStatusColor(request.status) as any} className="text-xs">
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{request.projectTitle}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{request.domain}</p>
                      <p className="text-sm text-muted-foreground">{request.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Requested on {new Date(request.requestDate).toLocaleDateString()}</span>
                    </div>
                    
                    {request.status === "pending" && (
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleReject(request.id)}
                          className="flex-1"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleAccept(request.id)}
                          className="flex-1"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                      </div>
                    )}
                    
                    {request.status === "accepted" && (
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <User className="h-4 w-4 mr-2" />
                          View Student Details
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No requests found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see requests.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentRequests;