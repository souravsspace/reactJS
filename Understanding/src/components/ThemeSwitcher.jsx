import React from 'react'
import { BiAdjust } from 'react-icons/bi'

export default function ThemeSwitcher(props) {
  return (
    <div className={`bg-${props.mode}`}>
          <a themeSwitch='true' className={`fs-1 pointer text-${props.invert} position-fixed bottom-0 end-0 m-5`}>
              <BiAdjust onClick={props.toggleMode} />
          </a>
    </div>
  )
}
