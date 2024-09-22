import Image from 'next/image'
import TypeWriter from '../common/type-writer'

export default function Introduction(){

    return (
        <div className="flex items-center flex-col size-full" >

            <div className='mt-52'>
                <div className='m-6 flex items-center flex-col '>
                    <Image 
                        className='rounded-md'
                        src="/static/profile-gabriel.jpeg"
                        width={200}
                        height={200}
                        alt="Picture of the author" 
                    />   
                </div>

                <div>
                    <span className='text-8xl' >
                        Hello! My name is Gabriel.
                    </span>

                    <div className='flex justify-center text-primary text-6xl '>
                        I'm <TypeWriter  words={['a Back-end developer', 'a Front-end developer', 'a Full-stack developer']} />
                    </div>
                </div>
            </div>

        </div>
    )
}