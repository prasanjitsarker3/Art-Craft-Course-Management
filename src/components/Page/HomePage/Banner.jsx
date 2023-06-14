import { motion } from 'framer-motion';


const Banner = () => {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full bg-red-500">
            <div className="carousel w-full m-0 ">
                <div id="item1" className="carousel-item w-full relative">
                    <img src="https://artcrafts.wpengine.com/creative-crafts/wp-content/uploads/sites/2/2017/06/gal7.jpg" className="  w-full h-[450px]" />
                    <div className=" absolute inset-0 flex justify-center items-center text-center text-white p-5">
                        <div className='bg-black opacity-50 p-5'>
                            <p className="text-2xl font-semibold  pr-10">Explore Art & Craft</p>
                            {/* <p className="text-lg font-bold py-2"> Unleash your imagination and explore the world of art and craft.</p> */}
                            <p className="font-semibold ">Art is often seen as a form of self-expression, allowing individuals to.</p>
                            <p className="font-semibold "> communicate their thoughts, emotions, and ideas visually</p>
                            <button className="btn btn-error opacity-100">Enroll Class</button>
                        </div> 
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://artcrafts.wpengine.com/creative-crafts/wp-content/uploads/sites/2/2017/06/gal9.jpg" className="w-full h-[450px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" className="w-full h-[450px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.freepik.com/premium-photo/drawing-with-brush-mandala-stone_102290-201.jpg?w=740" className="w-full h-[450px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </motion.div>
    );
};

export default Banner;