import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-[20px]">
      <div className="flex flex-col items-center justify-center mt-[20px]">
        <Image src={'/logo_main.png'} alt="logo" width={145} height={145} />
        <span className="mt-[11px]">설문조사</span>
      </div>
      <div className="mt-[40px]">
        <p className="ml-[6px]">국가</p>
        <div className="mt-[16px] border rounded-[6px] pl-[18px] h-[48px] flex items-center">
          Dropdown components
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
