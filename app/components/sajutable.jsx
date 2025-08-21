"use client";
import React from "react";

/** 공통 셀 컴포넌트 */
function TableCell({ char, element }) {
  return (
    <td className="border-t-0 border-l-0 p-1 border-b-2 border-r-1  border-gray-800 w-[calc(85%/5)]  h-12 font-bold text-xl bg-[#FDFDFB]">
      <div>{char}</div>
      {element && <div className="text-xs">{element}</div>}
    </td>
  );
}

/** 천간/지지용 셀 */
function ElementBox({ char, element1, element2, color }) {
  return (
    <td className="border-t-0 border-l-0 border-b-1 border-r-1 border-gray-800 w-[calc(85%/5)]  h-20 bg-[#FDFDFB]">
      <div
        className={`w-full max-w-[72px] h-18.5 mx-auto rounded-2xl flex flex-col items-center justify-center ${color}`}
      >
        <div className="text-xs">{element1}</div>
        <div className="text-3xl font-bold">{char}</div>
        <div className="text-xs">{element2}</div>
      </div>
    </td>
  );
}

/** 행 단위 컴포넌트 */
function TableRow({ title, subtitle, data, renderCell }) {
  return (
    <tr>
      <td className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 font-bold text-lg min-w-[64px] max-w-[80px] w-[15%]">
        {title}
        <div className="text-[9px] flex flex-col items-center justify-center">
          {subtitle}
        </div>
      </td>
      {data.map((item, i) => renderCell(item, i))}
    </tr>
  );
}

export default function SajuTable() {
  const userName = "김로켓님";
  const dateTime = "1980년 8월 27일 08:10";

  const headers = ["時", "日", "月", "年"];

  const tengods1 = [
    { char: "傷官", element: "(상관)" },
    { char: "比肩 ", element: "(비견)" },
    { char: "傷官", element: "(상관)" },
    { char: "傷官", element: "(상관)" },
  ];

  const heavenlyStems = [
    {
      char: "壬",
      element1: "임",
      element2: "陽水",
      color: "bg-[#2F2F2F] text-white",
    },
    {
      char: "丁",
      element1: "정",
      element2: "陰火",
      color: "bg-[#C23030] text-white",
    },
    {
      char: "癸",
      element1: "계",
      element2: "陰水",
      color: "bg-[#2F2F2F] text-white",
    },
    {
      char: "癸",
      element1: "계",
      element2: "陰水",
      color: "bg-[#2F2F2F] text-white",
    },
  ];

  const earthlyBranches = [
    {
      char: "寅",
      element1: "인인",
      element2: "陽木",
      color: "bg-[#18868C] text-white",
    },
    {
      char: "巳",
      element1: "사",
      element2: "陰火",
      color: "bg-[#C23030] text-white",
    },
    {
      char: "亥",
      element1: "해",
      element2: "陰水",
      color: "bg-[#2F2F2F] text-white",
    },
    {
      char: "酉",
      element1: "유",
      element2: "陰金",
      color: "bg-[#F9F9F9] text-black border border-black",
    },
  ];

  const tengods2 = [
    { char: "比肩", element: "(비견)" },
    { char: "劫財 ", element: "(겹재)" },
    { char: "食神", element: "(식신)" },
    { char: "偏財", element: "(편재)" },
  ];

  const twelvestages = [
    { char: "死", element: "(사)" },
    { char: "帝旺", element: "(제왕)" },
    { char: "胎", element: "(태태)" },
    { char: "長生", element: "(장생)" },
  ];

  const twelvegods = [
    { char: "劫殺", element: "(겁살)" },
    { char: "地劫", element: "(지살)" },
    { char: "驛馬殺", element: "(역마살)" },
    { char: "將星殺", element: "(장성살)" },
  ];

  const nobleman = [
    { char: "", element: "(없음)" },
    { char: "", element: "(없음)" },
    { char: "天乙", element: "(천을귀인)" },
    {
      char1: "天乙",
      char2: "太極",
      char3: "文昌",
      element1: "(천을귀인)",
      element2: "(태극귀인)",
      element3: "(문창귀인)",
    },
  ];

  return (
    <div className="overflow-x-auto text-black">
      {/* 상단 사용자 정보 */}
      <div className="text-center mt-2 mb-5 ">
        <div className="text-xl mb-2 font-semibold">{userName}의 사주</div>
        <div className="text-2xl font-bold">{dateTime}</div>
      </div>

      <table className="border-collapse w-full text-center text-3xl min-w-min">
        <thead>
          <tr>
            <th className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 min-w-[64px] max-w-[80px] w-[15%] h-12 text-xs md:text-base lg:text-lg"></th>
            {headers.map((h, i) => (
              <th
                key={i}
                className="border-t-0 border-l-0 border-b-2 border-r-2 border-gray-800 w-[calc(85%/5)] min-w-[70px] h-12 text-2xl font-bold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* 십성1 */}
          <TableRow
            title="十神"
            subtitle="(십성)"
            data={tengods1}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />

          {/* 천간 */}
          <TableRow
            title="天干"
            subtitle="(천간)"
            data={heavenlyStems}
            renderCell={(item, i) => <ElementBox key={i} {...item} />}
          />

          {/* 지지 */}
          <TableRow
            title="地支"
            subtitle="(지지)"
            data={earthlyBranches}
            renderCell={(item, i) => <ElementBox key={i} {...item} />}
          />

          {/* 십성2 */}
          <TableRow
            title="十神"
            subtitle="(십성)"
            data={tengods2}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />

          {/* 십이운성 */}
          <TableRow
            title="十二運星"
            subtitle="(십이운성)"
            data={twelvestages}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />

          {/* 십이신살 */}
          <TableRow
            title="十二神殺"
            subtitle="(십이신살)"
            data={twelvegods}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />

          {/* 귀인 */}
          <TableRow
            title="貴人"
            subtitle="(귀인)"
            data={nobleman}
            renderCell={(item, j) => (
              <td
                key={j}
                className="border-t-0 border-l-0 p-2 border-b-2 border-r-1 pb-3 border-gray-800 w-[calc(85%/5)] min-w-[70px] h-12 font-bold text-sm bg-[#FDFDFB]"
              >
                {item.char && (
                  <>
                    <div>{item.char}</div>
                    <div className="text-xs">{item.element}</div>
                  </>
                )}
                {item.char1 && (
                  <>
                    <div>
                      <div>{item.char1}</div>
                      <div className="text-xs">{item.element1}</div>
                    </div>
                    <div>
                      <div>{item.char2}</div>
                      <div className="text-xs">{item.element2}</div>
                    </div>
                    <div>
                      <div>{item.char3}</div>
                      <div className="text-xs">{item.element3}</div>
                    </div>
                  </>
                )}
                {!item.char && !item.char1 && <div>{item.element}</div>}
              </td>
            )}
          />
        </tbody>
      </table>
    </div>
  );
}
