import { Icon } from "@iconify/react"
import React from "react"

import IconButton from "./../../Buttons/IconButton"

const ProjectModalContent = ({data}) => {
const {description, stack, role, liveURL, gitURL} = data

    return(
        <>
            {description}
            <div className="divider"></div>

            <p className="basicText light">
            <em className="sectionSubhead light">Tech Stack:</em> {stack}
            </p>
            {role &&  <p className="basicText light mb-10">
                <em className="sectionSubhead light">My Role:</em> {role}
            </p>}
           {liveURL && <IconButton to={liveURL} classes={["white"]}>
                <div className="rounded-full border-[2px] border-white p-[8px] mr-4">
                    <Icon className="text-white flex-1" icon="entypo:rocket" width="24" />
                </div>
                View Live Project
            </IconButton>}
            {gitURL && <IconButton
                to={gitURL}
                classes={["white", "mt-4", "mb-10"]}
                >
                <div className="rounded-full border-[2px] border-white px-1 pt-1.5 mr-4">
                    <Icon
                    className="text-white flex-1"
                    icon="teenyicons:github-solid"
                    width="28"
                    />
                </div>
                View Code
            </IconButton>}
        </>
    )
}

export default ProjectModalContent