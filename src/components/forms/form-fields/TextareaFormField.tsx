import {
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import React from "react";

interface TextareaFormFieldProps {
  label: string;
  placeholder?: string;
  field: ControllerRenderProps<any, any>; // Using any for FieldValues
  errorField?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const TextareaFormField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFormFieldProps
>(({ label, placeholder, field, errorField }, _) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-sm">{label}</label>
        <p className="text-sm text-red-500">
          {errorField?.message?.toString()}
        </p>
      </div>
      <textarea
        {...field}
        rows={5}
        className="rounded-lg border-[1px] border-gray-300 bg-gray-50 p-3 outline outline-2 outline-transparent data-[error=true]:outline-red-500"
        data-error={!!errorField}
        placeholder={placeholder || label}
      />
      <p className="text-sm text-gray-500">A message for extra info</p>
    </div>
  );
});
