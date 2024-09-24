import { ContactEmail } from "@/components/emails/contact-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Verify that the body email exists and is a valid email address
    if (!body.email || !body.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [body.email],
      subject: "Hello world",
      react: ContactEmail({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
