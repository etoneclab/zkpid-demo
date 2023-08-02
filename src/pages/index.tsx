import { MENU } from "./Header";

import { DEX } from "@/components/dex";
import { WALLET } from "@/components/wallet";

export default function Index() {
  return (
    <>
      <MENU />
      <section>
        <DEX />
      </section>
      <section>
        <WALLET />
      </section>
      ;
    </>
  );
}
