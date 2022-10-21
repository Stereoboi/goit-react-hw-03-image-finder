import { LoadMoreButton } from "./Button.styled"
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ loadMore }) => {
  return  <LoadMoreButton
            type="button"
            onClick={loadMore}  
          >
            <span>Load More</span>
          </LoadMoreButton>
}

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func,
}