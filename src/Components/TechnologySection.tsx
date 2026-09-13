import { useEffect, useState } from "react";

import type { Technology } from "../Types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TechnologySection = () => {
  const [technologyList, setTechnologyList] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data: Technology[]) => {
      setTechnologyList(data);
    });
}, []);

  const handleAdd = (technology: Technology) => {
   
  toast.info(`${technology.name} is added to your stack!`, {className: 'my-warning-toast'});
  
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
       
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  };

  const handleRemove = (id: string) => {
    const technology = selectedTechnologies.find((item) => item.id === id);
    if (technology) {
      toast.info(`Removing ${technology.name} from your stack.`, {
        className: 'my-warning-toast',
      });
    }
    setSelectedTechnologies(
      selectedTechnologies.filter(
        (technology) => technology.id !== id
      )
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <>
      <section className="container mx-auto px-8 py-12">
      <h2 className="text-4xl font-bold mb-6">Explore the <span className="text-pink-500">Technologies</span></h2>
      <p className="text-lg text-gray-600 mb-12">Pick one technology per category to build your ideal stack.</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Technology Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyList.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAdd}
              isAdded={selectedTechnologies.some(
                (item) => item.id === technology.id
              )}
            />
          ))}
        </div>

        {/* Your Stack */}
        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>
      </section>
      <ToastContainer position="bottom-right"/>
    </>
  );
};

export default TechnologySection;