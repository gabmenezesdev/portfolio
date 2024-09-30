import Image from 'next/image'
import OutlinedButton from '../common/outlined-button'

export default function Header(){
    return (
        <header className='flex p-2 h-16 font-semibold' >
            
            <div className='flex items-center justify-center w-1/12'>
                <Image 
                    src="/static/favicon.png"
                    width={40}
                    height={40}
                    alt="Picture of the author" 
                />
            </div>

            <div className='flex items-center w-6/12'>
                <ul className='list-none flex items-center justify-center p-o ml-20'>
                    <li>
                        <a href="#experiences" className='me-4 hover:underline md:me-6 ml-10' >Experience</a>
                    </li>
                    <li>
                        <a href="#about-me" className='me-4 hover:underline md:me-6 ml-10' >About me</a>
                    </li>
                    <li>
                        <a href="#" className='me-4 hover:underline md:me-6 ml-10' >Contact</a>
                    </li>
                </ul>
            </div>

            <div className='flex items-center justify-end w-5/12'>
                <ul className='list-none flex items-end justify-end p-o m-0 mr-12'>
                    <li>
                        <a href="#" className='me-4 hover:underline md:me-6' >
                            <OutlinedButton title='See my work' />
                        </a>
                    </li>
                </ul>
            </div>


        </header>
    )
}