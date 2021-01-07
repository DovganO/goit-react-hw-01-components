import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
