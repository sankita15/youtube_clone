import hamburger from './../assets/hamburger.png'
import logo from './../assets/logo.png'
import search from './../assets/search.png'
import user from './../assets/user.png'

const Header = () => {
    return (
        <div className={"grid grid-cols-4 shadow-2xl auto-cols-min gap-80 py-3"}>
            <div className={"flex"}>
            <img src={hamburger} alt={'menu'} className={"w-8 h-8 mx-5 my-4"}/>
            <img src={logo} alt={'logo'} className={"w-32 h-6 my-5"}/>
            </div>
            <div className={"flex col-span-2 my-2"}>
            <input className={"border-l-2 border-t-2 border-b-2 border-gray-200 p-4 h-12 my-3 w-[490px] rounded-l-full"} placeholder={'Search'}/>
            <img src={search} alt={'search'} className={"w-16 h-12 my-3 border-2 border-gray-200 rounded-r-full bg-white"}/>
            </div>
            <img src={user} alt={'user'} className={"w-12 h-12 my-4 ml-auto mr-5"}/>
        </div>
    )
}

export default Header
