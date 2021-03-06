import { FC } from 'react';
import Link from "next/link";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from '../contexts/AutoConnectProvider';

export const AppBar: FC = props => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <div className="flex-none p-2">

      {/* NavBar / Header */}
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <div className="p-2">
          </div>
        </div>

        {/* Nav Links */}
        <div className="navbar-center lg:flex">
          <div className="flex items-stretch">
            <Link href="/">
              <a className="btn btn-ghost btn-sm rounded-btn">Submit Wallet Address</a>
            </Link>
            <Link href="lend-submit">
              <a className="btn btn-ghost btn-sm rounded-btn">Submit Loan Application</a>
            </Link>
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end bordered">
          <WalletMultiButton className="btn btn-ghost mr-2" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
