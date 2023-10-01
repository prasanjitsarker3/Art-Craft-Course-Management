
const Course = () => {
    return (
        <div className="overflow-hidden">
            <div className="text-center ">
                <h1 className="text-2xl py-5 text-green-500 uppercase font-sans">Course Categories</h1>
                <h1 className="text-3xl font-sans">Popular Topics To Learn</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-5 ">
            {/* data-aos="fade-right" */}
                <div  className="card w-96  cursor-pointer mx-auto bg-gradient-to-b from-teal-400 to-teal-600 overflow-hidden">
                    <figure className="px-7 pt-5">
                        <img src="https://img.freepik.com/premium-photo/artist-drawing-anime-comic-book-studio-wooden-desk-natural-light_627494-1.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" className="rounded-xl h-[200px] w-full" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">5 Course</h2>
                        <p className="text-2xl font-serif">Sketching</p>
                        <p className="text-left">Sketching is a creative process that involves capturing the essence of a subject through simple, expressive lines and shapes...</p>
                    </div>
                </div>
                {/* data-aos="zoom-in" */}
                <div  className="card w-96  cursor-pointer mx-auto bg-gradient-to-b from-teal-400 to-teal-600 overflow-hidden">
                    <figure className="px-7 pt-5">
                        <img src="https://img.freepik.com/free-photo/abstract-acrylic-effect-variety-colourful-shapes_23-2148315543.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" className="rounded-xl h-[200px] w-full" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">3 Course</h2>
                        <p className="text-2xl font-serif">Oil Printing</p>
                        <p className="text-left">Oil printing, also known as oil-based lithography, is a printmaking technique that utilizes the principle of oil and water...</p>
                    </div>
                </div>
                {/* data-aos="fade-left" */}
                <div  className="card w-96  cursor-pointer mx-auto bg-gradient-to-b from-teal-400 to-teal-600 overflow-hidden">
                    <figure className="px-7 pt-5">
                        <img src="https://img.freepik.com/free-vector/lesson-concept-illustration_114360-7917.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" className="rounded-xl h-[200px] w-full" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">2 Course</h2>
                        <p className="text-2xl font-serif">Illustration</p>
                        <p className="text-left">Illustration, also known as oil-based lithography, is a printmaking technique that utilizes the principle of oil and water...</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Course;