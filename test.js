import getCsrf from "./index.js";
import process from "node:process";

if (!process.argv[2]) {
	throw new Error("Supply .ROBLOSECURITY in arguments (wrap in quotation marks)");
}
console.log(await getCsrf(process.argv[2]));
