"use client";

import { InputFormField, TextareaFormField } from "./form-fields";
import { Button } from "@/components/base";
import { cn } from "@/components/utils";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/models";
import { render } from "@react-email/components";
import { ContactTemplate } from "@/components/email";
import { toast } from "react-toastify";
import React from "react";
import * as z from "zod";
import { useTranslations } from "next-intl";

async function onSend(data: z.infer<typeof contactSchema>) {
  return await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify({
      from: "Buon18 Portfolio",
      to: (process.env.NEXT_PUBLIC_RECEIVER_EMAILS || "").split(","),
      subject: data.subject,
      html: render(ContactTemplate({ ...data })),
    }),
  });
}

interface ContactFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export function ContactForm({ ...props }: ContactFormProps) {
  const t = useTranslations();
  const [buttonDisable, setButtonDisable] = React.useState(false);

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
              label={t("contact.form.name")}
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
              label={t("contact.form.email")}
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
              label={t("contact.form.subject")}
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
              label={t("contact.form.message")}
              placeholder={t("contact.form.message-placeholder")}
            />
          );
        }}
      />
      <Button
        className="relative rounded-lg bg-primary p-3 text-gray-50"
        disabled={buttonDisable}
      >
        <span>{t("contact.form.send")}</span>
        <Send className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Button>
    </form>
  );
}
