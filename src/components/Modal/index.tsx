import * as s from './style';

import type { Provider } from '@/types/provider';


interface ModalProps extends Provider {
  onCloseModal(): void
}


export const Modal = ({ children, onCloseModal }: ModalProps) => {

  return (
    <s.BlurContainer>
      <s.ModalContainer>
        <s.ModalHeader>
          <span onClick={onCloseModal}>
            X
          </span>
        </s.ModalHeader>
        <s.ModalContent>
          {children}
        </s.ModalContent>
      </s.ModalContainer>
    </s.BlurContainer>
  )
}