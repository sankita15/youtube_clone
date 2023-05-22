import hamburger from './../assets/hamburger.png'
import logo from './../assets/logo.png'
import search from './../assets/search.png'
import user from './../assets/user.png'
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import {useEffect, useState} from "react";

const Header = () => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const getSearchSuggestion = async () => {
        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
        const json = await response.json()
        setSearchSuggestions(json[1])
    }

    useEffect(() => {
        setTimeout(() => getSearchSuggestion(), 200);

        return () => {
            clearInterval()
        }
    }, [searchQuery])

    return (
        <>
            <div className={"grid grid-cols-4 auto-cols-min gap-80 pt-2"}>
                <div className={"flex"}>
                    <img src={hamburger} alt={'menu'} className={"w-8 h-8 mr-5 ml-7 my-4"} onClick={() => dispatch(toggleMenu())}/>
                    <img src={logo} alt={'logo'} className={"w-32 h-6 my-5"}/>
                </div>
                <div className={"flex col-span-2 my-2"}>
                    <input
                        className={"border-l-2 border-t-2 border-b-2 border-gray-200 p-4 h-12 my-3 w-[490px] rounded-l-full"}
                        placeholder={'Search'}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <img src={search} alt={'search'}
                         className={"w-16 h-12 my-3 border-2 border-gray-200 rounded-r-full bg-white"}/>
                </div>
                {searchSuggestions.length !== 0 && <div className={"absolute bg-white py-2 px-5 w-[480px] mx-[540px] mt-[68px] border rounded"}>
                    <ul>
                        {
                            searchSuggestions.map((searchSuggestion, index) => (
                                <li key={index} className={"py-2"}>{searchSuggestion}</li>
                            ))
                        }
                    </ul>
                </div>}
                <img src={user} alt={'user'} className={"w-12 h-12 my-4 ml-auto mr-5"}/>
            </div>
        </>
    )
}

export default Header
