type props = {
  textSize: string;
}
const LevelUp = ({ textSize }: props) => {

  return (
    <p className={`text-(--primary-color) font-bold ${textSize}`}>
      LEVEL
      <span className="text-(--secondary-color)">UP</span>
    </p>
  )
}

export default LevelUp;