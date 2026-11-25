import type { ConductorSpecificationRow } from "@/data/products";

export function ConductorSpecificationTable({
  rows,
}: {
  rows: ConductorSpecificationRow[];
}) {
  return (
    <div className="rounded-3xl border border-[#E3D7C8] bg-white p-5 sm:p-8">
      <h3 className="text-lg font-bold text-[#1A1614] sm:text-xl">
        Conductor technical specifications
      </h3>
      <p className="mt-2 text-sm text-[#983B23]">
        The Squirrel conductor breaking load is listed as 70.61 kN in the supplied source and requires technical confirmation before public release.
      </p>
      <div
        className="mt-5 overflow-x-auto rounded-2xl border border-[#E3D7C8]"
        tabIndex={0}
        aria-label="Scrollable conductor specification table"
      >
        <table className="w-full min-w-[1180px] text-left text-xs sm:text-sm">
          <thead className="bg-[#F6F1EC] text-[10px] font-bold uppercase tracking-wide text-[#331E11]">
            <tr>
              <th scope="col" className="p-3">Conductor</th>
              <th scope="col" className="p-3">Nominal Al. area (mm²)</th>
              <th scope="col" className="p-3">Al. strands</th>
              <th scope="col" className="p-3">Al. strand dia. (mm)</th>
              <th scope="col" className="p-3">Steel strands</th>
              <th scope="col" className="p-3">Steel strand dia. (mm)</th>
              <th scope="col" className="p-3">Overall dia. (mm)</th>
              <th scope="col" className="p-3">Steel core dia. (mm)</th>
              <th scope="col" className="p-3">Resistance at 20°C (Ω/km)</th>
              <th scope="col" className="p-3">Approx. breaking load (kN)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDE3D7]">
            {rows.map((row) => (
              <tr key={row.conductor}>
                <th scope="row" className="p-3 font-bold text-[#1A1614]">{row.conductor}</th>
                <td className="p-3">{row.nominalArea}</td>
                <td className="p-3">{row.aluminiumStrands}</td>
                <td className="p-3">{row.aluminiumDiameter}</td>
                <td className="p-3">{row.steelStrands}</td>
                <td className="p-3">{row.steelDiameter}</td>
                <td className="p-3">{row.overallDiameter}</td>
                <td className="p-3">{row.steelCoreDiameter}</td>
                <td className="p-3">{row.resistance}</td>
                <td className="p-3 font-semibold">{row.breakingLoad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
