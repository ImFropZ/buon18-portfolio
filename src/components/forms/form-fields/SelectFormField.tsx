import {
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import React from "react";
import { cn } from "@/components/utils";

interface InputFormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  placeholder?: string;
  field: ControllerRenderProps<any, any>; // Using any for FieldValues
  errorField?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  options: { label: string; value: string }[];
}

export const SelectFormField = React.forwardRef<
  HTMLInputElement,
  InputFormFieldProps
>(({ label, placeholder, field, errorField, ...props }, _) => {
  return (
    <div {...props} className={cn("flex flex-col gap-3", props.className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm">{label}</label>
        <p className="text-sm text-red-500">
          {errorField?.message?.toString()}
        </p>
      </div>
      <div className="flex gap-2">
        {props.options.map((o) => {
          return (
            <div className="flex gap-2 text-sm" key={o.value}>
              <input
                {...field}
                className="border-b-[2px] bg-transparent p-3 outline outline-2 outline-transparent data-[error=true]:outline-red-500"
                data-error={!!errorField}
                placeholder={placeholder}
                type="radio"
                value={o.value}
              />
              <label>{o.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
});

SelectFormField.displayName = "SelectFormField";
