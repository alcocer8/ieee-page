
import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";



const Events = () => {
  return (
      <main>
        <div className="bg-yellow-400 text-center uppercase mb-2 p-8">
          <h2 className=" md:text-4xl text-2xl font-bold" >General Program</h2>
          <p className="text-sm md:text-xl" > The program of IEEE ICEV 2023 will comprise a series of interesting activities</p>
        </div>

        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Papers Presentations</p>
          <p className='px-2'>Accepted papers wild be submitted for inclusion into IEEE Xplore</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Card1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Social Activities</p>
          <p className='px-2'>Boca del rio and Veracruz are two cities full  of joy and culture life. There will be musical acts and other social activities as part of the conference program </p>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Card2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Plenary lectures</p>
          <p className='px-2'>IEEE ICEV 2023 has a truly international paricipation with a selected group of keynote speakers</p>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Card3}
          alt='/'
        />
      </div>
    </div>
      </main>
  );
};

export default Events;
