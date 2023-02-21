import home from './../assets/home.png'
import shorts from './../assets/shorts.png'
import subscription from './../assets/subscription.png'
import trending from './../assets/trending.png'
import music from './../assets/music.png'
import movies from './../assets/movies.png'
import live from './../assets/live.png'
import gaming from './../assets/gaming.png'

import library from './../assets/library.png'
import history from './../assets/history.png'
import yourVideos from './../assets/yourVideos.png'
import likedVideos from './../assets/likedVideos.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MenuItems = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    return (
        <div className={"w-64 py-5 pr-5 pl-5"} style={{fontFamily: '"Roboto","Arial",sans-serif'}}>
            <Link to={'/'}><MenuItem imgSrc={home} name={'Home'} isOpen={isMenuOpen}/></Link>
            <MenuItem imgSrc={shorts} name={'Shorts'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={subscription} name={'Subscription'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={trending} name={'Trending'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={music} name={'Music'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={movies} name={'Movies & Shows'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={live} name={'Live'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={gaming} name={'Gaming'} isOpen={isMenuOpen}/>
            {isMenuOpen && <div className={"border-t-2 rounded border-gray-200 w-48 my-6"}></div>}
            <MenuItem imgSrc={library} name={'Library'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={history} name={'History'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={yourVideos} name={'Your videos'} isOpen={isMenuOpen}/>
            <MenuItem imgSrc={likedVideos} name={'Liked videos'} isOpen={isMenuOpen}/>
        </div>
    )
}

const MenuItem = ({imgSrc, name, isOpen}) => {
    return (
        <div className={"flex items-center"}>
            <img src={imgSrc} alt={'Home'} className={"w-7 h-6 m-3"}/>
            {isOpen && <div className={"w-64 text-sm mt-2"}>{name}</div>}
        </div>
    )
}

export default MenuItems
