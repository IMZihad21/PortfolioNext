import type { NextApiRequest, NextApiResponse } from 'next'
import { secrets } from '../../config';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(secrets.jsonAPI);
    const portfolioData = await response.json();
    const aboutMe = portfolioData.aboutMe;
    res.status(200).json(aboutMe)
}