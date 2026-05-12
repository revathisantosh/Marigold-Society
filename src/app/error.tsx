"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display italic text-2xl text-maroon">Something went wrong</p>
      <p className="mt-4 font-body text-ink/60">
        {process.env.NODE_ENV === "development" ? error.message : "Please try again."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="label mt-8 border border-marigold px-8 py-3 text-maroon transition-colors hover:bg-marigold/15"
      >
        Try again
      </button>
    </div>
  );
}
