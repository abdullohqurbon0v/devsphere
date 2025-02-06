'use client';
import { Button } from '@/components/ui/button';
import { ICourse } from '@/types';
import React, { useEffect, useState } from 'react';

const courseData = [
  {
    id: 1,
    title: "Kelajakni biz bilan boshleng Foundation JavaScript kursga qoshiling",
    navigate: "/course/foundation",
    skills: ["HTML", "CSS", "JavaScript", "Sass(Scss)", 'Bootstrap']
  },
  {
    id: 2,
    title: "Biz bilan Junior PHP dasturchi boling",
    navigate: "/course/php",
    skills: ["PHP"]
  },
  {
    id: 3,
    title: "Ushbu kurs orqalik siz top Python Backend dasturchi boling",
    navigate: "/course/python",
    skills: ["HTML", "CSS", "Python"]
  }
]


const tabs = [
  { label: 'JavaScript', id: 1 },
  { label: 'PHP', id: 2 },
  { label: 'Python', id: 3 }
];

const Main = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [selectedTab, setSelectedTab] = useState<null | ICourse>(null);
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const foundedCourse = courseData.find(x => x.id === selectedId);
    setTimeout(() => {
      setSelectedTab(foundedCourse || null);
      setIsLoading(false);
    }, 200);
  }, [selectedId]);


  return (
    <div className='mt-20 font-montserrat px-6'>
      <div className='flex space-x-10'>
        {tabs.map(item => (
          <div
            key={item.id}
            className={`${selectedId === item.id ? 'bg-white shadow-xl transition duration-300' : 'transition duration-300'} round2 cursor-pointer h-full py-2 px-3 w-[150px] text-center`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10'>
        <div className={`flex ${selectedId == 1 && 'rounde-tabs-content'} flex-col justify-between space-y-8 h-96 lg:w-2/3 shadow-xl rounded-2xl py-10 px-7 bg-white transition-all duration-500 ease-in-out`}>
          <div className={`space-y-4 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <p className='text-lg text-gray-600'>Kurs haqida</p>
            <h2 className='text-3xl font-bold text-gray-800 leading-snug'>
              {selectedTab?.title || 'Kurs malumotlari yuklanmoqda...'}
            </h2>
            <Button className='mt-4 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300'>Kursni ko&apos;rish</Button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 transition-opacity duration-500'>
            {selectedTab?.skills?.map((item, idx) => (
              <div key={idx} className='bg-gray-100 text-gray-700 px-4 text-sm py-2 rounded-lg shadow-sm transition duration-300 text-center'>
                {item}
              </div>
            )) || <p>Skills malumotlari yuklanmoqda...</p>}
          </div>
        </div>

        <div className='w-full lg:w-1/3'>
          <div className='h-96 bg-gradient-to-tr from-sky-500 to-blue-500 w-full pt-2  rounded-lg shadow-lg transition duration-300'>
            <p className='text-white text-center font-semibold'>Mentor</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Main;
