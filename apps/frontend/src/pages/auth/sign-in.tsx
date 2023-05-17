import { useEffectOnce } from 'usehooks-ts';
import { useModals, ModalType } from '@/providers';

export function AuthSignInPage() {
  const {
    showModal,
  } = useModals();

  useEffectOnce(() => showModal({
    type: ModalType.signIn,
    permanent: true,
  }));

  return null;
}
