import { Experience } from './components/layout/experience';
import Header from './components/layout/header';
import Introduction from './components/layout/introduction';

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <main className="size-full">
      <Introduction />
      <Experience />
      </main>
      {/* <footer className="size-full">
        footer
      </footer> */}
    </div>
  );
}
