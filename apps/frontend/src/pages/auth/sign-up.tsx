import { useEffectOnce } from 'usehooks-ts';
import { useModals, ModalType } from '@/providers';

export function AuthSignUpPage() {
  const {
    showModal,
  } = useModals();

  useEffectOnce(() => showModal({
    type: ModalType.signUp,
    permanent: true,
  }));

  return null;
}
