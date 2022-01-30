 import React, { useEffect, useState,useContext } from "react"

import { ThemeContext } from "../contexts/ThemeContext"

export function ThemeContextExample() {
  // const themeContext = useContext(ThemeContext)

  const [colors, setColors] = useContext( 
    ThemeContext
  )
 
  return (

    <div>
      <input
        value={colors.accent1}
        type="color"
        onChange={(e) => setColors({ accent1: e.target.value })}
      />
      <input
        value={colors.accent2}
        type="color"
        onChange={(e) => setColors({ accent2: e.target.value })}
      />

      <h3 style={{ color: colors.accent1 }}>accent color 1 </h3>
      <h3 style={{ color: colors.accent2 }}>accent color 2 </h3>
    </div>
  )
}
