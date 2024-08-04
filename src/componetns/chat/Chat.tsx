import React, {Component, useEffect, useState} from 'react';
import "./chat.scss"
import ChatHeader from "./chatHeader";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from "./ChatMessage";
import {useAppSelector} from "../../app/hooks";
import {
    addDoc,
    collection,
    CollectionReference,
    DocumentData,
    onSnapshot, orderBy, query,
    serverTimestamp,
    Timestamp
} from "firebase/firestore";
import {db} from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";


const Chat = () => {
    const [inputText, setInputText] = useState<string>("")
    const channelName = useAppSelector((state) => state.channel.channelName)
    const user = useAppSelector((state) => state.user.user)
    const channelId = useAppSelector((state) => state.channel.channelId)
    const {subDocuments: messages} = useSubCollection("channels", "messages")
    //
    // console.log(inputText)
    //
    messages.forEach(value => console.log(value))

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // これでフォームを送ってもサイトのリロードを防ぐ
        e.preventDefault();
        // console.log("send Message")

        //     channelコレクションの中にあるmessagesコレクションの中にあるメッセージ情報を入れる
        //     引数　第3でチャンネルIDを取得してそのチャンネルIDに入っているメッセージを第4引数に設定して取ってくる。
        const collectionRref: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages")
        const docRef = await addDoc(collectionRref, {
                message: inputText,
                timestamp: serverTimestamp(),
                user: user
            }
        );
        console.log(docRef)
        setInputText("");

    };
    console.log(channelName)
    return (
        <div className="chat">
            {/*chatHeader*/}
            <ChatHeader channelName={channelName}/>
            {/*chatMessage*/}
            {/*index　→　配列の連番。　本来であれば配列の添え字は引数で撮らない方がよい。→　削除機能があるならばindexは避けて固有のIdを引数に取る必要がある*/}
            <div className="chatMessage">
                {messages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                    />
                ))}
                {/*<ChatMessage/>*/}
                {/*<ChatMessage/>*/}
                {/*<ChatMessage/>*/}

            </div>
            {/*chatInput*/}
            <div className="chatInput break-word">
                <AddCircleOutlineIcon/>
                <form action="" className="break-word">
                    {/*<textarea  placeholder="#Udemyへメッセージを送信"*/}
                    <input type="text" placeholder="#Udemyへメッセージを送信"
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                           value={inputText}
                           className="break-word"
                    />
                    <button type="submit" className="chatInputButton"
                            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                                sendMessage(e)
                            }>
                        送信
                    </button>
                </form>

                <div className="chatInputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    );
}


export default Chat;
