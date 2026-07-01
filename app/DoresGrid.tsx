"use client";

import { useEffect, useRef } from "react";

const items: React.ReactNode[] = [
  "Você repete o mesmo protocolo padrão e, em alguns casos, sente que ele simplesmente para de funcionar, sem saber o porquê.",
  "Recebe casos que não se encaixam no manual e fica sem um caminho claro para investigar a raiz.",
  "Acompanha abortos de repetição sem conseguir explicar à paciente o que está por trás, além de pedir que ela tente de novo.",
  <>
    Sente que investiga apenas a mulher e trata exames isolados, mas nunca viu
    alguém avaliar o casal por inteiro,{" "}
    <b>incluindo a fertilidade do homem na prática real.</b>
  </>,
  "Vê colegas encaminhando direto para reprodução assistida e se pergunta se não havia algo a ser feito antes disso.",
  "Quer entrar com mais segurança no mercado de fertilidade, mas não tem com quem discutir casos reais e tirar dúvidas de conduta.",
];

export default function DoresGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = Array.from(container.querySelectorAll<HTMLElement>(".dor-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { root: null, rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dores-grid" ref={containerRef}>
      {items.map((text, i) => (
        <div className="dor-item" key={i}>
          <div className="dor-x">✕</div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
