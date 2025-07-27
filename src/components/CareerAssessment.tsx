import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, GraduationCap, MapPin, Target, Briefcase } from "lucide-react";

interface AssessmentData {
  name: string;
  qualification: string;
  interests: string;
  skills: string;
  workPreference: string;
  higherEducation: string;
  careerGoals: string;
}

interface CareerAssessmentProps {
  onComplete: (data: AssessmentData) => void;
}

export const CareerAssessment = ({ onComplete }: CareerAssessmentProps) => {
  const [formData, setFormData] = useState<AssessmentData>({
    name: "",
    qualification: "",
    interests: "",
    skills: "",
    workPreference: "",
    higherEducation: "",
    careerGoals: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const updateField = (field: keyof AssessmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 animate-fade-in">
      <Card className="shadow-professional border-0 bg-gradient-card">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Career Assessment
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Help us understand your background to provide personalized career guidance
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <Label className="text-lg font-semibold">Personal Information</Label>
              </div>
              
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2"
                  required
                />
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <Label className="text-lg font-semibold">Education & Qualifications</Label>
              </div>
              
              <div>
                <Label>What is your highest qualification?</Label>
                <RadioGroup 
                  value={formData.qualification} 
                  onValueChange={(value) => updateField("qualification", value)}
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="12th" id="12th" />
                    <Label htmlFor="12th">12th Standard</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="diploma" id="diploma" />
                    <Label htmlFor="diploma">Diploma</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bachelor" id="bachelor" />
                    <Label htmlFor="bachelor">Bachelor's Degree</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="master" id="master" />
                    <Label htmlFor="master">Master's Degree</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phd" id="phd" />
                    <Label htmlFor="phd">PhD</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Are you interested in pursuing higher education?</Label>
                <RadioGroup 
                  value={formData.higherEducation} 
                  onValueChange={(value) => updateField("higherEducation", value)}
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="higher-yes" />
                    <Label htmlFor="higher-yes">Yes, I'm interested</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="higher-no" />
                    <Label htmlFor="higher-no">No, I want to start working</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="higher-maybe" />
                    <Label htmlFor="higher-maybe">Maybe, depends on opportunities</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Interests & Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <Label className="text-lg font-semibold">Interests & Skills</Label>
              </div>
              
              <div>
                <Label htmlFor="interests">Which domains or industries interest you?</Label>
                <Textarea
                  id="interests"
                  value={formData.interests}
                  onChange={(e) => updateField("interests", e.target.value)}
                  placeholder="e.g., Technology, Healthcare, Finance, Creative Arts, Education..."
                  className="mt-2"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="skills">What are your current skills or strengths?</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => updateField("skills", e.target.value)}
                  placeholder="e.g., Programming, Communication, Problem-solving, Design, Analysis..."
                  className="mt-2"
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Work Preferences */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <Label className="text-lg font-semibold">Work Preferences</Label>
              </div>
              
              <div>
                <Label>Do you prefer remote, hybrid, or on-site jobs?</Label>
                <RadioGroup 
                  value={formData.workPreference} 
                  onValueChange={(value) => updateField("workPreference", value)}
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="remote" id="remote" />
                    <Label htmlFor="remote">Remote - Work from anywhere</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid - Mix of remote and office</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onsite" id="onsite" />
                    <Label htmlFor="onsite">On-site - Office-based work</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Flexible - Open to all options</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="goals">What are your career goals for the next 2-3 years?</Label>
                <Textarea
                  id="goals"
                  value={formData.careerGoals}
                  onChange={(e) => updateField("careerGoals", e.target.value)}
                  placeholder="e.g., Get into tech industry, Start my own business, Become a team lead..."
                  className="mt-2"
                  rows={3}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:bg-primary-dark transition-all duration-300 shadow-soft"
              size="lg"
            >
              Get My Career Roadmap
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};