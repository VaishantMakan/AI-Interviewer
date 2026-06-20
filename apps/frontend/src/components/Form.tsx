import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { BACKEND_URL } from "@/lib/config";

export function Form() {

    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");

    async function onSubmit() {
        if(!github || !linkedin) {
            // TODO: Add more validation here
            toast("Please provide valid github and linkedin URLs")
            return;
        }

        await axios.post(`${BACKEND_URL}/api/v1/pre-interview`, {
            linkedin,
            github
        })
    }

    return <div className="h-screen w-screen flex justify-center items-center">
    <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Welcome to AI Interview Prep
        </h2>
        <div className="p-4">
            <Input placeholder="Linkedin URL" onChange={e => setLinkedin(e.target.value)}/>
        </div>
        <div className="p-4">
            <Input placeholder="Github URL" onChange={e => setGithub(e.target.value)}/>
        </div>
        <div className="flex justify-center p-4">
            <Button onClick={onSubmit}>Start Interview</Button>
        </div>
    </div>
  </div>
}