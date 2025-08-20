"use client";
import SajuPlain from "./components/sajutable";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <main className="w-full max-w-[448px] relative overflow-hidden max-h-[2300px]">
        <img
          src="/main.png"
          alt="main image"
          className="block w-full h-full bg-[#fbf9f5]"
        />

        {/* 텍스트와 SajuPlain 오버레이 */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* 첫 번째 텍스트 블록 */}
          <div className="absolute left-1/3 -translate-x-1/2 top-[31.8%] text-center text-black text-[min(3.5vw,1rem)] max-w-[80%] pointer-events-auto">
            <p className="whitespace-nowrap">이제 본격적으로</p>
            <p className="whitespace-nowrap">로켓님의 사주팔자를</p>
            <p className="whitespace-nowrap">분석해볼 차례네요.</p>
          </div>

          {/* 두 번째 텍스트 블록 */}
          <div className="absolute left-1/3 -translate-x-1/3 top-[49.51%] pr-5 text-center font-medium text-black text-[min(3.5vw,1rem)] max-w-[80%] pointer-events-auto">
            <p className="whitespace-nowrap">제가 로켓님의 사주를</p>
            <p className="whitespace-nowrap">보기 쉽게 표로 정리했어요</p>
          </div>

          {/* SajuPlain 컴포넌트 */}
          <div className="absolute left-1/2 pl-8  pr-8 -translate-x-1/2 top-[67%] w-full max-w-[448px] pt-7 pointer-events-auto">
            <svg viewBox="0 0 448 700" preserveAspectRatio="xMidYMid meet">
              <foreignObject width="448" height="700">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="w-full h-full"
                >
                  <SajuPlain />
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
