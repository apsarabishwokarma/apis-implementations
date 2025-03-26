"use client";

import FetchImplementations from "./fetch";

export default function HomePage() {
  return (
    <div className="p-4 grid gap-4 divide-y-2">
      <div>
        <h1>Fetch Implementation</h1>
        <FetchImplementations />
      </div>
    </div>
  );
}
