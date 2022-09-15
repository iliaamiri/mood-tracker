import {Mood} from "../../models/Mood";

interface MoodItemProps {
    moodItem: Mood
}

export default function MoodItem({moodItem}: MoodItemProps) {

    const renderRatings = () => {
        let result = '';
        for (let i = 0; i < 10; i++) {
            if (i < moodItem.rating) {
                result += '★';
            } else {
                result += '☆';
            }
        }
        return result;
    };

    const renderDate = () => {
        let date = new Date(moodItem.createdAt);
        return date.getDate() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getFullYear() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds();
    };

    return (
        <div className={'flex flex-col border-b-[2px]'}>
            <p className={'text-center'}>{renderDate()}</p>
            <p className={'text-center'}>{moodItem.feelingText}</p>
            <div>
                <p>{renderRatings()}</p>
            </div>
        </div>
    );
}