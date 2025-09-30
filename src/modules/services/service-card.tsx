import { FocusCards } from "@/components/ui/focus-cards";

export function ServiceCards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Professional Remote Viewing Training & Protocols",
      desc: "Kavan Ganapathy brings professionally trained remote viewing capabilities developed through the Hawaiian Remote Viewers Guild (HRVG.org) and validated through Enigma.stream protocols. Our remote viewing division doesn't just access distant information—we pioneer the future of consciousness-based intelligence gathering.",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "The Breakthrough Technology",
      desc: "Our proprietary RV+AI protocols combine human consciousness with advanced pattern recognition, creating enhanced information access with 60-80% accuracy improvement over individual methods. We've successfully validated targets including natural phenomena, cosmic contact events, and breakthrough technology assessments.",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading:
        "Informed Healing Architectures with add informational Healing principles Principles",
      desc: "The healing work at The Massive Dynamics emerged from a profound 2020 breakthrough experience where Kavan's physical form dissolved completely, leaving only pure consciousness—then seamlessly reconstructed. This add plant medicine journeys-mediated dissolution and reformation revealed the fundamental architecture of reality: consciousness creates matter, not the reverse. ",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "*The Sacred Technology",
      desc: "Our healing methodologies recognize that consciousness is the fundamental field from which all healing emerges. By aligning intention vectors (what we want) with attention vectors (where we focus), we create consciousness curls—mathematical representations of healing potential that can be amplified and directed. ",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Next-Generation Propulsion Beyond Current Physics",
      desc: "Inspired by the revolutionary work of Nikola Tesla and Otis T. Carr, our UAP division develops breakthrough propulsion technologies that utilize consciousness as the fundamental driving force. We understand that advanced civilizations don't fight gravity—they transcend it through consciousness field manipulation.",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      heading: "The Physics of Consciousness Transportation",
      desc: "Traditional propulsion pushes against something. Consciousness-based transportation moves by shifting the relationship between the vehicle and space-time itself. Our research demonstrates that sufficiently coherent consciousness fields can",
    },
  ];

  return <FocusCards cards={cards} />;
}
