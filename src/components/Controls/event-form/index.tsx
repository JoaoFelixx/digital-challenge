import {
  type Dispatch,
  type SetStateAction,

  useState,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type EventFormData, EventFormSchema } from './event.zod';

import * as s from './style';

import { Input } from "@/components/input";

import { toast } from "react-toastify";
import * as dateFns from 'date-fns';

import { uuid } from "@/utils/uuid";

import type { Event } from "@/types/event";
import { Submit } from "@/components/submit";


type ReactDispatch<T> = Dispatch<SetStateAction<T>>

interface EventFormProps {
  eventToUpdate?: Event;

  setEvents: ReactDispatch<Event[]>

  closeModal(): void
}


export const EventForm = ({
  eventToUpdate,

  setEvents,

  closeModal,
}: EventFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(EventFormSchema),
  });

  const [status, /* setStatus */] = useState<Event['status']>(
    eventToUpdate?.status || "on"
  );


  const formatDateTimeLocal = (date: Date | number): string => {
    if (!date) {
      return ""
    }

    return dateFns.format(date, "yyyy-MM-dd'T'HH:mm");
  };

  const addEvent = (eventToCreate: Event) => {
    setEvents(currentEvents =>
      [...currentEvents, eventToCreate]
    )

    toast.success(`Evento criado com sucesso`)
  }

  const updateEvent = (updatedEvent: Event) => {
    setEvents(currentEvents => currentEvents.map(event => {
      if (event.id !== updatedEvent.id) {
        return event
      }

      return updatedEvent
    }))

    toast.success(`Evento atualizado com sucesso`)
  }

  const onSubmit = (data: EventFormData) => {
    try {
      const startAt = new Date(data.startAt);
      const endAt = new Date(data.endAt);


      if (!dateFns.isAfter(endAt, startAt)) {
        toast.warning(`Data de fim não pode ser antes da data de inicio`)

        return
      }

      if (eventToUpdate) {
        updateEvent({
          ...eventToUpdate,
          name: data?.name,
          total: Number(data.total) || 1,
          status,
          endAt,
          startAt,
        })

        return
      }

      addEvent({
        id: uuid(),
        name: data.name,
        total: Number(data.total) || 1,
        status,
        endAt,
        startAt,
      })

      closeModal();

    } catch {
      toast.error(`Erro ao criar evento, tente novamente`)
    }
  }
  

  return (
    <s.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        type="text"
        errors={errors.name}
        register={register}
        defaultValue={eventToUpdate?.name}
      >
        Nome
      </Input>

      <Input
        name="total"
        type="number"
        errors={errors.total}
        register={register}
        defaultValue={eventToUpdate?.total}
      >
        Total de equipes
      </Input>

      <Input
        name="startAt"
        type="datetime-local"
        errors={errors.startAt}
        register={register}
        defaultValue={formatDateTimeLocal(eventToUpdate?.startAt)}
      >
        O evento começa ás
      </Input>

      <Input
        name="endAt"
        type="datetime-local"
        errors={errors.endAt}
        register={register}
        defaultValue={formatDateTimeLocal(eventToUpdate?.endAt)}
      >
        O evento termina ás
      </Input>

      <Submit>
        {eventToUpdate ? `Atualizar` : `Criar`}
      </Submit>
    </s.Form>
  )
}