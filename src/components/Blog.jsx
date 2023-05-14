import { Carousel } from '@mantine/carousel';  
import { Anchor } from '@mantine/core';

const Blog = () => {

    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-6 text-center'>
                <div className='text-3xl mt-10 mb-10'>Explore our Blogs & Images</div>
            </div>

            <span className='col-span-1' />
            <div className='col-span-4 mb-20 text-center'> 
            <Carousel
                withIndicators
                height={500}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                >
                <Carousel.Slide>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="object-cover h-48 w-full"  
                            src="/car1.jpg" 
                            alt="car-place-holder" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rover 25 </div>
                            <p className='mb-2'><Anchor href="https://en.wikipedia.org/wiki/Rover_200_/_25" target="_blank">Image Source</Anchor></p>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis soluta alias harum, perferendis ex veritatis tenetur.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rover25</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#1984</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fav</span>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="object-cover h-48 w-full"  
                            src="/car2.jpg" 
                            alt="car-place-holder" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rover P5</div>
                            <p className='mb-2'><Anchor href="https://www.thecourier.co.uk/fp/past-times/1769011/rover-p5b-new-booklet-is-a-love-letter-to-classic-car-bought-in-dundee-in-1972/" target="_blank">Image Source</Anchor></p>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis soluta alias harum, perferendis ex veritatis tenetur.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RoverP5</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coupé</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#1958</span>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="object-cover h-48 w-full"  
                            src="/car3.jpg" 
                            alt="car-place-holder" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rover P3</div>
                            <p className='mb-2'><Anchor href="https://en.wikipedia.org/wiki/Rover_P3" target="_blank">Image Source</Anchor></p>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis soluta alias harum, perferendis ex veritatis tenetur.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RoverP3</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#1948</span>
                        </div>
                    </div>
                </Carousel.Slide>  
                <Carousel.Slide>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="object-cover h-48 w-full"  
                            src="/car4.jpg" 
                            alt="car-place-holder" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rover 12</div>
                            <p className='mb-2'><Anchor href="https://en.wikipedia.org/wiki/Rover_12" target="_blank">Image Source</Anchor></p>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis soluta alias harum, perferendis ex veritatis tenetur.</p>                        
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rover12</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Olympia</span>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="object-cover h-48 w-full"  
                            src="/car5.jpg" 
                            alt="car-place-holder" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">CityRover</div>
                            <p className='mb-2'><Anchor href="https://en.wikipedia.org/wiki/Rover_CityRover" target="_blank">Image Source</Anchor></p>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis soluta alias harum, perferendis ex veritatis tenetur.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CityRover</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#£6,495</span>
                        </div>
                    </div>
                </Carousel.Slide>                  
            </Carousel>
            </div>
            <span className='col-span-1' />
        </div>

    );
};


export default Blog;
