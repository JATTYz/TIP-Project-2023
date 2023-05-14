import { Timeline, Text, Image, Anchor } from '@mantine/core';

import { GiDeathStar } from 'react-icons/gi';
import { HiBadgeCheck } from 'react-icons/hi';
import { MdDirectionsCar } from 'react-icons/md';
import { RiAuctionFill } from 'react-icons/ri';
import { GiGlassCelebration } from 'react-icons/gi';
import { VscInspect } from 'react-icons/vsc';

const HistoryTimeLine = () => {
    return (
        <Timeline active={3} bulletSize={24} lineWidth={2}>

            <Timeline.Item bullet={<GiDeathStar size={12} />} title="Collapse of MG Rover">
                <Text size="sm" mt={4} fs="italic">2005</Text>
                <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos, non minima unde delectus harum illum est neque. Repellat, distinctio explicabo tempora fugiat neque laborum quod consequatur hic possimus in!</Text>

            </Timeline.Item> 

            <Timeline.Item bullet={<RiAuctionFill size={12} />} title="MG Rover Australia Administrators Auction">
                <Text size="sm" mt={4} fs="italic">13 June 2005</Text>

                <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus id, enim sit asperiores vitae delectus magnam, minima harum molestiae eos reprehenderit temporibus nam architecto eius provident totam perspiciatis ad.</Text>

            </Timeline.Item>

            <Timeline.Item bullet={<GiGlassCelebration size={12} />} title="Rover 100th Anniversary">
                <Text size="sm" mt={4} fs="italic">01 December 2004</Text>

                <Text size="sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil voluptatum odio corrupti nulla consequatur totam, enim odit accusantium error aut debitis quo eos reprehenderit temporibus incidunt qui quae iste! Optio.</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<MdDirectionsCar size={12} />} title="Car Model Evolution" lineVariant='dotted'>
                <Text size="sm" mt={4} fs="italic">21 November 2004</Text>
                <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab vero quis, odit soluta eos optio hic laudantium sapiente dolor vitae nihil dolorem doloremque eaque corrupti aspernatur architecto quaerat vel.
                    <div className='mt-3 mx-5'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus at pariatur quia assumenda quis consequuntur minus cupiditate iure delectus, id, excepturi sit quas dignissimos vel vitae quaerat rerum! Quaerat, ipsam!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, recusandae odio! Ullam animi delectus quisquam sunt quia esse nobis, iure ducimus quo expedita reprehenderit debitis nihil facere amet deserunt autem.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore incidunt asperiores commodi nobis ut magnam, ipsam fugit sit quaerat in perspiciatis deleniti iste odit voluptatibus at quis temporibus quasi! Enim?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ab, non dicta eveniet fugit aut assumenda molestias fugiat saepe et, deleniti at excepturi magnam, nam eos vitae facere itaque repellat?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nihil sint id possimus. Voluptatum nihil molestiae magni libero, repudiandae eveniet! Nam, libero laborum? Veniam, aliquam quo molestias velit tempore quaerat.</li>
                    </div>                
                </Text>
            </Timeline.Item>

            <Timeline.Item bullet={<HiBadgeCheck size={12} />} title="Badge Evolution" lineVariant='dotted'>
                <Text size="sm" mt={4} fs="italic">02 August 2004</Text>
                <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit dolorem amet rem quia esse voluptates repellat unde laboriosam enim animi suscipit soluta facere, veritatis maiores iste in porro commodi.</Text>
                <Image maw={400} mx="auto" my={10} radius="md" src='/car2.jpg' alt='car-image-placeholder'/>
                <p className='mb-2 text-center'><Anchor href="https://www.thecourier.co.uk/fp/past-times/1769011/rover-p5b-new-booklet-is-a-love-letter-to-classic-car-bought-in-dundee-in-1972/" target="_blank">Image Source</Anchor></p>
            </Timeline.Item>

            <Timeline.Item bullet={<VscInspect size={12} />} title="Revised Rover">
                <Text size="sm" mt={4} fs="italic">20 January 2004</Text>
                <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod est odio unde sit ipsam vel aliquam repudiandae architecto explicabo, maiores ea quaerat cupiditate voluptates temporibus, dolor blanditiis debitis ad!</Text>
                <Image maw={400} mx="auto" my={10} radius="md" src='/car3.jpg' alt='car-image-placeholder'/>
                <p className='mb-2 text-center'><Anchor href="https://en.wikipedia.org/wiki/Rover_P3" target="_blank">Image Source</Anchor></p>
            </Timeline.Item>

            <Timeline.Item bullet={<GiGlassCelebration size={12} />} title="The Lucky Rover">
                <Text size="sm" mt={4} fs="italic">10 July 2003</Text>
                <Text size="sm">
                    <div className='pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis provident unde beatae? Perferendis reprehenderit ullam eius commodi, minima, fugiat voluptatem quam harum iure neque maiores, vitae expedita earum ipsa recusandae!
                    Cumque, pariatur ab? Blanditiis optio molestiae consequuntur aspernatur, quidem ipsum repellat veritatis tempora laborum porro pariatur tenetur rerum ullam odio fuga quasi hic modi repellendus libero assumenda earum quaerat et!</div>
                    <div className='pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ad impedit minima. Dignissimos, quidem esse sit neque nisi quos illo consequuntur! Perspiciatis enim magni omnis non, ea dolores sunt iure?</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, id in, consequuntur ex aperiam deserunt repellendus debitis recusandae itaque fugiat voluptate culpa quia mollitia praesentium explicabo qui maiores quisquam quam.</div>     
                </Text>
                <Image maw={400} mx="auto" my={10} radius="md" src='/car4.jpg' alt='car-image-placeholder'/>
                <p className='mb-10 text-center'><Anchor href="https://en.wikipedia.org/wiki/Rover_12" target="_blank">Image Source</Anchor></p>

            </Timeline.Item>

        </Timeline>
    );
};


export default HistoryTimeLine;
