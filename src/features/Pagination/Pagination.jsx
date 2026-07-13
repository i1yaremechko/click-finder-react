import { DEFAULT_PAGE } from '@common/constants';
import { getPageRange } from './utils';

const ELLIPSIS = '...';

function Pagination({ currentPage, pagesCount, onPageChange }) {
  if (pagesCount <= 1) return null;

  const { startPage, endPage } = getPageRange(currentPage, pagesCount);
  const baseUrl = import.meta.env.BASE_URL;

  const handlePageClick = (page) => {
    if (page === currentPage || page < 1 || page > pagesCount) return;
    onPageChange(page);
  };

  const renderArrow = (targetPage, isDisabled, iconName, altText) => {
    return (
      <button 
        className="pagination__arrow" 
        disabled={isDisabled} 
        onClick={() => handlePageClick(targetPage)}
      >
        <img src={`${baseUrl}/images/${iconName}.svg`} alt={altText} className="pagination__icon" />
      </button>
    );
  };

  const pageButtons = [];

  if (startPage > DEFAULT_PAGE) {
    pageButtons.push(
      <button 
        key={1} 
        className={`pagination__page ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => handlePageClick(1)}
      >
        1
      </button>
    );
  }

  if (startPage > DEFAULT_PAGE + 1) {
    pageButtons.push(<span key="left-ellipsis" className="pagination__ellipsis">{ELLIPSIS}</span>);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button 
        key={i} 
        className={`pagination__page ${i === currentPage ? 'active' : ''}`}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </button>
    );
  }

  if (endPage < pagesCount - 1) {
    pageButtons.push(<span key="right-ellipsis" className="pagination__ellipsis">{ELLIPSIS}</span>);
  }

  if (endPage < pagesCount) {
    pageButtons.push(
      <button 
        key={pagesCount} 
        className={`pagination__page ${currentPage === pagesCount ? 'active' : ''}`}
        onClick={() => handlePageClick(pagesCount)}
      >
        {pagesCount}
      </button>
    );
  }

  return (
    <div className="pagination">
      {renderArrow(currentPage - 1, currentPage === DEFAULT_PAGE, 'arrow-left', 'Previous')}
      {pageButtons}
      {renderArrow(currentPage + 1, currentPage === pagesCount, 'arrow-right', 'Next')}
    </div>
  );
}

export default Pagination;