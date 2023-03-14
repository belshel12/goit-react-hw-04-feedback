import PropTypes from 'prop-types';
import { FeedbackContainer, Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <Button
          type="button"
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  option: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
