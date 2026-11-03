import Link from "next/link";

export default function LandingPage() {
  const funcionalidades = [
    {
      icone: "📷",
      titulo: "Câmera",
      descricao: "Capture momentos com uma experiência personalizada.",
    },
    {
      icone: "▣",
      titulo: "Digitalização",
      descricao: "Digitalize documentos de forma simples e prática.",
    },
    {
      icone: "👤",
      titulo: "Contatos",
      descricao: "Consulte e encontre seus contatos em um só lugar.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background text-white">

      {/* CABEÇALHO */}
      <header className="mx-auto flex w-full max-w-6xl items-center px-space-lg py-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-[3px]"
        >
          JOVI <span className="text-blue-400">V70</span>
        </Link>
      </header>

      {/* APRESENTAÇÃO */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-space-lg py-16 lg:flex-row lg:justify-between lg:py-24">

        {/* TEXTO PRINCIPAL */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-5 text-sm font-semibold tracking-[3px] text-blue-400">
            TECNOLOGIA E INOVAÇÃO
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Seu mundo,
            <span className="block text-blue-400">
              mais inteligente.
            </span>
          </h1>

          <p className="mb-8 text-base leading-8 text-slate-300 sm:text-lg">
            Descubra o JOVI V70, uma experiência digital que
            combina tecnologia e praticidade. Explore uma câmera
            personalizada, digitalize documentos e gerencie seus
            contatos em um só lugar.
          </p>

          <Link
            href="/login"
            className="inline-block rounded-button bg-primary px-8 py-4 font-semibold shadow-lg shadow-blue-900/30 transition hover:-translate-y-1 hover:bg-primary-hover"
          >
            Explorar JOVI V70
          </Link>
        </div>

        {/* ILUSTRAÇÃO DO SMARTPHONE */}
        <div className="flex w-full max-w-sm justify-center">
          <div className="relative flex h-[480px] w-[245px] flex-col items-center overflow-hidden rounded-[40px] border-8 border-slate-800 bg-linear-to-b from-blue-900 via-slate-900 to-black shadow-2xl">

            {/* CÂMERA FRONTAL */}
            <div className="mt-3 h-5 w-24 rounded-full bg-black" />

            {/* CONTEÚDO DA TELA */}
            <div className="flex flex-1 flex-col items-center justify-center gap-5 px-4 text-center">
              <p className="text-xs tracking-[4px] text-blue-200">
                JOVI V70
              </p>

              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-blue-500/20 text-5xl shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                ✦
              </div>

              <h2 className="text-2xl font-bold">
                Tecnologia que conecta.
              </h2>

              <p className="text-sm text-slate-300">
                Uma nova experiência digital.
              </p>
            </div>

            {/* BARRA INFERIOR */}
            <div className="mb-4 h-1 w-24 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="mx-auto w-full max-w-6xl px-space-lg pb-20">

        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">
            Explore as funcionalidades
          </h2>

          <p className="text-slate-400">
            Recursos pensados para facilitar seu dia a dia.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {funcionalidades.map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-800 bg-surface p-space-xl transition hover:-translate-y-1 hover:border-blue-500/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl">
                {item.icone}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {item.titulo}
              </h3>

              <p className="leading-7 text-slate-400">
                {item.descricao}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-800 px-space-lg py-8 text-center text-sm text-slate-500">
        JOVI V70 — Projeto acadêmico | Sprint 4
      </footer>
    </main>
  );
}