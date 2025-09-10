'use client';

import ButtonL from '@/components/Button/ButtonL';
import ButtonS from '@/components/Button/ButtonS';
import Dropdown from '@/components/Dropdown';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [age, setAge] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [people, setPeople] = useState<string | null>(null);
  const [routes, setRoutes] = useState<string[]>([]);

  const countryOptions = [
    'South Korea',
    'Japan',
    'China',
    'Hongkong',
    'United States',
    'Canada',
    'Vietnam',
    'Thailand',
    'Singapore',
  ];
  const ageOptions = ['20 미만', '20-30', '31-40', '41-50', '51-60', '61 이상'];
  const peopleOptions = ['1인', '2-3인', '3-5인', '6인 이상'];
  const routeOptions = [
    '지인 추천',
    '온라인 검색',
    '지도 앱',
    'SNS/소셜 미디어',
    '길 가다 우연히',
    '간판/외부 홍보물',
    '이전 방문 경험',
  ];

  const toggleRoute = (option: string) => {
    setRoutes((prev) =>
      prev.includes(option)
        ? prev.filter((r) => r !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="px-[20px]">
      <div className="flex flex-col items-center justify-center mt-[20px]">
        <Image
          src={'/logo_main.png'}
          alt="logo"
          width={145}
          height={145}
          priority
        />
      </div>
      <div className="mt-[40px]">
        <p className="ml-[6px]">국가</p>

        <Dropdown
          options={countryOptions}
          defaultValue="국가를 선택해주세요"
          onChange={(v) => setCountry(v)}
        />
        {country}
      </div>
      <div className="mt-[33px]">
        <p className="ml-[6px]">나이</p>
        <span className="ml-[6px] text-[13px] text-[#767676]">
          설문 작성자분의 나이를 선택해주세요.
        </span>
        <div className="grid mt-[16px] grid-cols-3 gap-[10px]">
          {ageOptions.map((option) => (
            <ButtonS
              key={option}
              label={option}
              selected={age === option}
              onClick={() => setAge(option)}
            />
          ))}
        </div>
        <div className="mt-[33px]">
          <p className="ml-[6px]">인원수</p>
          <div className="grid mt-[16px] grid-cols-3 gap-[10px]">
            {peopleOptions.map((option) => (
              <ButtonS
                key={option}
                label={option}
                selected={people === option}
                onClick={() => setPeople(option)}
              />
            ))}
          </div>
        </div>
        <div className="mt-[72px]">
          <p className="ml-[6px]">
            찾아 온 경로
            <span className="pl-[13px] text-[13px] text-[#767676]">
              *중복 선택 가능
            </span>
          </p>
          <div className="flex flex-col gap-[10px] mt-[16px]">
            {routeOptions.map((option) => (
              <ButtonL
                key={option}
                label={option}
                selected={routes.includes(option)}
                onClick={() => toggleRoute(option)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
