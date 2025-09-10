'use client';

import Dropdown from '@/components/Dropdown';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';

export default function Home() {
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
          options={[
            'South Korea',
            'Japan',
            'China',
            'Hongkong',
            'United States',
            'Canada',
            'Vietnam',
            'Thailand',
            'Singapore',
          ]}
          defaultValue="국가를 선택해주세요"
          onChange={(v) => console.log('선택:', v)}
        />
      </div>
      <div className="mt-[33px]">
        <p className="ml-[6px]">나이</p>
        <span className="ml-[6px] text-[13px] text-[#767676]">
          설문 작성자분의 나이를 선택해주세요.
        </span>
        <div className="grid mt-[16px] grid-cols-3 gap-[10px]">
          <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
            20미만
          </div>
          <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
            20-30
          </div>
          <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
            31-40
          </div>
          <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
            51-60
          </div>
          <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
            41-50
          </div>
          <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
            61 이상
          </div>
        </div>
        <div className="mt-[33px]">
          <p className="ml-[6px]">인원수</p>
          <div className="grid mt-[16px] grid-cols-3 gap-[10px]">
            <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
              1인
            </div>
            <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
              2-3인
            </div>
            <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
              3-5인
            </div>
            <div className="flex border border-[#F2F2F2] rounded-[6px] h-[48px] items-center justify-center">
              6인 이상
            </div>
          </div>
        </div>
        <div className="mt-[72px]">
          <p className="ml-[6px]">찾아 온 경로</p> <p>*중복 선택 가능</p>
          <div className="flex flex-col gap-[10px] mt-[16px]">
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              지인 추천
            </div>
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              온라인 검색
            </div>
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              지도 앱
            </div>
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              SNS/소셜 미디어
            </div>
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              길 가다 우연히
            </div>
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              간판/외부 홍보물
            </div>
            <div className="flex pl-[15px] border border-[#F2F2F2] rounded-[6px] h-[48px] items-center">
              이전 방문 경험
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
