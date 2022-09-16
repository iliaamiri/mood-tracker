import type { NextApiRequest, NextApiResponse } from 'next';
import {Mood} from "../../../databaseAccessLayer/Mood";
import MoodRepository from "../../../services/moodRepository.api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mood>
) {
    const payload: { moodId: number } = JSON.parse(req.body);

    await MoodRepository.remove(payload.moodId);

    res.status(200).end();
}