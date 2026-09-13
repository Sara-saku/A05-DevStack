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
    <aside className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">
          Your Stack ({selectedTechnologies.length})
        </h2>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-semibold"
          >
            Remove All
          </button>
        )}
      </div>

      {selectedTechnologies.length === 0 ? (
        <p className="text-gray-500">
          Your stack is empty. Add technologies to build your stack.
        </p>
      ) : (
        <div className="space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between border rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8 object-contain"
                />

                <div>
                  <h3 className="font-semibold">{technology.name}</h3>
                  <p className="text-sm text-gray-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;