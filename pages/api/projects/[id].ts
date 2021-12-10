import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../../interfaces/Project'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const response = await fetch(`https://gist.githubusercontent.com/IMZihad21/87c7211efa951e1f10b4d4f5c89fc5d5/raw/portfolioData.json`);
    const portfolioData = await response.json();
    const project = portfolioData.projects.find((element: Project) => element.id.toString() === id.toString())
    res.status(200).json(project)
}