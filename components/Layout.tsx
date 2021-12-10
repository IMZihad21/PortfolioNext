import Navbar from './Navbar'
import type { NextPage } from 'next'
import Footer from './Footer'

const Layout: NextPage = ({ children }) => {
    return (
        <div className="pt-5 md:pt-10 px-5 pb-5 md:px-40 min-h-screen">
            <Navbar />
            <main className='mb-6'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
