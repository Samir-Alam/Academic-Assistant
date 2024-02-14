import {Globe, Instagram, Linkedin} from 'lucide-react'
import logo from '../assets/aca_assis.svg'

const Footer = () => {
  return (
    <div className="flex gap-5 justify-center items-center bg-cover bg-center relative mt-20">
      <div className="absolute top-0 left-[10%] w-[80%] h-full backdrop-blur-sm bg-darkGrey rounded-lg"></div>
      <div className="z-10 relative px-5 py-7 flex gap-5 justify-between items-center w-[80%]">
        <img src={logo} alt="logo" className="w-12 h-15 object-contain rounded-full" />
        <p className="sm:text-[18px] text-[16px] font-bold font-mono text-white uppercase tracking-wider text-center">
          ASANSOL ENGINEERING COLLEGE
        </p>
        <div className="social-icon">
          <a
            href="http://www.aecwb.edu.in/index.php"
            className="bg-white rounded-full border-2 p-1 hover:text-black hover:bg-slate-300 transition-all duration-300"
          >
            <Globe className="w-10 text-white-500 ico" />
          </a>
          <a
            href="https://www.instagram.com/asansol_engineering_college/"
            className="bg-white rounded-full border-2 p-1 hover:text-black hover:bg-slate-300 transition-all duration-300"
          >
            <Instagram className="w-10 ico" />
          </a>
          <a
            href="https://www.linkedin.com/school/asansol-engineering-college-322/"
            className="bg-white rounded-full border-2 p-1 hover:text-black hover:bg-slate-300 transition-all duration-300"
          >
            <Linkedin className="w-10 ico" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer