import styled from '@emotion/styled';
import { getRandomHexColor } from '../../helpers/getRandomHexColor';

export const SectionStatistics = styled.section`
  margin: 0 auto;
  padding-top: 40px;
  width: 480px;

  background-color: ${props => `${props.theme.colors.white}`};

  border: ${props => `2px solid ${props.theme.colors.primaryBg}`};
  border-radius: 8px;
  box-shadow: ${props => `4px 4px 4px 0.1em ${props.theme.colors.lightGrey}`};
`;
export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: 40px;

  font-size: 24px;
  color: ${props => `${props.theme.colors.darkGrey}`};
  text-align: center;
  text-transform: uppercase;
`;

export const Statlist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0px;
  padding: 0px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 8px 12px 16px 12px;

  flex-basis: calc(100% / 4);

  background-color: ${props => {
    return getRandomHexColor;
  }};
`;

export const StatLabel = styled.span`
  color: ${props => `${props.theme.colors.white}`};
  font-size: 20px;
`;

export const StatPercentage = styled.span`
  color: ${props => `${props.theme.colors.white}`};
  font-size: 28px;
`;
