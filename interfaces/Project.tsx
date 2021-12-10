interface Project {
    id: number;
    name: string;
    cover: string;
    links: { name: string, link: string }[]
    description: string;
    screenshots: string[];
}

export default Project;