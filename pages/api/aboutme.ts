import type { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`https://gist.githubusercontent.com/IMZihad21/87c7211efa951e1f10b4d4f5c89fc5d5/raw/portfolioData.json`);
    const portfolioData = await response.json();
    const aboutMe = portfolioData.aboutMe;
    res.status(200).json(aboutMe)
}