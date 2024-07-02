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
      <main className={"w-full pt-[25px] lg:pt-0 z-20 px-[225px] pb-40"}>
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
                <b>Status:</b> Open for Submissions
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Paper Submission Deadline:</b> July 31, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Notification of Acceptance:</b> August 14, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Camera-Ready Submission:</b> September 1, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Conference:</b> September 13, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Venue:</b> Forum der Zukunft, Munich, Germany
              </Text>
            </div>
            <Button buttonType={"cta"} className="mt-6">
              Submit Paper
            </Button>
            <div className="mt-20">
              <Text textType={"title"} className="text-gradient">
                Description
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                We are delighted to announce the Call for Papers for the 2024
                TUM Blockchain Conference. As part of the research track, we are
                hosting, in collaboration with the TUM Chair of Network
                Architectures and Services and IEEE Blockchain, a poster
                presentation. This event invites researchers, academics, and
                industry professionals worldwide to connect and present their
                latest work in blockchain & distributed systems, cryptography,
                secure computing, cryptoeconomics, and software security.
                <br />
                <br />
                Accepted papers will be showcased through a 15-20 minute
                presentation at the conference and displayed as posters in the
                conference area, alongside our conference partners. The posters
                will remain on display for the entire day of the event, offering
                an excellent platform for in-depth discussions and networking
                opportunities.
              </Text>
            </div>
            <div className="mt-20">
              <Text textType={"title"} className="text-gradient">
                Call for Papers
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"sub_title"}>Topics of Interest</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Topics of interest include, but are not limited to:
              </Text>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Text textType={"paragraph"}>
                  <b>Network Architecture & Consensus Mechanisms</b>
                  <ul style={{ listStyleType: "circle" }} className="pl-5">
                    <li>Peer-to-Peer (P2P) Protocols</li>
                    <li>Distributed Network Resilience and Fault Tolerance</li>
                    <li>Security Analysis of Blockchain Protocols</li>
                    <li>Consensus Algorithm Design and Optimization</li>
                  </ul>
                </Text>
              </div>
              <div className="mt-6">
                <Text textType={"paragraph"}>
                  <b>Cryptography</b>
                  <ul style={{ listStyleType: "circle" }} className="pl-5">
                    <li>Zero-Knowledge Cryptography</li>
                    <li>Secure Multi-Party Computation</li>
                    <li>Fully Homomorphic Encryption</li>
                    <li>Post-Quantum Cryptography</li>
                  </ul>
                </Text>
              </div>
              <div className="mt-6">
                <Text textType={"paragraph"}>
                  <b>Hardware</b>
                  <ul style={{ listStyleType: "circle" }} className="pl-5">
                    <li>Hardware Secure Modules (HSMs)</li>
                    <li>Trusted Execution Environments (TEEs)</li>
                    <li>Hardware Acceleration for Cryptography</li>
                    <li>Blockchain Infrastructure</li>
                  </ul>
                </Text>
              </div>
              <div className="mt-6">
                <Text textType={"paragraph"}>
                  <b>Security and Formal Methods</b>
                  <ul style={{ listStyleType: "circle" }} className="pl-5">
                    <li>
                      Formal Verification of Cryptography and Blockchain
                      Protocols
                    </li>
                    <li>Security Testing Methodologies</li>
                    <li>Vulnerability Analysis and Mitigation</li>
                    <li>Secure Smart Contract Development and Verification</li>
                  </ul>
                </Text>
              </div>
              <div className="mt-6">
                <Text textType={"paragraph"}>
                  <b>Cryptoeconomics</b>
                  <ul style={{ listStyleType: "circle" }} className="pl-5">
                    <li>
                      Game Theory and Mechanism Design for Decentralized
                      Protocols
                    </li>
                    <li>Maximally Extractable Value (MEV)</li>
                    <li>Economic Analysis of Decentralized Protocols</li>
                    <li>Governance Models and Economic Impact</li>
                  </ul>
                </Text>
              </div>
              <div className="mt-6">
                <Text textType={"paragraph"}>
                  <b>Advanced Applications</b>
                  <ul style={{ listStyleType: "circle" }} className="pl-5">
                    <li>Privacy Protocols</li>
                    <li>Federated Machine Learning</li>
                    <li>Self-Sovereign Digital Identities</li>
                    <li>Voting</li>
                    <li>Oracles</li>
                  </ul>
                </Text>
              </div>
            </div>
            <div className="mt-20">
              <Text textType={"title"} className="text-gradient">
                Submission Guidelines
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "decimal" }}
                  className="pl-5 space-y-2"
                >
                  <li>
                    <b>Paper Format:</b> Papers must be submitted in PDF format
                    and follow the{" "}
                    <a
                      className="underline"
                      href="https://www.ieee.org/conferences/publishing/templates.html"
                      target="_blank"
                    >
                      <b>IEEE conference template</b>
                    </a>
                    .
                  </li>
                  <li>
                    <b>Length:</b> Full papers should be between 6-8 pages,
                    including references. Short papers (4 pages) and poster
                    abstracts (2 pages) are also accepted.
                  </li>
                  <li>
                    <b>Resubmission:</b> Papers that have been previously
                    accepted or published to other conferences or journals are
                    also welcome.
                  </li>
                  <li>
                    <b>Poster:</b> Posters may be submitted later with the
                    Camera-Ready Submission and should be A0 size (841 x 1189
                    mm) in portrait orientation.
                  </li>
                  <li>
                    <b>Submission System:</b> All papers must be submitted
                    through our online submission system.
                  </li>
                </ul>
              </Text>
            </div>
            <Button buttonType={"cta"} className="mt-6">
              Submit Paper
            </Button>
            <div className="mt-8">
              <Text textType={"paragraph"}>
                <b>Paper Submission Deadline:</b> July 31, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Notification of Acceptance:</b> August 14, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Camera-Ready Submission:</b> September 1, 2024
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"sub_title"}>Review Process and Proceedings</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Papers will be reviewed by the listed program committee in a
                double blind review process. Accepted papers will be published
                in the TBC 2024 Conference Proceedings, which will be available
                online through the IEEE Xplore Digital Library.
              </Text>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
