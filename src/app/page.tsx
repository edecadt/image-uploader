"use client";
import Container from "@/components/Container";
import Initial from "@/components/Initial";
import Uploading from "@/components/Uploading";
import Uploaded from "@/components/Uploaded";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("initial");

  const updateStatus = (status: string, url: string) => {
    setStatus(status);
    setUrl(url);
  };

  return (
    <>
      <main className="flex max-h-full flex-col items-center justify-between p-24">
        <Container>
          {status === "initial" && <Initial updateStatus={updateStatus} />}
          {status === "uploading" && <Uploading />}
          {status === "uploaded" && (
            <Uploaded url={url} updateStatus={updateStatus} />
          )}
        </Container>
      </main>
    </>
  );
}
