// pages/api/addContact.ts

import { NextApiRequest, NextApiResponse } from "next";
import sendgridClient from "@sendgrid/client";

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY!);

type RequestBody = {
  email: string;
};

const addContact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { email }: RequestBody = req.body;

  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  const data = {
    contacts: [
      {
        email: email,
      },
    ],
  };

  const request = {
    url: "/v3/marketing/contacts",
    method: "PUT" as const, // Ensure the method is one of the HttpMethod types
    body: data,
  };

  try {
    const [response, body] = await sendgridClient.request(request);
    console.log(response.statusCode);
    console.log(response.body);
    res.status(response.statusCode).json(body);
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addContact;
