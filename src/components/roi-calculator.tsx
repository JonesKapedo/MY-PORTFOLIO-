import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Client-side only — nothing is stored. */
export function RoiCalculator() {
  const [people, setPeople] = useState("3");
  const [hours, setHours] = useState("8");
  const [rate, setRate] = useState("500");

  const result = useMemo(() => {
    const p = Math.max(0, Number(people) || 0);
    const h = Math.max(0, Number(hours) || 0);
    const r = Math.max(0, Number(rate) || 0);
    const weekly = p * h * r;
    const yearly = weekly * 52;
    return { weekly, yearly };
  }, [people, hours, rate]);

  const briefNote = `Manual-work cost illustration (not a quote): ${people} people × ${hours} hrs/week × KES ${rate}/hr ≈ KES ${Math.round(
    result.yearly,
  ).toLocaleString()} / year.`;

  return (
    <div className="rounded-2xl bg-surface/80 p-6 sm:p-8">
      <p className="type-label text-accent">Cost of inaction</p>
      <h2 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
        Hours spent on repeat work
      </h2>
      <p className="mt-2 text-sm text-muted">
        Illustrative only. Nothing is saved on our servers — use it to frame your
        brief.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <Label htmlFor="roi-people">People on the task</Label>
          <Input
            id="roi-people"
            type="number"
            min={0}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="roi-hours">Hours / person / week</Label>
          <Input
            id="roi-hours"
            type="number"
            min={0}
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="roi-rate">KES / hour (approx.)</Label>
          <Input
            id="roi-rate"
            type="number"
            min={0}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line/50 pt-5">
        <div>
          <p className="text-[10px] tracking-wide text-subtle uppercase">
            Illustrated yearly load
          </p>
          <p className="font-display text-2xl font-semibold text-accent">
            KES {Math.round(result.yearly).toLocaleString()}
          </p>
          <p className="text-xs text-muted">
            ≈ KES {Math.round(result.weekly).toLocaleString()} / week
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link
            to="/brief"
            search={{}}
            onClick={() => {
              try {
                sessionStorage.setItem("gt-roi-note", briefNote);
              } catch {
                /* ignore */
              }
            }}
          >
            Carry into brief
          </Link>
        </Button>
      </div>
    </div>
  );
}
