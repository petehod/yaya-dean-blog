// pages/api/send-email.ts

import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { VERIFIED_SENDER_EMAIL } from "@constants/email.constants";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, name } = req.body;

    const msg = {
      to: email,
      from: VERIFIED_SENDER_EMAIL,
      subject: "Welcome to Our App",

      text: `Hello ${name}, welcome to our app!`,
      html: `<strong>Hello ${name}, welcome to our app!</strong>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
