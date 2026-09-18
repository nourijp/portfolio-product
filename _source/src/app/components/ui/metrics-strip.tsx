import { metrics } from "@/content/metrics";

/**
 * Pass the specific metric keys relevant to the current context (a
 * case-study page, say) -- never renders every metric at once, since each
 * one comes from a different product and showing them together without
 * context would be misleading.
 */
const MetricsStrip = ({ keys }: { keys: string[] }) => {
  const items = keys.map((k) => metrics[k]).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-6">
      {items.map((m) => (
        <div key={m.key} className="flex flex-col gap-1">
          <p className="text-3xl sm:text-4xl font-semibold text-primary">{m.value}</p>
          <p className="text-sm font-medium text-primary">{m.label}</p>
          <p className="text-xs text-muted-foreground">{m.context}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsStrip;
