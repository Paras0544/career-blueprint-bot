import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Compass, 
  Target, 
  BookOpen, 
  Building2, 
  DollarSign, 
  Calendar,
  Star,
  Users,
  TrendingUp,
  ArrowRight
} from "lucide-react";

interface LandingPageProps {
  onStartAssessment: () => void;
}

export const LandingPage = ({ onStartAssessment }: LandingPageProps) => {
  const features = [
    {
      icon: Target,
      title: "Personalized Career Paths",
      description: "Get top 3 career recommendations tailored to your background and interests"
    },
    {
      icon: BookOpen,
      title: "Curated Learning Resources",
      description: "Access the best online courses and certifications for your chosen field"
    },
    {
      icon: Building2,
      title: "Company Insights",
      description: "Discover top companies hiring in your domain with salary insights"
    },
    {
      icon: Calendar,
      title: "6-Month Roadmap",
      description: "Get a detailed action plan to kickstart your career journey"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Careers Guided" },
    { icon: Star, value: "4.9/5", label: "Success Rate" },
    { icon: TrendingUp, value: "85%", label: "Salary Increase" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Career<span className="text-accent">Compass</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Your AI-powered career guide that analyzes your background, interests, and goals 
            to provide personalized career recommendations and actionable roadmaps
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onStartAssessment}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-professional text-lg px-8 py-6"
            >
              Start Your Career Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/80 text-sm">✨ Free • Takes 5 minutes • Instant results</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Everything You Need to Shape Your Career
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent/20">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            How CareerCompass Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Background",
                description: "Tell us about your education, interests, skills, and career goals"
              },
              {
                step: "2", 
                title: "Get AI Analysis",
                description: "Our AI analyzes your profile and matches you with ideal career paths"
              },
              {
                step: "3",
                title: "Follow Your Roadmap",
                description: "Receive personalized recommendations, courses, and a 6-month action plan"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 mt-4">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Discover Your Perfect Career Path?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of professionals who have found their dream careers with CareerCompass
          </p>
          <Button 
            onClick={onStartAssessment}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white shadow-professional text-lg px-8 py-6"
          >
            Begin Your Career Journey
            <Compass className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};