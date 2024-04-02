import { colors } from './colors'

const playlists = [
  {
    id: '1',
    menuId: 1,
    title: 'About Me',
    color: colors.yellow,
    cover: '/images/about_cover.jpeg',
    artists: ['Marcela Montalvo', '24']
  },
  {
    id: '2',
    menuId: 2,
    title: 'Education',
    color: colors.green,
    cover: '/images/Education_cover.jpeg',
    artists: ['Courses', 'Extra']
  },
  {
    id: '3',
    menuId: 3,
    title: 'Projects',
    color: colors.rose,
    cover: '/images/Projects_cover.jpeg',
    artists: ['Web Development', 'Data', 'UX/UI']
  }
]

const morePlaylists = playlists.map((item) => ({
  ...item,
  id: `${item.id}_more`
}))

const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: `${item.id}_side`
}))

const allPlaylists = [...playlists, ...morePlaylists, ...sidebarPlaylists]

const songs = [
  // Your songs array here...
]

export { playlists, morePlaylists, sidebarPlaylists, allPlaylists, songs, colors }
