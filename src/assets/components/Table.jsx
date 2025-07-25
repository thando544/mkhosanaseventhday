import React from 'react';

const Table = () => {
  const tableData = [
    { pos: 1, club: "MASS", p: 2, w: 2, d: 0, l: 0, f: 5, a: 2, gd: 3, pts: 6 },
    { pos: 2, club: "MOSI", p: 2, w: 1, d: 1, l: 0, f: 5, a: 2, gd: 3, pts: 4 },
    { pos: 3, club: "HHS", p: 2, w: 1, d: 1, l: 0, f: 5, a: 2, gd: 3, pts: 4 },
    { pos: 4, club: "AAST", p: 2, w: 1, d: 1, l: 0, f: 5, a: 2, gd: 3, pts: 4 },
  ];

  return (
    <div className="px-4 bg-white min-h-[60vh] flex flex-col items-center">
      <div className="text-center mb-6">
        <p className="text-sm font-semibold">TABLE</p>
        <h2 className="text-2xl font-bold text-gold text-[#C8B916]">ZSCLF TABLE</h2>
      </div>

      <div className="overflow-x-auto w-full max-w-5xl">
        <table className="w-full text-sm sm:text-base text-center text-gray-700 border-collapse">
          <thead className="bg-gray-100 uppercase text-xs sm:text-sm text-gray-600 sticky top-0">
            <tr>
              {["POS", "CLUB", "P", "W", "D", "L", "F", "A", "GD", "PTS"].map((header, index) => (
                <th key={index} className="border-b border-gray-300 px-4 sm:px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((team, index) => (
              <tr key={index}>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.pos}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.club}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.p}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.w}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.d}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.l}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.f}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.a}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.gd}</td>
                <td className="border-b border-gray-200 px-4 sm:px-6 py-3 font-medium">{team.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
