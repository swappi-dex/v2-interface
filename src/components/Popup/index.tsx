import Modal from "@cfx-kit/ui-components/dist/Modal";
import "@cfx-kit/ui-components/dist/Modal.css";
import { type ComponentProps, type PropsWithChildren } from "react";
import CloseIcon from "@assets/icons/close.svg";

interface Props extends Omit<ComponentProps<typeof Modal>, "children"> {
  title: string;
}

const Popup: React.FC<PropsWithChildren<Props>> = ({ children, title, ...props }) => {
  return (
    <Modal {...props}>
      {({ contentProps, closeTriggerProps }) => (
        <div {...contentProps} className="bg-white w-[400px] rounded-tl-[30px] p-[24px]">
          <div className="flex justify-between items-center">
            <div className="color-ink-green font-bold">{title}</div>
            <img {...closeTriggerProps} src={CloseIcon} alt="close" className="cursor-pointer" />
          </div>
          <div className="mt-[24px]">{children}</div>
        </div>
      )}
    </Modal>
  );
};

export default Popup;
