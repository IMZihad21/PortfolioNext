import type { NextPage } from 'next'
import Link from 'next/link'

const Nabvar: NextPage = () => {
    interface LinksType {
        title: string, path: string
    }

    const links: Array<LinksType> = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Blogs', path: '/blogs' },
    ]
    return (
        <nav className='md:flex justify-between mt-5 mb-10 md:mb-20'>
            <h1 className="text-4xl">ZèD.</h1>
            <ul className="flex space-x-2 text-xl md:space-x-5 mt-5 md:mt-0">
                {
                    links.map(link => <li className='' key={link.path}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Nabvar
