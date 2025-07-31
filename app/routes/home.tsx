import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resumind' },
    { name: 'description', content: 'Smart feedback for your dream job!' },
  ];
}

export default function Home() {
  return (
    <main className='bg-[url(/images/bg-main.svg)] bg-cover bg-center bg-no-repeat'>
      <section className='main-section'>
        <div className='page-heading'>
          <h1 className='text-4xl font-bold'>Resumind</h1>
          <h2 className='text-lg mt-2'>
            Revisa tus postulaciones y accede a comentarios generados por IA
          </h2>
        </div>
      </section>
    </main>
  );
}
