import { Link } from 'react-router-dom'
import  FOOTER_LINKS  from '../assets/footer_links'
import  SOCIALS  from '../assets/socials'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center mt-16 relative bg-[#2f2e2e] p-8'>
      <div className='max-w-[1170px] mx-auto flex w-full flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-[10%] text-white'>
          <Link to="/" className='mb-10 bold-20'>Copyright © 2018 Gok Logistics Pvt. Ltd. <br />All Rights Reserved.</Link>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((col)=>(
              <FooterColumn title={col.title} key={col.title}>
                  <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                    {col.links.map((link)=>(
                      <Link to="/" key={link}>{link}</Link>
                    ))}
                  </ul>
              </FooterColumn>
            ))}
            <div className='flex'>
              <FooterColumn>
                <ul className='flex gap-4'>
                  {SOCIALS.links.map((link)=>(
                    <Link to="/" key={link}><img src={link} alt="socialicon" height={22} width={22}/></Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({title, children})=>{
  return(
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default Footer
