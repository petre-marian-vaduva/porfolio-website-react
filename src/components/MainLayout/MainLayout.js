import './MainLayout.css'
import '../VideoItem/VideoItem'
import VideoItem from "../VideoItem/VideoItem";
import {useState} from "react";
function MainLayout() {
    const [videos,setVideos]=useState([1,2,3]);
    function clickHandler(){
        setVideos ([1,2,3,4,5])
    }
    return (
        <div className='MainLayout'>
            {videos.map(videoNr =>(
                <VideoItem name={`Video ${videoNr}`}></VideoItem>
            ))}
            <button onClick={()=>clickHandler()}>Click</button>
        </div>
    );
}

export default MainLayout;