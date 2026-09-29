// Tests whether Vercel applies a vercel.json created during the build
import { writeFileSync } from "node:fs";

writeFileSync(
	"vercel.json",
	JSON.stringify({ redirects: [{ source: "/build-time-redirect", destination: "/" }] }),
);
console.log("built, wrote vercel.json");
