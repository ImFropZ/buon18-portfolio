"use client";

import { InputFormField, SelectFormField } from "./form-fields";
import { Button } from "@/components/base";
import { cn } from "@/components/utils";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/models";
import { render } from "@react-email/components";
import { ContactTemplate } from "@/components/email";
import { toast } from "react-toastify";
import React from "react";
import * as z from "zod";

async function onSend(data: z.infer<typeof contactSchema>) {
  return await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify({
      from: "Buon18 Portfolio",
      to: (process.env.NEXT_PUBLIC_RECEIVER_EMAILS || "").split(","),
      subject: data.service,
      html: render(
        ContactTemplate({
          ...data,
          name: data.first_name + " " + data.last_name,
        }),
      ),
    }),
  });
}

interface ContactFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export function ContactForm({ ...props }: ContactFormProps) {
  const [buttonDisable, setButtonDisable] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      service: "",
      message: "",
    },
  });

  return (
    <>
      <h2 className="text-xl font-bold text-primary">
        We would like to hear from you
      </h2>
      <form
        {...props}
        className={cn(
          "grid grid-cols-1 gap-6 pt-4 md:grid-cols-2",
          props.className,
        )}
        onSubmit={form.handleSubmit((data) => {
          toast
            .promise(onSend(data), {
              pending: "Sending...",
              success: "Email sent successfully! We'll get back to you soon.",
              error:
                "Failed to send email! Please contact us using other method.",
            })
            .then(() => {
              form.reset();
            })
            .finally(() => {
              setButtonDisable(false);
            });
        }, console.error)}
      >
        <Controller
          name="first_name"
          control={form.control}
          render={({ field }) => {
            return (
              <InputFormField
                field={field}
                errorField={form.formState.errors.first_name}
                label="First name"
                placeholder="John"
              />
            );
          }}
        />
        <Controller
          name="last_name"
          control={form.control}
          render={({ field }) => {
            return (
              <InputFormField
                field={field}
                errorField={form.formState.errors.last_name}
                label="Last name"
                placeholder="Doe"
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
                placeholder="johndoe@email.com"
              />
            );
          }}
        />
        <Controller
          name="phone_number"
          control={form.control}
          render={({ field }) => {
            return (
              <InputFormField
                field={field}
                errorField={form.formState.errors.phone_number}
                label="Phone number"
                placeholder="+855 76 418 4185"
              />
            );
          }}
        />
        <Controller
          name="service"
          control={form.control}
          render={({ field }) => {
            return (
              <SelectFormField
                className="md:col-span-2"
                field={field}
                errorField={form.formState.errors.service}
                label="Service"
                options={[
                  {
                    label: "Web Development",
                    value: "web-development",
                  },
                  {
                    label: "POS System Development",
                    value: "pos-system-development",
                  },
                  {
                    label: "UX/UI Design",
                    value: "ux-ui-design",
                  },
                  {
                    label: "Graphic Design",
                    value: "graphic-design",
                  },
                ]}
              />
            );
          }}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field }) => {
            return (
              <InputFormField
                className="md:col-span-2"
                field={field}
                errorField={form.formState.errors.message}
                label="Message"
                placeholder="Write your message ..."
              />
            );
          }}
        />
        <Button
          className="relative ml-auto w-fit rounded-lg bg-primary p-3 px-6 text-black transition-colors hover:bg-primary hover:text-white md:col-[2_/_span_1]"
          disabled={buttonDisable}
        >
          <span className="font-bold">Send Message</span>
        </Button>
      </form>
    </>
  );
}
