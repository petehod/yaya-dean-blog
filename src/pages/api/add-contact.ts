import { NextApiRequest, NextApiResponse } from "next";
import sendgridClient from "@sendgrid/client";

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY!);

type RequestBody = {
  email: string;
  first_name?: string;
  source: string;
};

const addContact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { email, first_name, source }: RequestBody = req.body;

  if (!email || !source) {
    res.status(400).json({
      error: "Email and source are required",
    });
    return;
  }

  const dateAdded = new Date().toISOString();

  const data = {
    contacts: [
      {
        email,
        first_name,
        custom_fields: {
          source: source,
          date_added: dateAdded,
        },
      },
    ],
  };

  const request = {
    url: "/v3/marketing/contacts",
    method: "PUT" as const,
    body: data,
  };

  try {
    const [response, body] = await sendgridClient.request(request);
    res.status(response.statusCode).json(body);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export default addContact;
