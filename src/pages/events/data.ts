import { uuid } from "@/utils/uuid";


export interface Event {
  id: string;
  name: string;
  total: number;
  status: 'on' | 'off';

  startAt: Date;
  endAt: Date;
}


export const eventData: Event[] = [
  {
    id: uuid(),
    name: 'Clube do Laço Coração Pantaneiro',
    status: 'on',
    total: 10,
    startAt: new Date('2025-06-09T22:57:54.968Z'),
    endAt: new Date('2025-06-11T22:57:54.968Z'),
  },
  {
    id: uuid(),
    name: 'Clube do Laço Coração Pantaneiro',
    status: 'on',
    total: 10,
    startAt: new Date('2025-06-09T22:57:54.968Z'),
    endAt: new Date('2025-06-11T22:57:54.968Z'),
  },
  {
    id: uuid(),
    name: 'Clube do Laço Coração Pantaneiro',
    status: 'on',
    total: 10,
    startAt: new Date('2025-06-09T22:57:54.968Z'),
    endAt: new Date('2025-06-11T22:57:54.968Z'),
  },
  {
    id: uuid(),
    name: 'Clube do Laço Coração Pantaneiro',
    status: 'on',
    total: 10,
    startAt: new Date('2025-06-09T22:57:54.968Z'),
    endAt: new Date('2025-06-11T22:57:54.968Z'),
  },
  {
    id: uuid(),
    name: 'Clube do Laço Coração Pantaneiro',
    status: 'on',
    total: 10,
    startAt: new Date('2025-06-09T22:57:54.968Z'),
    endAt: new Date('2025-06-11T22:57:54.968Z'),
  },
  {
    id: uuid(),
    name: 'Clube do Laço Coração Pantaneiro',
    status: 'on',
    total: 10,
    startAt: new Date('2025-06-09T22:57:54.968Z'),
    endAt: new Date('2025-06-11T22:57:54.968Z'),
  },
]