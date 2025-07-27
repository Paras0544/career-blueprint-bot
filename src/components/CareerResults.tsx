import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  DollarSign, 
  BookOpen, 
  Building2, 
  Target, 
  Calendar,
  TrendingUp,
  Award,
  ExternalLink
} from "lucide-react";

interface AssessmentData {
  name: string;
  qualification: string;
  interests: string;
  skills: string;
  workPreference: string;
  higherEducation: string;
  careerGoals: string;
}

interface CareerPath {
  title: string;
  description: string;
  match: number;
  skills: string[];
  courses: {
    name: string;
    platform: string;
    duration: string;
  }[];
  companies: string[];
  salaryRange: string;
}

interface CareerResultsProps {
  data: AssessmentData;
  onBack: () => void;
}

export const CareerResults = ({ data, onBack }: CareerResultsProps) => {
  // Generate career paths based on user input
  const generateCareerPaths = (): CareerPath[] => {
    const interests = data.interests.toLowerCase();
    const skills = data.skills.toLowerCase();
    
    const paths: CareerPath[] = [];
    
    // Tech-related paths
    if (interests.includes('technology') || interests.includes('tech') || skills.includes('programming')) {
      paths.push({
        title: "Software Developer",
        description: "Build applications, websites, and software solutions using programming languages",
        match: 95,
        skills: ["JavaScript", "Python", "React", "Node.js", "Database Management", "Problem Solving"],
        courses: [
          { name: "The Complete Web Developer Course", platform: "Udemy", duration: "40 hours" },
          { name: "CS50's Introduction to Computer Science", platform: "edX", duration: "12 weeks" },
          { name: "Full Stack Web Development", platform: "Coursera", duration: "6 months" }
        ],
        companies: ["TCS", "Infosys", "Wipro", "Amazon", "Microsoft", "Google", "Flipkart", "Zomato"],
        salaryRange: "₹3-15 LPA"
      });
    }
    
    if (interests.includes('design') || interests.includes('creative') || skills.includes('design')) {
      paths.push({
        title: "UI/UX Designer",
        description: "Create user-friendly interfaces and experiences for digital products",
        match: 88,
        skills: ["Figma", "Adobe Creative Suite", "User Research", "Wireframing", "Prototyping"],
        courses: [
          { name: "Google UX Design Certificate", platform: "Coursera", duration: "6 months" },
          { name: "UI/UX Design Specialization", platform: "Coursera", duration: "4 months" },
          { name: "Design Thinking", platform: "IDEO U", duration: "6 weeks" }
        ],
        companies: ["Swiggy", "Paytm", "PhonePe", "Ola", "Myntra", "Adobe", "Razorpay"],
        salaryRange: "₹4-12 LPA"
      });
    }
    
    if (interests.includes('data') || interests.includes('analytics') || skills.includes('analysis')) {
      paths.push({
        title: "Data Analyst",
        description: "Analyze data to help businesses make informed decisions",
        match: 92,
        skills: ["SQL", "Python/R", "Excel", "Tableau", "Power BI", "Statistics"],
        courses: [
          { name: "Google Data Analytics Certificate", platform: "Coursera", duration: "6 months" },
          { name: "Data Analysis with Python", platform: "edX", duration: "10 weeks" },
          { name: "Tableau Specialist", platform: "Tableau", duration: "3 months" }
        ],
        companies: ["Accenture", "Deloitte", "PwC", "EY", "Mu Sigma", "Fractal Analytics"],
        salaryRange: "₹3-10 LPA"
      });
    }
    
    // Business/Finance paths
    if (interests.includes('business') || interests.includes('finance') || interests.includes('management')) {
      paths.push({
        title: "Business Analyst",
        description: "Bridge business needs with technology solutions",
        match: 85,
        skills: ["Business Process Analysis", "Requirements Gathering", "SQL", "Communication"],
        courses: [
          { name: "Business Analysis Fundamentals", platform: "Coursera", duration: "4 months" },
          { name: "Agile Business Analysis", platform: "Udemy", duration: "20 hours" },
          { name: "Data-Driven Decision Making", platform: "edX", duration: "8 weeks" }
        ],
        companies: ["Cognizant", "Capgemini", "IBM", "Tech Mahindra", "HCL", "Gartner"],
        salaryRange: "₹4-12 LPA"
      });
    }
    
    // Marketing paths
    if (interests.includes('marketing') || interests.includes('communication') || skills.includes('communication')) {
      paths.push({
        title: "Digital Marketing Specialist",
        description: "Promote brands and products through digital channels",
        match: 82,
        skills: ["SEO/SEM", "Social Media Marketing", "Content Creation", "Google Analytics", "Email Marketing"],
        courses: [
          { name: "Google Digital Marketing Certificate", platform: "Coursera", duration: "6 months" },
          { name: "Facebook Social Media Marketing", platform: "Coursera", duration: "5 months" },
          { name: "Content Marketing Certification", platform: "HubSpot", duration: "4 hours" }
        ],
        companies: ["Ogilvy", "Dentsu", "WPP", "Publicis", "Byju's", "Unacademy"],
        salaryRange: "₹3-8 LPA"
      });
    }
    
    // Default fallback paths
    if (paths.length === 0) {
      paths.push(
        {
          title: "Business Development Associate",
          description: "Help companies grow by identifying new opportunities and building relationships",
          match: 75,
          skills: ["Communication", "Sales", "Market Research", "CRM", "Negotiation"],
          courses: [
            { name: "Sales and CRM Overview", platform: "Salesforce Trailhead", duration: "2 months" },
            { name: "Business Development Fundamentals", platform: "Coursera", duration: "3 months" }
          ],
          companies: ["Zomato", "Swiggy", "OYO", "Urban Company", "Nykaa"],
          salaryRange: "₹3-7 LPA"
        },
        {
          title: "Customer Success Manager",
          description: "Ensure customer satisfaction and drive retention for business growth",
          match: 70,
          skills: ["Customer Service", "Communication", "Problem Solving", "CRM", "Analytics"],
          courses: [
            { name: "Customer Success Fundamentals", platform: "Udemy", duration: "15 hours" },
            { name: "Customer Experience Management", platform: "edX", duration: "6 weeks" }
          ],
          companies: ["Freshworks", "Zoho", "Razorpay", "Chargebee", "Clevertap"],
          salaryRange: "₹4-9 LPA"
        }
      );
    }
    
    return paths.slice(0, 3); // Return top 3 paths
  };

  const careerPaths = generateCareerPaths();

  const roadmapSteps = [
    {
      month: "Month 1-2",
      title: "Foundation Building",
      tasks: [
        "Complete 1-2 online courses from recommendations",
        "Build a professional LinkedIn profile",
        "Start working on basic projects",
        "Join relevant communities and forums"
      ]
    },
    {
      month: "Month 3-4",
      title: "Skill Development",
      tasks: [
        "Deepen expertise in chosen technologies",
        "Build 2-3 portfolio projects",
        "Obtain relevant certifications",
        "Start networking with professionals"
      ]
    },
    {
      month: "Month 5-6",
      title: "Career Launch",
      tasks: [
        "Apply to entry-level positions",
        "Prepare for interviews",
        "Complete advanced courses",
        "Consider internships or freelance work"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 pt-20 space-y-12 animate-professional-enter relative z-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent font-inter tracking-tight">
            Your Personalized Career Guide
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Hello <span className="text-primary font-semibold">{data.name}</span>! Based on your assessment, here's your tailored career roadmap
          </p>
        </div>

      {/* Career Paths */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Top 3 Career Paths for You</h2>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <Card key={index} className="shadow-professional border-0 bg-gradient-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    {path.match}% Match
                  </Badge>
                  <Badge variant="outline">#{index + 1}</Badge>
                </div>
                <CardTitle className="text-xl text-primary">{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Salary Range
                  </h4>
                  <p className="text-lg font-bold text-success">{path.salaryRange}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses & Companies Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recommended Courses */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Recommended Courses</h2>
          </div>
          
          <div className="space-y-4">
            {careerPaths[0]?.courses.map((course, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{course.name}</h4>
                      <p className="text-sm text-muted-foreground">{course.platform}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{course.duration}</Badge>
                      <ExternalLink className="h-4 w-4 ml-2 inline" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Companies */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Companies Hiring</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {careerPaths[0]?.companies.map((company, index) => (
              <Card key={index} className="shadow-soft hover:shadow-professional transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold">{company}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* 6-Month Roadmap */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Your 6-Month Action Plan</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {roadmapSteps.map((step, index) => (
            <Card key={index} className="shadow-professional border-0 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.month}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center">
        <Button 
          onClick={onBack} 
          variant="outline" 
          size="lg"
          className="shadow-soft"
        >
          Take Assessment Again
        </Button>
      </div>
      </div>
    </div>
  );
};