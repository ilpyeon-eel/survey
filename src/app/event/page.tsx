import Image from 'next/image';
import Link from 'next/link';

const reviewLinks = [
  { key: 'naver', image: '/naver.svg', link: 'https://www.naver.com' },
  { key: 'google', image: '/google.svg', link: 'https://www.google.com' },
  {
    key: 'instagram',
    image: '/instagram.svg',
    link: 'https://www.instagram.com',
  },
  {
    key: 'xiaohongshu',
    image: '/xiaohongshu.svg',
    link: 'https://www.xiaohongshu.com',
  },
  {
    key: 'catchtable',
    image: '/catchtable.svg',
    link: 'https://www.catchtable.co.kr',
  },
];

const ReviewEventPage = () => {
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
      <p className="mt-[11px] text-center">리뷰 이벤트</p>
      <div className="mt-[22px] mb-[10px]">
        <p className="ml-[6px]">링크를 통해 리뷰를 작성해주시면</p>
      </div>
      <div className="grid grid-cols-2 gap-[10px]">
        {reviewLinks.map(({ key, image, link }) => (
          <div
            key={key}
            className="flex justify-center items-center h-[110px] rounded-[6px] border border-[#f2f2f2]"
          >
            <Link href={link}>
              <Image
                src={image}
                alt="reviewEvent Links"
                width={92}
                height={100}
                priority
                quality={10}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewEventPage;
