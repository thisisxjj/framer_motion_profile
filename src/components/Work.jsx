import React from "react"
import { motion } from "framer-motion"
import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"
import WorkItem from "./WorkItem"
import { fadeIn } from "../variants"

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br></br> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates repellat deserunt, tempore id provident recusandae
                vel excepturi quibusdam?
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <WorkItem img={Img1} desc="UI/UX Design" title="Project Title" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <WorkItem img={Img2} desc="UI/UX Design" title="Project Title" />
            <WorkItem img={Img3} desc="UI/UX Design" title="Project Title" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
