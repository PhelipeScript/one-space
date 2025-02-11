import { Modal, TouchableWithoutFeedback } from 'react-native'

import {
  Button,
  ButtonsContainer,
  ButtonText,
  Container,
  Message,
  Overlay,
} from './styles'

export interface ConfirmModalProps {
  visible: boolean
  message: string
  cancelText?: string
  confirmText?: string
  onCancel: () => void
  onConfirm: () => void
}

export function ConfirmModal({
  visible,
  message,
  cancelText = 'Cancelar',
  confirmText = 'Confirmar',
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <Overlay>
          <TouchableWithoutFeedback>
            <Container>
              <Message>{message}</Message>
              <ButtonsContainer>
                <Button type="secondary" onPress={onCancel}>
                  <ButtonText type="secondary">{cancelText}</ButtonText>
                </Button>
                <Button type="primary" onPress={onConfirm}>
                  <ButtonText type="primary">{confirmText}</ButtonText>
                </Button>
              </ButtonsContainer>
            </Container>
          </TouchableWithoutFeedback>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
