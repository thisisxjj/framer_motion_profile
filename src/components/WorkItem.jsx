import React from "react"

const WorkItem = ({ img, title, desc }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      <img
        className="group-hover:scale-125 transition-all duration-500"
        src={img}
        alt=""
      />
      <div className="absolute -bottom-full left-12 z-50 group-hover:bottom-24 transition-all duration-500">
        {desc}
      </div>
      <div className="absolute -bottom-full left-12 z-50 group-hover:bottom-14 transition-all duration-700">
        <span className="text-3xl text-white">{title}</span>
      </div>
    </div>
  )
}

export default WorkItem
