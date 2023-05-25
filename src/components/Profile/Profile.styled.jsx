import styled from '@emotion/styled';

export const UserCard = styled.div`
  margin: 0 auto;
  padding-top: 40px;

  width: 300px;

  background-color: ${props => `${props.theme.colors.white}`};

  text-align: center;

  border: ${props => `2px solid ${props.theme.colors.lightGrey}`};
  border-radius: 8px;
  box-shadow: ${props => `4px 4px 4px 0.1em ${props.theme.colors.lightGrey}`};
`;

export const UserDescription = styled.div`
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 50%;
`;

export const UserName = styled.h1`
  margin: 0px;

  font-size: 24px;
  color: ${props => `${props.theme.colors.darkGrey}`};
`;

export const UserTag = styled.p`
  margin: 0px;

  color: ${props => `${props.theme.colors.lightGrey}`};
  font-size: 16px;
`;

export const UserLocation = styled.p`
  margin: 0px;

  color: ${props => `${props.theme.colors.lightGrey}`};
  font-size: 20px;
`;

export const UserStats = styled.ul`
  margin: 0px;
  padding: 0px;

  display: flex;
  justify-content: space-between;

  background-color: ${props => `${props.theme.colors.primaryBg}`};
  border-radius-top: 8px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border: ${props => `0.5px solid ${props.theme.colors.lightGrey}`};
`;

export const StatsLabel = styled.span`
  font-size: 16px;
  color: ${props => `${props.theme.colors.lightGrey}`};
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${props => `${props.theme.colors.grey}`};
`;
