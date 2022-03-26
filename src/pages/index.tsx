import Head from "next/head";
import { VerifyWalletView } from "views";
import { DiscordUser } from "../utils/types";
import { useRouter } from 'next/router'
import { GetServerSideProps } from "next";
import { parseUser } from "../utils/parse-user";

interface Props {
  user: DiscordUser;
}

export default function Index(props: Props) {
  const router = useRouter()
  const { user } = props
  return (
    <div>
      <Head>
        <title>Atadian Loan Lending</title>
        <meta name="description" content="Atadian Loan Lending"/>
      </Head>
      <div className="max-w-xl rounded-lg overflow-hidden bg-zinc-800">
        <div className="font-bold text-2xl mb-5">◎ Make us trust you</div>
        <p>
          In order to get higher tier loan packages, you need to tell us how many wallets you own. 
          Please follow the following  step before jumping into lending submit process<br />
          <br />
          ◎   Connect your wallet
          <br /><br />
          ◎   Click add wallet
          <br /><br />
          ◎   Disconnect your wallet. After that, change your wallet in your browser extention then connect wallet again.
          <br /><br />
          ◎   Again, click add wallet
          <br /><br />
          Note: You should have at least 1 wallet that have been created for a while.
        </p>
      </div>
      <VerifyWalletView user={user}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
  const user = parseUser(ctx);

  if (!user) {
    return {
      redirect: {
        destination: "/api/oauth",
        permanent: false,
      },
    };
  }

  return { props: { user } };
};

