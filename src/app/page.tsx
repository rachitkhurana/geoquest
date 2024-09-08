import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "h-screen w-screen flex flex-col gap-6 justify-center items-center",
        "bg-slate-950",
        "text-white",
        "p-2"
      )}
    >
      <h1 className={clsx("text-5xl")}>GeoQuest</h1>
      <h2 className={clsx("text-7xl")}>🌏</h2>
    </main>
  );
}
