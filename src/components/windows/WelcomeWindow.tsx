import { profile } from "../../data";

interface Props {
  onOpen: (id: "about" | "work" | "skills" | "contact") => void;
}

export default function WelcomeWindow({ onOpen }: Props) {
  return (
    <div className="text-center flex flex-col items-center gap-3 py-2">
      <div className="text-5xl">🖥️</div>
      <p className="font-bold text-[15px]">
        Welcome to {profile.name}'s Portfolio
      </p>
      <p className="max-w-[320px]">
        You've reached the personal site of {profile.name} —{" "}
        {profile.title.toLowerCase()} based in {profile.location}, working
        across React, TypeScript, and Angular.
      </p>
      <p className="text-win-grayDark">
        Double-click any icon on the desktop to get started.
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onOpen("about")}
          className="bevel-out active:bevel-in bg-win-gray px-4 py-1 text-[13px]"
        >
          About Me
        </button>
        <button
          onClick={() => onOpen("contact")}
          className="bevel-out active:bevel-in bg-win-gray px-4 py-1 text-[13px]"
        >
          OK
        </button>
      </div>
    </div>
  );
}
