import { FfmpegClass } from "../mod.ts";
Deno.test({
    name: "inputFile feature",
    fn: async() => {
        await new FfmpegClass({
            ffmpegDir: "./ffmpeg/ffmpeg.exe"
        }).inputFile("./input.mp4").save("./ree.mp4");
    }
})
Deno.test({
    name: "inputFile feature with progress",
    fn: async() => {
        const thing = new FfmpegClass({
            ffmpegDir: "./ffmpeg/ffmpeg.exe"
        }).inputFile("./input.mp4").saveWithProgress("./ree.mp4");
        for await (const progress of thing) {
            console.log(progress);
        }
    }
})