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
                            <div className="font-bold text-xl mb-2">Place Holder Title #1</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
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
                            <div className="font-bold text-xl mb-2">Place Holder Title #2</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
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
                            <div className="font-bold text-xl mb-2">Place Holder Title #3</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
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
                            <div className="font-bold text-xl mb-2">Place Holder Title #4</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
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
                            <div className="font-bold text-xl mb-2">Place Holder Title #5</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
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
                            <div className="font-bold text-xl mb-2">Place Holder Title #6</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
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
