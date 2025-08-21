"use client";
import React from "react";
import {
  userName,
  dateTime,
  headers,
  tengods1,
  tengods2,
  twelvegods,
  twelvestages,
  heavenlyStems,
  earthlyBranches,
  nobleman,
} from "./dummydata";

/** 공통 셀 컴포넌트 */
function TableCell({ char, element }) {
  return (
    <td className="border-t-0 border-l-0 p-1 border-b-2 border-r-1 border-gray-800 w-[calc(85%/5)] h-12 font-bold text-xl bg-[#FDFDFB]">
      <div>{char}</div>
      {element && <div className="text-xs">{element}</div>}
    </td>
  );
}

/** 천간/지지용 셀 */
function ElementBox({ char, element1, element2, color }) {
  return (
    <td className="border-t-0 border-l-0 border-b-1 border-r-1 border-gray-800 w-[calc(85%/5)] h-20 bg-[#FDFDFB]">
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
  return (
    <div className="overflow-x-auto text-black">
      <div className="text-center mt-2 mb-5">
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
          <TableRow
            title="十神"
            subtitle="(십성)"
            data={tengods1}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />
          <TableRow
            title="天干"
            subtitle="(천간)"
            data={heavenlyStems}
            renderCell={(item, i) => <ElementBox key={i} {...item} />}
          />
          <TableRow
            title="地支"
            subtitle="(지지)"
            data={earthlyBranches}
            renderCell={(item, i) => <ElementBox key={i} {...item} />}
          />
          <TableRow
            title="十神"
            subtitle="(십성)"
            data={tengods2}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />
          <TableRow
            title="十二運星"
            subtitle="(십이운성)"
            data={twelvestages}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />
          <TableRow
            title="十二神殺"
            subtitle="(십이신살)"
            data={twelvegods}
            renderCell={(item, i) => <TableCell key={i} {...item} />}
          />
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
                    <div className="text-lg">{item.char}</div>
                    <div className="text-xs">{item.element}</div>
                  </>
                )}
                {item.char1 && (
                  <>
                    <div>
                      <div className="text-lg">{item.char1}</div>
                      <div className="text-xs">{item.element1}</div>
                    </div>
                    <div>
                      <div className="text-lg">{item.char2}</div>
                      <div className="text-xs">{item.element2}</div>
                    </div>
                    <div>
                      <div className="text-lg">{item.char3}</div>
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
