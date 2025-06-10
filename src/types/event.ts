export interface Event {
  id: string;
  name: string;
  total: number;
  status: 'on' | 'off';

  startAt: Date;
  endAt: Date;
}