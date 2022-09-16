import type { NextApiRequest, NextApiResponse } from 'next';
import {Mood} from "../../../databaseAccessLayer/Mood";
import {UpdateMoodPayloadDTO} from "../../../models/UpdateMoodPayloadDTO";
import MoodRepository from "../../../services/moodRepository.api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Mood>
) {
    const payload: UpdateMoodPayloadDTO = JSON.parse(req.body);

    const updatedMood = await MoodRepository.update(payload);

    res.status(200).json(updatedMood as Mood);
}