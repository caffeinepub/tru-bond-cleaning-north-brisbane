import { ClipboardList, Leaf, Lock, ShieldCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Bond Back Guarantee" },
  { icon: ClipboardList, label: "REIQ Checklist" },
  { icon: Lock, label: "Fully Insured" },
  { icon: Leaf, label: "Eco-Friendly Products" },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="trust-badge gap-2">
          <Icon className="w-4 h-4" aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
