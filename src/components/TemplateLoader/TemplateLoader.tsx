import React, { useState } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function PugLoader() {
    const [HTMLContent, setHTMLContent] = useState('');

    const firebaseConfig = {
        apiKey: "AIzaSyDk8eyLT_mYVjMvPvmMsT5WpJnr0p4jDas",
        authDomain: "mechaniceducation-bebac.firebaseapp.com",
        projectId: "mechaniceducation-bebac",
        storageBucket: "buckets/mechaniceducation-bebac.appspot.com",
        messagingSenderId: "146398520504",
        appId: "1:146398520504:web:61ff0ab0be1c77c493404d",
        measurementId: "G-0KR9RLS0QB"
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app, "gs://mechaniceducation-bebac.appspot.com");
    const gsReference = ref(storage, '/templates/test.html');

    getDownloadURL(gsReference)
        .then((response) => {
            axios.get(response)
                .then((response) => {
                    setHTMLContent(response.data);
                });
        })

    


    return (
        <div>
            <h2>Загруженный Pug-файл</h2>
            <div dangerouslySetInnerHTML={{ __html: HTMLContent }}/>
        </div>
    )
}

export default PugLoader;