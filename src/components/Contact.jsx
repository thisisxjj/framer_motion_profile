import React from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase font-medium text-accent mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 w-full placeholder:text-white outline-none focus:border-accent transition-all duration-300"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 w-full placeholder:text-white outline-none focus:border-accent transition-all duration-300"
              placeholder="Your Email"
            />
            <textarea
              type="text"
              className="bg-transparent border-b py-12 w-full placeholder:text-white outline-none focus:border-accent transition-all duration-300 resize-none mb-12"
              placeholder="Your Message"
            />
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
