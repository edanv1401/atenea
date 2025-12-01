import { useSessionValidation } from "../hooks/useSessionValidation";
import { FloatingCard, GlowEffect, ParticleBackground } from "../components/ui";

export default function CursosPage() {
  useSessionValidation();

  return (
    <div className="space-y-4">
      <ParticleBackground className="opacity-20" />
      <section className="space-y-4 rounded-2xl border border-white/10 bg-background/60 p-6 shadow-[0_0_40px_rgba(15,23,42,0.7)] backdrop-blur-xl relative">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">📚 Rutas de aprendizaje</h2>
            <p className="text-sm text-muted-foreground">
              Elige un camino y avanza por módulos cortos y prácticos.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <FloatingCard delay={100}>
            <GlowEffect color="blue">
              <article className="flex flex-col justify-between rounded-xl border bg-card p-4 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">🏛️ Lógica de programación</h3>
                  <p className="text-xs text-muted-foreground">
                    Aprende variables, condicionales y ciclos con ejemplos sencillos.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>8 lecciones</span>
                  <span>🦉 Ideal para comenzar</span>
                </div>
              </article>
            </GlowEffect>
          </FloatingCard>
          <FloatingCard delay={200}>
            <GlowEffect color="purple">
              <article className="flex flex-col justify-between rounded-xl border bg-card p-4 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">⚡ JavaScript moderno</h3>
                  <p className="text-xs text-muted-foreground">
                    Da tus primeros pasos con el lenguaje del navegador.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>10 lecciones</span>
                  <span>🔥 Práctica intensiva</span>
                </div>
              </article>
            </GlowEffect>
          </FloatingCard>
          <FloatingCard delay={300}>
            <GlowEffect color="green">
              <article className="flex flex-col justify-between rounded-xl border bg-card p-4 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">🤔 Pensamiento computacional</h3>
                  <p className="text-xs text-muted-foreground">
                    Aprende a descomponer problemas y diseñar soluciones paso a paso.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>6 lecciones</span>
                  <span>💭 Enfoque práctico</span>
                </div>
              </article>
            </GlowEffect>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
