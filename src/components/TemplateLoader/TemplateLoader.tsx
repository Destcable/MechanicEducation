import { useState } from "react";
import { FirebaseConfig, FirebaseURL } from "../../config";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface TemplateLoaderProps {
    template: string
}


function TemplateLoader(props: TemplateLoaderProps) {
    const [HTMLContent, setHTMLContent] = useState('');

    const app = initializeApp(FirebaseConfig);
    const storage = getStorage(app, FirebaseURL);
    const gsReference = ref(storage, props.template);

    getDownloadURL(gsReference)
        .then((response) => {
            axios.get(response)
                .then((response) => {
                    setHTMLContent(response.data);
                });
        })

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: HTMLContent }} />
        </div>
    )
}

export default TemplateLoader;