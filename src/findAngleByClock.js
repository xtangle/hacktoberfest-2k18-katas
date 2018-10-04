export const findAngleByClock = (clock) => {
  const pattern = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/gm;
  if (!pattern.test(clock)) return null;

  const clockParts = clock.split(':');

  const H = (360/12) * (Number(clockParts[0]) % 12);
  const M = (360/60) * Number(clockParts[1]);
  
  let diff = H > M ? H - M : M - H;

  return (360 - diff < diff) ? 360 - diff : diff;
};