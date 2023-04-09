import type { NextApiRequest, NextApiResponse } from "next";

// fake data
import reviewca from "../../utils/data/reviewca";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);

  // fake loading time
  setTimeout(() => {
    res.status(200).json(reviewca);
  }, 800);
};

export default handler;
