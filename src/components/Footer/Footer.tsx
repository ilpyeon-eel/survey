'use client';

import { saveSurveyAPI } from '@/apis/saveSurvey';

const Footer = () => {
  const onSubmit = async () => {
    const params = {
      country: 'China',
      ageGroup: '31-40',
      numberOfPeopleGroup: '2-3인',
      referralPaths: ['지도 앱', '길 가다 우연히'],
    };

    await saveSurveyAPI({ ...params });
  };

  return (
    <div className="mt-[16px] mb-[25px] pt-[16px] px-[20px] border-t border-t-[#f2f2f2]">
      <button
        className="w-full h-[45px] bg-[#FF5900] rounded-[6px] text-[white]"
        onClick={onSubmit}
      >
        다음
      </button>
    </div>
  );
};

export default Footer;
