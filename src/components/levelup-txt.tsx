type props = {
  textSize: string;
}
const LevelUp = ({ textSize }: props) => {

  return (
    <p className={`text-[var(--primary-color)] font-bold ${textSize}`}>
      LEVEL
      <span className="text-[var(--secondary-color)]">UP</span>
    </p>
  )
}

export default LevelUp;