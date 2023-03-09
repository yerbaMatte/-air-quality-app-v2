type SVGIconProps = {
  perc: number;
  iconColor: string;
};

export default function SVGIcon({ perc, iconColor }: SVGIconProps) {
  const scaledValue = (perc / 200) * 100;
  return (
    <svg
      width='45px'
      height='45px'
      viewBox='0 0 42 42'
      className='donut'
      aria-labelledby='beers-title beers-desc'
      role='img'
    >
      <circle
        className='donut-hole'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='white'
        role='presentation'
      ></circle>
      <circle
        className='donut-ring'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='transparent'
        stroke='#d2d3d4'
        strokeWidth='3'
        role='presentation'
      ></circle>
      <circle
        className='donut-segment'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='transparent'
        stroke={iconColor}
        strokeWidth='3'
        strokeDasharray={`${scaledValue} ${100 - scaledValue}`}
        strokeDashoffset='25'
        aria-labelledby='donut-segment-1-title donut-segment-1-desc'
      ></circle>
      <g className='chart-text'>
        <text className='chart-number' x='50%' y='60%' textAnchor='middle'>
          {perc}
        </text>
      </g>
    </svg>
  );
}
