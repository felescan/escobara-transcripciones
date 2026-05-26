
import { useState } from "react"

export default function App() {

  const [chatbotOpen, setChatbotOpen] = useState(false)

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-cyan-400">ESCOBARA</span> ONLINE
          </h1>

          <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">

            <a href="#" className="transition hover:text-cyan-400">
              Inicio
            </a>

            <a href="#" className="transition hover:text-cyan-400">
              Servicios
            </a>

            <a href="#" className="transition hover:text-cyan-400">
              IA
            </a>

            <a href="#" className="transition hover:text-cyan-400">
              Contacto
            </a>

          </div>

         <a
  href="https://wa.me/573000000000"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
>
  WhatsApp
</a>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20 blur-3xl"></div>

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-28 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              IA + Automatización + Transcripción Profesional
            </span>

            <h1 className="mt-10 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">

              Transformamos

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}audio y video{" "}
              </span>

              en documentos listos para usar

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-300">

              Servicio premium de transcripción para reuniones,
              entrevistas, podcasts y contenido empresarial.

            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">

              <button className="rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]">

                Solicitar Transcripción

              </button>

              <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10">

                Ver Servicios

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

              {/* Top */}
              <div className="mb-8 flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>

              </div>

              {/* Screen */}
              <div className="space-y-6">

                <div className="rounded-2xl bg-black/40 p-5">

                  <p className="text-sm text-gray-400">
                    Archivo cargado
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    reunion_empresa.mp4
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">

                  <p className="text-sm text-cyan-300">
                    Procesando con IA...
                  </p>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-4/5 rounded-full bg-cyan-400"></div>

                  </div>

                  <p className="mt-3 text-sm text-gray-300">
                    Conversión avanzada de voz a texto
                  </p>

                </div>

                <div className="rounded-2xl bg-black/40 p-5">

                  <p className="text-sm text-gray-400">
                    Documento generado
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    transcripcion_final.docx
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="relative text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Servicios Premium
          </span>

          <h2 className="mt-8 text-4xl font-extrabold sm:text-5xl">
            Soluciones modernas para contenido digital
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-400">
            Servicios profesionales impulsados por inteligencia artificial
            y automatización avanzada.
          </p>

        </div>

        {/* CARDS */}
        <div className="relative mt-20 grid gap-8 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:border-cyan-400/30">

            <div className="mb-6 text-5xl">
              🎙️
            </div>

            <h3 className="text-2xl font-bold">
              Transcripción Audio
            </h3>

            <p className="mt-5 leading-relaxed text-gray-400">
              Convertimos grabaciones en documentos claros,
              organizados y listos para entregar.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:border-cyan-400/30">

            <div className="mb-6 text-5xl">
              🎥
            </div>

            <h3 className="text-2xl font-bold">
              Video a Texto
            </h3>

            <p className="mt-5 leading-relaxed text-gray-400">
              Procesamiento avanzado de entrevistas,
              reuniones y podcasts.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:border-cyan-400/30">

            <div className="mb-6 text-5xl">
              🤖
            </div>

            <h3 className="text-2xl font-bold">
              Automatización IA
            </h3>

            <p className="mt-5 leading-relaxed text-gray-400">
              Soluciones inteligentes para negocios digitales
              y asistencia virtual.
            </p>

          </div>

        </div>

      </section>
            {/* FILE UPLOAD */}
      <section className="mx-auto max-w-5xl px-6 py-10">

        <div className="rounded-[32px] border border-dashed border-cyan-400/30 bg-cyan-400/5 p-12 text-center backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-400/10">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/10 text-5xl">

            📎

          </div>

          <h2 className="text-4xl font-extrabold">
            Sube tus archivos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">

            Arrastra aquí tus audios o videos
            para comenzar la transcripción.

          </p>

          <div className="mt-10">

            <label className="cursor-pointer rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]">

              Seleccionar Archivo

              <input
                type="file"
                className="hidden"
              />

            </label>

          </div>

          <p className="mt-6 text-sm text-gray-500">
            MP3 · WAV · MP4 · M4A · MOV
          </p>

        </div>

      </section>
      {/* CONTACT FORM */}
      <section className="mx-auto max-w-5xl px-6 py-28">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <div className="text-center">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Solicita tu Servicio
            </span>

            <h2 className="mt-8 text-4xl font-extrabold sm:text-5xl">
              Envíanos tu proyecto
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Cuéntanos qué necesitas y te responderemos rápidamente.
            </p>

          </div>

          {/* FORM */}
          <div className="mt-14 grid gap-6">

            <input
              type="text"
              placeholder="Nombre"
              className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Describe tu proyecto..."
              className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-cyan-400"
            ></textarea>

            <button className="rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]">

              Solicitar Transcripción

            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/40 px-6 py-16">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-extrabold">

              <span className="text-cyan-400">
                ESCOBARA
              </span>{" "}

              ONLINE

            </h2>

            <p className="mt-6 leading-relaxed text-gray-400">

              Servicios modernos de transcripción,
              automatización y asistencia inteligente
              para negocios digitales.

            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-xl font-bold">
              Navegación
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <a href="#" className="transition hover:text-cyan-400">
                Inicio
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                Servicios
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                IA
              </a>

              <a href="#" className="transition hover:text-cyan-400">
                Contacto
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-bold">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">

              <p>
                📧 contacto@escobara.online
              </p>

              <p>
                📱 WhatsApp Business
              </p>

              <p>
                🌎 Medellín - Colombia
              </p>

            </div>

          </div>

        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-gray-500">

          © 2026 ESCOBARA ONLINE · Todos los derechos reservados.

        </div>

      </footer>
         
               {/* CHAT BUTTON */}
      <button
        onClick={() => setChatbotOpen(!chatbotOpen)}
        className="fixed bottom-24 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-3xl text-black shadow-[0_0_40px_rgba(34,211,238,0.5)] transition duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]"
      >

        {chatbotOpen ? "✕" : "🤖"}

      </button>

      {/* CHATBOT IA */}
      {chatbotOpen && (

        <div className="fixed bottom-44 right-4 z-50 w-[350px] overflow-hidden rounded-[28px] border border-cyan-400/20 bg-black/90 shadow-[0_0_60px_rgba(34,211,238,0.25)] backdrop-blur-xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

            <div>

              <h3 className="font-bold text-cyan-400">
                Escobara IA
              </h3>

              <p className="text-sm text-gray-400">
                Asistente Virtual
              </p>

            </div>

            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

          </div>

          {/* Messages */}
          <div className="space-y-4 p-5">

            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 p-4 text-sm text-gray-200">

              👋 Hola, soy Escobara IA.
              ¿Cómo puedo ayudarte hoy?

            </div>

            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-cyan-400 p-4 text-sm font-medium text-black">

              Necesito una transcripción urgente.

            </div>

            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 p-4 text-sm text-gray-200">

              Perfecto 🚀
              Puedes enviarnos tu audio o video por WhatsApp.

            </div>

          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="w-full bg-transparent text-sm outline-none"
              />

              <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-black transition hover:scale-105">

                Enviar

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}
     
    
