import { Badge } from "../../components/ui/badge";
import { ServiceCards } from "./service-card";

const Services = () => {
  return (
    <>
      <section
        className="w-full min-h-screen py-12 lg:py-30 bg-slate-500/2"
        id="services"
      >
        <div className="flex flex-col w-full h-max gap-3 items-center">
          <Badge>What we do</Badge>
          <h1 className="text-4xl font-bold text-center">
            Perceptual Intelligence Services
          </h1>
          <p className="text-muted-foreground font-medium text-md -mt-2 text-center">
            Transforming Awareness into Clarity and Strategy
          </p>
        </div>
        <div className="py-16 px-10">
          <ServiceCards />
        </div>
      </section>
    </>
  );
};

export default Services;
