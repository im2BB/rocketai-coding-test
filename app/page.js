"use client";
import SajuPlain from "./components/sajutable";
import OverlayText from "./components/overlaytext";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[#fbf9f5]">
      <main className="w-full max-w-[448px] relative overflow-hidden">
        {/* 배경 이미지 */}
        <img
          src="/main.png"
          alt="main image"
          className="block w-full h-full object-cover"
        />

        {/* 오버레이 */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* 첫 번째 텍스트 블록 */}
          <OverlayText
            className="absolute top-[32%] left-1/2 -translate-x-1/2 text-center text-black text-[min(3.5vw,1rem)] max-w-[80%] pointer-events-auto"
            texts={[
              "이제 본격적으로",
              "로켓님의 사주팔자를",
              "분석해볼 차례네요.",
            ]}
          />

          {/* 두 번째 텍스트 블록 */}
          <OverlayText
            className="absolute top-[50%] left-1/2 -translate-x-1/2 text-center font-medium text-black text-[min(3.5vw,1rem)] max-w-[80%] pointer-events-auto"
            texts={["제가 로켓님의 사주를", "보기 쉽게 표로 정리했어요"]}
          />

          {/* SajuPlain 컴포넌트 */}
          <div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-full max-w-[448px] pr-8 pl-8 pb-10 pointer-events-auto">
            <div className="w-full h-auto">
              <SajuPlain />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
