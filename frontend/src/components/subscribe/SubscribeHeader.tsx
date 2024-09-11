import styled from 'styled-components';
import { SubscribeHeaderProps } from '@/types/subscribe';
import { useNavigate } from 'react-router-dom';

function SubscribeHeader({ subscribeNumber }: SubscribeHeaderProps) {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/subscribes/all');
  };

  return (
    <Container>
      <Title>
        구독한 언론사<SubscribeCount>{subscribeNumber}</SubscribeCount>
      </Title>
      <ViewAll onClick={handleViewAllClick}>
        <ViewAllText>구독 전체보기</ViewAllText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.64645 1.14645C3.84171 0.951184 4.15829 0.951184 4.35355 1.14645L8.85355 5.64645C9.04882 5.84171 9.04882 6.15829 8.85355 6.35355L4.35355 10.8536C4.15829 11.0488 3.84171 11.0488 3.64645 10.8536C3.45118 10.6583 3.45118 10.3417 3.64645 10.1464L7.79289 6L3.64645 1.85355C3.45118 1.65829 3.45118 1.34171 3.64645 1.14645Z"
            fill="#626262"
          />
        </svg>
      </ViewAll>
    </Container>
  );
}

export default SubscribeHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  align-self: stretch;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  padding: 0;
`;

const SubscribeCount = styled.span`
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
  font-weight: 700;
  margin-left: 8px;
`;

const ViewAll = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const ViewAllText = styled.p`
  color: #626262;
  font-size: 11px;
  font-weight: 500;
  line-height: 140%;
`;
