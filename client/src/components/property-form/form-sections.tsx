import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface FormSectionsProps {
  currentStep: number;
  form: UseFormReturn<any>;
}

// List of countries
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Australia", "Austria",
  "Bahamas", "Bahrain", "Bangladesh", "Belgium", "Botswana", "Brazil", "Canada", "China",
  "Denmark", "Egypt", "Ethiopia", "Finland", "France", "Germany", "Ghana", "Greece",
  "India", "Indonesia", "Ireland", "Italy", "Japan", "Kenya", "Madagascar", "Malaysia",
  "Mexico", "Morocco", "Namibia", "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Pakistan", "Philippines", "Poland", "Portugal", "Russia", "Saudi Arabia", "Singapore",
  "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Tanzania", "Thailand",
  "Turkey", "Uganda", "United Arab Emirates", "United Kingdom", "United States", "Vietnam",
  "Zambia", "Zimbabwe"
];

export default function FormSections({ currentStep, form }: FormSectionsProps) {
  const renderPropertyInfo = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Property Information</h2>
        <p className="text-muted-foreground mb-6">
          Please provide the basic information about your property.
        </p>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="property_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                The official name of your property as it should appear in our system
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registration_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Your property's official registration or license number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p className="text-muted-foreground mb-6">
          Enter the primary contact details for your property.
        </p>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="contact_full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                The main point of contact for this property
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} type="tel" />
              </FormControl>
              <FormDescription>
                Include country code (e.g., +1 234 567 8900)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormDescription>
                Primary email address for property communications
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} type="url" />
              </FormControl>
              <FormDescription>
                Your property's website URL (e.g., https://www.example.com)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderFinancialInfo = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Billing Information</h2>
        <p className="text-muted-foreground mb-6">
          Please provide your billing details for financial transactions.
        </p>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="ZAR">ZAR - South African Rand</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                The currency you prefer for billing
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billing_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Address</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>
                Complete street address for billing purposes
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billing_city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing City</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                City where billing address is located
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billing_postal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Postal Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Postal or ZIP code for billing address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billing_country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Country where billing address is located
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderActivityInfo = () => {
    const safariGuides = form.watch('safari_guides') || [];
    const activities = form.watch('activities') || [];

    const addSafariGuide = () => {
      const currentGuides = form.getValues('safari_guides') || [];
      form.setValue('safari_guides', [...currentGuides, { name: '' }]);
    };

    const removeSafariGuide = (index: number) => {
      const currentGuides = form.getValues('safari_guides') || [];
      form.setValue('safari_guides', currentGuides.filter((_, i) => i !== index));
    };

    const addActivity = () => {
      const currentActivities = form.getValues('activities') || [];
      form.setValue('activities', [...currentActivities, { name: '', description: '' }]);
    };

    const removeActivity = (index: number) => {
      const currentActivities = form.getValues('activities') || [];
      form.setValue('activities', currentActivities.filter((_, i) => i !== index));
    };

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Activities Information</h2>
          <p className="text-muted-foreground mb-6">
            Add information about your safari guides and available activities.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Safari Guides</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSafariGuide}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Guide
              </Button>
            </div>

            {safariGuides.map((_, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSafariGuide(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <FormField
                  control={form.control}
                  name={`safari_guides.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guide Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Full name of the safari guide
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Activities</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addActivity}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Activity
              </Button>
            </div>

            {activities.map((_, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeActivity(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <FormField
                  control={form.control}
                  name={`activities.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Name of the activity offered
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`activities.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormDescription>
                        Detailed description of what the activity involves
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderManagementTeam = () => {
    const departmentManagers = form.watch('department_managers') || [];

    const addDepartmentManager = () => {
      const currentManagers = form.getValues('department_managers') || [];
      form.setValue('department_managers', [...currentManagers, { name: '', email: '', department: '' }]);
    };

    const removeDepartmentManager = (index: number) => {
      const currentManagers = form.getValues('department_managers') || [];
      form.setValue('department_managers', currentManagers.filter((_, i) => i !== index));
    };

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Staff</h2>
          <p className="text-muted-foreground mb-6">
            Enter details about your property's staff members.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">General Manager</h3>
            <FormField
              control={form.control}
              name="general_manager.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Full name of the general manager</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="general_manager.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormDescription>General manager's email address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Department Managers</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addDepartmentManager}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Manager
              </Button>
            </div>

            {departmentManagers.map((_, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDepartmentManager(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <FormField
                  control={form.control}
                  name={`department_managers.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Manager's full name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`department_managers.${index}.department`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Manager's department (e.g., Housekeeping, F&B)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`department_managers.${index}.email`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormDescription>Manager's email address</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Staff List</h3>
            <FormField
              control={form.control}
              name="staff_names"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Names</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="John Doe, Jane Smith, Mike Johnson" />
                  </FormControl>
                  <FormDescription>
                    Enter all staff names, separated by commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderFacilityDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Facility Details</h2>
        <p className="text-muted-foreground mb-6">
          Provide information about your property's facilities and amenities.
        </p>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="rooms_available"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Rooms Available</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min="0"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>Total number of rooms in your property</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">WiFi Details</h3>
          <FormField
            control={form.control}
            name="wifi_details.network_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Network Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>WiFi network SSID</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wifi_details.password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormDescription>WiFi network password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Night Porter</h3>
          <FormField
            control={form.control}
            name="night_porter.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormDescription>Night porter's email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="night_porter.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" />
                </FormControl>
                <FormDescription>Night porter's contact number</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Documents</h2>
        <p className="text-muted-foreground mb-6">
          Upload important documents related to your property.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Corporate Identity</h3>
          <FormField
            control={form.control}
            name="ci_uploads"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CI Assets</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.png"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      field.onChange(files);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Upload logos and CI guide documents
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Property Documents</h3>
          <FormField
            control={form.control}
            name="property_documents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Information</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.png"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      field.onChange(files);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Upload info packs, magazines, and brochures
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Current Forms</h3>
          <FormField
            control={form.control}
            name="current_forms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Forms</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.png"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      field.onChange(files);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Upload indemnity and review forms
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );

  const renderUserAccess = () => {
    const userEmails = form.watch('user_access_emails') || [];

    const addUserEmail = () => {
      const currentEmails = form.getValues('user_access_emails') || [];
      if (currentEmails.length < 3) {
        form.setValue('user_access_emails', [...currentEmails, '']);
      }
    };

    const removeUserEmail = (index: number) => {
      const currentEmails = form.getValues('user_access_emails') || [];
      form.setValue('user_access_emails', currentEmails.filter((_, i) => i !== index));
    };

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">User Access</h2>
          <p className="text-muted-foreground mb-6">
            Add up to three email addresses for user access.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Email Addresses</h3>
            {userEmails.length < 3 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addUserEmail}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Email
              </Button>
            )}
          </div>

          {userEmails.map((_, index) => (
            <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeUserEmail(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <FormField
                control={form.control}
                name={`user_access_emails.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address {index + 1}</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormDescription>
                      Enter a valid email address for user access
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  switch (currentStep) {
    case 1:
      return renderPropertyInfo();
    case 2:
      return renderContactInfo();
    case 3:
      return renderFinancialInfo();
    case 4:
      return renderActivityInfo();
    case 5:
      return renderManagementTeam();
    case 6:
      return renderFacilityDetails();
    case 7:
      return renderDocuments();
    case 8:
      return renderUserAccess();
    default:
      return null;
  }
}