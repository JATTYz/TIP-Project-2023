import { Timeline, Text, Image } from '@mantine/core';
import { GiDeathStar } from 'react-icons/gi';
import { HiBadgeCheck } from 'react-icons/hi';
import { MdDirectionsCar } from 'react-icons/md';
import { RiAuctionFill } from 'react-icons/ri';
import { GiGlassCelebration } from 'react-icons/gi';
import { VscInspect } from 'react-icons/vsc';

const HistoryTimeLine = () => {
    return (
        <Timeline active={3} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<GiDeathStar size={12} />} title="Death of Rover">
                <Text size="sm" mt={4} fs="italic">2005</Text>
                <Text size="sm">How did MG Rover fail? Many pages of Newsprint, a damning 830 page Trade & Industry Committee Report and even a few books have been written about the demise of Rover as we knew it. Here though are a few of the more pertinent Press Releases from MG Rover Group during what must have been a turbulent April 2005, especially for the workers of MG Rover.</Text>
            </Timeline.Item> 

            <Timeline.Item bullet={<RiAuctionFill size={12} />} title="MG Rover Australia Administrators Auction">
                <Text size="sm" mt={4} fs="italic">13 June 2005</Text>
                <Text size="sm">In the wake of UK Parent Company going into Liquidation, the Australian Distributor also went into Voluntary Administration. RSM Bird Cameron Partners were appointed to administer the affairs of Motor Group Australia Pty Limited This included an Australia wide auction by Bonhams & Goodman on 13th June 2005, where around 185 mostly brand new vehicles, the last Rovers and MGs, were sold.</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<GiGlassCelebration size={12} />} title="Rover 100th Anniversary">
                <Text size="sm" mt={4} fs="italic">01 December 2004</Text>
                <Text size="sm">At the time of Rover’s 100th Anniversary in 2004, revised versions of the 75, 45 and 25 had modernised the range, with a fresh identity inside and out, that featured specification and security improvements. A flagship Rover 75 V8, with larger prestige grille, was launched at the Geneva Motor Show, with a Longbridge-built 75 Limousine, the highlight of the Birmingham show.</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<MdDirectionsCar size={12} />} title="Car Model Evolution" lineVariant='dotted'>
                <Text size="sm" ml={10}>
                Rover’s product range, in its centenary year, had the brand’s largest product portfolio in its history. The line-up included:
                    <div className='mt-3 mx-5'>
                        <li>CityRover – the £6,495 Rover range entrant 1.4-litre 5dr small car.</li>
                        <li>Commerce – a car-derived van for the small-business user.</li>
                        <li>Rover 25 – the company’s best-selling car.</li>
                        <li>Streetwise – an urban-on roader with a tough exterior appearance.</li>
                        <li>Rover 45 – medium sized car available in 5- and 4-door saloon.</li>
                        <li>Rover 75 – a stylish saloon and Tourer with a wide range of engine options.</li>
                    </div>                
                </Text>
                <Image maw={500} mx="auto" my={20} radius="md" src='/BMR.jpg' alt='car-model-evol'/>
            </Timeline.Item>

            <Timeline.Item bullet={<HiBadgeCheck size={12} />} title="Badge Evolution" lineVariant='dotted'>
                <Text size="sm" ml={10} >Another release by MG Rover Group at the time of the 100th Anniversary was The Evolution ot Rover Badges, as used on the Cars:</Text>
                <Image maw={400} mx="auto" my={10} radius="md" src='/badge-history.jpg' alt='badge-history'/>
            </Timeline.Item>

            <Timeline.Item bullet={<VscInspect size={12} />} title="Revised Rover 75">
                <Text size="sm" mt={4} fs="italic">20 January 2004</Text>
                <Text size="sm" ml={10}>MG Rover Group released details of the revisions to the Rover 75 Saloon and Tourer, first introduced in 1999. The cars were commonly called “Facelift” versions of the 75.</Text>
                <Image maw={400} mx="auto" my={10} radius="md" src='/revised-75.jpg' alt='revised-75-rover'/>
            </Timeline.Item>

            <Timeline.Item bullet={<GiGlassCelebration size={12} />} title="The Five-millionth Rover">
                <Text size="sm" mt={4} fs="italic">10 July 2003</Text>
                <Text size="sm">
                    <div className='pb-5'>Rover announced on July 10 2003 that it had built its five-millionth car since production began in 1904. At the time Kevin Howe, Chief Executive, MG Rover Group, said: “Though MG Rover Group is a relatively young company, the Rover marque represents a very important historical legacy. Next year we’ll be celebrating Rover’s centenary, which will also hold special significance.”</div>
                    <div className='pb-5'>The five-millionth Rover was a 75 Saloon, powered by a K Series 2.5-litre V6 engine, and painted in a special Xirallic® Aubergine paint finish. The car had unique Oyster leather seats, an aubergine Personal Line interior and Connoisseur SE specification, with Hi-Line satellite navigation and many additional top-of-the-range items that combined to make this a special Rover.</div>
                    <div className='pb-5'>The most popular Rover ever produced was the Rover 200 (R8) model launched in 1989 and produced until 1998. Over 700,000 cars were produced. This model was not “officially” sold in Australia, although there are a few private imports owned by Club members.</div>
                    <div>To coincide with the milestone, MG Rover released a Production Table by model from 1904 to 2004.</div>     
                </Text>
                <Image maw={500} mx="auto" my={10} radius="md" src='/5mill-rover.jpg' alt='5mill-rover'/>
                <Text c="dimmed" size="sm" mb={50}>The Prince Edward, Earl of Wessex & Kevin Howe, Chief Executive MG Rover Group at Longbridge with the 5 millionth Rover (July 2003).</Text>
            </Timeline.Item>

        </Timeline>
    );
};


export default HistoryTimeLine;
