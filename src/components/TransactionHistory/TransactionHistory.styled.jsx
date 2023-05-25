import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 80%;

  display: inline-table;
  border-collapse: collapse;

  border: ${props => `2px solid ${props.theme.colors.grey}`};
  background-color: ${props => `${props.theme.colors.blue}`};
`;

export const TableThead = styled.thead`
  padding: 12px;

  height: 40px;

  font-size: 20px;

  text-align: center;
  text-transform: uppercase;
`;

export const TableTh = styled.th`
  padding: 12px;

  height: 40px;

  font-size: 20px;
  color: ${props => `${props.theme.colors.white}`};
  text-align: center;

  border: ${props => `2px solid ${props.theme.colors.grey}`};
`;

export const TableTbody = styled.tbody`
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const TableTd = styled.td`
  padding: 12px;

  font-size: 20px;
  color: ${props => `${props.theme.colors.grey}`};
  text-align: center;

  border: ${props => `2px solid ${props.theme.colors.grey}`};
`;

export const TableTr = styled.tr`
  :nth-of-type(2n) {
    background-color: ${props => `${props.theme.colors.primaryBg}`};
  }

  :hover {
    background-color: ${props => `${props.theme.colors.lightBlue}`};
  }
`;
