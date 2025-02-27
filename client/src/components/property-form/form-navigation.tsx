import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  isSubmitting: boolean;
}

export default function FormNavigation({ 
  currentStep, 
  totalSteps, 
  onPrev,
  isSubmitting 
}: FormNavigationProps) {
  return (
    <div className="flex justify-between pt-8">
      <Button
        type="button"
        variant="outline"
        onClick={onPrev}
        disabled={currentStep === 1 || isSubmitting}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <Button 
        type="submit"
        disabled={isSubmitting}
      >
        {currentStep === totalSteps ? (
          isSubmitting ? "Submitting..." : "Submit"
        ) : (
          <>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
}
