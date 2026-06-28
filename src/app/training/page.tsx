export const metadata = {
  title: "Training — Jorgen Bergh",
};

const testResults = {
  strength: [
    { label: "Bench press", value: "220.46 lb / 100.00 kg", unit: "" },
    { label: "Squat", value: "352.74 lb / 160.00 kg", unit: "" },
    { label: "Deadlift", value: "—", unit: "" },
    { label: "Military press", value: "132.28 lb / 60.00 kg × 3", unit: "" },
    { label: "Pull-ups", value: "26", unit: "reps" },
    { label: "Weighted pull-ups", value: "70.00 lb / 30.75 kg × 7", unit: "" },
    { label: "Clean", value: "198.42 lb / 90.00 kg", unit: "" },
  ],
  jump: [
    { label: "Standing long jump", value: "10.17 ft / 3.10 m", unit: "" },
    { label: "Running high jump", value: "6.00 ft / 1.83 m", unit: "" },
    { label: "Standing high jump", value: "5.09 ft / 1.55 m", unit: "" },
    { label: "Standing vertical", value: "—", unit: "" },
  ],
  speed: [
    { label: "100 m", value: "12.35", unit: "sec" },
  ],
  endurance: [
    { label: "3 km", value: "10:57", unit: "min" },
    { label: "10 km", value: "—", unit: "min" },
    { label: "Murph (no vest)", value: "57:01", unit: "min" },
    { label: "Murph (20.00 lb / 9.07 kg vest)", value: "—", unit: "min" },
    { label: "2 km row (Concept2)", value: "—", unit: "min" },
  ],
};

export default function TrainingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16">

      {/* Header */}
      <div className="mb-16 space-y-2">
        <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af]">(07)</p>
        <h1 className="text-2xl font-semibold tracking-tight">Training & Results</h1>
        <p className="text-sm text-[#888780] max-w-lg">
          Health and training have been a big part of my life for as long as I can remember.
          I prioritise staying active — combining weight training, endurance work, and basketball.
        </p>
      </div>

      <hr className="border-t border-[#e8e6e0] mb-16" />

      {/* Test Results */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af]">(01)</span>
          <span className="text-xs font-medium tracking-widest uppercase text-[#888780]">Test Results</span>
        </div>

        <div className="space-y-12">
          {[
            { title: "Strength", rows: testResults.strength },
            { title: "Speed", rows: testResults.speed },
            { title: "Jump", rows: testResults.jump },
            { title: "Endurance", rows: testResults.endurance },
          ].map(({ title, rows }) => (
            <div key={title}>
              <p className="text-xs font-medium text-[#888780] uppercase tracking-wider mb-5">{title}</p>
              <div className="space-y-0">
                {rows.map((r, i) => (
                  <div key={r.label}>
                    <div className="grid grid-cols-[1fr_auto] items-baseline py-3">
                      <span className="text-sm text-[#444340]">{r.label}</span>
                      <span className={`font-[family-name:var(--font-geist-mono)] text-sm ${r.value === "—" ? "text-[#c8c6bf]" : "text-[#111110] font-medium"}`}>
                        {r.value}{r.value !== "—" ? <span className="text-[#aaa89e] text-xs ml-1.5">{r.unit}</span> : null}
                      </span>
                    </div>
                    {i < rows.length - 1 && <hr className="border-t border-[#f0ede6]" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-[#e8e6e0] mb-16" />

      {/* Workout Plan */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs text-[#b8b6af]">(02)</span>
          <span className="text-xs font-medium tracking-widest uppercase text-[#888780]">Current Program</span>
        </div>
        <p className="text-sm text-[#aaa89e] font-[family-name:var(--font-geist-mono)]">
          Loading...
        </p>
      </section>

    </div>
  );
}
