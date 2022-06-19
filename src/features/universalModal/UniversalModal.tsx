import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import logosm from '../../assets/logosmall.png';

interface ModalProps {
  closeModal: () => void;
  languageJsonFileName: string;
  propertyFromJson: string;
}

function DeleteCartModal(prop: ModalProps) {
  const { t } = useTranslation(prop.languageJsonFileName);
  return (
    <div
      onClick={prop.closeModal}
      onKeyDown={prop.closeModal}
      role="button"
      tabIndex={0}
    >
      <div className="fixed top-0 left-0  z-20 h-full w-full bg-black opacity-20" />
      <div
        className="bg- fixed top-1/2 left-1/2  z-30 flex h-40 w-10/12 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-lg bg-stone-200 p-6 text-center shadow-xl hover:cursor-default sm:h-60 sm:p-8 sm:text-lg md:text-xl lg:text-2xl lg2:w-1/2 "
        onClick={(e: any) => e.stopPropagation()}
        onKeyDown={(e: any) => e.stopPropagation()}
        role="button"
        tabIndex={0}
        style={{ backgroundImage: `url(${logosm})` }}
      >
        {t(prop.propertyFromJson)}
        <button
          onClick={prop.closeModal}
          onKeyDown={prop.closeModal}
          aria-label="close handler"
          className="absolute top-4 right-4 text-xl sm:top-10 sm:right-10"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default DeleteCartModal;
