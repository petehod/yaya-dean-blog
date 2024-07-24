"use client";
import { memo, useState } from "react";
import { Input } from "./Input";
import { FormInputLabelWrapper } from "./FormInputLabelWrapper";
import { ButtonOutline } from "@components/Button";
import { Label } from "./Label";

export const NewsletterForm = memo(() => {
  const [userInfo, setUserInfo] = useState({ email: "", name: "Pete" });
  console.log("userInfo", userInfo);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/add-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userInfo.email }), // Ensure proper structure
      });

      if (response.ok) {
        console.log("Signup successful! Check your email.");
      } else {
        const errorData = await response.json();
        console.log("Signup failed. Please try again.", errorData);
      }
    } catch (error) {
      console.log("Signup failed. Please try again.");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleFormSubmit}
    >
      <p className="text-bold">Sign up for our newsletter</p>
      {/* <!-- Newsletter sign-up input field --> */}
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
    </form>
  );
});
