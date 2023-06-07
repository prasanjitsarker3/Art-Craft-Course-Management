


const Banner = () => {

    return (
        <div className="w-full ">
            <div className="carousel w-full m-0">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://artcrafts.wpengine.com/creative-crafts/wp-content/uploads/sites/2/2017/06/gal7.jpg" className="w-full h-[450px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://artcrafts.wpengine.com/creative-crafts/wp-content/uploads/sites/2/2017/06/gal7.jpg" className="w-full h-[450px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://artcrafts.wpengine.com/creative-crafts/wp-content/uploads/sites/2/2017/06/gal7.jpg" className="w-full h-[450px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://artcrafts.wpengine.com/creative-crafts/wp-content/uploads/sites/2/2017/06/gal7.jpg" className="w-full h-[450px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Banner;