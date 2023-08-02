import Modal from "@cfx-kit/ui-components/dist/Modal";
import "@cfx-kit/ui-components/dist/Modal.css";
import { useState } from "react";

// const AccountConnector: React.FC<{ isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
//   isOpen,
//   setIsOpen,
// }) => {
const AccountConnector: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      <Modal open={open}>
        <button onClick={() => setOpen(false)}>close</button>
      </Modal>
    </>
  );
};

export default AccountConnector;
