import type { GetStaticPaths, NextPage } from 'next'
import Image from 'next/image'
import { server } from '../../config'
import Project from '../../interfaces/Project'

interface ProjectType {
    project: Project
}

const Project: NextPage<ProjectType> = ({ project }) => {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-normal">{project?.name}</h1>
            <p className="mt-5 text-xl md:text-2xl">{project?.description}</p>
            <div className="py-10 space-x-1 md:space-x-5">
                {
                    project?.links?.map(btn => <a
                        className="bg-black text-white rounded-lg py-3 px-2 md:px-10"
                        href={btn.link}
                        target="_blank"
                        rel="noreferrer"
                        key={btn.name}
                    >
                        {btn.name}
                    </a>)
                }
            </div>
            <h1 className="text-2xl md:text-3xl mt-5 font-bold leading-normal">Screnshots</h1>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
                {/* Replace with carousel */}
                {
                    project?.screenshots.map(img => <div key={img} className="bg-black relative rounded-lg p-2 h-96 overflow-y-visible">
                        <Image layout="fill" objectFit="contain" className="rounded-lg w-full h-auto" src={img} alt={img} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Project

export const getStaticProps = async (context: any) => {
    const res = await fetch(`${server}/api/projects/${context.params.id}`);
    const project = await res.json();

    return {
        props: {
            project,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${server}/api/projects`);
    const projects = await res.json();
    const paths = projects.map((project: Project) => ({ params: { id: project.id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}
