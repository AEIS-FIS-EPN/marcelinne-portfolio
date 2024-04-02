import { SideMenuItem } from './SideMenuItem'
import { playlists } from '../lib/data'
import { SideMenuCard } from './SideMenuCard'
// import {HomeIcon} from "../icons/Home"
export function AsideMenu () {
  return (
    <>
    <nav className="flex flex-col flex-1 gap-2 bg-black">
    <div className="bg-zinc-900 rounded-lg p-2">
        <ul>
            <SideMenuItem href="/#">
                {/* <SearchIcon /> */}
                Marcelinne
            </SideMenuItem>
                <SideMenuItem href="/">
                {/* <HomeIcon /> */}
                Inicio
            </SideMenuItem>
        </ul>
    </div>

    <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <ul>
            <SideMenuItem href="/">
                {/* <LibraryIcon /> */}
                Menu
            </SideMenuItem>
            {playlists.map((playlist) => <SideMenuCard playlist={playlist} />)}
        {/* {playlists.map((playlist) => <SideMenuCard playlist={playlist} />)} */}
        </ul>
    </div>
    </nav>
    </>
  )
}
// export default AsideMenu
