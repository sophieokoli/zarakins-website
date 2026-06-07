import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function StatCard({ number, label }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="text-center hover:-translate-y-2 transition duration-300"
    >
      <h2 className="text-5xl font-bold text-[#3042A0]">
        {inView ? <CountUp end={number} duration={2.5} /> : 0}+
      </h2>

      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number={500} label="Projects Completed" />
          <StatCard number={100} label="Happy Clients" />
          <StatCard number={10} label="Years Experience" />
          <StatCard number={100} label="Product Variations" />
        </div>
      </div>
    </section>
  );
}