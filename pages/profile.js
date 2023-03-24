import { getSession } from 'next-auth/client';
import UserProfile from '../components/profile/user-profile';

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false, // 이 리다이렉트가 영구적인지, 아니면 임시적인지 설정
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default ProfilePage;
