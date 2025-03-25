
import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle, FileText, Lock, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: June 1, 2023</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p>
              At CollEvent, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our platform.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Create an account</li>
              <li>Create or register for events</li>
              <li>Contact customer support</li>
              <li>Participate in surveys or promotions</li>
              <li>Communicate with other users</li>
            </ul>
            <p>
              This information may include your name, email address, college affiliation, location, 
              profile pictures, and payment information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments and questions</li>
              <li>Provide customer service</li>
              <li>Send you marketing communications</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Sharing of Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Event organizers for events you register for</li>
              <li>Service providers who perform services on our behalf</li>
              <li>Other users as part of your public profile</li>
              <li>In response to a legal request if required by law</li>
              <li>In connection with a sale or merger of our company</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Choices</h2>
            <p>
              You can manage your information by:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Updating your account information</li>
              <li>Adjusting your notification preferences</li>
              <li>Opting out of marketing communications</li>
              <li>Requesting deletion of your account</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, 
              misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to this Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Contact Us</h3>
              </div>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@collevent.com" className="text-primary hover:underline">
                  privacy@collevent.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
