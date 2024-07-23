"use client";

import { InputFormField, TextareaFormField } from "./form-fields";
import { Button } from "@/components/base";
import { cn } from "@/components/utils";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { contactSchema } from "@/models";

function onSend() {
  alert("Message sent!");

  return Promise.resolve();
}

interface ContactFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export function ContactForm({ ...props }: ContactFormProps) {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <form
      {...props}
      className={cn(props.className)}
      onSubmit={form.handleSubmit(() => {
        onSend().then(() => {
          console.log("Message sent!");
          form.reset();
        });
      }, console.log)}
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field }) => {
          return (
            <InputFormField
              field={field}
              errorField={form.formState.errors.name}
              label="Name"
            />
          );
        }}
      />
      <Controller
        name="email"
        control={form.control}
        render={({ field }) => {
          return (
            <InputFormField
              field={field}
              errorField={form.formState.errors.email}
              label="Email"
            />
          );
        }}
      />
      <Controller
        name="subject"
        control={form.control}
        render={({ field }) => {
          return (
            <InputFormField
              field={field}
              errorField={form.formState.errors.subject}
              label="Subject"
            />
          );
        }}
      />
      <Controller
        name="message"
        control={form.control}
        render={({ field }) => {
          return (
            <TextareaFormField
              field={field}
              errorField={form.formState.errors.message}
              label="Message"
              placeholder="Type your message here"
            />
          );
        }}
      />
      {/* <InputFormField label="Name" {...form.register("name")} />
      <InputFormField label="Email" {...form.register("email")} />
      <InputFormField label="Subject" {...form.register("subject")} /> */}
      <Button className="relative rounded-lg bg-primary p-3 text-gray-50">
        <span>Send</span>
        <Send className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Button>
    </form>
  );
}
