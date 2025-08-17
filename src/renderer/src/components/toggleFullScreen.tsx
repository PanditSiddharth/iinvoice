import { useEffect, useState } from 'react'
import { ExitFullScreenIcon, FullScreenIcon } from '@renderer/components/Icons'

interface FullscreenToggleProps {
  containerRef: React.RefObject<HTMLDivElement | null>,
  onFullScreen?: ()=> void
  onExitFullScreen?: ()=> void
}

const FullscreenToggle: React.FC<FullscreenToggleProps> = ({ containerRef, onFullScreen, onExitFullScreen }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = (): void => {
      const isCurrentlyFullscreen = document.fullscreenElement !== null
     if(isCurrentlyFullscreen && onFullScreen)
        onFullScreen()
    else if(onExitFullScreen) onExitFullScreen()
    }

    // इवेंट लिस्नर जोड़ें
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    // कंपोनेंट के अनमाउंट होने पर लिस्नर को हटा दें (मेमोरी लीक से बचने के लिए)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])


  const goFullscreen = (): void => {
    if (containerRef?.current) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    }
  }

  const exitFullscreen = (): void => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <>
      {isFullscreen ? (
        <ExitFullScreenIcon
          className="w-5 text-gray-500 cursor-pointer"
          onClick={exitFullscreen}
        />
      ) : (
        <FullScreenIcon
          className="w-5 text-gray-500 cursor-pointer"
          onClick={goFullscreen}
        />
      )}
    </>
  )
}

export default FullscreenToggle
