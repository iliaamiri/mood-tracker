import IMoodRepository from "./moodRepository.interface";
import {Mood} from "../databaseAccessLayer/Mood";
import {AddMoodPayloadDTO} from "../models/AddMoodPayloadDTO";
import {UpdateMoodPayloadDTO} from "../models/UpdateMoodPayloadDTO";

const MoodRepository: IMoodRepository = {
    async getAll(): Promise<Mood[]> {
        try {
            const response = await fetch('/api/moods/');
            const jsonData = await response.json();

            return jsonData as Mood[];
        } catch (error) {
            debugger;
            alert("ERRROR");
            return [];
        }
    },
    async getOne(moodId) {
        try {
            const response = await fetch("/api/moods/" + moodId);
            console.log(response);
            return await response.json() as Mood;
        } catch (error) {
            //debugger;
            //alert(error);
            return {} as Mood;
        }
    },
    async add(newMood: AddMoodPayloadDTO): Promise<Mood> {
        const addedMood = await fetch('/api/moods/add', {
            method: "POST",
            body: JSON.stringify(newMood)
        });

        return await addedMood.json() as Mood;
    },
    async update(updateMoodPayloadDTO: UpdateMoodPayloadDTO): Promise<Mood> {
        const updatedMood = await fetch('/api/moods/update', {
            method: "POST",
            body: JSON.stringify(updateMoodPayloadDTO)
        });

        return await updatedMood.json() as Mood;
    },
    async remove(moodId: number): Promise<void> {
        await fetch('/api/moods/delete', {
            method: "POST",
            body: JSON.stringify({ moodId })
        });
    }
};

export default MoodRepository;