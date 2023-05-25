import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableThead,
  TableTh,
  TableTbody,
  TableTd,
  TableTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
