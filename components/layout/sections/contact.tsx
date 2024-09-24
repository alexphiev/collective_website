"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { sendMessageToSlack } from "@/utils/contact-utils";
import { toast } from "sonner";

export default function ContactSection({ lng }: { lng: string }) {
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const slackMessage = `New contact request received!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    try {
      await sendMessageToSlack(slackMessage);
      toast.success("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      toast.error("Failed to send your message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 px-0 lg:px-32 md:py-16 mt-16 gradient-background-top border-t-2 border-white"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in touch
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work together? Fill out the form and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4" onSubmit={submit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2 col-span-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[120px]"
              />
            </div>
            <Button variant="default">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
