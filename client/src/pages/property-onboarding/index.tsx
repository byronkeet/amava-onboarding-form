import { Card, CardContent } from "@/components/ui/card";
import PropertyForm from "@/components/property-form";

export default function PropertyOnboarding() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img
            src="/logo.svg"
            alt="AMAVA Logo"
            className="h-24 w-auto mb-8"
          />
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Property Onboarding
          </h1>
        </div>
        <Card>
          <CardContent className="p-6">
            <PropertyForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}