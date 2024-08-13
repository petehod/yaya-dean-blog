"use client";
import { memo, useState } from "react";
import { Input } from "./Input";
import { FormInputLabelWrapper } from "./FormInputLabelWrapper";
import { ButtonOutline } from "@components/Button";
import { Label } from "./Label";
import { z } from "zod";

const emailSchema = z.string().email("Invalid email address").max(50);

export const NewsletterForm = memo(() => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "Pete",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const validation = emailSchema.safeParse(userInfo.email);
    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message);
      return;
    }

    try {
      const response = await fetch("/api/add-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInfo.email,
          first_name: userInfo.name,
          source: "newsletter_signup",
        }),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for signing up!");
        setUserInfo({
          email: "",
          name: "",
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
    }
  };

  return (
    <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleFormSubmit}>
      <p className="text-bold">Sign up for our newsletter</p>
      <FormInputLabelWrapper
        label={<Label text="First name" htmlFor="firstName" />}
        input={
          <Input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) =>
              setUserInfo((prevData) => ({
                ...prevData,
                name: e.target.value,
              }))
            }
          />
        }
      />
      <FormInputLabelWrapper
        label={<Label text="Email Address" htmlFor="email" />}
        input={
          <Input
            type="email"
            required
            name="email"
            id="email"
            onChange={(e) =>
              setUserInfo((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
          />
        }
      />
      <ButtonOutline text="Subscribe" type="submit" />
      <p className="text-0.875 mt-4 w-80 text-left">
        *By submitting your email, you&apos;re agreeing to let dean get in touch with you.
      </p>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
});
