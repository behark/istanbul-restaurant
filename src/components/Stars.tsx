export default function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "base" }) {
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const gap = size === "sm" ? "gap-0.5" : "gap-1";

  return (
    <div className={`flex ${gap}`} aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i - 0.5 <= rating;
        return (
          <svg
            key={i}
            className={`${sz} ${filled || half ? "text-secondary-dark" : "text-ink/20"}`}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : half ? "url(#half)" : "none"}
            stroke="currentColor"
            strokeWidth={filled || half ? 0 : 1.5}
          >
            {half && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}
