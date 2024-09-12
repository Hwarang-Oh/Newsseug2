import styled from 'styled-components';
import Scrap from './Scrap';
import { useNavigate } from 'react-router-dom';

const ScrapList = [
  {
    thumbnailUrl:
      'data:image/jpeg;base64,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',
    scrapCnt: 20,
    scrapTitle: '김택연',
  },
  {
    thumbnailUrl: '',
    scrapCnt: 20,
    scrapTitle:
      'adsfadsfadsfadsf adsfadsof;jasdfkjadsfajds;f ofasdjfi;dfj adfaㅁㄴㅇ라;ㅐㅗ 밀엉니ㅏㄹ머;ㅣ아럼;ㅇ리ㅑㅁㅇㄴㄻ얼미ㅏㅇㄴ럼ㄴㅇ러아러ㅇㅁㅁㅇㄴㄻ ㅑㅓㅂㅁ;ㅐ샤ㅓㅁ ㄱ댛 뭉니라ㅓ ㅁ;ㅇ루 매ㅑㅁ러;ㅁ ㅐㅑㅇㄴ롬ㅇㄴ로 ㅁ;ㅣㄴㅇ러 ㅁ;인라ㅓ ;ㅐㅑㅁㅇ나럼 ;ㅐㄱ댜소매ㅑㅗ 매;야러 ㅁ;ㅈ덜 맺댜ㅓ',
  },
  { thumbnailUrl: '', scrapCnt: 20, scrapTitle: '안녕' },
  { thumbnailUrl: '', scrapCnt: 20, scrapTitle: '안녕' },
  { thumbnailUrl: '', scrapCnt: 20, scrapTitle: '안녕' },
];

function Scraps() {
  const navigate = useNavigate();
  const width = '120px';
  const height = '160px';
  const handleClick = (idx: number, title: string) => {
    navigate(`scraps/${idx}`, { state: { title } });
  };
  return (
    <Wrapper>
      {ScrapList.map((scrap, idx) => (
        <Scrap
          key={idx}
          width={width}
          height={height}
          thumbnailUrl={scrap.thumbnailUrl}
          scrapCnt={scrap.scrapCnt}
          scrapTitle={scrap.scrapTitle}
          onClick={() => handleClick(idx, scrap.scrapTitle)}
        />
      ))}
    </Wrapper>
  );
}

export default Scraps;

const Wrapper = styled.div`
  display: flex;
  width: 100%; /* 부모 요소의 너비에 맞춤 */
  max-width: 100%; /* 최대 부모 요소의 너비만큼 차지 */
  align-items: flex-start;
  gap: 8px;
  overflow-x: auto; /* x축 스크롤 가능 */
  white-space: nowrap; /* 자식 요소들이 줄바꿈되지 않도록 설정 */
  scroll-behavior: smooth; /* 부드러운 스크롤 */

  & > * {
    flex-shrink: 0; /* 자식 요소가 축소되지 않도록 설정 */
  }

  /* 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
  -ms-overflow-style: none;
`;
