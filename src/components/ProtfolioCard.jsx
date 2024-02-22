'use client'
import Image from 'next/image'
import { motion } from 'framer-motion';

import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
const ProtfolioCard = ({ logo, spanTitle, title, desc, image, id }) => {

    const tranitiom = { duration: 4, type: 'spring' }
    const blueGradient = {
        background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
    }
    return (
        <motion.div initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={tranitiom} className='flex flex-col mdd:flex-row my-[20px] rounded-[30px] h-auto mdd:h-[420px] lg:h-[490px] xlg:h-[510px]  xll:h-[490px] w-full relative items-center justify-center'>


            <div className='rounded-[20px] mdd:rounded-e-[0px] rounded-s-[20px] mdd:rounded-s-[30px] h-full w-full my-[40px] mdd:w-[45%] flex flex-col gap-[16px] px-[20px] xsm:px-[20px] xlg:px-[30px] xll:px-[55px] py-[20px] items-start justify-center ssm:py-[60px]  bg-white '>
                <Image src={logo} width={100} height={100} className='w-[120px] lg:w-[228px] h-[70px]' alt='Logo image' />
                <h3 className=' text-[15px] leading-[38px] ssm:text-[18px] xsm:text-[22px] lg:text-[28px] font-normal font-Montserrat'><span className='text-[#2957A7] font-bold'>{spanTitle} </span>{title} <br /></h3>

                <p className='text-[#656B70] xsm:w-full font-normal text-[16px] mdd:text-[14px] xlg:text-[16px] font-Noto w-[90%] leading-[28px]'>{desc}</p>

                <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" href={`/${id}`} > View case <Image src={'/assets/Arrow.svg'} width={100} height={100} alt='arrow' className=' w-[14px] xsm:w-[18px]' /> </Link>


            </div>
            <div style={blueGradient} className='overflow-hidden flex items-center justify-center h-full rounded-[20px] mdd:rounded-e-[0px] rounded-s-[20px] mdd:rounded-s-[30px] px-[5px] ssm:px-[70px] py-[80px] ssm:py-[80px] bg-l w-full mdd:w-[55%] lg:w-[60%]'>
                <Image src={image} width={700} height={366} className='w-full h-full object-contain' alt='product image' />
            </div>

        </motion.div>
    )
}

export default ProtfolioCard