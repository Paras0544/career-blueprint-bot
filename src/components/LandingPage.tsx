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
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-professional-enter">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow backdrop-blur-sm border border-primary/20">
              <Compass className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-inter tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Career</span>
              <span className="text-foreground">Compass</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
            Professional AI-powered career guidance platform that analyzes your background, interests, and goals 
            to provide <span className="text-primary font-medium">personalized career recommendations</span> and actionable roadmaps
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={onStartAssessment}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-10 py-7 font-semibold tracking-wide group"
            >
              Start Career Assessment
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground text-sm font-medium">
              <span className="text-primary">✨ Free</span> • 5 minutes • Instant AI analysis
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-gradient-card backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-professional hover:shadow-glow transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 font-inter">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 font-inter tracking-tight">
            Everything You Need to Shape Your Career
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-gradient-card backdrop-blur-sm border-border/30 hover:border-primary/30 shadow-professional hover:shadow-glow transition-all duration-500 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 p-4 rounded-2xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors border border-primary/20">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-foreground text-xl font-semibold font-inter">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 font-inter tracking-tight">
            How CareerCompass Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Share Your Background",
                description: "Tell us about your education, interests, skills, and career goals through our comprehensive assessment"
              },
              {
                step: "2", 
                title: "Get AI Analysis",
                description: "Our advanced AI analyzes your profile and matches you with ideal career paths using industry data"
              },
              {
                step: "3",
                title: "Follow Your Roadmap",
                description: "Receive personalized recommendations, curated courses, and a detailed 6-month action plan"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative animate-professional-enter group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-10 relative border border-border/30 shadow-professional group-hover:shadow-glow transition-all duration-500">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center font-bold text-lg text-primary-foreground shadow-sharp">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 mt-6 font-inter">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card backdrop-blur-sm rounded-3xl p-16 max-w-4xl mx-auto border border-border/30 shadow-professional animate-glow-pulse">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-inter tracking-tight">
            Ready to Discover Your Perfect Career Path?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream careers with CareerCompass
          </p>
          <Button 
            onClick={onStartAssessment}
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-12 py-8 font-semibold tracking-wide group"
          >
            Begin Your Career Journey
            <Compass className="ml-3 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
};