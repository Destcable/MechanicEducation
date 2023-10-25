import { useState } from "react";
import { FirebaseConfig, FirebaseURL } from "../../config";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function TemplateLoader(template: string) {
    const [HTMLContent, setHTMLContent] = useState('');

    const app = initializeApp(FirebaseConfig);
    const storage = getStorage(app, FirebaseURL);
    const gsReference = ref(storage, template);

    getDownloadURL(gsReference)
        .then((response) => {
            axios.get(response)
                .then((response) => {
                    setHTMLContent(response.data);
                });
        })

    return HTMLContent;
}

export default TemplateLoader;