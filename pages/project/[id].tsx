import type { GetStaticPaths, NextPage } from 'next'
import { server } from '../../config'
import Project from '../../interfaces/Project'

interface ProjectType {
    project: Project
}

const Project: NextPage<ProjectType> = ({ project }) => {
    return (
        <div>
            <h1 className="text-3xl text-center">
                {project.name}
            </h1>
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
