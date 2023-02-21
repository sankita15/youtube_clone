import {useEffect, useState} from "react";
import {POPULAR_VIDEOS} from "../constants";
import checkmark from './../assets/checkmark.png';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MainContainer = () => {
    const [videos, setVideos] = useState(null);
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const response = await fetch(POPULAR_VIDEOS)
        const json = await response.json()
        setVideos(json)
    }

    return (
        <div className={isMenuOpen ? "flex flex-wrap" : "flex flex-wrap ml-24"}>
            {
                videos?.items.map((video) => {
                    return <Link to={`/watch?v=${video.id}`} key={video.id} className={"m-3 flex flex-wrap shadow-lg p-4 rounded-lg"}><VideoCard info={video} className={"w-1/2"}/></Link>
                })
            }
        </div>
    )
}

const VideoCard = ({info}) => {
    return (
        <>
            {
                info && <div className={"w-80"}>
                    <img className={"w-80 rounded-xl"} src={info.snippet.thumbnails.high.url} alt={'thumnail'}/>
                    <div className={"flex my-2"}>
                        <img className={"w-8 h-8 rounded-full mr-2"} src={info.snippet.thumbnails.high.url}
                             alt={'thumnail'}/>
                        <div>
                            <div className={"break-words font-bold text-lg"}>{info.snippet.title}</div>
                            <div className={"flex items-center"}>
                                <div className={"text-base text-gray-700"}>{info.snippet.channelTitle}</div>
                                {info.contentDetails.licensedContent &&
                                    <img className={"w-3 h-3 mx-1"} src={checkmark} alt={"licensed"}></img>}
                            </div>
                            <div className={"text-base text-gray-700"}>{info.statistics.viewCount}</div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default MainContainer
