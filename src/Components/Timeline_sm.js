import React, { Fragment } from 'react';

const Timeline_sm = ({ data }) => {
    return (
        <div className='md:hidden flex flex-col w-full gap-y-3 my-4'>
            {data.map((event, index) => (
                <Fragment key={index}>
                    <div className='flex items-center gap-x-4 mx-auto'>
                        <div className='flex flex-col items-center gap-4 justify-start'>
                        <Circle />
                        <Pillar />
                        </div>
                        <EventCard name={event.name} year={event.year} degree={event.degree} percentage={event.percentage} />
                    </div>
                </Fragment>
            ))}
            <Circle />
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
        <div className='w-2 h-36 rounded-t-full rounded-b-full bg-[#00FFFF]'>
        </div>
    );
};

const EventCard = ({ name, year, degree, percentage }) => {
    return (
        <div className='flex flex-col justify-between rounded-xl shadow-md p-4 gap-y-2 bg-white'>
            <div className='text-xl font-bold'>{name}</div>
            <div className='text-lg'>Year: {year}</div>
            <div className='text-lg'>Degree: {degree}</div>
            <div className='text-lg'>Percentage: {percentage}</div>
        </div>
    );
};

export default Timeline_sm;
