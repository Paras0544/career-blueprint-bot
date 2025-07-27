import { useState } from "react";
import { LandingPage } from "@/components/LandingPage";
import { CareerAssessment } from "@/components/CareerAssessment";
import { CareerResults } from "@/components/CareerResults";

interface AssessmentData {
  name: string;
  qualification: string;
  interests: string;
  skills: string;
  workPreference: string;
  higherEducation: string;
  careerGoals: string;
}

type AppState = "landing" | "assessment" | "results";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);

  const handleStartAssessment = () => {
    setCurrentState("assessment");
  };

  const handleAssessmentComplete = (data: AssessmentData) => {
    setAssessmentData(data);
    setCurrentState("results");
  };

  const handleBackToAssessment = () => {
    setCurrentState("assessment");
  };

  if (currentState === "landing") {
    return <LandingPage onStartAssessment={handleStartAssessment} />;
  }

  if (currentState === "assessment") {
    return <CareerAssessment onComplete={handleAssessmentComplete} />;
  }

  if (currentState === "results" && assessmentData) {
    return <CareerResults data={assessmentData} onBack={handleBackToAssessment} />;
  }

  return null;
};

export default Index;
