import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataLoader, DATA_URL } from "../../../services/dataLoader";
import { LocalStorageService, LS_KEYS } from "../../../services/localStorage";
import { Lesson } from "../../lesson/Lesson";
import { VideoComponent } from "../../videoComponent"
import './course.css';

export function Course() {
    const {state} = useLocation();
    const [data, setData] = useState(LocalStorageService.get(LS_KEYS.SPECIFIC_COURSE) || null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            await DataLoader.set(DATA_URL.COURSE_PATH + `${state.id}`);
            setData(LocalStorageService.get(LS_KEYS.SPECIFIC_COURSE));
        }
        fetchData()
        .catch(console.error);
    }, [state.id]);
    
    useEffect(() => {
        setUrl(data?.meta.courseVideoPreview.link);
    }, [data]);

    return(
        <>
            { data ?
            <div className="Lessons_container">
                <VideoComponent data={{url}}/>
                <div className="Lessons_info">
                    <h3 className="Lessons_title">{data.title}</h3>
                    <p className="Lessons_description">{data.description}</p>

                    <ol className="Lessons_list">
                        {data.lessons?.map(el => <Lesson key={el.id} data={{el, setUrl}}/>)}
                    </ol>

                </div>
            </div>
            : ''}

        </>
    );
}