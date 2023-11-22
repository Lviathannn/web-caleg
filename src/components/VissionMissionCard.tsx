type Props = {
  activeTabs: 'visi' | 'misi';
};

export default function VissionMissionCard({ activeTabs }: Props) {
  const data = {
    visi: 'Menjadikan masyarakat yang berkeadilan, berkeadaban, dan berdaya saing, melalui penguatan nilai-nilai agama, partisipasi aktif dalam kegiatan sosial, serta pemberdayaan perempuan',
    misi: [
      {
        title: 'Penguatan Nilai Agama',
        content:
          'Memperjuangkan kebijakan yang mendukung dan memperkuat nilai-nilai moral dan spiritual dalam kehidupan masyarakat.',
      },
      {
        title: 'Partisipasi Sosial',
        content:
          'Mendorong partisipasi aktif warga masyarakat dalam kegiatan sosial, seperti gotong royong, kegiatan amal, dan bakti sosial',
      },
      {
        title: 'Pemberdayaan Perempuan',
        content:
          'Memperjuangkan keadilan gender dan pemberdayaan perempuan melalui kebijakan inklusif, pelatihan keterampilan, dan akses pendidikan yang setara',
      },
      {
        title: 'Peningkatan Kesejahteraan Masyarakat',
        content:
          'Merancang dan mendukung kebijakan yang bertujuan meningkatkan kesejahteraan masyarakat, termasuk dalam hal kesehatan, pendidikan, dan pekerjaan',
      },
    ],
  };
  return (
    <div className='relative z-10 w-full overflow-hidden rounded-md bg-white drop-shadow-2xl'>
      <div className='fixed top-0 z-0 flex h-8 w-full items-center gap-1 bg-secondary px-5'>
        <div className='h-2 w-2 rounded-full bg-bg_secondary'></div>
        <div className='h-2 w-2 rounded-full bg-bg_secondary'></div>
        <div className='h-2 w-2 rounded-full bg-bg_secondary'></div>
      </div>
      <div
        className='flex h-96 w-full flex-col items-center gap-3 overflow-auto px-5 py-10'
        id='mission'
      >
        <h1 className='text-primary-text text-2xl font-semibold capitalize'>
          {activeTabs}
        </h1>
        {activeTabs === 'visi' ? (
          <p className='max-w-3xl'>{data.visi}</p>
        ) : (
          <ul className='flex flex-col gap-5 '>
            {data.misi.map((misi, index) => (
              <li
                key={index}
                className='flex max-w-3xl flex-wrap items-start justify-between gap-3 px-2'
              >
                <div className='flex gap-3'>
                  <span className='flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white'>
                    {index + 1}
                  </span>
                  <h1 className='text-primary-text text-lg font-semibold'>
                    {misi.title}
                  </h1>
                </div>
                <p className='max-w-3xl'>{misi.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
