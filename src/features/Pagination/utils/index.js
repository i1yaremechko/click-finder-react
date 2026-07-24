import {
  PAGINATION_VISIBLE_ITEMS,
  PAGINATION_EDGE_SPREAD,
  ELLIPSIS
} from "../constants";

export const getPaginationRange = (curr, total) => {
  const page = Number(curr);
  const totalPages = Number(total);
  
  if (totalPages <= PAGINATION_VISIBLE_ITEMS) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const lastRangeStartPage = totalPages - PAGINATION_EDGE_SPREAD + 1;

  if (page <= PAGINATION_EDGE_SPREAD) {
    return [1, 2, 3, 4, 5, ELLIPSIS, totalPages];
  }

  if (page < lastRangeStartPage) {
    return [1, ELLIPSIS, page - 1, page, page + 1, ELLIPSIS, totalPages];
  }

  return [1, ELLIPSIS, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
};