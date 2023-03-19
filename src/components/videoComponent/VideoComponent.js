import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
export function VideoComponent(props){

    const [mutedValue, setMutedValue] = useState(true);
    const url = props.data.url;

    const clip = document.querySelector('.clip');
    let videoClip;

    if(clip){
        videoClip = clip.children[0];
    }
    
    
    
    useEffect(() => {
        if(videoClip){
            console.log(videoClip.muted)
            if(mutedValue){
                videoClip.setAttribute('onmouseover', 'this.play()');
                videoClip.setAttribute('onmouseout', 'this.pause()');
            } else if (!mutedValue){
                videoClip.removeAttribute('onmouseover');
                videoClip.removeAttribute('onmouseout');
            }
        }
    }, [mutedValue, videoClip]);

    useEffect(() => {
        if(videoClip){
            clip.addEventListener('click', () => {
                setMutedValue(videoClip.muted)
            });
            videoClip.addEventListener('volumechange', () => {
                setMutedValue(videoClip.muted);
            });
        }
    })

    return(
        <ReactPlayer
            className='clip' 
            url={url} 
            controls
            muted
        />
    );
}