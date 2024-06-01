import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import PropTypes from "prop-types"

import { Link } from "gatsby"
import { Icon } from "@iconify/react"

const NamePlate = ({ ...args }) => (
  <Link
    to={"/profile/"}
    className={`cursor-pointer group imgDropArrow ${args.className}`}
    id="namePlate"
    aria-label="My Profile"
  >
    <div className="rounded-full border-2 border-mainGray/10 p-1.5 group-hover:border-mainGray/20 imgWrap">
      <StaticImage
        src="./../../../images/profileImgSVG.svg"
        width={71}
        quality={71}
        placeholder={"blurred"}
        formats={["auto", "webp", "avif"]}
        alt="profile portrait"
        style={{ zIndex: 1 }}
        className={`profileImage`}
      />
      <Icon
        className="text-slate-50/90 opacity-0 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-0 group-hover:z-[5]  group-focus:z-[5] group-hover:opacity-100  group-focus:opacity-100 transition-all duration-150"
        icon="iconoir:profile-circled"
        width="36"
      />
    </div>
    <div className="hidden nameTitle lg:block ml-6 font-bold text-2xl text-mainGray group-hover:text-darkAccent group-focus:text-darkAccent group-active:text-darkAccent">
      Gretchen Schadegg
      <div className="text-left font-medium text-lg pt-0.5 text-mainGray/80 group-hover:text-darkAccent/80 group-focus:text-darkAccent/80 group-active:text-darkAccent/80">
      Software Engineer
      </div>
    </div>
  </Link>
)

NamePlate.propTypes = {
  siteTitle: PropTypes.string,
}

NamePlate.defaultProps = {
  siteTitle: ``,
}

export default NamePlate
