import { resumes } from '~/constants';
import { Navbar, ResumeCard } from '../components';
import type { Route } from './+types/home';
import { usePuterStore } from '~/lib/puter';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resumind' },
    { name: 'description', content: 'Smart feedback for your dream job!' },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/auth?next=/');
    }
  }, [auth.isAuthenticated]);
  return (
    <main className='bg-[url(/images/bg-main.svg)] bg-cover bg-center bg-no-repeat'>
      <Navbar />

      <section className='main-section py-16'>
        <div className='page-heading'>
          <h1 className='text-4xl font-bold'>
            Track your applications & Resume Ratings
          </h1>
          <h2 className='text-lg mt-2'>
            Review your submissions and check AI-powered feedback
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className='resumes-section'>
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
