import Navbar from './Navbar'
import type { NextPage } from 'next'
import Footer from './Footer'

const Layout: NextPage = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='mb-6'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
