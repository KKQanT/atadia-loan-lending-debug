import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

// Get our environment variables
const { COOKIE_NAME } = process.env;

export default async (_: NextApiRequest, res: NextApiResponse) => {
	// remove cookie from request header
	res.setHeader("Set-Cookie", [
		serialize(COOKIE_NAME, "", {
			maxAge: 0,
			path: "/",
		}),
	]);
	// res.writeHead(302, { Location: "/api/oauth" });
	// res.writeHead(302, { Location: "/" });
	res.writeHead(302, {
		"Set-Cookie": `token=; HttpOnly; path=/; max-age=0`, Location: "/" 
	});
	res.end();
};