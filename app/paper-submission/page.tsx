"use client";

import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Text } from "../components/text";

export default function PaperSubmission() {
  return (
    <div className={"overflow-x-hidden"}>
      <Header />
      <main className={"w-full pt-[25px] lg:pt-0 z-20 px-[225px]"}>
        <Container>
          <div className={"mt-[20vh] z-10"}>
            <div>
              <Text
                textType={"sub_hero"}
                className="w-full text-gradient text-left"
              >
                Paper Submission
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Knowledge Partner: <b>IEEE Blockchain</b>
              </Text>
            </div>
            <div className="mt-20">
              <Text textType={"sub_title"}>Important information</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Submission Deadlines: 15.06.2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                Author Notification: 15.06.2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>Conference: 15.06.2024</Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>Venue: 15.06.2024</Text>
            </div>
            <div className="mt-20">
              <Text textType={"sub_title"}>Description</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                (Asks Lucas for this) The conference focuses on technical
                innovations in the blockchain ecosystem, and brings together
                researchers and practioners working in the space. We are
                interested in the application of cryptography, decentralized
                protocols, formal methods, and empirical analysis, to improving
                the security and scalability of blockchain deployments. We aim
                to foster collaboration among practitioners and researchers
                working on blockchain protocol development, cryptography,
                distributed systems, secure computing, crypto-economics, and
                economic risk analysis.
                <br />
                <br />
                The conference is co-organized by TUM Blockchain Club and IEEE
              </Text>
            </div>
            <Button buttonType={"cta"} className="mt-6">
              Submit Paper
            </Button>
            <div className="mt-20">
              <Text textType={"sub_title"}>Organizing Committe</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>Program chairs</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>Program Committee</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
            <div className="mt-2 mb-40">
              <Text textType={"paragraph"}>
                John Doe, Technical University of Memes
              </Text>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
