import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../app/hooks";
import {CollectionReference, orderBy, Query, Timestamp} from "firebase/firestore"
import {collection, query, onSnapshot, DocumentData} from 'firebase/firestore'
import firebase from "firebase/compat";
import {channel} from "node:diagnostics_channel";
import {db} from "../firebase";


interface Messages {
    timestamp: Timestamp;
    message: string;
    user: {
        uid: string;
        photo: string;
        email: string;
        displayName: string;
    }

}



const UseSubCollection = (collectionName : string , SubCollectionName : string) => {

    const channelId = useAppSelector((state) => state.channel.channelId)

    const [subDocuments, setSubdocuments] = useState<Messages[]>([]);

    // ログインしたとの情報をreduxのstoreから持ってくることによってアプリに反映することができる
    useEffect(() => {

        // collectionRefは何を参照するのかを示している。　onSnapshotは何をリアルタイムで描画するのかを設定する。　→　collectionRefの創庫から取り出す的な
        let collecitionRef = collection(
            db,
            collectionName,
            String(channelId),
            SubCollectionName
        );
        // firebase 昇順　→　desc 降順　→　asc　→　古い日付順で値を取得したい場合はasc
        const collectionRefOrederBy = query(collecitionRef , orderBy("timestamp" ,"asc"));
        // snapshotは切り取りの意味を持っている
        onSnapshot(collectionRefOrederBy, (snapshot) => {
            let results: Messages[] = [];
            // forEachで一つ一つ展開していく
            snapshot.docs.forEach((doc) => {
                console.log(doc.data())
                results.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user
                })
            })
            setSubdocuments(results)
            //     セットメッセージで更新をかけてあげる →　useStateで初期化したmessagesを取り出す
        });
    }, [channelId]);
    return (
        {subDocuments}
    )
        ;
}


export default UseSubCollection;