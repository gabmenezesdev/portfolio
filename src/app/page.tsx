import { Experience } from './components/layout/experience';
import Header from './components/layout/header';
import Introduction from './components/layout/introduction';
import SideProjects from './components/layout/side-projects';

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <main className="size-full">
        <Introduction />
        <div className='size-full flex flex-col'>
          <h1 className='w-full text-center text-5xl'>Experiences</h1>
          <div className='size-full flex flex-row'>
            <Experience />
            <SideProjects />
          </div>
        </div>
      </main>
      {/* <footer className="size-full">
        footer
      </footer> */}
    </div>
  );
}
