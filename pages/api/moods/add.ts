import type { NextApiRequest, NextApiResponse } from 'next';
import {Mood} from "../../../databaseAccessLayer/Mood";
import {AddMoodPayloadDTO} from "../../../models/AddMoodPayloadDTO";
import {prisma} from "../../../databaseAccessLayer/databaseContext";
import MoodRepository from "../../../services/moodRepository.api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mood>
) {
    const payload: AddMoodPayloadDTO = JSON.parse(req.body);

    const createdMood = await MoodRepository.add(payload);

    res.status(200).json(createdMood);
}