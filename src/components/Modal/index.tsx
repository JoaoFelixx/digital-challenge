import * as s from './style';

import type { Provider } from '@/types/provider';


interface ModalProps extends Provider {
  title: string;

  onCloseModal(): void
}


export const Modal = ({
  title,
  children,
  onCloseModal
}: ModalProps) => {

  return (
    <s.BlurContainer>
      <s.ModalContainer>
        <s.ModalHeader>
          <h4>{title}</h4>
          <s.CloseButton onClick={onCloseModal}>
            X
          </s.CloseButton>
        </s.ModalHeader>
        <s.ModalContent>
          {children}
        </s.ModalContent>
      </s.ModalContainer>
    </s.BlurContainer>
  )
}