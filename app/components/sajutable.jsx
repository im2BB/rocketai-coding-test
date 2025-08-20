"use client";
import React from "react";

export default function SajuTable() {
  const userName = "김로켓님";
  const dateTime = "1980년 8월 27일 08:10";

  const headers = ["時", "日", "月", "年"];
  const tenDeities = [
    { label: "十星", values: ["傷官", "比肩", "傷官", "傷官"] },
  ];
  const heavenlyStems = [
    { char: "壬", element: "陽水", color: "bg-[#2F2F2F] text-white" },
    { char: "丁", element: "陰火", color: "bg-[#C23030] text-white" },
    { char: "癸", element: "陰水", color: "bg-[#2F2F2F] text-white" },
    { char: "癸", element: "陰水", color: "bg-[#2F2F2F] text-white" },
  ];
  const earthlyBranches = [
    { char: "寅", element: "陽木", color: "bg-[#18868C] text-white" },
    { char: "巳", element: "陰火", color: "bg-[#C23030] text-white" },
    { char: "亥", element: "陰水", color: "bg-[#2F2F2F] text-white" },
    {
      char: "酉",
      element: "陰金",
      color: "bg-[#F9F9F9] text-black border border-black",
    },
  ];
  const rows = [
    {
      label: "十神",
      element: "(십성)",
      values: ["比肩", "劫財", "食神", "偏財"],
    },
    {
      label: "十二運星",
      element: "(십이운성)",
      values: ["死", "帝旺", "胎", "長生"],
    },
    {
      label: "十二神殺",
      element: "(십이신살)",
      values: ["劫殺", "地劫", "驛馬殺", "將星殺"],
    },
    {
      label: "貴人",
      element: "(귀인)",
      values: ["(없음)", "(없음)", "天乙", "天乙,太極,文昌"],
    },
  ];

  return (
    <div className="overflow-x-auto text-black">
      {/* 상단 사용자 정보 */}
      <div className="text-center mb-5">
        <div className="text-lg font-semibold">{userName}의 사주</div>
        <div className="text-2xl font-semibold">{dateTime}</div>
      </div>

      <table className="border-collapse w-full text-center text-3xl min-w-min">
        <thead>
          <tr>
            <th className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 min-w-[64px] max-w-[80px] w-[15%] h-12 text-sm md:text-base lg:text-lg"></th>
            {headers.map((h, i) => (
              <th
                key={i}
                className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 w-[calc(85%/5)] min-w-[70px] h-12 text-xl font-bold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tenDeities.map((row, i) => (
            <tr key={i}>
              {/* 좌측 열 */}
              <td className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800  text-sm min-w-[64px] font-bold max-w-[80px] w-[15%]">
                十星
                <div className="text-[9px] flex flex-col font-bold items-center justify-center">
                  (십성)
                </div>
              </td>
              {/* 나머지 셀 배경색 적용 */}
              {row.values.map((item, j) => (
                <td
                  key={j}
                  className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 w-[calc(85%/5)] min-w-[70px] h-12 font-bold text-lg bg-[#FDFDFB]"
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}

          {/* 천인인 행 */}
          <tr>
            <td className="border-t-0 border-l-0 border-b-1 border-r-2 border-gray-800 font-bold text-lg min-w-[64px] max-w-[80px] w-[15%]">
              天干
              <div className="text-[9px] font-bold flex flex-col items-center justify-center">
                (천인)
              </div>
            </td>
            {heavenlyStems.map((h, i) => (
              <td
                key={i}
                className="border-t-0 border-l-0 border-b-1 border-r-1 border-gray-800 w-[calc(85%/5)]  min-w-[70px] h-20 bg-[#FDFDFB]"
              >
                <div
                  className={`w-full max-w-[62px] h-16 mx-auto rounded-2xl flex flex-col items-center justify-center ${h.color}`}
                >
                  <div className="text-[min(4vw,1.5rem)] font-bold">
                    {h.char}
                  </div>
                  <div className="text-[9px]">{h.element}</div>
                </div>
              </td>
            ))}
          </tr>

          {/* 지지 행 */}
          <tr>
            <td className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 font-bold text-lg min-w-[64px] max-w-[80px] w-[15%]">
              地支
              <div className="text-[9px] flex flex-col font-bold  items-center justify-center">
                (지지)
              </div>
            </td>
            {earthlyBranches.map((e, i) => (
              <td
                key={i}
                className="border-t-0 border-l-0 border-b-2 border-r-1 border-gray-800 w-[calc(85%/5)] min-w-[70px] h-20 bg-[#FDFDFB]"
              >
                <div
                  className={`w-full max-w-[62px] h-16 mx-auto rounded-2xl flex flex-col font-bold  items-center justify-center ${e.color}`}
                >
                  <div className="text-[min(4vw,1.5rem)] font-bold">
                    {e.char}
                  </div>
                  <div className="text-[9px]">{e.element}</div>
                </div>
              </td>
            ))}
          </tr>

          {/* 나머지 행 */}
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 font-bold text-sm min-w-[64px] max-w-[80px] w-[15%]">
                {row.label}
                <div className="text-[9px] flex flex-col items-center justify-center">
                  {row.element}
                </div>
              </td>
              {row.values.map((item, j) => (
                <td
                  key={j}
                  className="border-t-0 border-l-0 p-2 border-b-2 border-r-1 pb-3 border-gray-800 w-[calc(85%/5)] min-w-[70px] h-12 font-bold text-lg bg-[#FDFDFB]"
                >
                  {row.label === "貴人"
                    ? item.split(",").map((line, index) => (
                        <div className="pb-4 " key={index}>
                          {line}
                        </div>
                      ))
                    : item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
