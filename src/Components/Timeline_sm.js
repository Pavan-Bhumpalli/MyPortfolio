import React from 'react';

const Timeline_sm = ({ data }) => {
    return (
        <div className='lg:hidden flex flex-col w-full gap-y-2 my-4'>
            <div className='flex justify-center items-center'>
                <h1 className="text-3xl text-gray-100 font-bold mb-2"><span style={{ textDecoration: "none",borderBottom: "3px solid aqua",borderRadius: "2px" }}>EDUCATION</span></h1>
            </div>
            {data.map((event, index) => (
                <div key={index} className="items-center">
                    <div className='flex items-center justify-start gap-x-4 '>
                        <div className='flex flex-col items-center gap-2 justify-start'>
                        <Circle />
                        <Pillar />
                        </div>
                        <EventCard  name={event.name} year={event.year} degree={event.degree} percentage={event.percentage} />
                    </div>
                </div>
            ))}
        </div>
    );
};

const Circle = () => {
    return (
        <div className='rounded-full w-4 h-4 bg-[#00FFFF]'>
        </div>
    );
};

const Pillar = () => {
    return (
        <div className='w-2 h-44 rounded-t-full rounded-b-full bg-[#00FFFF]'>
        </div>
    );
};

const EventCard = ({ name, year, degree, percentage }) => {
    return (
        <div className='flex flex-col justify-between rounded-xl shadow-md pt-4 pl-4 gap-y-2 bg-[#484747] text-gray-100'>
            <div className='text-xl font-bold'>{name}</div>
            <div className='text-lg'>Year: {year}</div>
            <div className='text-lg'>Degree: {degree}</div>
            <div className='text-lg'>Percentage: {percentage}</div>
        </div>
    );
};

export default Timeline_sm;
