function DashboardDetails({ color, title, details }: { color: string; title: string; details: string }) {
  return (
    <div className={color + ' flex text-black flex-col pb-[2em] gap-[1em]  w-full h-[7em] pr-[1em] lg:w-[13em] lg:h-[6em] rounded-xl shadow-xs p-[1.5em] border border-[#d4d4d4]'}>
      <p className="title text-xs font-bold uppercase">{title}</p>
      <p className="details text-xl mb-[2em]  font-bold  ">{details}</p>
    </div>
  )
}

export default DashboardDetails
