import PropTypes from 'prop-types';

export const authorProps = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isMediumMember: PropTypes.bool.isRequired,
}).isRequired;

export const articleProps = PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: authorProps,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired
});
