import React, { useRef } from "react"
import CountUp from "react-countup"
import { motion, useInView } from "framer-motion"
import { fadeIn } from "../variants"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  console.log(isInView)

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2">About me.</h2>
            <h3 className="h3 mb-4">
              I&apos;m a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur error corrupti, officia quos atque quibusdam vel quo
              doloribus ea vitae tempore inventore unde beatae ducimus.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] text-gradient mb2">
                  {isInView ? (
                    <CountUp start={0} end={13} duration={10} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] text-gradient mb2">
                  {isInView ? (
                    <CountUp start={0} end={15} duration={10} />
                  ) : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] text-gradient mb2">
                  {isInView ? (
                    <CountUp start={0} end={12} duration={10} />
                  ) : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
