import type { Technology } from "../Types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

    <div className="flex items-center justify-between">
      <img
        src={technology.icon}
        alt={technology.name}
        className="w-12 h-12 object-contain"
      />

      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-600">
        {technology.badge}
      </span>
    </div>

    <h3 className="text-xl font-bold mt-4">
      {technology.name}
    </h3>

    <p className="text-sm text-gray-600 mt-2 min-h-[60px]">
      {technology.description}
    </p>

    <div className="flex items-center justify-between gap-15 mt-4">
      <span className="text-xs font-medium px-2 py-1 rounded-md bg-gray-100">
        {technology.category}
      </span>

      <span className="text-xs font-medium px-2 py-1 rounded-md bg-gray-100">
        {technology.difficulty}
      </span>
    

    
      <span className="font-semibold">
        ⭐ {technology.rating}
      </span>
    </div>

    <button
      onClick={() => onAdd(technology)}
      disabled={isAdded}
      className=" mt-3
          w-full
          rounded-md
          bg-gray-900
          text-white
          text-xs
          font-medium
          py-2
          transition
          hover:bg-pink-500
          disabled:opacity-50
          disabled:cursor-not-allowed"
    >
      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
    </button>

  </div>
);
};

export default TechnologyCard;