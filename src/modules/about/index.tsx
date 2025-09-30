import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <>
      <section className="w-full min-h-screen py-12 lg:py-30" id="founder">
        <div className="flex flex-col w-full h-max gap-3 items-center">
          <Badge>Meet the Founder</Badge>
          <h1 className="text-4xl font-bold">Kavan Ganapathy</h1>
          <p className="text-muted-foreground font-medium text-md -mt-2">
            Massive Dynamics
          </p>
        </div>
        <div className="flex flex-col w-full h-max gap-3 items-center p-8 max-w-2xl mx-auto">
          <h2 className="font-semibold text-2xl text-left w-full">
            Where Child-Like Curiosity Meets Infinite Complexity
          </h2>
          <p className="text-muted-foreground">
            In the heart of Bangalore, a young undergraduate discovered
            something that would change everything. While watching Fringe, Kavan
            Ganapathy witnessed not just entertainment, but a blueprint for the
            impossible becoming inevitable. What began as fascination with the
            boundary-dissolving technologies of Massive Dynamic became a sacred
            mission to manifest them in our reality.
          </p>
          <p className="text-muted-foreground">
            Today, The Massive Dynamics stands as proof that consciousness
            itself is the ultimate technology—one that transcends space, time,
            and the artificial limitations we&apos;ve accepted as permanent.
          </p>
        </div>
        <div className="flex flex-col w-full h-max gap-3 items-center p-8 max-w-2xl mx-auto">
          <h2 className="font-semibold text-2xl text-left w-full">
            The Origin Story: Love Beyond Time and Space
          </h2>
          <p className="text-muted-foreground">
            When COVID-19 struck and Kavan&apos;s father suffered a devastating
            brain stroke, conventional medicine offered little hope. But Kavan
            carried something deeper—a synthesis of quantum physics,
            consciousness research, and ancient Siddha medicine traditions.
            Through shamanic healing protocols and neuroscience methodologies
            reminiscent of the Algernon experiments, he achieved what seemed
            impossible: complete healing within days.
          </p>
          <p className="text-muted-foreground">
            This wasn&apos;t just medical recovery. This was consciousness
            recognizing its own unity across apparent separation—father and son,
            ancient wisdom and cutting-edge science, the divine dance of Shiva
            and Shakti expressing itself through pure love and focused
            intention.In that moment of breakthrough, The Massive Dynamics was
            truly born.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
