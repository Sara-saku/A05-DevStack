import { VscClose } from "react-icons/vsc";
import type { Technology } from "../Types/technology";

type YourStackProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="bg-white border border-gray-400 rounded-xl p-5 h-fit shadow-sm">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="text-sm text-blue-400 mt-1">
          {selectedTechnologies.length > 0 ? `${selectedTechnologies.length} Technologies Selected` : 'No technologies selected yet.'}
        </p>
      </div>

      {/* Selected Technologies */}
      {selectedTechnologies.length === 0 ? (
        <p className="border border-gray-200 rounded-lg p-6 text-sm text-gray-400 py-6 text-center">
          Your stack is empty.
        </p>
      ) : (
        <div className="space-y-2">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="
                flex items-center justify-between
                border border-gray-200
                rounded-lg
                px-3 py-2
                bg-white
              "
            >
              {/* Icon + Information */}
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8 object-contain"
                />

                <div>
                  <h3 className="text-xs font-bold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-[9px] text-blue-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="
                  text-gray-400
                  hover:text-gray-600
                  text-2xl
                  font-light
                  leading-none
                  transition
                "
                aria-label={`Remove ${technology.name}`}
              >
                <VscClose />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}
      {selectedTechnologies.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="
            w-full
            mt-12
            py-2
            rounded-lg
            border border-red-300
            text-red-500
            text-sm
            font-semibold
            hover:bg-red-50
            transition
          "
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default YourStack;