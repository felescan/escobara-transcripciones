
import { useState } from "react"

export default function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const whatsappLink =
    "https://wa.me/573147000760?text=Hola,%20quiero%20solicitar%20una%20transcripci%C3%B3n"

  const handleFormSubmit = (e) => {
  e.preventDefault()

  const form = e.target

  const nombre = form[0].value
  const correo = form[1].value
  const telefono = form[2].value
  const descripcion = form[3].value

  const archivo = selectedFile
    ? `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`
    : "No se adjuntó archivo"

  const mensaje = `
Hola, deseo solicitar una transcripción.

DATOS DEL CLIENTE

Nombre: ${nombre}
Correo: ${correo}
WhatsApp: ${telefono}

ARCHIVO

${archivo}

DESCRIPCIÓN

${descripcion}

Adjunto el archivo para cotización.
`

  const url =
    "https://wa.me/573147000760?text=" +
    encodeURIComponent(mensaje)

  window.open(url, "_blank")
}

  const handleFileUpload = (e) => {
    const file = e.target.files[0]

    if (file) {
         setSelectedFile(file)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-cyan-400">ESCOBARA</span> ONLINE
          </h1>

          <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
            <a href="#inicio" className="transition hover:text-cyan-400">
              Inicio
            </a>

            <a href="#servicios" className="transition hover:text-cyan-400">
              Servicios
            </a>

            <a href="#contacto" className="transition hover:text-cyan-400">
              Contacto
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-28 lg:grid-cols-2">
          <div>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              IA + Automatización + Transcripción Profesional
            </span>

            <h1 className="mt-10 text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">

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
              <a
      
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-2xl bg-cyan-400 px-8 py-4 text-center text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]"
>
  WhatsApp
</a>
              <a
                href="#servicios"
                className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-center text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="space-y-4">
  <h3 className="text-2xl font-bold text-cyan-300">
    ¿Cómo funciona?
  </h3>

  <div className="rounded-2xl bg-black/40 p-4">
    1️⃣ Carga tu archivo de audio o video.
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    2️⃣ Analizamos duración y complejidad.
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    3️⃣ Recibes una cotización personalizada.
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    4️⃣ Apruebas el trabajo y realizas un anticipo del 50%.
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    5️⃣ Realizamos la transcripción profesional.
  </div>

  <div className="rounded-2xl bg-black/40 p-4">
    6️⃣ Cancelas el saldo restante y recibes el documento final.
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

  <section style={{
  display: "flex",
  justifyContent: "center",
  padding: "60px 20px"
}}>

  <div style={{
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    background: "#ffffff",
    padding: "40px 25px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  }}>

    <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
      💰 Precios simples y transparentes
    </h2>

    <p style={{ fontSize: "15px", marginBottom: "25px", color: "#555" }}>
      Servicio de transcripción manual con alta precisión y entrega organizada.
    </p>

    <div style={{ fontSize: "17px", lineHeight: "2", marginBottom: "20px" }}>
      🎧 30 minutos de audio o video: <strong>5 USD</strong><br />
      🎧 1 hora de audio o video: <strong>7 USD</strong><br />
      ⚡ Entrega urgente (24h o menos): <strong>+30% adicional</strong>
    </div>

    <p style={{ fontSize: "13px", color: "#777" }}>
      📌 Se cobra por tiempo de audio o video o fracción del mismo.
    </p>

  </div>

</section>
      {/* SERVICES */}
      <section id="servicios" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="relative text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Servicios Premium
          </span>

          <h2 className="mt-8 text-4xl font-extrabold sm:text-5xl">
            Soluciones modernas para contenido digital
          </h2>
        </div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:border-cyan-400/30">
            <div className="mb-6 text-5xl">🎙️</div>
            <h3 className="text-2xl font-bold">Transcripción Audio</h3>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:border-cyan-400/30">
            <div className="mb-6 text-5xl">🎥</div>
            <h3 className="text-2xl font-bold">Video a Texto</h3>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:border-cyan-400/30">
            <div className="mb-6 text-5xl">🤖</div>
            <h3 className="text-2xl font-bold">Automatización IA</h3>
          </div>
        </div>
      </section>

      {/* FILE UPLOAD */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-[32px] border border-dashed border-cyan-400/30 bg-cyan-400/5 p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-extrabold">
            Sube tus archivos
          </h2>

     <div className="mt-10">
  <label className="cursor-pointer rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]">
    Seleccionar Archivo

    <input
      type="file"
      className="hidden"
      onChange={handleFileUpload}
    />
  </label>

  {selectedFile && (
    <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-left">
      <p className="font-bold text-cyan-300">
        ✓ Archivo recibido
      </p>

      <p className="mt-2">
        <strong>Nombre:</strong> {selectedFile.name}
      </p>

      <p>
        <strong>Tamaño:</strong>{" "}
        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
      </p>
  
  
   <p className="mt-3 text-sm text-gray-300">
  Formatos aceptados: MP3, WAV, M4A, MP4, AVI, MOV y otros formatos de audio o video.
</p>
    </div>
  )}
</div>
</div>
</section>
      {/* CONTACT */}
      <section id="contacto" className="mx-auto max-w-5xl px-6 py-28">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="text-center">
            <h2 className="mt-8 text-4xl font-extrabold sm:text-5xl">
              Envíanos tu proyecto
            </h2>
          </div>

          <form className="mt-14 grid gap-6" onSubmit={handleFormSubmit}>
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
<input
  type="tel"
  placeholder="WhatsApp"
  className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-cyan-400"
/>
            <textarea
              rows="5"
              placeholder="Describe tu proyecto..."
              className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-cyan-400"
            ></textarea>
<div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 text-left text-sm text-gray-200">
  <p className="text-lg font-bold text-cyan-300">
    📎 Importante
  </p>

  <p className="mt-2">
    1. Pulsa "Enviar Solicitud".
  </p>

  <p>
    2. Se abrirá WhatsApp con los datos de tu solicitud.
  </p>

  <p>
    3. Adjunta el archivo de audio o video.
  </p>

  <p>
    4. Envía el mensaje.
  </p>

  <p className="mt-3">
    Una vez recibido, analizaremos su duración y complejidad y te enviaremos una cotización personalizada.
  </p>
</div>
            <button className="rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]">
            <a
  href="https://wa.me/573102808032?text=Hola%2C%20quiero%20solicitar%20una%20transcripci%C3%B3n"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Enviar solicitud</button>
</a>
            </button>
          </form>
        </div>
      </section>

      {/* CHAT BUTTON */}
      <button
        onClick={() => setChatbotOpen(!chatbotOpen)}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-cyan-400 text-3xl text-black shadow-[0_0_40px_rgba(34,211,238,0.5)] transition duration-300 hover:scale-110"
      >
        {chatbotOpen ? "✕" : "🤖"}
      </button>

      {chatbotOpen && (
        <div className="fixed bottom-24 right-2 sm:right-4 z-50 w-[85vw] max-w-[300px] overflow-hidden rounded-[28px] border border-cyan-400/20 bg-black/90 shadow-[0_0_60px_rgba(34,211,238,0.25)] backdrop-blur-xl">
          <div className="p-5 text-xs sm:text-sm text-gray-200">
            👋 Hola, soy Escobara IA.
            <br />
            Puedes escribirnos directamente por WhatsApp.

            <div className="mt-5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-cyan-400 px-4 py-3 text-center font-bold text-black"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
