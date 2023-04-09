import type { NextApiRequest, NextApiResponse } from "next";
import checks from "../../utils/data/checked";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);

  // fake loading time
  setTimeout(() => {
    res.status(200).json(checks);
  }, 800);
};

export default handler;
