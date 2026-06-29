const howItWorks = [
  {
    step: 1,
    title: "Choose a group",
    description: "Find a group with available slots",
  },
  {
    step: 2,
    title: "Pay securely",
    description: "Pay safely via MPESA and get confirmed",
  },
  {
    step: 3,
    title: "Owner renews",
    description: "The owner renews the crunchyroll plan",
  },
  {
    step: 4,
    title: "Enjoy cruncyroll",
    description: "You get access and enjoy your favourite anime",
  },
];
export default function HowItWorksSection() {
  return (
    <section className="m-12">
      <h1 className="font-bold text-2xl text-center mb-4">How Waku Works</h1>
      <div className="grid grid-cols-4 gap-12 p-4 backdrop-blur bg-[color-mix(var(--elevated),transparent_30%)] rounded-xl">
        {howItWorks.map((step) => (
          <article
            key={step.step}
            className="flex gap-2 items-start flex-col max-sm:flex-row"
          >
            <div className="bg-primary w-8 aspect-square flex items-center justify-center font-bold rounded-lg">
              {step.step}
            </div>
            <div>
              <h1 className="font-bold mb-2">{step.title}</h1>
              <p className="text-sm text-muted">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
