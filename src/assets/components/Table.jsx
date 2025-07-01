
import React from 'react';
const Table = () => {
  const tableData = [
    { pos: 1, club: "MASS", p: 2, w: 2, d: 0, l: 0, f: 5, a: 2, gd: 3, pts: 6 },
    { pos: 2, club: "MOSI", p: 2, w: 1, d: 1, l: 0, f: 5, a: 2, gd: 3, pts: 4 },
    { pos: 3, club: "HHS", p: 2, w: 1, d: 1, l: 0, f: 5, a: 2, gd: 3, pts: 4 },
    { pos: 4, club: "AAST", p: 2, w: 1, d: 1, l: 0, f: 5, a: 2, gd: 3, pts: 4 },
  ];
  return(
    <div className="py-12 px-4 bg-white h-[60vh] pt-28 pl-36 pr-36 overflow-hidden">
  <div className="text-center mb-6">
    <p className="text-sm text-gray-500 font-semibold">TABLE</p>
    <h2 className="text-xl font-bold text-gold">ZSCLF TABLE</h2>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-center text-gray-700 border-collapse">
      <thead className="bg-gray-100 uppercase text-xs text-gray-600">
        <tr>
          <th className="border-b border-gray-300 px-4 py-2">POS</th>
          <th className="border-b border-gray-300 px-4 py-2">CLUB</th>
          <th className="border-b border-gray-300 px-4 py-2">P</th>
          <th className="border-b border-gray-300 px-4 py-2">W</th>
          <th className="border-b border-gray-300 px-4 py-2">D</th>
          <th className="border-b border-gray-300 px-4 py-2">L</th>
          <th className="border-b border-gray-300 px-4 py-2">F</th>
          <th className="border-b border-gray-300 px-4 py-2">A</th>
          <th className="border-b border-gray-300 px-4 py-2">GD</th>
          <th className="border-b border-gray-300 px-4 py-2">PTS</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((team, index) => (
          <tr key={index} className="">
            <td className="border-b border-gray-200 px-4 py-2">{team.pos}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.club}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.p}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.w}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.d}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.l}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.f}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.a}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.gd}</td>
            <td className="border-b border-gray-200 px-4 py-2">{team.pts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    
  )
}
  


export default Table;