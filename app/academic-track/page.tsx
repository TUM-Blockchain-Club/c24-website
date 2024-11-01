import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { Link } from "@/components/link";

export default function PaperSubmission() {
  return (
    <div className={"overflow-x-hidden"}>
      <main className={"w-full pt-[25px] lg:pt-0 z-20 2xl:px-[225px] pb-40"}>
        <Container className="flex justify-center">
          <div className={"mt-[100px] md:mt-[20vh] z-10 max-w-3xl"}>
            <div className="lg:flex items-center">
              <Text textType={"sub_hero"} className="text-gradient text-left">
                Academic Track
              </Text>
              <div className="flex-grow" />
              <div className="flex mt-8 lg:mt-0 space-x-8 max-w-[200px] md:max-w-full">
                <div className="h-full">
                  <Image
                    src={"/papers/tum_logo.png"}
                    alt={"TUM Logo"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Text textType={"paragraph"}>
                Knowledge Partner: <b>IEEE Blockchain</b>
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"paragraph"}>
                <b>Status:</b> Submissions Closed
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Submission Deadline:</b> August 9, 2024 (23:59 CEST)
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Acceptance Notification:</b> August 16, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Conference Dates:</b> September 12-13, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Academic Track Date:</b> September 13, 2024
              </Text>
            </div>
            <div className="mt-2">
              <Text textType={"paragraph"}>
                <b>Venue:</b> Forum der Zukunft (Deutsches Museum), Munich,
                Germany
              </Text>
            </div>
            <Link
              href={
                "https://apply.tum-blockchain.com/conference24-abstract-submission"
              }
            >
              <Button buttonType={"cta"} className="mt-6">
                Submit Abstract
              </Button>
            </Link>
            <div className="mt-20">
              <Text textType={"title"} className="text-gradient">
                Description
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"paragraph"}>
                We are delighted to announce the Call for Extended Abstracts for
                the academic track at the 2024 TUM Blockchain Conference. The
                academic track is hosted in collaboration with the TUM Chair of
                Network Architectures and Services. We are happy to have IEEE
                Blockchain as a Knowledge partner inviting selected works for a
                submission to IEEE Blockchain Technical Briefs. In addition, the
                selected abstracts will be offered to present their work in form
                of a short talk and/or a poster presentation.
                <br />
                <br />
                This event invites researchers, academics, and industry
                professionals to connect and present their latest work in the
                topics related to the Science of Blockchains. Accepted talks
                will be showcased through a short presentation at the conference
                and displayed as posters in the conference area. The posters
                will remain on display for the entire day of the event, offering
                an excellent platform for in-depth discussions and networking
                opportunities.
              </Text>
            </div>
            <div className="mt-20">
              <Text textType={"title"} className="text-gradient">
                Call for Extended Abstracts
              </Text>
            </div>
            <div className="mt-12">
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
              <div className="mt-6 lg:mt-0">
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
            <div className="mt-12">
              <Text textType={"sub_title"}>Submission Guidelines</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "decimal" }}
                  className="pl-5 space-y-2"
                >
                  <li>
                    <b>Length:</b> Extended Abstracts should not be longer than
                    6000 chars (~ 1 DIN-A4 page). If applicable you may submit
                    the accompanying publication.
                  </li>
                  <li>
                    <b>Submission:</b> (Optional) If you have already published
                    your work previously, please submit the PDF along with the
                    Extended Abstract. WIP ideas and unpublished work is also
                    accepted.
                  </li>
                  <li>
                    <b>Submission System:</b> All papers must be submitted
                    through our online submission system.
                  </li>
                </ul>
              </Text>
            </div>
            <Link
              href={
                "https://apply.tum-blockchain.com/conference24-abstract-submission"
              }
            >
              <Button buttonType={"cta"} className="mt-6">
                Submit Abstract
              </Button>
            </Link>
            <div className="mt-12">
              <Text textType={"sub_title"}>Review Process and Proceedings</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Abstracts will be reviewed by the listed committee in a single
                blind review process. Accepted papers will be invited to submit
                their work to IEEE Blockchain Technical Briefs.
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"sub_title"}>
                On-Site Presentation Guidelines
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Accepted submissions will be offered to present their work in
                form of a shot talk and/or a poster presentation.
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "decimal" }}
                  className="pl-5 space-y-2"
                >
                  <li>
                    <b>Talk:</b> Accepted Abstracts will be able to present
                    their talk on the 13 September.
                  </li>
                  <li>
                    <b>Poster:</b> Posters may be submitted later with the
                    Camera-Ready Submission and should be A0 size (841 x 1189
                    mm) in portrait orientation.
                  </li>
                </ul>
              </Text>
            </div>
            <div className="mt-20">
              <Text textType={"title"} className="text-gradient">
                Organization
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"sub_title"}>Program Chairs</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "circle" }}
                  className="pl-5 space-y-2"
                >
                  <li>
                    Georg Carle, TUM, Chair of Network Architectures and
                    Services
                  </li>
                  <li>
                    Filip Rezabek, TUM, Chair of Network Architectures and
                    Services
                  </li>
                </ul>
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"sub_title"}>Program Committee</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "circle" }}
                  className="pl-5 space-y-2"
                >
                  <li>Justin Y. Shi, IEEE Blockchain Editor-in-Chief</li>
                  <li>Jens Ernstberger, a16z Research</li>
                  <li>Revanth Airre, IEEE Silicon Valley Blockchain Chapter</li>
                  <li>Manjiri Birajdar, IEEE Blockchain</li>
                  <li>
                    Kilian Glas, TUM, Chair of Network Architectures and
                    Services
                  </li>
                  <li>
                    Richard von Seck, TUM, Chair of Network Architectures and
                    Services
                  </li>
                  <li>
                    Jan Lauringer, TUM, Chair of Embedded Systems and Internet
                    of Things
                  </li>
                  <li>Burak Öz, TUM, Sebis Chair</li>
                  <li>Felix Hoops, TUM, Sebis Chair</li>
                  <li>
                    Valentin Zieglmeier, TUM, Chair for Software and Systems
                    Engineering
                  </li>
                  <li>Lucas Aschenbach, TUM Blockchain Club</li>
                </ul>
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"sub_title"}>Organizing Committee</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "circle" }}
                  className="pl-5 space-y-2"
                >
                  <li>
                    Filip Rezabek, TUM, Chair of Network Architectures and
                    Services
                  </li>
                  <li>Lucas Aschenbach, TUM Blockchain Club</li>
                  <li>Luis Bahners, TUM Blockchain Club</li>
                </ul>
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"sub_title"}>Contact</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                For any inquiries regarding the poster presentation, reach out
                to{" "}
                <Link
                  href="mailto:academic-track@tum-blockchain.com"
                  className="underline"
                >
                  academic-track@tum-blockchain.com
                </Link>
                .
              </Text>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
