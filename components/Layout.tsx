import Navbar from './Navbar'
import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout
