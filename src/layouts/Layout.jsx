//   Layout.propTypes = {
//     title: PropTypes.string.isRequired,
// };

import './Layout.css'
import { AsideMenu } from '../components/AsideMenu.jsx'
import { Cover } from '../components/Cover.jsx'
function Layout () {
  return (
    <>
      <div id="app" className="relative h-screen p-2 gap-2">
      <aside className="[grid-area:aside] flex-col flex overflow-y-auto bg-gray-100">
        <AsideMenu />
        {/* <h1> Aside Menu</h1> */}
      </aside>

      <main
        className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full"
      >
        <Cover />
        <h3>Main area</h3>
        <slot />
      </main>

      <footer className="[grid-area:player] h-[80px]">
        {/* <Player client:load transition:name="media-player" transition:persist /> */}
      <h2>Player</h2>
      </footer>
    </div>
    </>
  )
}

export default Layout
