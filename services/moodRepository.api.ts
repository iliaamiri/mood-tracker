import IMoodRepository from "./moodRepository.interface";
import {prisma} from "../databaseAccessLayer/databaseContext";
import {Mood} from "../databaseAccessLayer/Mood";

const MoodRepository: IMoodRepository = {
    async getAll() {
        return await prisma.mood.findMany() as Mood[];
    },

    async getOne(moodId) {
        return await prisma.mood.findUnique({
            where: {
                moodId: moodId
            }
        }) as Mood;
    },

    async update(moodUpdatePayload) {
        return await prisma.mood.update({
            where: {
                moodId: moodUpdatePayload.moodId
            },
            data: {
                feelingText: moodUpdatePayload.feelingText,
                rating: moodUpdatePayload.rating
            }
        }) as Mood;
    },

    async add(newMood) {
        return await prisma.mood.create({
            data: {
                feelingText: newMood.feelingText,
                rating: newMood.rating
            }
        }) as Mood;
    },

    async remove(moodId) {
        await prisma.mood.delete({
            where: {
                moodId: moodId,
            },
        });
    }
};

export default MoodRepository;