import { useState, useCallback, useEffect } from "react"

//returns bool checking if Desktop
export const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  const checkScreenSize = useCallback(mediaCheck => {
    if (mediaCheck.matches) {
      setIsDesktop(false)
    } else {
      setIsDesktop(true)
    }
  }, [])

  useEffect(() => {
    let mediaCheck = window.matchMedia("(max-width: 1024px)")
    checkScreenSize(mediaCheck)
    mediaCheck.addEventListener("change", checkScreenSize)
    return () => {
      mediaCheck.removeEventListener("change", checkScreenSize)
    }
  }, [checkScreenSize])

  return isDesktop
}
