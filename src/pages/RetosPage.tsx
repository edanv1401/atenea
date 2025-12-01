import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useSessionValidation } from "../hooks/useSessionValidation";
import { FloatingCard, GlowEffect, ParticleBackground, GradientButton } from "../components/ui";

function RetosPage({ isDark }: { isDark: boolean }) {
  useSessionValidation();
  const retos = [
    {
      id: "par-impar",
      titulo: "Número par o impar",
      dificultad: "Fácil",
      descripcion:
        "Escribe una función que reciba un número y devuelva la cadena 'par' si el número es par o 'impar' si es impar.",
      codigoInicial:
        "function esParOImpar(numero) {\n  // Escribe tu solución aquí\n}\n\nconsole.log(esParOImpar(4)) // par\nconsole.log(esParOImpar(7)) // impar",
    },
    {
      id: "maximo",
      titulo: "Mayor de dos números",
      dificultad: "Fácil",
      descripcion:
        "Crea una función que reciba dos números y devuelva el mayor de ellos.",
      codigoInicial:
        "function maximo(a, b) {\n  // Escribe tu solución aquí\n}\n\nconsole.log(maximo(3, 10)) // 10",
    },
    {
      id: "contador",
      titulo: "Contar hasta N",
      dificultad: "Media",
      descripcion:
        "Implementa una función que reciba un número N y muestre por consola todos los números desde 1 hasta N.",
      codigoInicial:
        "function contarHasta(n) {\n  // Escribe tu solución aquí\n}\n\ncontarHasta(5) // 1 2 3 4 5",
    },
  ] as const;

  const [retoSeleccionadoId, setRetoSeleccionadoId] = useState<(typeof retos)[number]["id"]>(
    "par-impar",
  );

  const retoSeleccionado = retos.find((reto) => reto.id === retoSeleccionadoId) ?? retos[0];
  const [codigo, setCodigo] = useState<string>(retoSeleccionado.codigoInicial);

  useEffect(() => {
    setCodigo(retoSeleccionado.codigoInicial);
  }, [retoSeleccionadoId]);

  return (
    <div className="space-y-4">
      <ParticleBackground className="opacity-20" />
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">⚡ Retos interactivos</h2>
            <p className="text-sm text-muted-foreground">
              Elige un problema y escribe tu solución en el editor de código.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <FloatingCard delay={100}>
            <aside className="space-y-3 rounded-xl border border-white/10 bg-background/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.6)] backdrop-blur-xl">
              <p className="text-xs font-medium text-muted-foreground">🏛️ Lista de problemas</p>
              <div className="space-y-2 text-sm">
                {retos.map((reto) => (
                  <button
                    key={reto.id}
                    type="button"
                    onClick={() => setRetoSeleccionadoId(reto.id)}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-xs transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground ${
                      retoSeleccionadoId === reto.id
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium">{reto.titulo}</span>
                      <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        {reto.dificultad}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">
                      {reto.descripcion}
                    </p>
                  </button>
                ))}
              </div>
            </aside>
          </FloatingCard>

          <FloatingCard delay={200}>
            <div className="space-y-3 rounded-xl border border-white/10 bg-background/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.6)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold">{retoSeleccionado.titulo}</h3>
                  <p className="text-xs text-muted-foreground">{retoSeleccionado.descripcion}</p>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  📜 JavaScript
                </span>
              </div>
              <GlowEffect color="blue">
                <div className="rounded-lg border bg-muted/50">
                  <Editor
                    height="220px"
                    defaultLanguage="javascript"
                    value={codigo}
                    onChange={(value) => setCodigo(value ?? "")}
                    theme={isDark ? "vs-dark" : "vs-light"}
                    options={{
                      fontSize: 12,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      wordWrap: "on",
                    }}
                  />
                </div>
              </GlowEffect>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>🏛️ Editor básico. Más adelante podrás ejecutar tu código aquí.</span>
                <GradientButton variant="secondary" className="px-3 py-1 text-[11px]">
                  🦉 Guardar borrador
                </GradientButton>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}

export default RetosPage;
