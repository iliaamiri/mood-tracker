import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import {useEffect, useState} from "react";
import {Mood} from "../databaseAccessLayer/Mood";
import MoodItem from "../components/Mood/MoodItem";
import MoodRepository from "../services/moodRepository.react";

enum OrderByEnum {
    Date,
    Rate
}

const Home: NextPage = () => {
    const [moodsList, setMoodList] = useState<Mood[]>([]);

    useEffect(() => {
        (async function () {
            const allMoods = await MoodRepository.getAll();

            setMoodList([...allMoods]);
        })();
    }, []);

    const deleteCallback = async (moodId: number) => {
        setMoodList((currentMoodList) => {
            let newList = currentMoodList.filter(mood => mood.moodId !== moodId);
            return [...newList];
        });
        await MoodRepository.remove(moodId);
    };

    const orderByHandler = (orderBy: OrderByEnum) => {
        if (orderBy === OrderByEnum.Date) {
            setMoodList((currentMoodList) => {
                let newList = currentMoodList.sort((mood1, mood2) => new Date(mood2.createdAt).getTime() - new Date(mood1.createdAt).getTime());
                return [...newList];
            });
        } else if (orderBy === OrderByEnum.Rate) {
            setMoodList((currentMoodList) => {
                let newList = currentMoodList.sort((mood1, mood2) => mood2.rating - mood1.rating);
                return [...newList];
            });
        } else {
            debugger;
            alert("ERROR");
        }
    };

    return (
        <div className={'container mx-auto h-screen flex flex-col align-center place-content-center justify-center'}>
            <h1 className={'text-center text-6xl font-bold'}>Mood Tracker</h1>
            <div className={'flex justify-center'}>
                <button className={'btn btn-black'}>
                    <Link href={'/moods/add'}>Add Mood</Link>
                </button>
            </div>
            <div className={'flex justify-center'}>
                <button className={'btn btn-black'} onClick={() => orderByHandler(OrderByEnum.Date)}>Order By Date
                </button>
                <button className={'btn btn-black'} onClick={() => orderByHandler(OrderByEnum.Rate)}>Order By Rating
                </button>
            </div>
            <div className={'flex justify-center items-center flex-col'}>
                {
                    moodsList.map((moodItem: Mood, index) => (
                        <MoodItem key={moodItem.moodId} moodItem={moodItem} deleteCallback={deleteCallback} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
