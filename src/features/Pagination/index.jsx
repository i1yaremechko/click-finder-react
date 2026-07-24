import PropTypes from 'prop-types';
import { getPaginationRange } from './utils';
import { ELLIPSIS } from './constants';
import './index.scss';

const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;
  
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className='pagination'>
      <button
        type='button'
        className="pagination__arrow" 
        disabled={page === 1} 
        onClick={() => onChange(page - 1)}
      >
        <img 
          src={`${baseUrl}images/arrow-left.svg`}
          alt='Previous'
          className="pagination__icon"
        />
      </button>

      {getPaginationRange(page, totalPages).map((item, index) => 
        item === ELLIPSIS ? (
          <span key={`ellipsis-${index}`} className='pagination__ellipsis'>
              {ELLIPSIS}
          </span>
        ) : (
          <button
            key={item}
            type='button'
            className={`pagination__page ${page === item ? 'active' : ''}`}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        )
      )}

      <button
        type='button'
        className='pagination__arrow'
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        <img
          src={`${baseUrl}images/arrow-right.svg`}
          alt="Next"
          className='pagination__icon'
        />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Pagination;