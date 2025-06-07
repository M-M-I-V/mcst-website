import "../index.css"

const LoadingScreen = () => {

  const basePath = "/Home"

  return (
    <div className="fixed inset-0 bg-blue-900 flex items-center justify-center z-50">
      <img 
        src={`${basePath}/images/mcst-logo.png`}
        alt="Loading" 
        className="h-20 w-auto animate-pulse" />
    </div>
  )
}

export default LoadingScreen