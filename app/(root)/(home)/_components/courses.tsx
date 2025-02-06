'use client'
import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";

const FilterForm = () => {
  const [filters, setFilters] = useState({
    courseStatus: '',
    courseDuration: '',
    courseCategory: '',
    skillLevel: ''
  });

  const courseDatas = [
    { title: "Kurs 1", category: "Frontend", date: "2025-02-06", price: "$100" },
    { title: "Kurs 2", category: "Backend", date: "2025-02-07", price: "$150" },
    { title: "Kurs 3", category: "Backend", date: "2025-02-08", price: "$200" },
    { title: "Kurs 1", category: "Frontend", date: "2025-02-06", price: "$100" },
    { title: "Kurs 2", category: "Full Stack", date: "2025-02-07", price: "$150" },
    { title: "Kurs 3", category: "Telegram Bot", date: "2025-02-08", price: "$200" },
  ]

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, group: string): void => {
    const { name, checked } = e.target;

    if (checked) {
      setFilters(prev => ({ ...prev, [group]: name }));
    } else {
      setFilters(prev => ({ ...prev, [group]: '' }));
    }
  };

  const onFilterCourses = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(filters);
  };

  const onClear = (): void => {
    setFilters({
      courseStatus: '',
      courseDuration: '',
      courseCategory: '',
      skillLevel: ''
    })
  }

  return (
    <form className="flex flex-col lg:flex-row gap-8" onSubmit={onFilterCourses}>
      <div className="p-4 shadow-md rounded-lg lg:w-1/4 h-[600px] bg-white">
        <h2 className="text-xl font-bold mb-4">Filtrlar</h2>
        <div>
          <h3 className="font-semibold">Kurslar holati</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="NEW"
                  checked={filters.courseStatus === 'NEW'}
                  onChange={(e) => handleCheckboxChange(e, 'courseStatus')}
                  className="form-checkbox"
                />
                <span>Yangi</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="POPULAR"
                  checked={filters.courseStatus === 'POPULAR'}
                  onChange={(e) => handleCheckboxChange(e, 'courseStatus')}
                  className="form-checkbox"
                />
                <span>Mashhur</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="MIX"
                  checked={filters.courseStatus === 'MIX'}
                  onChange={(e) => handleCheckboxChange(e, 'courseStatus')}
                  className="form-checkbox"
                />
                <span>Aralash</span>
              </label>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Kurs davomiyligi</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="1-12"
                  checked={filters.courseDuration === '1-12'}
                  onChange={(e) => handleCheckboxChange(e, 'courseDuration')}
                  className="form-checkbox"
                />
                <span>1-12 Soat</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="12-24"
                  checked={filters.courseDuration === '12-24'}
                  onChange={(e) => handleCheckboxChange(e, 'courseDuration')}
                  className="form-checkbox"
                />
                <span>12-24 Soat</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="24+"
                  checked={filters.courseDuration === '24+'}
                  onChange={(e) => handleCheckboxChange(e, 'courseDuration')}
                  className="form-checkbox"
                />
                <span>24+ soat </span>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Kurs kategoriyasi</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="FRONTEND"
                  checked={filters.courseCategory === 'FRONTEND'}
                  onChange={(e) => handleCheckboxChange(e, 'courseCategory')}
                  className="form-checkbox"
                />
                <span>Frontend</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="BACKEND"
                  checked={filters.courseCategory === 'BACKEND'}
                  onChange={(e) => handleCheckboxChange(e, 'courseCategory')}
                  className="form-checkbox"
                />
                <span>Backend</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="FULLSTACK"
                  checked={filters.courseCategory === 'FULLSTACK'}
                  onChange={(e) => handleCheckboxChange(e, 'courseCategory')}
                  className="form-checkbox"
                />
                <span>Full Stack</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="BOT"
                  checked={filters.courseCategory === 'BOT'}
                  onChange={(e) => handleCheckboxChange(e, 'courseCategory')}
                  className="form-checkbox"
                />
                <span>Telegram Bot</span>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Ko&apos;nikma darajasi</h3>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="FOUNDATION"
                  checked={filters.skillLevel === "FOUNDATION"}
                  onChange={(e) => handleCheckboxChange(e, 'skillLevel')}
                  className="form-checkbox"
                />
                <span>Boshlang&apos;ich</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="AMONG"
                  checked={filters.skillLevel === "AMONG"}
                  onChange={(e) => handleCheckboxChange(e, 'skillLevel')}
                  className="form-checkbox"
                />
                <span>O&apos;rtacha</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="ADVENCED"
                  checked={filters.skillLevel === "ADVENCED"}
                  onChange={(e) => handleCheckboxChange(e, 'skillLevel')}
                  className="form-checkbox"
                />
                <span>Mutaxassis</span>
              </label>
            </li>
          </ul>
        </div>

        <div className='flex space-x-4 mt-3'>
          <Button type="submit">Saqlash</Button>
          <Button variant="destructive" type="button" onClick={onClear}>Tozalash</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4">
        {courseDatas.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg h-80 flex flex-col justify-between shadow-lg p-4 hover:shadow-xl transition duration-300"
          >
            <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
            <div>
              <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-1">
                <strong>Kategoriya:</strong> {course.category}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Sana:</strong> {course.date}
              </p>
            </div>
            <p className="text-blue-600 font-bold text-lg">{course.price}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default FilterForm;
