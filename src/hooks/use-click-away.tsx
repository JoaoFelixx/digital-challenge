import {
  type RefObject,

  useMemo,
  useEffect,
} from "react";


type Reference = RefObject<HTMLElement>

type Method = () => unknown;


const elementsClicked = new Set<HTMLElement>()


export const useClickAway = (
  ref: Reference,
  actionMethod: Method,
  selectors?: string[],
  activeContext?: boolean
) => {
  const {
    memoizedSelectors,
    activeContextEvents,
  } = useMemo(() => ({
    memoizedSelectors: selectors,
    activeContextEvents: activeContext,
  }), [selectors, activeContext])


  useEffect(() => {
    const doFunction = async (event: MouseEvent) => {
      try {
        if (!ref.current) {
          elementsClicked.delete(ref.current)

          return
        }

        const currentElement = event.target as HTMLDivElement;

        const isAlreadyClicked = elementsClicked.has(ref.current)


        if (!isAlreadyClicked) {
          elementsClicked.add(ref.current);

          return
        }

        if (currentElement?.id?.includes('react-select') ) {
          return
        }

        if (
          !memoizedSelectors &&
          !ref.current.contains(currentElement) &&
          !ref.current.isEqualNode(currentElement)
        ) {
          elementsClicked.delete(ref.current)

          actionMethod();

          return
        }

        const clickedOnSomeSelector = memoizedSelectors?.some(selector => {
          const targetElement = document.querySelector(selector)

          if (!targetElement) {
            return false
          }

          return (
            targetElement.isEqualNode(currentElement) ||
            targetElement.contains(currentElement)
          )
        })


        if (
          !clickedOnSomeSelector &&
          !ref.current.contains(currentElement) &&
          !ref.current.isEqualNode(currentElement)
        ) {
          elementsClicked.delete(ref.current)

          actionMethod();
        }

      } catch (error) {
        console.log(error);
      }
    }


    if (activeContextEvents) {
      document.addEventListener('contextmenu', doFunction);
    }

    document.addEventListener('click', doFunction);


    return () => {
      document.removeEventListener('click', doFunction);

      if (activeContextEvents) {
        document.removeEventListener('contextmenu', doFunction);
      }
    }

    //eslint-disable-next-line
  }, [activeContextEvents, memoizedSelectors, ref])
}