import '../cards/progress.css'

const ProgressBar = ({percent, circleWidth}) => {
     const radius=60;
     const dashArray = radius* Math.PI * 2;
     const dashOffSet = dashArray - (dashArray * percent) / 100;
  return (
    <div>
     <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
    <circle 
    cx={circleWidth/2}
    cy={circleWidth/2}
    strokeWidth='15px'
    r={radius}
    className='circle-background'
    />
      <circle 
    cx={circleWidth/2}
    cy={circleWidth/2}
    strokeWidth='15px'
    r={radius}
    className='circle-progress'
    style={{
      strokeDasharray:dashArray,
     strokeDashoffset:dashOffSet,
    }}
    transform={`rotate(-90 ${circleWidth/2} ${circleWidth / 2})`}
    />
    <text 
    x="50%" 
    y="45%" 
    dy="0.3em" 
    textAnchor="middle"
    className='circle-text'
    >
    {percent}%
    </text>
    <text 
    x="50%" 
    y="60%" 
    dy="0.3em" 
    textAnchor="middle"
    className='circle-subtext'
    >
    Goal
    </text>
    <text 
    x="50%" 
    y="67%" 
    dy="0.3em" 
    textAnchor="middle"
    className='circle-subtext'
    >
  Completed
    </text>
     </svg>
    </div>
  )
}

export default ProgressBar
