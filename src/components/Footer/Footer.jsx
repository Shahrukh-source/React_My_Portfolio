import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Delhi,Okhla Vihar,110025,India</p>
          </div>
          <ul className={css.menu}>
            <li>Services:React.js Developer</li>
            <li>Works:Internship(Ducat)</li>
           
            
            <li>Experience:1 Years</li>
            <li>Mobile Number:7906851583 </li>
            
        <a className={css.email} href="mailto:sk1109697@gmail.com">
          sk1109697@gmail.com
        </a>
        <a className={css.resume} href="https://flowcv.com/resume/j5smtn2ks6">
          Resume
        </a>
        <a className={css.profile} href="https://github.com/Shahrukh-source?tab=repositories">My GitHub Profile</a>


          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
