import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPropertySchema } from "@shared/schema";
import { motion, AnimatePresence } from "framer-motion";
import { Form } from "@/components/ui/form";
import FormProgress from "./form-progress";
import FormSections from "./form-sections";
import FormNavigation from "./form-navigation";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const TOTAL_STEPS = 8;

const addSafariGuide = () => {
  const currentGuides = form.getValues('safari_guides') || [];
  form.setValue('safari_guides', [...currentGuides, { name: '' }]);
};

export default function PropertyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertPropertySchema),
    defaultValues: {
      property_name: "",
      registration_number: "",
      contact_full_name: "",
      contact_phone: "",
      contact_email: "",
      contact_website: "",
      currency: "USD",
      billing_address: "",
      billing_city: "",
      billing_postal: "",
      billing_country: "",
      safari_guides: [],
      activities: [],
      staff_names: "",
      general_manager: { name: "", email: "" },
      department_managers: [{ name: "", email: "", department: "" }], // Updated line
      rooms_available: 0,
      wifi_details: { network_name: "", password: "" },
      night_porter: { email: "", phone: "" },
      ci_uploads: [],
      property_documents: [],
      current_forms: [],
      user_access_emails: []
    }
  });

  const { mutate: submitForm, isPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/property", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Property onboarding form submitted successfully"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    }
  });

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(step => step + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(step => step - 1);
    }
  };

  const onSubmit = (data: any) => {
    if (currentStep === TOTAL_STEPS) {
      submitForm(data);
    } else {
      nextStep();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FormSections currentStep={currentStep} form={form} addSafariGuide={addSafariGuide}/>
          </motion.div>
        </AnimatePresence>

        <FormNavigation 
          currentStep={currentStep} 
          totalSteps={TOTAL_STEPS}
          onPrev={prevStep}
          isSubmitting={isPending}
        />
      </form>
    </Form>
  );
}