import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../app/hooks";
import  { CollectionReference, Query } from  "firebase/firestore"
import {collection, query, onSnapshot, DocumentData} from 'firebase/firestore'
import firebase from "firebase/compat";
import {channel} from "node:diagnostics_channel";
import {db} from "../firebase";

interface Channels {
    id: string,
    channel: DocumentData;
}


const UseCollection = (data : string) => {

    const [documents, setdocuments] = useState<Channels[]>([]);
    // ログインしたとの情報をreduxのstoreから持ってくることによってアプリに反映することができる
    const collectionRef : Query<DocumentData> = query(collection(db, "channels"));
    useEffect(() => {
        onSnapshot(collectionRef, (querySnapshot) => {
            const channelsResults: Channels[] = [];
            querySnapshot.forEach((doc) =>
                channelsResults.push({
                    id: doc.id,
                    channel: doc.data(), 多分４３講義から
                }))
            setdocuments(channelsResults);
        })
    }, []);

    return (
        <div>useCollection</div>
        )
        ;
}


export default UseCollection;