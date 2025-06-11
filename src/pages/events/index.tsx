import {
  Children,

  Fragment,

  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react"

import menu from '@/assets/icons/menu.svg';
import pencil from '@/assets/icons/pencil.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import redTrash from '@/assets/icons/red-trash.svg';
import magnifyingGlass from '@/assets/icons/magnifying-glass.svg';

import * as s from './style';
import * as table from '@/styles/table';

import { Modal } from "@/components/Modal";
import { EventForm } from "@/components/Controls/event-form";
import { Pagination, type Page } from "@/components/pagination";

import { formatDateRange } from "@/utils/format-date-range";
import { formatTextForSearch } from "@/utils/format-text-for-search";

import { eventData } from "./data";

import { useClickAway } from "@/hooks/use-click-away";
import { useWindowSize } from "@/hooks/use-window-size";

import type { Event } from "@/types/event";


export const Events = () => {
  const { isMobile } = useWindowSize();
  const dropdownRef = useRef<HTMLUListElement>(null);

  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState<string>("");
  const [addEvent, setAddEvent] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [dropdownIndex, setDropdownIndex] = useState<number>(null);
  const [eventToUpdate, setEventToUpdate] = useState<Event>(null);
  const [eventToRemove, setEventToRemove] = useState<Event>(null);


  const filteredEvents = events.filter(event => {
    const formattedSearch = formatTextForSearch(search)
    const formattedName = formatTextForSearch(event.name)

    if (!search) {
      return true
    }

    return formattedName.includes(formattedSearch)
  }).filter((_, index) => {
    const isVisible = (
      index >= pageIndex * 2 &&
      index <= pageIndex * 2 + 1
    );


    return isVisible
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

    if (nextPageIndex > (pages.length - 1)) {
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

  const closeUpdateEvent = () => {
    setEventToUpdate(null);
  }

  const closeRemoveEvent = () => {
    setEventToUpdate(null);
  }

  useClickAway(dropdownRef, () => {
    setDropdownIndex(null);
  })


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
              {!isMobile && <th>Total de equipes</th>}
              <th>Status</th>
              <th>Data</th>
              <th />
            </table.TR>
          </thead>
          <tbody>
            {Children.toArray(filteredEvents.map((event, index) => (
              <table.TR key={event.id}>
                <td>{event.name}</td>
                {!isMobile && <td>{event.total}</td>}
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
                  <s.Action onClick={() => setDropdownIndex(index)}>
                    <img src={menu} alt="menu" />
                    {dropdownIndex === index && (
                      <s.Dropdown ref={dropdownRef}>
                        <li>
                          <img src={eyeIcon} alt="eye" />
                          <span>Visualizar</span>
                        </li>
                        <li onClick={() => setEventToUpdate(event)}>
                          <img src={pencil} alt="eye" />
                          <span>Editar</span>
                        </li>
                        <li onClick={() => setEventToRemove(event)}>
                          <img src={redTrash} alt="eye" />
                          <span>Remover</span>
                        </li>
                      </s.Dropdown>
                    )}
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
        <Modal
          title="Adicionar evento"
          onCloseModal={closeAddEvent}
        >
          <EventForm
            setEvents={setEvents}

            closeModal={closeAddEvent}
          />
        </Modal>
      )}

      {eventToUpdate && (
        <Modal
          title="Atualizar evento"
          onCloseModal={closeUpdateEvent}
        >
          <EventForm
            eventToUpdate={eventToUpdate}

            setEvents={setEvents}

            closeModal={closeUpdateEvent}
          />
        </Modal>
      )}

      {eventToRemove && (
        <Modal
          title="Atualizar evento"
          onCloseModal={closeRemoveEvent}
        >
          Remover
        </Modal>
      )}
    </Fragment>
  )
}