import fetch from "node-fetch";

/**
 * @param {String} cookie .ROBLOSECURITY
 * @returns {String} X-CSRF-TOKEN
 */
export default async function getCsrf(cookie) {
	if (!cookie) {
		throw new Error("cookie parameter required");
	}
	const response = await fetch("https://auth.roblox.com/v2/logout", {
		method: "POST",
		headers: {
			cookie: ".ROBLOSECURITY=" + cookie,
		},
	});
	return response.headers.get("x-csrf-token");
}
