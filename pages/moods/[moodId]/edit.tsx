import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import MoodRepository from "../../../services/moodRepository.react";

const EditMood: NextPage = () => {
    const router = useRouter();
    const { moodId } = router.query;
    let moodIdInt = Array.isArray(moodId) ? parseInt(moodId.join("")) : parseInt(moodId ?? '');

    const [notes, setNotes] = useState<string>("");
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        if (moodId !== undefined) {
            (async function() {
                let mood = await MoodRepository.getOne(moodIdInt);
                setNotes(mood.feelingText);
                setRating(mood.rating);
            })();
        }
    }, [moodId]);

    const updateMoodHandle = async () => {
        try {
            await MoodRepository.update({
                moodId: moodIdInt,
                feelingText: notes,
                rating: rating
            });

            await router.push("/");
        } catch (error) {
            debugger;
            console.log(error);
            alert("error");
        }
    };

    return (
        <div className={'container mx-auto h-screen flex flex-col align-center place-content-center justify-center'}>
            <h1 className={'text-center text-6xl font-bold'}>Mood Tracker</h1>
            <div className={'flex justify-center mt-2'}>
                <label>Notes:</label>
                <input className={'bg-zinc-600 rounded ml-1'} value={notes} onChange={(event) => setNotes(event.target.value)} />
            </div>
            <div className={'flex justify-center mt-1 mb-2'}>
                <label>Rating:</label>
                <input className={'bg-zinc-600 rounded ml-1'} type={'number'} max={10} min={0} value={rating} onChange={(event) => setRating(parseInt(event.target.value))}/>
            </div>
            <div className={'flex justify-center'}>
                <button className={'btn btn-black'} onClick={() => updateMoodHandle()}>Submit</button>
            </div>
        </div>
    );
};

export default EditMood;