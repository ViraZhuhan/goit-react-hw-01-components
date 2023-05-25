import PropTypes from 'prop-types';
import {SectionStatistics, Title, Statlist, StatItem, StatLabel, StatPercentage } from './Statistics.styled';



export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}
      <Statlist>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatLabel> {stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </Statlist>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
