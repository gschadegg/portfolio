import React from "react"

const TravelMap = () => {
  return (
    <article className="w-full">
      <iframe
        src="https://www.travellerspoint.com/embed/map.cfm/#/embed/986593/1223728/?tiles=default&showguide=true&triponly"
        title="Cross-Country US Map"
        width="100%"
        height="500"
        className={"mb-[10px] border-0"}
      ></iframe>
    </article>
  )
}

export default TravelMap
