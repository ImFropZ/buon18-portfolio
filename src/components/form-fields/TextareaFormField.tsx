import React from "react";

export function TextareaFormField({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm">{label}</label>
      <textarea
        className="rounded-lg border-[1px] border-gray-300 bg-gray-50 p-3"
        placeholder="Placeholder"
      />
      <p className="text-sm text-gray-500">A message for extra info</p>
    </div>
  );
}
