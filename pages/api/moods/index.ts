// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {Mood} from "../../../databaseAccessLayer/Mood";
import MoodRepository from "../../../services/moodRepository.api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mood[]>
) {
    const allMoods = await MoodRepository.getAll();

    res.status(200).json(allMoods as Mood[]);
}