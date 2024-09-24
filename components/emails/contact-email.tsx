import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h2>New Contact Request</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
);
