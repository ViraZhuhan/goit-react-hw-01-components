import styled from '@emotion/styled';

export const UserCard = styled.div`
  margin-top: 24px;
  padding-top: 40px;

  background-color: white;

  text-align: center;

  border: 2px solid rgb(220, 220, 220);
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0.1em rgb(180, 180, 180);
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
  color: rgb(80, 80, 80);
`;

export const UserTag = styled.p`
  margin: 0px;

  color: rgb(160, 160, 160);
  font-size: 16px;
`;

export const UserLocation = styled.p`
  margin: 0px;

  color: rgb(160, 160, 160);
  font-size: 20px;
`;

export const UserStats = styled.ul`
  margin: 0px;
  padding: 0px;

  display: flex;
  justify-content: space-between;

  background-color: rgb(240, 240, 240);
  border-radius-top: 8px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border: 1px solid rgb(220, 220, 220);
`;

export const StatsLabel = styled.span`
  font-size: 16px;
  color: rgb(160, 160, 160);
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: rgb(100, 100, 100);
`;
