import express from "express";
import cors from "cors";
import { PreInterviewBody } from "./types";
import { scrapeGithub } from "./scrapers/github";

const app = express();
app.use(express.json());
app.use(cors())

app.post("/api/v1/pre-interview", async (req, res) => {
    const { success, data } = PreInterviewBody.safeParse(req.body);

    if(!success) {
        res.status(411).json({
            message: "Incorrect Body"
        });
        return
    }

    //TODO: URLs can be malformed so add more checks

    //eg: https://github.com/VaishantMakan
    const githubUrl = data.github.endsWith("/") ? data.github.slice(0, -1) : data.github;
    const githubUserName = githubUrl.split("/").pop()!;
    
    // Scraping Github
    const githubData = await scrapeGithub(githubUserName);
    // console.log(githubData);
    res.json({ github: githubData})

})

app.listen(3001);