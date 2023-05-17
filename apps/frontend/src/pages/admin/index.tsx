import { useAuthMe } from '@/api';

export function AdminIndexPage() {
  const { data } = useAuthMe();

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
