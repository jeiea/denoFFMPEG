import { FfmpegClass } from "../mod.ts";
Deno.test({
    name: "setFfmpegPath feature",
    fn: async() => {
        await new FfmpegClass({
            source: "./input.mp4"
        }).setFfmpegPath("./ffmpeg/ffmpeg.exe").save("./ree.mp4");
    }
})
Deno.test({
    name: "setFfmpegPath feature with progress",
    fn: async() => {
        const thing = new FfmpegClass({
            source: "./input.mp4"
        }).setFfmpegPath("./ffmpeg/ffmpeg.exe").saveWithProgress("./ree.mp4");
        for await (const progress of thing) {
            console.log(progress);
        }
    }
})