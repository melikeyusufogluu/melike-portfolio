import { useState } from "react";
import { profile, education, interests } from "../../data";

type Tab = "profile" | "education" | "interests";

const TABS: { id: Tab; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "interests", label: "Interests" },
];

export default function AboutWindow() {
  const [tab, setTab] = useState<Tab>("profile");
  const [openInterest, setOpenInterest] = useState<string | null>(
    interests[0]?.title ?? null,
  );

  const toggleInterest = (title: string) =>
    setOpenInterest((prev) => (prev === title ? null : title));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-start">
        <img
          src="/avatar.png"
          alt={profile.name}
          className="w-20 h-24 bevel-in object-cover object-top shrink-0"
        />
        <div>
          <p className="font-bold text-[15px]">{profile.name}</p>
          <p>
            {profile.title} — {profile.tagline}
          </p>
          <p>📍 {profile.location}</p>
        </div>
      </div>

      {/* Property-sheet style tabs */}
      <div className="flex">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1 text-[12px] font-bold -mb-[2px] relative z-10 ${
              tab === t.id
                ? "bevel-out bg-white"
                : "bevel-out bg-win-gray text-win-grayDark hover:text-black"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bevel-in bg-white p-2 min-h-[160px]">
        {tab === "profile" && (
          <p className="font-mono text-[12px] whitespace-pre-wrap">
            {profile.summary}
          </p>
        )}

        {tab === "education" && (
          <div className="text-[12px]">
            <p>
              <span className="font-bold">{education.school}</span> —{" "}
              {education.degree}
            </p>
            <p className="text-win-grayDark">
              {education.location} · {education.period}
            </p>
          </div>
        )}

        {tab === "interests" && (
          <div className="flex flex-col gap-1">
            {interests.map((i) => {
              const isOpen = openInterest === i.title;
              return (
                <div key={i.title} className="bevel-out bg-win-gray">
                  <button
                    onClick={() => toggleInterest(i.title)}
                    className="w-full flex items-center justify-between px-2 py-1 text-[12px] font-bold hover:bg-win-navy hover:text-white"
                  >
                    <span>{i.title}</span>
                    <span>{isOpen ? "▾" : "▸"}</span>
                  </button>
                  {isOpen && (
                    <div className="bevel-in bg-white m-1 p-2 text-[12px]">
                      {i.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
