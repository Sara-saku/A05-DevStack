import HeroImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="flex items-center justify-between container mx-auto p-4 space-x-8">
            <div>
                <h1 className='font-bold text-6xl' >Build Your Ideal<br />
                     <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
    Development Stack
  </span></h1>
                <p className='font-regular text-lg' >Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your<br />
                    next project</p>
                <div className='flex space-x-4 '>
                    <button className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg' >Explore Technologies</button>
                    <button className=' font-bold text-center text-black bg-none  py-2 px-4'>Learn More</button>
                </div>
            </div>
            
                <img src={HeroImage} alt="Hero Image" />
            
        </div>
    );
};

export default Banner;