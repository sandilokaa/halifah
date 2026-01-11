"use client";

type StatItemProps = {
  value: string;
  label: string;
};

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-y-2.5">
      <p className="font-semibold text-[28px] text-[#1E1E1E]">{value}</p>
      <p className="font-medium text-xs text-[#1E1E1E] text-center">{label}</p>
    </div>
  );
}
