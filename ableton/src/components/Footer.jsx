import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { footerItems, languages, locations, secondaryLinks } from '../utills/footerItems'
import { Dropdown, EmailSignup, Icon, Logo} from './'

const FooterLinks = ({title, links}) => (
    <div>
        { title !== '' && <h1 className='mb-1 font-bold text-sm xl:text-lg'> {title} </h1> }

        <ul>
            {
                links.map(({id, title, link}) => (
                    <li key={id}>
                        <a href={link} className='mb-1 flex gap-1 items-center text-sm xl:text-lg'>
                             {title} 
                            <RiArrowRightSLine />
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
)

const SecondaryLink = ({title, link}) => (
    <a href={link} className='text-sm font-bold'> {title} </a>
)

const Footer = () => {
  return (
    <div className='p-[8.33vw] 2xl:p-[133.28px] bg-white border-t-2 border-gray-200'>
        <div className='mb-[4.166vw] 2xl:mb-[66.656px]'>
            <h1 className='text-3xl lg:text-5xl font-bold'> Ableton </h1>
        </div>

        <div className="flex flex-wrap">
            <div className='w-full lg:w-[30%] mb-[4.166vw] 2xl:mb-[66.656px] order-2 lg:order-1'>
                <div>
                    <FooterLinks title={footerItems[0].title} links={footerItems[0].links} />
                </div>
                <div className='mt-4 flex gap-3'>
                    <Icon background='bg-[#3477F2]' link='https://www.facebook.com' MediaIcon={<FaFacebook />} />
                    <Icon background='bg-[#1DA1F2]' link='https://www.facebook.com' MediaIcon={<FaTwitter />} />
                    <Icon background='bg-[#FF001D]' link='https://www.facebook.com' MediaIcon={<FaYoutube />} />
                    <Icon background='bg-[#F77737]' link='https://www.facebook.com' MediaIcon={<FaInstagram />} />
                </div>
            </div>

            <div className="w-full lg:w-[30%] mb-[4.166vw] 2xl:mb-[66.656px] order-3 lg:order-2">
                <FooterLinks title={footerItems[1].title} links={footerItems[1].links} />
            </div>

            
            <div className="w-full lg:w-[40%] mb-[4.166vw] 2xl:mb-[66.656px] order-1 lg:order-3">
                <div className='text-sm xl:text-lg'>
                    <h1 className='mb-1 font-bold'> Sign up to newsletter </h1>
                    <p> Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more. </p>
                </div>
                <EmailSignup />
            </div>
            
            <div className="w-full lg:w-[30%] mb-[4.166vw] 2xl:mb-[66.656px] pr-2 order-4">
                <FooterLinks title={footerItems[2].title} links={footerItems[2].links} />
            </div>

            <div className='w-full lg:w-[30%] mb-[4.166vw] 2xl:mb-[66.656px] order-5'>
                    <h1 className='mb-3 text-sm xl:text-lg font-bold'> Language and Location </h1>
                    <div className='flex gap-3 sm:gap-1 flex-col sm:flex-row'>
                        <Dropdown value='english' options={languages} />
                        <Dropdown value='India' options={locations}/>
                    </div>
            </div>
        </div>

        {/* Footer Secondary List */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
                {
                    secondaryLinks.map(({id, title, link}) => <SecondaryLink key={id} title={title} link={link} />)
                }
            </div>

            <div className='text-sm font-bold flex gap-6 items-center'>
                <p> Made in Berlin </p>
                <Logo />
            </div>
        </div>
    </div>
  )
}

export default Footer