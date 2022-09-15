import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import {useEffect, useState} from "react";
import {Mood} from "../models/Mood";
import MoodItem from "../components/Mood/MoodItem";

enum OrderByEnum {
    Date,
    Rate
}

const Home: NextPage = () => {
    const [moodsList, setMoodList] = useState<Mood[]>([
        {
            moodId: 1,
            feelingText: 'ayy',
            createdAt: 23234332,
            rating: 7
        }
    ]);

    useEffect(() => {

    }, []);

    const orderByHandler = (orderBy: OrderByEnum) => {
        if (orderBy === OrderByEnum.Date) {

        } else if (orderBy === OrderByEnum.Rate) {

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
                <button className={'btn btn-black'} onClick={() => orderByHandler(OrderByEnum.Date)}>Order By Date</button>
                <button className={'btn btn-black'} onClick={() => orderByHandler(OrderByEnum.Rate)}>Order By Rating</button>
            </div>
            <div className={'flex justify-center'}>
                {
                    moodsList.map((moodItem: Mood, index) => (
                        <MoodItem key={moodItem.moodId} moodItem={moodItem} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
