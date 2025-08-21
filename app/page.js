"use client";
import SajuPlain from "./components/sajutable";
import OverlayText from "./components/overlaytext";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <main className="w-full max-w-[448px] relative overflow-hidden max-h-[2300px]">
        <img
          src="/main.png"
          alt="main image"
          className="block w-full h-full bg-[#fbf9f5]"
        />

        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* 첫 번째 텍스트 블록 */}
          <OverlayText
            top="31.8%"
            left="18%"
            translateX="1/2"
            texts={[
              "이제 본격적으로",
              "로켓님의 사주팔자를",
              "분석해볼 차례네요.",
            ]}
          />

          {/* 두 번째 텍스트 블록 */}
          <OverlayText
            top="49.51%"
            left="18%"
            translateX="1/3"
            className="pr-5"
            texts={["제가 로켓님의 사주를", "보기 쉽게 표로 정리했어요"]}
          />

          {/* SajuPlain 컴포넌트 */}
          <div className="absolute left-1/2 pl-8 pr-8 -translate-x-1/2 top-[67%] w-full pt-7 pointer-events-auto">
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
