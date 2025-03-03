import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve(async (req) => {

    const response = await serveDir(req, {
        fsRoot: "./dist",
    });
    if (response.status == 404) {
        return serveFile(req, "./dist/index.html")
    }

    // console.log(response);
    return response;
});
