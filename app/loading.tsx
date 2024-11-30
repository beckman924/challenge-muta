"use client";

import Header from "@/components/Header";

export default function Loading() {
  return (
    <div className="pt-36 max-w-sm mx-auto px-4 md:max-w-4xl md:px-0 overflow-hidden">
      <Header />

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="pokeball-animation">
          <div className="pokeball">
            <div className="pokeball-button"></div>
          </div>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-600">Loading...</h3>
      </div>

      <style jsx>{`
        .pokeball {
          width: 64px;
          height: 64px;
          background: linear-gradient(to bottom, #e3350d 50%, #fff 50%);
          border: 4px solid #000;
          border-radius: 50%;
          position: relative;
          animation: float 2s ease-in-out infinite;
          overflow: hidden;
        }

        .pokeball-button {
          width: 20px;
          height: 20px;
          background: #fff;
          border: 3px solid #000;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .pokeball::before {
          content: "";
          width: 64px;
          height: 4px;
          background: #000;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .pokeball-animation {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
