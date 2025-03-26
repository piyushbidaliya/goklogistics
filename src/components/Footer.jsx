import { Link } from 'react-router-dom'
import  FOOTER_LINKS  from '../assets/footer_links'
import  SOCIALS  from '../assets/socials'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center pb-24 pt-20 relative'>
      <div className='max_padd_container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link to="/" className='mb-10 bold-20'>Shopee</Link>
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
