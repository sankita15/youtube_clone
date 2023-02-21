import {useSearchParams} from "react-router-dom";
import Comments from "./components/Comments";
import {useEffect, useState} from "react";
import {POPULAR_VIDEOS} from "./constants";
import checkmark from "./assets/checkmark.png";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const [videos, setVideos] = useState(null);
    const [currentVideo, setCurrentVideo] = useState({});

    useEffect(() => {
        getVideos()
    }, [])

    useEffect(() => {
        videos && setCurrentVideo(videos.items.find((video) => video.id === videoId))
    }, [videos, videoId])

    const getVideos = async () => {
        const response = await fetch(POPULAR_VIDEOS)
        const json = await response.json()
        setVideos(json)
    }

    return <div>
        <iframe
            width="1080"
            height="570"
            src={'https://www.youtube.com/embed/' + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
        </iframe>
        <div className={'w-[1080px]'}>
            <div className={"text-xl font-bold my-3"}>{currentVideo.snippet?.title}</div>
            <div className={"flex justify-between"}>
                <div className={"flex"}>
                    <img className={"w-12 h-12 rounded-full"} src={currentVideo.snippet?.thumbnails.high.url}
                         alt={'thumnail'}/>
                    <div className={"px-4 my-1"}>
                        <div className={"flex"}>
                            <div className={"text-base font-bold"}>{currentVideo.snippet?.channelTitle}</div>
                            {currentVideo.contentDetails?.licensedContent &&
                                <img className={"w-3 h-3 mx-1 mt-1.5"} src={checkmark} alt={"licensed"}></img>}
                        </div>
                        <div className={"text-gray-500 text-sm"}>{currentVideo.statistics?.viewCount} views</div>
                    </div>
                </div>
                <div className={"flex"}>
                    <div className={"bg-gray-100 rounded-xl m-2 py-2 px-4"}>Share</div>
                    <div className={"bg-gray-100 rounded-xl m-2 py-2 px-4"}>Download</div>
                    <div className={"bg-gray-100 rounded-xl m-2 py-2 px-4"}>Clip</div>
                    <div className={"bg-gray-100 rounded-xl m-2 py-2 px-4"}>Save</div>
                    <div className={"bg-gray-100 rounded-full m-2 w-10 h-10 px-3 py-1"}>...</div>
                </div>
            </div>
        </div>
        <Comments/>
    </div>
}

export default WatchPage
