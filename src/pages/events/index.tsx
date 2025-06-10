import {
  Children,

  Fragment,

  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react"

import menu from '@/assets/icons/menu.svg';
import magnifyingGlass from '@/assets/icons/magnifying-glass.svg';

import * as s from './style';
import * as table from '@/styles/table';

import { Modal } from "@/components/Modal";

import { formatDateRange } from "@/utils/format-date-range";
import { formatTextForSearch } from "@/utils/format-text-for-search";

import { eventData, type Event } from "./data";
import { Pagination, type Page } from "@/components/pagination";



export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState<string>("");
  const [addEvent, setAddEvent] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(0);


  const filteredEvents = events.filter(event => {
    const formattedSearch = formatTextForSearch(search)
    const formattedName = formatTextForSearch(event.name)

    return formattedName.includes(formattedSearch)
  }).filter((_, index) => {
    if (index === pageIndex) {
      return true
    }

    if ((pageIndex + 1) === index) {
      return true
    }

    return false
  })



  const paginationByIndex = useCallback(async ({
    pageNumber
  }: Pick<Page, 'pageNumber'>) => {
    setPageIndex(pageNumber - 1)
  }, [])


  const pages = useMemo((): Page[] => {
    const amountOfPages = (Math.ceil(events.length / 2));

    const formattedPages = new Array(amountOfPages).fill({}).map<Page>((_, index) => ({
      pageNumber: index + 1,
      method: () => paginationByIndex({ pageNumber: index + 1 })
    }));


    return formattedPages;
  }, [paginationByIndex, events])


  const translateStatus: Record<Event['status'], string> = {
    on: 'Ativo',
    off: 'Desativado',
  }


  const nextPage = useCallback(() => {
    const nextPageIndex = pageIndex + 1;
    
    if (nextPageIndex > (pages.length -1)) {
      return
    }

    setPageIndex(nextPageIndex);

    paginationByIndex({ pageNumber: nextPageIndex + 1 });

  }, [pageIndex, pages, paginationByIndex]);

  const lastPage = useCallback(() => {
    const previousPageIndex = pageIndex - 1;

    if (previousPageIndex < 0) {
      return
    }

    setPageIndex(previousPageIndex);

    paginationByIndex({ pageNumber: previousPageIndex + 1 });
  }, [pageIndex, paginationByIndex]);

  const closeAddEvent = () => {
    setAddEvent(false);
  }


  useEffect(() => {
    setEvents(eventData)
  }, [])

  return (
    <Fragment>
      <s.Title>Todos eventos</s.Title>
      <table.TableContainer>

        <s.TableHeader>
          <s.SearchContainer>
            <img
              src={magnifyingGlass}
              alt="Lupa"
            />
            <input
              type="text"
              value={search}
              placeholder="Buscar eventos"
              onChange={({ target: { value } }) =>
                setSearch(value)
              }
            />
          </s.SearchContainer>

          <s.Button onClick={() => setAddEvent(true)}>
            + Inserir novo
          </s.Button>
        </s.TableHeader>

        <table.Table>
          <thead>
            <table.TR>
              <th>Nome do evento</th>
              <th>Total de equipes</th>
              <th>Status</th>
              <th>Data</th>
              <th />
            </table.TR>
          </thead>
          <tbody>
            {Children.toArray(filteredEvents.map(event => (
              <table.TR key={event.id}>
                <td>{event.name}</td>
                <td>{event.total}</td>
                <td>
                  <s.StatusContainer>
                    <span className="status" />
                    {translateStatus[event.status]}
                  </s.StatusContainer>
                </td>
                <td>
                  {formatDateRange({ end: event.endAt, start: event.startAt })}
                </td>
                <td>
                  <s.Action>
                    <img src={menu} alt="menu" />
                  </s.Action>
                </td>
              </table.TR>
            )))}
          </tbody>
        </table.Table>

        <s.TableFooter>
          <Pagination
            pages={pages}
            pageIndex={pageIndex}

            lastPage={lastPage}
            nextPage={nextPage}
          />
        </s.TableFooter>
      </table.TableContainer>

      {addEvent && (
        <Modal onCloseModal={closeAddEvent}>
          adicionar
        </Modal>
      )}
    </Fragment>
  )
}