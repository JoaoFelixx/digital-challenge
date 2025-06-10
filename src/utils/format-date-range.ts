import { ptBR, type Locale } from 'date-fns/locale'
import {
  format,
  isSameYear,
  isSameMonth,
} from 'date-fns'


interface FormatDateProps {
  start: Date;
  end: Date;
  locale?: Locale;
}


export function formatDateRange({
  start, end, locale = ptBR
}: FormatDateProps) {
  const sameMonth = isSameMonth(start, end)
  const sameYear = isSameYear(start, end)

  if (sameMonth && sameYear) {
    return `${format(start, 'd', { locale })} até ${format(end, "d 'de' MMMM", { locale })}`
  }

  if (sameYear) {
    return `${format(start, "d 'of' MMMM", { locale })} até ${format(end, "d 'de' MMMM", { locale })}`
  }

  return `${format(start, "d 'of' MMMM yyyy", { locale })} até ${format(end, "d 'de' MMMM yyyy", { locale })}`
}