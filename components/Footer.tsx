import type { NextPage } from 'next'

const Footer: NextPage = () => {
    return (
        <div className='fixed h-6 bg-black text-white bottom-0 left-0 w-full'>
            <p className='text-center'>Built by <span className='font-bold'>Mofajjal Rasul</span></p>
        </div>
    )
}

export default Footer
