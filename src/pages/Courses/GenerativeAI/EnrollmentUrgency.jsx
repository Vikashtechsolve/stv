import React, { useEffect, useState } from "react";
import { Clock, Users, Flame } from "lucide-react";
import { GENAI_ENROLLMENT } from "./genAiCourseConfig";
import { useGenAiSeats } from "./useGenAiSeats";

function getTimeLeft(targetIso) {
  const diff = new Date(targetIso).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

const timeUnits = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
];

export default function EnrollmentUrgency({ onApplyClick }) {
  const { batchStartDisplay, countdownTarget } = GENAI_ENROLLMENT;
  const { seatsLeft } = useGenAiSeats();

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(countdownTarget));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(countdownTarget));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdownTarget]);

  return (
    <section className="px-4 sm:px-6 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[linear-gradient(135deg,#1a0508_0%,#4a0a12_45%,#B11C20_100%)] p-6 sm:p-8 md:p-10 text-white shadow-[0_20px_60px_rgba(177,28,32,0.35)]">
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-white/5 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Seats urgency */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold mb-4">
                <Flame className="w-4 h-4 text-amber-300" />
                Limited batch enrollment
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight mb-2">
                Only{" "}
                <span className="text-amber-300">{seatsLeft} Seats Left</span>
              </h3>

              <p className="text-white/80 text-sm sm:text-base max-w-md">
                Next batch starts on{" "}
                <span className="text-white font-semibold">{batchStartDisplay}</span>
                . Secure your spot before the batch fills up.
              </p>
            </div>

            {/* Countdown */}
            <div className="lg:text-right">
              <div className="inline-flex items-center gap-2 text-white/80 text-sm mb-4 lg:justify-end lg:w-full">
                <Clock className="w-4 h-4" />
                {timeLeft.expired
                  ? "Enrollment closing soon"
                  : "Enrollment closes in"}
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md lg:ml-auto">
                {timeUnits.map(({ key, label }) => (
                  <div
                    key={key}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 text-center"
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                      {String(timeLeft[key]).padStart(2, "0")}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/70 mt-1 uppercase tracking-wide">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onApplyClick?.()}
                className="mt-6 w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 bg-white text-[#B11C20] font-semibold px-8 py-3.5 rounded-xl hover:bg-red-50 transition shadow-lg"
              >
                <Users className="w-5 h-5" />
                Reserve My Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
