import type { GetStaticProps, NextPage } from 'next'
import { server } from '../config'

interface About {
    aboutMe: Array<string>
}

const About: NextPage<About> = ({ aboutMe }) => {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-normal">About</h1>
            <div className="text-xl md:text-2xl mt-5 md:mt-10 space-y-5 font-semibold leading-relaxed md:leading-loose">
                {
                    aboutMe.map(line => <p key={line}>{line}</p>)
                }
            </div>
        </div>
    )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${server}/api/aboutMe`);
    const aboutMe = await res.json();

    return {
        props: {
            aboutMe,
        },
    }
}
