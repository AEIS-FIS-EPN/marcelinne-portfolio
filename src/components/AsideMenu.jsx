import { SideMenuItem } from "./SideMenuItem"
// import {HomeIcon} from "../icons/Home"
export function AsideMenu() {
    return (
    <>
    <nav class="flex flex-col flex-1 gap-2">
    <div class="bg-zinc-900 rounded-lg p-2">
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

    <div class="bg-zinc-900 rounded-lg p-2 flex-1">
        <ul>
            <SideMenuItem href="/">
                {/* <LibraryIcon /> */}
                Menu
            </SideMenuItem>
        {/* {playlists.map((playlist) => <SideMenuCard playlist={playlist} />)} */}
        </ul>
    </div>
    </nav>
    </>
    )
}
// export default AsideMenu