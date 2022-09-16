import type { NextApiRequest, NextApiResponse } from 'next';
import {Mood} from "../../../databaseAccessLayer/Mood";
import MoodRepository from "../../../services/moodRepository.api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mood>
) {
    const { moodId } = req.query;

    let moodIdInt = Array.isArray(moodId) ? parseInt(moodId.join("")) : parseInt(moodId ?? '');
    const mood = await MoodRepository.getOne(moodIdInt);

    res.status(200).json(mood);
}