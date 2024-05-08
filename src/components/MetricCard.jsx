
import PropTypes from 'prop-types';

const MetricCard = ({ title, value }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

// Define propTypes for title and value props
MetricCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MetricCard;
