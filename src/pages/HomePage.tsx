import { NavLink } from "react-router-dom";
import { useSessionValidation } from "../hooks/useSessionValidation";
import { AnimatedText, GradientButton, FloatingCard, GlowEffect, ParticleBackground, TypewriterText } from "../components/ui";

export default function HomePage() {
  useSessionValidation();

  return (
    <div className="space-y-16">
      <ParticleBackground className="opacity-30" />
      <section className="grid gap-10 rounded-[2rem] border border-white/15 bg-background/40 px-6 py-10 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur-xl md:grid-cols-2 md:items-center md:px-10 md:py-14 relative transition-all duration-1000 hover:scale-[1.02]">
        <FloatingCard delay={100}>
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              🏛️ Plataforma de aprendizaje programático
            </div>
            <div className="space-y-4 min-h-[120px]">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl transition-all duration-500">
                <AnimatedText text="Aprende programación con Atenea" duration={30} />
              </h1>
              <p className="text-sm text-muted-foreground sm:text-base">
                Domina los fundamentos del código, resuelve desafíos lógicos y conviértete en un 
                arquitecto del mundo digital, siguiendo los principios de la lógica y la razón.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <GlowEffect color="blue">
                <GradientButton onClick={() => window.location.href = '/retos'}>
                  ⚡ Comenzar ahora
                </GradientButton>
              </GlowEffect>
              <NavLink
                to="/cursos"
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                📚 Ver cursos
              </NavLink>
              <span className="text-xs text-muted-foreground">
                🦉 <TypewriterText texts={["Bajo la guía de Atenea", "Sabiduría infinita", "Aprende sin límites"]} speed={50} pauseDuration={3000} />
              </span>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={300}>
          <div className="relative mx-auto h-52 w-full max-w-sm overflow-hidden rounded-xl border bg-card p-4 text-xs text-muted-foreground shadow md:h-64">
            <div className="mb-2 flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="font-medium text-foreground">🏛️ Editor en línea</span>
              <span className="rounded-full bg-muted px-2 py-0.5">JavaScript</span>
            </div>
            <div className="h-full overflow-hidden rounded-md bg-muted/60 p-3 font-mono text-[10px] leading-relaxed">
              <div className="mb-2 flex gap-1">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-emerald-400">// Reto: imprime los números del 1 al 5</p>
              <p className="text-foreground">for (let i = 1; i &lt;= 5; i++) {'{'}</p>
              <p className="pl-4 text-foreground">console.log(i)</p>
              <p className="text-foreground">{'}'}</p>
              <div className="mt-4 rounded-md bg-background/80 p-2 text-[10px]">
                <p className="font-semibold text-foreground">Salida</p>
                <p className="text-emerald-500">1 2 3 4 5</p>
              </div>
            </div>
          </div>
        </FloatingCard>
      </section>
    </div>
  );
}
