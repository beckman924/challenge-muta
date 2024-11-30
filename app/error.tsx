"use client";

import Image from "next/image";

import Header from "@/components/Header";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/sad-pikachu.gif"
            alt="Sad Pikachu"
            width={160}
            height={160}
            className="w-40 h-40 mb-6"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong...
          </h2>
          <p className="text-gray-700 mb-6">
            Pikachu seems confused. Let’s try to fix this!
          </p>
          <button
            onClick={reset}
            className="px-6 py-2 bg-yellow-400 text-white font-bold rounded-md shadow-md hover:bg-yellow-500 focus:outline-none transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
