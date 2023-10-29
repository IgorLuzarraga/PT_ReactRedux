import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FadeTransition = ({ children }: Props) => {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-500"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-out duration-500"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-50 scale-[75%]"
    >
      {children}
    </Transition.Child>
  );
};

export default FadeTransition;
