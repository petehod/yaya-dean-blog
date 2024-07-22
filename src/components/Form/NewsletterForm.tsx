"use client";
import { memo } from "react";
import { Input } from "./Input";
import { FormInputLabelWrapper } from "./FormInputLabelWrapper";
import { ButtonOutline } from "@components/Button";
import { Label } from "./Label";

export const NewsletterForm = memo(() => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        input={<Input type="email" required name="email" id="email" />}
      />
      <ButtonOutline text="Subscribe" type="submit" />
    </form>
  );
});
