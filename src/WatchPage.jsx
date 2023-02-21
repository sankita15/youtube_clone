import {useSearchParams} from "react-router-dom";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    return <div>
        <iframe
            width="1080"
            height="570"
            src={'https://www.youtube.com/embed/' + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
        </iframe>
    </div>
}

export default WatchPage
