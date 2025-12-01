import { useSessionValidation } from "../hooks/useSessionValidation";
import { FloatingCard, GlowEffect, ParticleBackground, GradientButton } from "../components/ui";

export default function PerfilPage() {
  useSessionValidation();

  return (
    <div className="space-y-4">
      <ParticleBackground className="opacity-20" />
      <FloatingCard delay={100}>
        <GlowEffect color="purple">
          <section className="space-y-4 rounded-2xl border border-white/10 bg-background/60 p-6 shadow-[0_0_40px_rgba(15,23,42,0.7)] backdrop-blur-xl">
            <h2 className="text-xl font-semibold tracking-tight">🦉 Tu perfil</h2>
            <p className="text-sm text-muted-foreground">
              Aquí podrás ver tu progreso, tus retos completados y tus estadísticas de aprendizaje.
            </p>
            <div className="rounded-xl border bg-card p-4 text-sm text-muted-foreground shadow-sm">
              🏛️ Esta sección está en construcción. Muy pronto podrás personalizar tu experiencia en Atenea.
            </div>
            <div className="flex justify-center mt-6">
              <GradientButton variant="secondary" className="px-6 py-2">
                🚀 Próximamente
              </GradientButton>
            </div>
          </section>
        </GlowEffect>
      </FloatingCard>
    </div>
  );
}
