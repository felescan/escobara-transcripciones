import { useState } from "react"

export default function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const whatsappLink =
    "https://wa.me/573147000760?text=Hola,%20quiero%20solicitar%20una%20transcripción"

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

Nombre: ${nombre}
Correo: ${correo}
WhatsApp: ${telefono}

Archivo: ${archivo}

Descripción:
${descripcion}
`

    const url =
      "https://wa.me/573147000760?text=" + encodeURIComponent(mensaje)

    window.open(url, "_blank")
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) setSelectedFile(file)
  }

  return (
   <div className="min-h-screen w-full overflow-x-hidden bg-black text-white px-4 sm:px-6">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-extrabold">ESCOBARA.ONLINE</h1>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-center text-sm text-cyan-300">
            IA + Transcripción Profesional
          </span>

          <h1 className="mt-10 text-4xl font-extrabold sm:text-5xl text-center lg:text-7xl">
            Audio y video en texto profesional
          </h1>

          <p className="mt-6 text-gray-300">
            Transcripción rápida y precisa para empresas y creadores, en 24 horas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-2xl bg-cyan-400 px-8 py-2 text-center font-bold text-black"
            >
              WhatsApp
            </a>

            <a
              href="#servicios"
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-2 text-center"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl text-center font-bold text-cyan-300">
            ¿Cómo funciona?
          </h3>


<div className="mt-6 space-y-3 text-gray-300">
  <p>1️⃣ Envías tu archivo de audio o video.</p>

  <p>2️⃣ Analizamos la duración y complejidad del contenido.</p>

  <p>3️⃣ Recibes una cotización personalizada.</p>

  <p>4️⃣ Apruebas el servicio y haces un anticipo del 50% por PayPal.</p>

  <p>5️⃣ Procedemos a la transcripción profesional.</p>

  <p>6️⃣ Revisamos el documento para garantizar calidad y precisión.</p>

  <p>7️⃣ Cancelas el saldo restante.</p>

  <p>8️⃣ Recibes tu transcripción en Word, PDF u OpenDocument.</p>
</div>

<div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center text-sm text-gray-200">
  ✓ Atención personalizada<br />
  ✓ Entrega puntual<br />
  ✓ Información tratada con confidencialidad
</div>
        </div>
      </section>
      
<section className="mx-auto max-w-5xl px-6 py-12 sm py-20">
  <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 sm:p-10 text-center backdrop-blur-xl">

    <div className="text-4xl mb-4">
      💰
    </div>

    <h2 className="text-3xl font-bold">
      Precios simples y transparentes
    </h2>

    <p className="mt-4 text-gray-300">
      Servicio profesional de transcripción con alta precisión.
    </p>

    <div className="mt-8 space-y-3 text-xl">
      <p>🎧 <strong>30 minutos:</strong> 5 USD</p>

      <p>🎧 <strong>1 hora:</strong> 7 USD</p>

      <p>⚡ <strong>Entrega urgente:</strong> +30%</p>

      <p>🌐 <strong>Traducción a otro idioma:</strong> +50%</p>
    </div>

    <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center text-sm text-gray-200 space-y-2">
      <p>✓ Valor por tiempo de audio o video o fracción</p>
      <p>✓ Entrega en Word, PDF y OpenDocument</p>
      <p>✓ Documento listo para editar o imprimir</p>
      <p>✓ Transcripción en el idioma requerido</p>
    </div>

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-block rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105"
    >
      Solicitar cotización
    </a>

  </div>
</section>
      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold">
          Servicios
        </h2>

        <div className="mt-p-6 sm:p-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            🎙️ Audio a Texto
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            🎥 Video a Texto
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            🤖 IA Automática
          </div>
        </div>
      </section>

      {/* UPLOAD */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-3xl border border-dashed border-cyan-400/30 bg-cyan-400/5 p-10 text-center">
          <h2 className="text-2xl font-bold">Sube tu archivo</h2>

          <label className="mt-6 block cursor-pointer rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black">
            Seleccionar archivo
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          {selectedFile && (
            <p className="mt-4 text-sm text-gray-300">
              {selectedFile.name}
            </p>
          )}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <form onSubmit={handleFormSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Nombre"
            className="w-full rounded-2xl bg-black/40 px-6 py-4"
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full rounded-2xl bg-black/40 px-6 py-4"
          />

          <input
            type="tel"
            placeholder="WhatsApp"
            className="w-full rounded-2xl bg-black/40 px-6 py-4"
          />

          <textarea
            placeholder="Descripción"
            className="w-full rounded-2xl bg-black/40 px-6 py-4"
          />

<div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 text-center text-sm text-gray-200">
  <p className="text-lg font-bold text-cyan-300">
    📎 Importante
  </p>

  <p className="mt-2">
    1️⃣ Pulsa "Enviar solicitud".
  </p>

  <p>
    2️⃣ Se abrirá WhatsApp con los datos de tu solicitud.
  </p>

  <p>
    3️⃣ Adjunta tu archivo de audio o video.
  </p>

  <p>
    4️⃣ Envía el mensaje.
  </p>

</div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black"
          >
            Enviar solicitud
          </button>
        </form>
      </section>

      {/* CHAT */}
      <button
        onClick={() => setChatbotOpen(!chatbotOpen)}
        className="fixed bottom-6 right-6 rounded-full bg-cyan-400 p-4 text-black"
      >
        🤖
      </button>

      {chatbotOpen && (
        <div className="fixed bottom-24 right-6 w-72 rounded-2xl bg-black/90 p-4 text-sm">
          <p>Hola 👋 Escríbenos por WhatsApp</p>

          <a
            href={whatsappLink}
            className="mt-4 block rounded-xl bg-cyan-400 p-3 text-center font-bold text-black"
          >
            Abrir WhatsApp
          </a>
        </div>
      )}

    </div>
  )
}
