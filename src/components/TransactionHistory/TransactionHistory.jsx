import {
  TransactionHistoryTable,
  TableThead,
  TableTh,
  TableTbody,
  TableTd,
  TableTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>

      <TableTbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableTr key={id}>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
          </TableTr>
        ))}
      </TableTbody>
    </TransactionHistoryTable>
  );
};
