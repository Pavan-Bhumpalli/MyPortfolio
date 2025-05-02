import React, { Fragment } from 'react';
import school from '../pictures/school.webp';
import inter from '../pictures/inter.png';
import college from '../pictures/college.webp';
import Timeline_sm from './Timeline_sm';

const Timeline = () => {
    const data = [
        {
            "name": "Gayatri Vidya Parishad College of Engineering",
            "year": "2021-2025",
            "degree": "B.Tech in Computer Science",
            "percentage": "9.28 CGPA",
            "direction": "left",
            "image": college
        },
        {
            "name": "Sri Chaitanya Junior College, Guntur",
            "year": "2019-2021",
            "degree": "Intermediate",
            "percentage": "99%",
            "direction": "right",
            "image": school
        },
        {
            "name": "The Central Public School, Guntur",
            "year": "2018-2019",
            "degree": "SSC",
            "percentage": "10 GPA",
            "direction": "left",
            "image": inter
        }
    ];

    return (
        <div>
            <div className='hidden md:flex flex-col w-full gap-y-3 my-4'>
                <div className='flex justify-center items-center'>
                    <h1 className="text-3xl text-gray-100 font-bold mb-2"><span style={{ borderBottom: "3px solid aqua",borderRadius: "2px" }}>EDUCATION</span></h1>
                </div>
                <Circle />
                {data.map((event, index) => (
                    <Fragment key={index}>
                        <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 mx-auto'>
                            {event.direction === 'left' ? (
                                <>
                                    <EventCard name={event.name} year={event.year} degree={event.degree} percentage={event.percentage} />
                                    <Pillar />
                                    <img src={event.image} alt={event.name} className="w-36 h-52 object-cover" />
                                </>
                            ) : (
                                <>
                                    <div className='flex justify-end'>                                  
                                    <img src={event.image} alt={event.name} className="w-36 h-52 object-cover" />
                                    </div>
                                    <Pillar />
                                    <EventCard name={event.name} year={event.year} degree={event.degree} percentage={event.percentage} />
                                </>
                            )}
                        </div>
                        {index < data.length - 1 && <Circle />}
                    </Fragment>
                ))}
            </div>
            <Timeline_sm data={data}  />
        </div>
    );
};

const Circle = () => {
    return (
        <div className='rounded-full w-4 h-4 bg-[#00FFFF] mx-auto'>
        </div>
    );
};

const Pillar = () => {
    return (
        <div className='w-2 h-44 rounded-t-full rounded-b-full bg-[#00FFFF] mx-auto'>
        </div>
    );
};

const EventCard = ({ name, year, degree, percentage }) => {
    return (
        <div className='flex flex-col justify-between rounded-xl shadow-md p-4 gap-y-2 bg-[#484747] text-gray-100'>
            <div className='text-xl font-bold'>{name}</div>
            <div className='text-lg'>Year: {year}</div>
            <div className='text-lg'>Degree: {degree}</div>
            <div className='text-lg'>Percentage: {percentage}</div>
        </div>
    );
};

export default Timeline;
