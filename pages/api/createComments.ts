import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";

const config = {
    token: process.env.SANITY_API_TOKEN,
    useCdn: process.env.NODE_ENV === "production",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
};

const client = sanityClient(config);

export default async function createComments(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { _id, name, email, comment } = JSON.parse(req.body);
    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id,
            },
            name,
            email,
            comment,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ message: "could not submit comment", err });
    }

    return res.status(200).json({ message: "comment submitted" });
}
