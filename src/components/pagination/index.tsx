import {
  type CSSProperties,

  Children,

  useMemo
} from 'react';

import * as s from './style';


export interface Page {
  pageNumber: number;
  method(): unknown;
}

interface PaginationProps {
  style?: CSSProperties

  pages: Page[];
  pageIndex: number;

  lastPage(): unknown;
  nextPage(): unknown;
}


export const Pagination = ({
  style, pages, pageIndex, nextPage, lastPage
}: PaginationProps) => {

  const { displayedPages } = useMemo(() => {
    const totalPages = pages.length;
    const maxVisiblePages = 3;


    const showEveryPagesIfHaveABit = totalPages <= maxVisiblePages

    if (showEveryPagesIfHaveABit) return {
      totalPages,
      displayedPages: pages,
    }

    const firstPage = pages[0];
    const lastPage = pages[totalPages - 1];


    const isInFirstPagesShowEveryOptions = pageIndex <= 2

    if (isInFirstPagesShowEveryOptions) {
      return {
        totalPages,
        displayedPages: [
          ...pages.slice(0, 4),
          { pageNumber: -1, method: () => { } }, // hidden options
          lastPage
        ]
      }
    }

    const ifIsLastPageShowFirstPageAndLastOptions = pageIndex >= totalPages - 3

    if (ifIsLastPageShowFirstPageAndLastOptions) {
      return {
        totalPages,
        displayedPages: [
          firstPage,
          { pageNumber: -1, method: () => { } }, // hidden options
          ...pages.slice(totalPages - 4)
        ]
      }
    }

    return {
      totalPages,
      displayedPages: [
        firstPage,
        { pageNumber: -1, method: () => { } },
        ...pages.slice(pageIndex - 1, pageIndex + 2), // hidden options
        { pageNumber: -1, method: () => { } },
        lastPage
      ],
    }
  }, [pages, pageIndex]);


  return (
    <s.Container style={style}>
      <s.ButtonWrapper>
        <s.Button onClick={lastPage}>
          Anterior
        </s.Button>
        {Children.toArray(displayedPages.map(page =>
          page.pageNumber === -1 ? (
            <s.Ellipsis>...</s.Ellipsis>
          ) : (
            <s.Page
              $selected={page.pageNumber - 1 === pageIndex}
              onClick={() => page.method()}
            >
              {page.pageNumber}
            </s.Page>
          )
        ))}
        <s.Button $selected onClick={nextPage}>
          Próxima
        </s.Button>
      </s.ButtonWrapper>
    </s.Container>
  )
}