import { Modal as MantineModal } from "@mantine/core";

const Modal = (props: any) => {
  return <MantineModal {...props}>{props.children}</MantineModal>;
};

export default Modal;
