
import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle, FileText, Shield } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Terms & Conditions</h1>
              <p className="text-muted-foreground">Last updated: June 1, 2023</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p>
              Welcome to CollEvent, the inter-college event management platform. By using our services,
              you agree to these terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. User Registration and Accounts</h2>
            <p>
              1.1. To create events or register for events, you must create an account with a valid college email address.
            </p>
            <p>
              1.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              1.3. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Event Creation and Management</h2>
            <p>
              2.1. Event creators are responsible for providing accurate information about their events, including date, time, location, and any fees.
            </p>
            <p>
              2.2. Event creators must have the authority to host events at the specified locations and comply with all applicable local laws and regulations.
            </p>
            <p>
              2.3. CollEvent reserves the right to remove any event that violates our policies or that we deem inappropriate.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Event Registration and Attendance</h2>
            <p>
              3.1. By registering for an event, you commit to attending unless you cancel your registration within the specified cancellation period.
            </p>
            <p>
              3.2. For paid events, refund policies are set by event organizers and should be clearly stated on the event page.
            </p>
            <p>
              3.3. CollEvent is not responsible for any disputes between event attendees and organizers.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              4.1. Content uploaded to CollEvent, including event descriptions, images, and other materials, remains the property of the user who uploaded it.
            </p>
            <p>
              4.2. By uploading content, you grant CollEvent a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content in connection with providing our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Privacy and Data Protection</h2>
            <p>
              5.1. Our Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
            <p>
              5.2. By using CollEvent, you consent to our data practices as described in our Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              6.1. CollEvent provides a platform for connecting event organizers and attendees but is not responsible for the actions or content of its users.
            </p>
            <p>
              6.2. In no event shall CollEvent be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              7.1. CollEvent reserves the right to modify these terms at any time. We will provide notice of significant changes.
            </p>
            <p>
              7.2. Your continued use of CollEvent after changes to the terms constitutes acceptance of the updated terms.
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Contact Us</h3>
              </div>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                <a href="mailto:support@collevent.com" className="text-primary hover:underline">
                  support@collevent.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
