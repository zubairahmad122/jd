import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const Footer = () => (
  <footer className=' px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[4rem] bg-white opacity-[0.8] w-full flex items-center flex-col justify-start'>
    <div className="w-full h-full max-w-[1440px] mx-auto">
    <div className=" flex-wrap px-[20px] xxm:px-[40px]  md:flex-nowrap flex gap-[5px] xxm:gap-[10px] mdd:gap-[30px] lg:gap-[50px] items-start justify-start md:justify-center w-full">
      <div className=" w-full xsm:w-[60%] md:w-[45%] mdd:w-[40%] flex flex-col gap-[20px]">
        <div className="flex items-center justify-start gap-[10px]">
         <Link target="_blank" className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-[#656B70]" href="https://www.linkedin.com/company/digitaljoyn/" > <FaLinkedinIn className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-[#656B70]" /></Link>
         <Link href="mailto:info@info@joyn.com" ><FiMail className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-[#656B70]" /></Link>
         <Link href="tel:00 92 518446205" > <FiPhone className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-[#656B70]" /></Link>
        </div>
        <p className="text-[#656B70] text-[14px] lg:text-[16px] font-Noto font-[500] mb-0 xsm:mb-[20px]">HQ ADDRESS</p>
        <p className="text-[#656B70] text-[12px] lg:text-[14px] font-[500]">5117 Joseph St Lewisville, TX 75056,
          Texas, USA</p>

        <p className="text-[#656B70] text-[14px] lg:text-[16px] font-[500]">OFFSHORE OFFICE 1</p>
        <p className="text-[#656B70] text-[12px] lg:text-[14px] font-[500]">Augustine Heights, Queensland, 4300, Australia</p>
        <p className="text-[#656B70] text-[14px] lg:text-[16px] font-[500]">OFFSHORE OFFICE 2</p>
        <p className="text-[#656B70] text-[12px] lg:text-[14px] font-[500]">Office 4019, 4th Floor, WTC, GIGA, DHA 2, Islamabad, Pakistan</p>
      </div>

      <div className="flex flex-col md:mt-0 mt-[30px] w-full xxm:w-[30%] md:w-[30%] gap-4 items-start">
        <p className="text-[#656B70] text-[16px] font-Noto font-[500] mb-0 xsm:mb-[20px]">COMPANY</p>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500  text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/about'} >About</Link>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500  text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/'} >Home</Link>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500  text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/work'} >Work</Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-[30px] w-full ssm:w-[60%] xxm:w-[60%] md:w-[30%] gap-4 items-start">
        <p className="text-[#656B70] text-[16px] font-Noto font-[500] mb-0 xsm:mb-[20px]">SERVICES</p>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500  text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/'} >Custom Development</Link>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500  text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/'} >Web & Mobile Design</Link>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500  text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/'} >AI / ML Solutions</Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-[30px] w-[100%] xxm:w-[30%] md:w-[20%] gap-4 items-start">
        <p className="text-[#656B70] text-[14px] lg:text-[16px] font-Noto font-[500] mb-0 xsm:mb-[20px]">CONTACT</p>
        <Link className="text-[#656B70] hover:text-[#1d1d1e] duration-500 text-[12px] lg:text-[14px] font-Noto font-[500]" href={'/contact'} >Contact</Link>
      </div>
      
    
    </div>

    <div className="w-full flex flex-wrap  items-center mt-[30px] justify-center md:justify-end gap-[5px] xxm:gap-[10px]">
      
        <p className=" text-[12px] xxm:text-[14px] underline font-[400] font-Noto text-[#656B70]" >Terms & Conditions</p>
        <p className=" text-[12px] xxm:text-[14px] underline font-[400] font-Noto text-[#656B70]" > Privacy Policy </p>
        <p className=" text-[12px] xsm:text-center xxm:text-[14px] font-[400] font-Nato text-[#656B70]" > Copyrights@2024 All Rights Reserved</p>
    
    </div>
    </div>

  </footer>
)

export default Footer