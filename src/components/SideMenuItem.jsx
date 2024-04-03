import React from 'react'
import PropTypes from 'prop-types'

export const SideMenuItem = ({ href, children }) => {
  return (
    <li>
        <a
            className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
            href={href}
        >
        {children}
        </a>
    </li>
  )
}

SideMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default SideMenuItem
