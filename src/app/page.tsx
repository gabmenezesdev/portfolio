import Header from './components/layout/header';
import Introduction from './components/layout/introduction';

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <main className="size-full">
      <Introduction />
      </main>
      <footer className="">
        footer
      </footer>
    </div>
  );
}
