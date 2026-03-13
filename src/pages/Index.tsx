import heroImage from "@/assets/hero-clasico.jpg";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-['Barlow_Condensed'] font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-primary mb-4 border-l-4 border-primary pl-4">
    {children}
  </h2>
);

const TeamCard = ({
  name,
  emoji,
  gradient,
  points,
}: {
  name: string;
  emoji: string;
  gradient: string;
  points: string[];
}) => (
  <div className="flex-1 rounded-lg overflow-hidden">
    <div className={`${gradient} p-4 text-center`}>
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-['Barlow_Condensed'] font-black text-xl md:text-2xl uppercase mt-2 text-foreground">
        {name}
      </h3>
    </div>
    <div className="bg-card p-5 space-y-3">
      {points.map((point, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="text-primary mt-0.5">▸</span>
          <p className="text-secondary-foreground text-sm md:text-base">{point}</p>
        </div>
      ))}
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Estadio de futbol iluminado en la noche"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,50%,12%)] via-[hsl(255,45%,16%)]/80 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 md:pb-16 max-w-4xl">
            <span className="inline-block gradient-fire text-primary-foreground font-bold text-xs md:text-sm uppercase tracking-widest px-3 py-1 rounded mb-4">
              🔥 Liga MX — Clásico de la Obsesión
            </span>
            <h1 className="font-['Barlow_Condensed'] font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] mb-4">
              <span className="text-gradient-fire">Pumas vs Cruz Azul:</span>
              <br />
              <span className="text-foreground">el fuego que nunca se apaga</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              Este fin de semana el futbol mexicano vivirá una nueva edición del Clásico de la Obsesión, un partido que siempre genera tensión, orgullo y mucha intensidad. 🐾🚂
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 max-w-4xl py-10 md:py-16 space-y-12">
        {/* Intro */}
        <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed border-l-2 border-fire-orange pl-6">
          El duelo promete emociones, ya que ambos equipos llegan con la necesidad de sumar puntos importantes en el torneo y demostrar quién manda en esta rivalidad que, con los años, se ha convertido en una de las más intensas de la Liga MX.
        </p>

        {/* Rivalidad */}
        <section>
          <SectionTitle>Una rivalidad que ha crecido con los años</SectionTitle>
          <div className="space-y-4 text-secondary-foreground leading-relaxed">
            <p>
              Aunque no es uno de los clásicos más antiguos del futbol mexicano, el enfrentamiento entre Pumas y Cruz Azul se ha ganado el nombre de <strong className="text-primary">Clásico de la Obsesión</strong> debido a lo competitivo y parejo que suele ser.
            </p>
            <p>
              Durante décadas, ambos equipos han protagonizado partidos memorables, finales dramáticas y encuentros llenos de polémica. Cada enfrentamiento se vive con mucha pasión por parte de sus aficionados.
            </p>
          </div>
        </section>

        {/* Teams */}
        <section>
          <SectionTitle>¿Cómo llegan los equipos?</SectionTitle>
          <div className="flex flex-col md:flex-row gap-4">
            <TeamCard
              name="Pumas UNAM"
              emoji="🐾"
              gradient="gradient-pumas"
              points={[
                "Intensidad, cantera y juego dinámico",
                "Aprovechar la localía y el apoyo de su afición",
                "Presionar la salida del rival",
                "Ser contundentes frente al arco",
              ]}
            />
            <div className="flex items-center justify-center">
              <span className="font-['Barlow_Condensed'] font-black text-3xl md:text-5xl text-primary">VS</span>
            </div>
            <TeamCard
              name="Cruz Azul"
              emoji="🚂"
              gradient="gradient-cruzazul"
              points={[
                "Orden táctico, posesión y presión ofensiva",
                "Control del mediocampo",
                "Aprovechar errores defensivos de Pumas",
                "Mantener la calma en un ambiente intenso",
              ]}
            />
          </div>
        </section>

        {/* Jugadores */}
        <section>
          <SectionTitle>Jugadores a seguir</SectionTitle>
          <p className="text-secondary-foreground mb-6">
            En partidos de este tipo, las individualidades pueden marcar la diferencia. Un solo momento puede cambiar todo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: "⭐", text: "Los delanteros que puedan definir las jugadas clave" },
              { emoji: "⭐", text: "Los mediocampistas encargados de manejar el ritmo" },
              { emoji: "⭐", text: "Los porteros, que muchas veces terminan siendo figuras" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary transition-colors">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <p className="text-secondary-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* En juego */}
        <section className="gradient-fire rounded-xl p-6 md:p-10 text-primary-foreground">
          <h2 className="font-['Barlow_Condensed'] font-black text-2xl md:text-3xl uppercase mb-4">
            🏆 Lo que está en juego
          </h2>
          <p className="opacity-90 mb-4">
            Más allá de los puntos en la tabla, este encuentro representa orgullo, historia y rivalidad.
          </p>
          <ul className="space-y-2">
            {[
              "Presumir ante el rival directo",
              "Dar un golpe anímico en el torneo",
              "Reforzar la confianza del equipo",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 font-semibold">
                <span>✓</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Pronóstico */}
        <section className="text-center py-8">
          <SectionTitle>Pronóstico del partido</SectionTitle>
          <p className="text-secondary-foreground text-lg max-w-xl mx-auto mb-6">
            Los clásicos suelen ser impredecibles, pero todo apunta a un encuentro muy parejo. Si alguno de los dos logra imponer su estilo desde el inicio, podría inclinar la balanza.
          </p>
          <p className="font-['Barlow_Condensed'] font-black text-2xl md:text-4xl uppercase text-primary">
            Lo único seguro es que Pumas vs Cruz Azul nunca decepciona. ⚽🔥
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-muted-foreground text-sm">
        <p>Clásico de la Obsesión — Liga MX 2026</p>
      </footer>
    </div>
  );
};

export default Index;
