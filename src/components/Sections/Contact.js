import * as React from "react"
import MainSectionContainer from "../Containers/MainSectionContainer"
import { Icon } from "@iconify/react"
import IconButton from "../Buttons/IconButton"
import ContactForm from "../Form/ContactForm"

const Contact = ({ isDesktop }) => {
  return (
    <MainSectionContainer
      id="contact"
      classes={["items-center", "mb-4", "mt-16"]}
    >
      <section
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-out"
        className="flex flex-col flex-1 lg:max-w-[500px] lg:mb-[60px]"
      >
        <h2 className="sectionHead">
          Contact
          <div className="sectionHead_tag">Get In Touch</div>
        </h2>
        <p className="basicText lg">
          I like building things with fun open-minded people. Send me a message
          and lets talk about your project!
        </p>

        <section className="flex flex-col mt-10">
          <div className="flex flex-col flex-nowrap mb-[16px] mt-4">
            {/* <IconButton to="mailto:Strifellc.MD@gmail.com" classes={["mt-4"]}>
              <div className="rounded-full border-[2px] border-brightAccent p-[8px] mr-4">
                <Icon
                  className="text-brightAccent flex-1"
                  icon="fluent:mail-48-filled"
                  width="28"
                />
              </div>
              Drop Me an Email
            </IconButton> */}
            <IconButton to="/#" classes={["mt-4"]}>
              <div className="rounded-full border-[2px] border-brightAccent p-[4px] mr-4">
                <Icon
                  className="text-brightAccent flex-1"
                  icon="fluent:arrow-download-48-filled"
                  width="36"
                />
              </div>
              Download CV
            </IconButton>
            <div
              className={`basicButton self-start pl-[24px] mt-4 flex-wrap md:flex-nowrap`}
            >
              <div className="rounded-full border-[2px] border-brightAccent p-[8px] mr-4">
                <Icon
                  className="text-brightAccent flex-1"
                  icon="mdi:calendar-check"
                  width="28"
                />
              </div>
              Freelance Status:
              <div className="rounded-full bg-brightAccent text-white px-4 py-1 text-base ml-[64px] md:ml-2">
                Available
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full flex-1 flex justify-center mb-10">
        <div
          data-sal={isDesktop ? "slide-up" : null}
          data-sal-duration="400"
          data-sal-easing="ease-out"
          className="w-full mt-16 lg:mt-0 lg:w-[80%] max-w-[550px] rounded-xl relative bg-headerText border-[#E8E9F1] border-2 shadow-[0_1px_5px_2px_rgba(11,7,49,0.25)]"
        >
          <ContactForm />
        </div>
      </section>
    </MainSectionContainer>
  )
}

export default Contact
