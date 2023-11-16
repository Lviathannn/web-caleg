type Props = {
  activeTabs: "visi" | "misi";
};

export default function VissionMissionCard({ activeTabs }: Props) {
  const data = {
    visi: "Menjadikan masyarakat yang berkeadilan, berkeadaban, dan berdaya saing, melalui penguatan nilai-nilai agama, partisipasi aktif dalam kegiatan sosial, serta pemberdayaan perempuan",
    misi: [
      {
        title: "Penguatan Nilai Agama",
        content:
          "Memperjuangkan kebijakan yang mendukung dan memperkuat nilai-nilai moral dan spiritual dalam kehidupan masyarakat.",
      },
      {
        title: "Partisipasi Sosial",
        content:
          "Mendorong partisipasi aktif warga masyarakat dalam kegiatan sosial, seperti gotong royong, kegiatan amal, dan bakti sosial",
      },
      {
        title: "Pemberdayaan Perempuan",
        content:
          "Memperjuangkan keadilan gender dan pemberdayaan perempuan melalui kebijakan inklusif, pelatihan keterampilan, dan akses pendidikan yang setara",
      },
      {
        title: "Peningkatan Kesejahteraan Masyarakat",
        content:
          "Merancang dan mendukung kebijakan yang bertujuan meningkatkan kesejahteraan masyarakat, termasuk dalam hal kesehatan, pendidikan, dan pekerjaan",
      },
    ],
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5 bg-white px-5 py-10 drop-shadow-2xl rounded-md relative z-10 overflow-hidden w-full">
      <div className="absolute w-full h-8 bg-secondary top-0 z-0 flex items-center gap-1 px-5">
        <div className="w-2 h-2 rounded-full bg-bg_secondary"></div>
        <div className="w-2 h-2 rounded-full bg-bg_secondary"></div>
        <div className="w-2 h-2 rounded-full bg-bg_secondary"></div>
      </div>
      <h1 className="text-2xl font-semibold text-primary-text">Visi</h1>
      {activeTabs === "visi" ? (
        <p className="max-w-xl">{data.visi}</p>
      ) : (
        <ul className="flex flex-col gap-5 ">
          {data.misi.map((misi, index) => (
            <li
              key={index}
              className="flex gap-3 max-w-xl justify-between items-start px-2 flex-wrap"
            >
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary flex justify-center items-center text-white">
                  {index + 1}
                </span>
                <h1 className="text-lg font-semibold text-primary-text">{misi.title}</h1>
              </div>
              <p className="max-w-lg">{misi.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
