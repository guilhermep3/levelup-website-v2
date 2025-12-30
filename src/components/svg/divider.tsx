type props = {
  rotate?: boolean;
  top?: boolean;
}
export const DividerSVG = ({ rotate, top }: props) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={`absolute w-full h-14
        ${rotate ? 'rotate-180' : ''} ${top ? '-top-0.5' : '-bottom-0.5'}
      `}
    >
      <path d="m0 4 150 40h160l190 50 190-50h160l150-40V0H0v4z" fill="#000"></path>
    </svg>
  )
}