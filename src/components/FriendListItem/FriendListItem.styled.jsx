import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;

  width: 300px;

  padding: 8px 16px;

  background-color: ${props => `${props.theme.colors.white}`};

  border: ${props => `2px solid ${props.theme.colors.primaryBg}`};
  border-radius: 8px;
  box-shadow: ${props => `4px 4px 4px 0.1em ${props.theme.colors.lightGrey}`};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 50px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const FriendStatus = styled.span`
  svg {
    fill: ${({propsStatus, theme}) => {
      switch (propsStatus) {
        case true:
          return theme.colors.green;
          case false:
          return theme.colors.red;
          default:
            return theme.colors.red;
      }
    }};
  }
`;