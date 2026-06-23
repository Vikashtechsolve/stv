import { useEffect, useState } from "react";
import { GENAI_ENROLLMENT } from "./genAiCourseConfig";

/** Frontend seat count — update `seatsLeft` in genAiCourseConfig when a cohort changes. */
export function getGenAiSeats() {
  const { totalSeats, seatsLeft } = GENAI_ENROLLMENT;
  const left = Math.max(0, Math.min(seatsLeft, totalSeats));
  const enrolled = totalSeats - left;
  const filledPercent = Math.min(
    100,
    Math.round((enrolled / totalSeats) * 100)
  );

  return { totalSeats, seatsLeft: left, seatsEnrolled: enrolled, filledPercent };
}

export function useGenAiSeats() {
  const [seats, setSeats] = useState(getGenAiSeats);

  useEffect(() => {
    setSeats(getGenAiSeats());
    const timer = setInterval(() => setSeats(getGenAiSeats()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return seats;
}
