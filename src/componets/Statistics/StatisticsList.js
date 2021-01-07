import styles from './Statistics.module.css';
import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ title, stats }) {
  const colors = ['#F44336', '#4CAF50', '#2196F3', '#E91E63', '#607D8B'];
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((item, index) => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: colors[index] }}
          >
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
