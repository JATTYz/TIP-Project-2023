import { Carousel } from '@mantine/carousel';  

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
                            <div className="font-bold text-xl mb-2">Rover 25</div>
                            <p className="text-gray-700 text-base">The Rover 200 Series, and later the Rover 25, are a series of small family cars that were produced by British manufacturer Rover from 1984 until 2005.</p>
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
                            <p className="text-gray-700 text-base">The Rover P5 is a series of large saloon and coupé automobiles that were produced by Rover from 1958 until 1973. There was a total of 69,141 units built.</p>
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
                            <p className="text-gray-700 text-base">Rover P3, Rover Sixty and Rover Seventy-Five were executive cars announced in mid February 1948 and produced by the Rover Company until the summer of 1949.</p>
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
                            <p className="text-gray-700 text-base">The Rover 12 was a name given to several medium-sized family cars from 1905 and 1948. It was first displayed at Olympia Motor Show in November 1905.</p>
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
                            <p className="text-gray-700 text-base">The Rover CityRover is a supermini car that was marketed by the former British manufacturer MG Rover under the Rover marque, between 2003 and 2005.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CityRover</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#£6,495</span>
                        </div>
                    </div>
                </Carousel.Slide>                  
                <Carousel.Slide>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="object-cover h-48 w-full"  
                            src="/car6.jpg" 
                            alt="car-place-holder" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rover Streetwise</div>
                            <p className="text-gray-700 text-base">The Rover Streetwise was based on the Rover 25, but had an increased ride height and chunkier bumpers. The car was marketed by Rover as an 'urban on-roader'.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RoverStreetwise</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Urban</span>
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
