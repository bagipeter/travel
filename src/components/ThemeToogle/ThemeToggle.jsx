import React, { useEffect, useState } from 'react'
import { PiMoonStarsFill } from 'react-icons/pi';
import { MdSunny } from 'react-icons/md';
import './ThemeToggle.css'

const ThemeToggle = () => {

  const storageKey = "theme";

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem(storageKey))
  )

  useEffect(() => {
    if(isDark) {
      document.firstElementChild.setAttribute("data-theme", "dark");
      localStorage.setItem(storageKey, JSON.stringify(true));
      return;
    }else{
      document.firstElementChild.setAttribute("data-theme", "light");
      localStorage.setItem(storageKey, JSON.stringify(false));
      return;

    }
   
  }, [isDark]);


  return (
    <div className="flex-center theme-toggle">
      <input type="checkbox"
      checked={isDark} 
      onChange={(event) => setIsDark(event.target.checked)}/>
      {isDark ? <PiMoonStarsFill /> : <MdSunny />}
    </div>
  )
}

export default ThemeToggle