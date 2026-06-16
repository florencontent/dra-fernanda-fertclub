const marqueeItems = [
  "FERTCLUB", "◆", "FERTILIDADE FUNCIONAL", "◆", "DRA FERNANDA TOFOLI", "◆",
  "FERTCLUB", "◆", "FERTILIDADE FUNCIONAL", "◆", "DRA FERNANDA TOFOLI", "◆",
  "FERTCLUB", "◆", "FERTILIDADE FUNCIONAL", "◆", "DRA FERNANDA TOFOLI", "◆",
  "FERTCLUB", "◆", "FERTILIDADE FUNCIONAL", "◆", "DRA FERNANDA TOFOLI", "◆",
  "FERTCLUB", "◆", "FERTILIDADE FUNCIONAL", "◆", "DRA FERNANDA TOFOLI", "◆",
  "FERTCLUB", "◆", "FERTILIDADE FUNCIONAL", "◆", "DRA FERNANDA TOFOLI", "◆",
];

export default function FertClubPage() {
  return (
    <>
      {/* ====================================================== */}
      {/* SEÇÃO 1 · HERO                                          */}
      {/* ====================================================== */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-logo">
                <div className="mark" />
                FERT<em>Club</em>
              </div>
              <h1>
                Veja, ao vivo, como conduzir os{" "}
                <span className="accent">
                  casos de infertilidade mais desafiadores
                </span>{" "}
                com a Fertilidade Funcional.
              </h1>
              <p className="lead">
                Todo mês, a Dra. Fernanda Tofoli abre casos reais de
                infertilidade do casal: SOP, endometriose, miomas e abortos de
                repetição, sempre considerando também a avaliação do homem e
                mostra o raciocínio clínico por trás de cada conduta. Você
                acompanha de perto, tira dúvidas e leva esse olhar para o seu
                consultório.
              </p>
              <a href="#oferta" className="cta">
                Quero participar do FertClub
              </a>
              <div className="trust-strip">
                <span>
                  <b>+500</b> profissionais reunidos
                </span>
                <span>
                  <b>+3.000</b> casais acompanhados pela Dra. Fernanda
                </span>
                <span>
                  Encontros <b>ao vivo</b> todo mês
                </span>
              </div>
            </div>
            <div className="hero-photo">
              <div className="photo-placeholder">
                <span className="icon">♣</span>
                <span>
                  Foto da Dra. Fernanda
                  <br />
                  (a definir)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ====================================================== */}
      {/* SEÇÃO 2 · DEPOIMENTOS                                   */}
      {/* ====================================================== */}
      <section className="block depo-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">O que os alunos estão dizendo</div>
            <h2>Profissionais que mudaram o olhar sobre seus casos</h2>
            <p>
              O que muda na prática clínica de quem acompanha a Dra. Fernanda
              mês a mês.
            </p>
          </div>
          <div className="depo-grid">
            <div className="depo-card">
              <div className="quote-mark">&ldquo;</div>
              <p>
                [ Espaço reservado para depoimento em texto ou print. Inserir o
                relato de um aluno sobre o impacto do FertClub na condução dos
                casos. ]
              </p>
              <div className="depo-author">
                <div className="depo-avatar" />
                <div>
                  <b>Nome do profissional</b>
                  <small>Especialidade</small>
                </div>
              </div>
            </div>
            <div className="depo-card">
              <div className="quote-mark">&ldquo;</div>
              <p>
                [ Espaço reservado para depoimento em texto ou print. Priorizar
                relatos que citem casos complexos resolvidos ou segurança clínica
                ganha. ]
              </p>
              <div className="depo-author">
                <div className="depo-avatar" />
                <div>
                  <b>Nome do profissional</b>
                  <small>Especialidade</small>
                </div>
              </div>
            </div>
            <div className="depo-card">
              <div className="quote-mark">&ldquo;</div>
              <p>
                [ Espaço reservado para depoimento em texto ou print. Bom usar
                aqui um relato sobre o valor da newsletter e dos encontros
                gravados. ]
              </p>
              <div className="depo-author">
                <div className="depo-avatar" />
                <div>
                  <b>Nome do profissional</b>
                  <small>Especialidade</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 3 · DORES LATENTES                                */}
      {/* ====================================================== */}
      <section className="block dores-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Você se identifica com esses problemas?</div>
            <h2>A frustração de fazer tudo certo e o resultado não vir</h2>
            <p>
              Você estudou, seguiu os protocolos, pediu os exames de praxe. E
              ainda assim, alguns casais continuam saindo do seu consultório sem
              resposta.
            </p>
          </div>
          <div className="dores-grid">
            <div className="dor-item">
              <div className="dor-x">✕</div>
              <p>
                Você repete o mesmo protocolo padrão e, em alguns casos, sente
                que ele simplesmente para de funcionar, sem saber o porquê.
              </p>
            </div>
            <div className="dor-item">
              <div className="dor-x">✕</div>
              <p>
                Recebe casos que não se encaixam no manual e fica sem um
                caminho claro para investigar a raiz.
              </p>
            </div>
            <div className="dor-item">
              <div className="dor-x">✕</div>
              <p>
                Acompanha abortos de repetição sem conseguir explicar à paciente
                o que está por trás, além de pedir que ela tente de novo.
              </p>
            </div>
            <div className="dor-item">
              <div className="dor-x">✕</div>
              <p>
                Sente que investiga apenas a mulher e trata exames isolados, mas
                nunca viu alguém avaliar o casal por inteiro,{" "}
                <b>incluindo a fertilidade do homem na prática real.</b>
              </p>
            </div>
            <div className="dor-item">
              <div className="dor-x">✕</div>
              <p>
                Vê colegas encaminhando direto para reprodução assistida e se
                pergunta se não havia algo a ser feito antes disso.
              </p>
            </div>
            <div className="dor-item">
              <div className="dor-x">✕</div>
              <p>
                Quer entrar com mais segurança no mercado de fertilidade, mas não
                tem com quem discutir casos reais e tirar dúvidas de conduta.
              </p>
            </div>
          </div>
          <p className="dores-kicker">
            Não é falta de competência. É que ninguém te mostrou,{" "}
            <b>caso a caso</b>, como enxergar a infertilidade por uma lente
            funcional.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 4 · TRANSIÇÃO DA DOR PARA SOLUÇÃO + O QUE É      */}
      {/* ====================================================== */}
      <section className="block sol-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Existe outro caminho</div>
            <h2>
              E se você pudesse acompanhar ao vivo todo mês como eu conduzo
              esses casos?
            </h2>
          </div>
          <div className="sol-list">
            <div className="sol-item">
              <div className="sol-check">✓</div>
              <p>
                Em vez de protocolos engessados, você passa a entender{" "}
                <b>o raciocínio clínico</b> que define cada conduta, e aprende a
                adaptá-lo a cada casal.
              </p>
            </div>
            <div className="sol-item">
              <div className="sol-check">✓</div>
              <p>
                Em vez de tratar exames isolados, você ganha um olhar{" "}
                <b>funcional</b> que investiga a raiz da infertilidade.
              </p>
            </div>
            <div className="sol-item">
              <div className="sol-check">✓</div>
              <p>
                Em vez de estudar sozinho, você discute <b>casos reais</b> comigo
                e com uma comunidade de profissionais.
              </p>
            </div>
            <div className="sol-item">
              <div className="sol-check">✓</div>
              <p>
                Em vez de adiar sua entrada na fertilidade, você constrói{" "}
                <b>repertório e segurança</b> mês a mês, no seu ritmo.
              </p>
            </div>
          </div>
          <div className="whatis">
            <span className="eyebrow">O que é o FertClub</span>
            <h3>
              Um grupo de estudos clínicos conduzido pela Dra. Fernanda Tofoli
            </h3>
            <p>
              Todo mês, a{" "}
              <strong>
                Dra. Fernanda, referência nacional em Fertilidade Funcional,
              </strong>{" "}
              abre casos reais de casais com infertilidade e explica, passo a
              passo, o raciocínio clínico e as estratégias funcionais por trás de
              cada conduta.
            </p>
            <p>
              Os encontros unem ciência, prática e discussão ética, mostrando
              como a visão funcional pode complementar e ampliar o olhar de
              qualquer profissional sobre a saúde reprodutiva.
            </p>
            <p>
              É o caminho mais próximo para conhecer a Fertilidade Funcional por
              dentro,{" "}
              <strong>antes de aplicá-la no seu consultório.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 5 · TUDO O QUE VOCÊ VAI RECEBER                  */}
      {/* ====================================================== */}
      <section className="block entreg-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Sua assinatura inclui</div>
            <h2>Tudo o que você recebe no FertClub</h2>
            <p>
              Três frentes que se complementam para manter seu aprendizado vivo o
              mês inteiro.
            </p>
          </div>
          <div className="entreg-list">

            {/* Card 1 — Encontro ao vivo */}
            <div className="entreg-card">
              <div className="entreg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#d9a64a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5v9A1.5 1.5 0 0 1 13.5 18h-9A1.5 1.5 0 0 1 3 16.5z" />
                  <path d="M15 10.5 21 7v10l-6-3.5z" />
                  <circle cx="7" cy="10" r="1.2" />
                </svg>
              </div>
              <div>
                <h4>Um encontro ao vivo por mês</h4>
                <p>
                  O coração do FertClub. Todo mês, a Dra. Fernanda conduz um
                  encontro ao vivo destrinchando um caso clínico real de
                  infertilidade, do diagnóstico à conduta. Você acompanha o
                  raciocínio em tempo real, faz perguntas e entende como cada
                  decisão foi tomada. É a oportunidade de pensar junto com quem
                  já acompanhou mais de 3.000 casais.
                </p>
              </div>
            </div>

            {/* Card 2 — Acervo */}
            <div className="entreg-card">
              <div className="entreg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#d9a64a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M9 7h7" />
                </svg>
              </div>
              <div>
                <h4>Acervo com mais de 10 encontros gravados</h4>
                <p>
                  Ao entrar, você recebe acesso imediato a toda a biblioteca de
                  encontros anteriores. São mais de 10 casos clínicos já
                  discutidos, disponíveis para assistir quando e quantas vezes
                  quiser. Um acervo que cresce a cada mês e se torna sua
                  referência de consulta para os casos que aparecem no dia a dia.
                </p>
              </div>
            </div>

            {/* Card 3 — Newsletter */}
            <div className="entreg-card">
              <div className="entreg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#d9a64a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div>
                <h4>Newsletter mensal com artigo científico comentado</h4>
                <p>
                  Todo mês, a Dra. Fernanda seleciona um artigo científico
                  relevante sobre fertilidade e o comenta para você, traduzindo a
                  evidência em aplicação clínica. Em vez de se perder em dezenas
                  de documentos, você estuda o que verdadeiramente importa, já
                  interpretado por quem vive a prática dia a dia no consultório.
                  Conteúdo atualizado e sem ruído.
                </p>
              </div>
            </div>

            {/* Bônus 1 */}
            <div className="entreg-card bonus-card">
              <div className="entreg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#d9a64a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="9" width="16" height="11" rx="1" />
                  <path d="M4 13h16" />
                  <path d="M12 9v11" />
                  <path d="M12 9C12 6.5 10.5 5 8.5 5 7 5 6 6 6 7.2 6 8.5 7 9 9 9z" />
                  <path d="M12 9c0-2.5 1.5-4 3.5-4C17 5 18 6 18 7.2 18 8.5 17 9 15 9z" />
                </svg>
              </div>
              <div>
                <span className="bonus-label">Bônus 1</span>
                <h4>[ Título do Bônus 1 ]</h4>
                <p>
                  [ Espaço reservado para a descrição do Bônus 1. Detalhar o que
                  é, o que a pessoa recebe e qual problema específico ele resolve,
                  para reforçar a percepção de valor. ]
                </p>
              </div>
            </div>

            {/* Bônus 2 */}
            <div className="entreg-card bonus-card">
              <div className="entreg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#d9a64a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="9" width="16" height="11" rx="1" />
                  <path d="M4 13h16" />
                  <path d="M12 9v11" />
                  <path d="M12 9C12 6.5 10.5 5 8.5 5 7 5 6 6 6 7.2 6 8.5 7 9 9 9z" />
                  <path d="M12 9c0-2.5 1.5-4 3.5-4C17 5 18 6 18 7.2 18 8.5 17 9 15 9z" />
                </svg>
              </div>
              <div>
                <span className="bonus-label">Bônus 2</span>
                <h4>[ Título do Bônus 2 ]</h4>
                <p>
                  [ Espaço reservado para a descrição do Bônus 2. Detalhar o que
                  é, o que a pessoa recebe e qual problema específico ele resolve,
                  para reforçar a percepção de valor. ]
                </p>
              </div>
            </div>

          </div>
          <div className="center mt-cta">
            <a href="#oferta" className="cta">
              Quero participar do FertClub
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 6 · PARA QUEM É                                   */}
      {/* ====================================================== */}
      <section className="block quem-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Para quem é</div>
            <h2>
              Feito para quem quer atuar com{" "}
              <span className="gold">fertilidade e reprodução</span>
            </h2>
            <p>
              O FertClub é exclusivo para profissionais da saúde que já atuam ou
              desejam atuar com fertilidade.
            </p>
          </div>
          <div className="quem-grid">
            <div className="quem-item">
              <div className="quem-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a0a08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v9a4 4 0 0 1-4 4 3 3 0 0 1-3-3" />
                  <path d="M12 4v9a4 4 0 0 0 4 4 3 3 0 0 0 3-3" />
                  <circle cx="12" cy="3.2" r="1.4" />
                </svg>
              </div>
              <p>Ginecologistas e obstetras</p>
            </div>
            <div className="quem-item">
              <div className="quem-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a0a08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v5a4 4 0 0 0 8 0V3" />
                  <path d="M6 3H4.5M14 3h1.5" />
                  <path d="M10 12v3.5a4.5 4.5 0 0 0 9 0V14" />
                  <circle cx="19" cy="12.5" r="1.6" />
                </svg>
              </div>
              <p>Urologistas, endocrinologistas, nutrólogos e clínicos gerais</p>
            </div>
            <div className="quem-item">
              <div className="quem-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a0a08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7c-1.2-1.4-3.2-2-5-1.2C4.5 7 4 10 5.2 13c.9 2.3 2.5 5 4.3 5.6 1.1.4 1.6-.2 2.5-.2s1.4.6 2.5.2c1.8-.6 3.4-3.3 4.3-5.6 1.2-3 .7-6-1.8-7.2-1.8-.8-3.8-.2-5 1.2Z" />
                  <path d="M12 7c0-1.7.8-3.2 2.5-3.8" />
                </svg>
              </div>
              <p>Nutricionistas</p>
            </div>
            <div className="quem-item">
              <div className="quem-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a0a08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 19c0-7 4-12 14-13C18 13 13 17 6 17" />
                  <path d="M5 19c1.5-3 3.5-5 6-6.5" />
                </svg>
              </div>
              <p>Fisioterapeutas, acupunturistas e terapeutas</p>
            </div>
            <div className="quem-item">
              <div className="quem-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a0a08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3.5 3.5 0 0 0-3.4 4.3A3 3 0 0 0 7.5 15a3 3 0 0 0 2.5 1.5V18M12 5a3.5 3.5 0 0 1 3.4 4.3A3 3 0 0 1 16.5 15a3 3 0 0 1-2.5 1.5V18" />
                  <path d="M12 5v13" />
                  <path d="M9.5 9.5h-1M15.5 9.5h-1" />
                </svg>
              </div>
              <p>Psicólogos e profissionais de saúde mental</p>
            </div>
            <div className="quem-item">
              <div className="quem-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a0a08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v-7" />
                  <path d="M12 13c0-2.5-1.8-4.5-4.5-4.5C7.2 11 9 13 12 13Z" />
                  <path d="M12 13c0-3 2-5.5 5-5.5C16.8 11 15 13 12 13Z" />
                  <path d="M8 20h8" />
                </svg>
              </div>
              <p>
                Profissionais que querem entrar no mercado de fertilidade com
                segurança
              </p>
            </div>
          </div>
          <p className="quem-foot">
            Se você quer compreender como a Dra. Fernanda pensa e conduz os seus
            casos clínicos,{" "}
            <b>o FertClub é o lugar certo para começar.</b>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 7 · ANCORAGEM                                     */}
      {/* ====================================================== */}
      <section className="block anchor-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">O valor real do que você recebe</div>
            <h2>Veja tudo o que você vai receber</h2>
          </div>
          <div className="anchor-box">
            <div className="anchor-row">
              <div className="anchor-name">
                <b>FertClub</b>
                <small>
                  Encontros ao vivo + Newsletters comentadas + Acervo de
                  encontros gravados
                </small>
              </div>
              <div className="anchor-val">R$ 299,97</div>
            </div>
            <div className="anchor-row">
              <div className="anchor-name">
                <b>[ Título do Bônus 1 ]</b>
                <small>a definir</small>
              </div>
              <div className="anchor-val">R$ —</div>
            </div>
            <div className="anchor-row">
              <div className="anchor-name">
                <b>[ Título do Bônus 2 ]</b>
                <small>a definir</small>
              </div>
              <div className="anchor-val">R$ —</div>
            </div>
            <div className="anchor-total">
              <div className="label">Tudo isso deveria custar</div>
              <span className="strike">R$ ———</span>
            </div>
          </div>
          <p className="anchor-bridge">
            Mas somente nesta página você pode ter acesso ao FertClub e a todos
            os bônus por <b>uma fração desse valor.</b>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 8 · OFERTA                                        */}
      {/* ====================================================== */}
      <section className="block offer-bg" id="oferta">
        <div className="wrap">
          <div className="offer-card">
            <div className="offer-badge">Acesso imediato</div>
            <div className="offer-was">
              De <s>R$ XX/mês</s> por apenas
            </div>
            <div className="offer-price">
              <span className="cur">R$</span>
              <span className="num">67</span>
              <span className="per">/mês</span>
            </div>
            <p className="offer-sub">
              Menos de R$ 2,50 por dia para estudar com uma referência nacional
              em Fertilidade Funcional.
            </p>
            <ul className="offer-list">
              <li>
                <span className="ck">✓</span> Encontro ao vivo todo mês com a
                Dra. Fernanda
              </li>
              <li>
                <span className="ck">✓</span> Acervo com +10 encontros gravados,
                liberado na hora
              </li>
              <li>
                <span className="ck">✓</span> Newsletter mensal com artigo
                científico comentado
              </li>
              <li>
                <span className="ck">✓</span> Bônus exclusivos desta página
              </li>
            </ul>
            <a href="#" className="cta cta-gold">
              Entrar para o FertClub agora
            </a>
            <p className="offer-guarantee">
              Sem fidelidade. Renovação mensal. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 9 · BIOGRAFIA                                     */}
      {/* ====================================================== */}
      <section className="block bio-bg">
        <div className="wrap">
          <div className="bio-grid">
            <div className="bio-photo">
              <div className="photo-placeholder">
                <span className="icon">♣</span>
                <span>
                  Foto da Dra. Fernanda
                  <br />
                  (a definir)
                </span>
              </div>
            </div>
            <div className="bio">
              <div className="eyebrow">Quem conduz o FertClub</div>
              <h2>Dra. Fernanda Tofoli</h2>
              <p>
                Depois de mais de{" "}
                <strong>15 anos na medicina tradicional</strong>, Fernanda
                percebeu que nem todas as respostas estavam ali, e que os
                resultados que buscava no tratamento das suas pacientes exigiam
                novos caminhos.
              </p>
              <p>
                Foi assim que ela encontrou na{" "}
                <strong>Medicina Funcional</strong> a resposta para casos de SOP,
                endometriose, abortos de repetição e infertilidade. Isso
                transformou sua carreira e a realidade de milhares de casais que
                não conseguiam engravidar de forma natural.
              </p>
              <p>
                Hoje, divide o conhecimento da sua formação internacional e da
                prática clínica de consultório com profissionais que atendem
                casais inférteis e que desejam alavancar suas carreiras por meio
                da Fertilidade Funcional.
              </p>
              <div className="bio-stats">
                <div className="bio-stat">
                  <div className="n">+15</div>
                  <div className="l">anos de prática clínica</div>
                </div>
                <div className="bio-stat">
                  <div className="n">+3.000</div>
                  <div className="l">casais acompanhados</div>
                </div>
                <div className="bio-stat">
                  <div className="n">6</div>
                  <div className="l">anos em Fertilidade Funcional</div>
                </div>
              </div>
              <p>
                É também fundadora da <strong>Dual Health</strong>, a primeira
                clínica de medicina funcional multiprofissional de São Paulo.
              </p>
              <div className="formacao">
                <h4>Formação</h4>
                <ul>
                  <li>Formação em Medicina pela PUC-SP</li>
                  <li>
                    Residência médica em ginecologia e obstetrícia pelo Centro de
                    Referência em Saúde da Mulher (Hospital Pérola Byington)
                  </li>
                  <li>Membro do SSR (Society for the Study of Reproduction)</li>
                  <li>
                    Pós-graduação e Membro do IFM (The Institute for Functional
                    Medicine)
                  </li>
                  <li>
                    Pós-graduação em cirurgia minimamente invasiva
                    (videolaparoscopia)
                  </li>
                  <li>
                    Pós-graduação em Patologia do Trato Genital Inferior e
                    colposcopia
                  </li>
                  <li>
                    Pós-graduação em Ultrassonografia em ginecologia e obstetrícia
                  </li>
                  <li>Pós-graduação em Ciências da Longevidade</li>
                  <li>Formação em Modulação Intestinal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SEÇÃO 10 · FAQ                                          */}
      {/* ====================================================== */}
      <section className="block faq-bg">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Ainda em dúvida?</div>
            <h2>Perguntas frequentes</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Não sou ginecologista. O FertClub faz sentido para mim?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Sim. O FertClub foi pensado para todo profissional da saúde que
                atua ou quer atuar com fertilidade e reprodução, incluindo
                nutricionistas, endocrinologistas, urologistas, fisioterapeutas,
                acupunturistas, psicólogos e clínicos gerais.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Preciso já dominar Medicina Funcional para acompanhar?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Não. O FertClub é o primeiro passo para conhecer a Fertilidade
                Funcional por dentro. A Dra. Fernanda parte do caso real e
                explica o raciocínio do começo ao fim, então você acompanha mesmo
                que esteja apenas começando a se interessar pelo tema.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                E se eu não puder participar do encontro ao vivo?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Todos os encontros ficam gravados e disponíveis no acervo. Você
                assiste no horário que conseguir, quantas vezes quiser, e ainda
                tem acesso a mais de 10 encontros anteriores já no momento em que
                entra.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Tenho fidelidade ou contrato de permanência?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Não. A assinatura é mensal e sem fidelidade. Você renova quando
                faz sentido para você e pode cancelar quando quiser, sem multa ou
                burocracia.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                O FertClub me entrega protocolos prontos para aplicar?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                O foco não é decorar protocolos, e sim desenvolver raciocínio
                clínico. Você aprende como a Dra. Fernanda investiga, decide e
                conduz cada caso, para que saiba adaptar a conduta a cada casal
                que chega ao seu consultório, em vez de depender de uma receita
                fixa.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Como funciona o acesso depois que eu assino?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                O acesso é imediato. Assim que sua assinatura é confirmada, você
                já libera todo o acervo de encontros gravados, passa a receber a
                newsletter mensal e recebe as informações do próximo encontro ao
                vivo.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA FINAL                                               */}
      {/* ====================================================== */}
      <section className="final-bg">
        <div className="wrap-narrow">
          <h2>Chegou a hora de abandonar os protocolos que te frustram.</h2>
          <p>
            Junte-se a mais de 500 profissionais e se torne um profissional
            capacitado para gerar resultados para seus pacientes com
            infertilidade.
          </p>
          <a href="#oferta" className="cta">
            Quero participar do FertClub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <p>
            © 2026 Dra. Fernanda Tofoli. Todos os direitos reservados. · Política
            de privacidade
          </p>
        </div>
      </footer>
    </>
  );
}
