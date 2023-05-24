import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px;
  font-size: 32px;
  color: ${props => `${props.theme.colors.primaryText}`};
  background-color: ${props => `${props.theme.colors.primaryBg}`};
`;
