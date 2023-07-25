import { Tech } from '../types/ExperienceType'

const TechItem = ({ src, name, level }: Tech) => {
  return (
    <div className="flex space-x-2 p-1">
      <img
        src={src}
        alt={name}
        className="h-10 w-10 object-contain object-center flex my-2"
      />
      <div className="flex flex-col">
        <h3 className="text-2xl text-custom-100 font-bold flex">{name}</h3>
        <div className=" justify-start flex text-white">{level}</div>
      </div>
    </div>
  )
}

export default TechItem
