import { Toaster } from "sonner";
import "../styles/globals.css"
import { Form } from "./components/Form";
import { Interview } from "./components/Interview";
import { Result } from "./components/Result";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react"

export function App() {

  const [page, setPage] = useState<"form" | "interview" | "result">("form");

  return (

    <div>
      {page === "form" && <Form />}
      {page === "interview" && <Interview />}
      {page === "result" && <Result />}
      <Toaster position="top-center"/>
    </div>

  );
}

export default App;
