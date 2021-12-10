import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import Project from '../interfaces/Project'

interface ProjectLists {
    projects: Array<Project>
};

const ProjectLists: NextPage<ProjectLists> = ({ projects }) => {
    return (
        <div data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-normal">My Projects</h1>
            <div>
                <div className="grid md:grid-cols-3 gap-5 mt-10">
                    {
                        projects?.map(project =>
                            <div key={project.id} className="relative h-[580px] rounded-lg shadow-lg">
                                <Image className='rounded-lg' layout='fill' src={project.cover} alt={project.name} />

                                <div className="absolute bottom-0 text-center rounded-lg bg-black dark:bg-white text-white dark:text-black bg-opacity-75 dark:bg-opacity-75 w-full py-4">
                                    <h4 className="mb-3 text-2xl font-semibold tracking-tight">{project.name}</h4>
                                    <Link href={`/project/${project.id}`} passHref>
                                        <button className="bg-white dark:bg-black text-xl text-black dark:text-white px-20 py-2 rounded-lg">More Details</button>
                                    </Link>
                                </div>
                            </div>)
                    }
                </div>
            </div >
        </div >
    );
}

export default ProjectLists
