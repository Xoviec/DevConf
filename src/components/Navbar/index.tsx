import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-base-100 py-2 shadow-md shadow-base-content/30 supports-[backdrop-filter:blur(0px)]:bg-base-100/50 supports-[backdrop-filter:blur(0px)]:backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-2 py-2 text-lg md:text-xl">
        <Link href="/" className="font-mono text-3xl">
          {'<Dev.Conf/>'}
        </Link>
        <a
          href="https://github.com/WebXDAO/DevConf"
          className="btn btn-primary"
          target={'_blank'}
          rel="noreferrer"
        >
          Add Event
        </a>
      </div>
    </div>
  );
};

export default Navbar;
