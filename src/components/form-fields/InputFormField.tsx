import React from "react";

export function InputFormField({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm">{label}</label>
      <input
        className="rounded-lg border-[1px] border-gray-300 bg-gray-50 p-3"
        placeholder="Placeholder"
      />
    </div>
  );
}
