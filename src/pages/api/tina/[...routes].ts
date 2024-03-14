import { TinaNodeBackend, LocalBackendAuthProvider} from "@tinacms/datalayer";
import { AuthJsBackendAuthProvider, TinaAuthJSOptions } from "tinacms-authjs";

import databaseClient from "~tina/__generated__/databaseClient";
import type { NextApiRequest, NextApiResponse } from "next";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const tina = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET as string,
          debug: process.env.DEBUG === 'true' || false
        }),
      }),
  databaseClient,
});

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Modify the request here if you need to
  return tina(req, res);
};
export default handler