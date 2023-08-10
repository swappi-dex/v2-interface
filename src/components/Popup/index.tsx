import { useState, useCallback, useMemo, type ReactNode } from "react";
import Modal from "@cfx-kit/ui-components/dist/Modal";
import { type ComponentProps } from "react";
import CloseIcon from "@assets/icons/close.svg";
import "@cfx-kit/ui-components/dist/Modal.css";

type Children = (({ pre, next }: { pre: VoidFunction; next: VoidFunction }) => JSX.Element) | ReactNode;

interface Props extends Omit<ComponentProps<typeof Modal>, "children"> {
  title?: string | Array<string>;
  children?: Children | Array<Children>;
}

const Popup: React.FC<Props> = ({ children, title, ...props }) => {
  const [step, setStep] = useState(0);
  const _title = useMemo(() => (Array.isArray(title) ? title : [title]), [title]);
  const _children = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);
  const currentTitle = useMemo(() => _title[step], [_title, step]);
  const currentChildren = useMemo(() => _children[step], [_children, step]);

  const pre = useCallback(() => {
    setStep((step) => Math.max(step - 1, 0));
  }, []);
  const next = useCallback(() => {
    setStep((step) => Math.min(step + 1, _title.length));
  }, [_title]);

  return (
    <Modal {...props}>
      {({ contentProps, closeTriggerProps }) => (
        <div {...contentProps} className="bg-white w-[400px] rounded-tl-[30px] p-[24px]">
          <div className="flex justify-between items-center">
            <div className="color-ink-green font-bold">{currentTitle}</div>
            <img {...closeTriggerProps} src={CloseIcon} alt="close" className="cursor-pointer" />
          </div>
          <div className="mt-[24px]">
            {typeof currentChildren === "function" ? currentChildren({ pre, next }) : currentChildren}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Popup;
