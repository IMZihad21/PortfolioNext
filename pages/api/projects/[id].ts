import type { NextApiRequest, NextApiResponse } from 'next'
import { secrets } from '../../../config';
import Project from '../../../interfaces/Project'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const response = await fetch(secrets.jsonAPI);
    const portfolioData = await response.json();
    const project = portfolioData.projects.find((element: Project) => element.id.toString() === id.toString())
    res.status(200).json(project)
}