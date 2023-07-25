import PropTypes from 'prop-types';
import css from './data.module.css';

export const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
    return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <h2 className={css.text}> UPLOAD STATS</h2>
      <ul className={css.stat_list}>
        {stats.map((stat, index) => (
          <li key={index} className={css.item} style={{ backgroundColor: getRandomColor() }}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics