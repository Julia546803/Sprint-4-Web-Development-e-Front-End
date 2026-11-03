import AppIcon from "./AppIcon";

export default function HomeScreen({onOpenCamera, onOpenContacts}) {
  const aplicativos = [
    {
      icon: "🎵",
      name: "Música",
    },
    {
      icon: "🌐",
      name: "Browser",
    },
    {
      icon: "💬",
      name: "Chat",
    },
    {
      icon: "🎮",
      name: "Games",
    },
    {
      icon: "📁",
      name: "Arquivos",
    },
    {
      icon: "⚙️",
      name: "Config",
    },
    {
      icon: "📷",
      name: "Câmera",
      camera: true,
      action: onOpenCamera,
    },
    {
      icon: "👤",
      name: "Contatos",
      action: onOpenContacts,
    },
  ];

  return (
    <section
      id="homeScreen"
      className="flex h-full w-full flex-col bg-background p-space-md">
        
      {/* TÍTULO */}
      <h1 className="mb-space-xl text-center text-2xl font-bold text-white">
        JOVI V70
      </h1>

      {/* APLICATIVOS */}
      <section className="grid grid-cols-6 gap-space-lg">
        {aplicativos.map((app) => (
          <div
            key={app.name}
            className={
              app.name === "Câmera"
                ? "col-span-2 col-start-2"
                : app.name === "Contatos"
                ? "col-span-2 col-start-4"
                : "col-span-2"
            }>
            <AppIcon
              icon={app.icon}
              name={app.name}
              camera={app.camera}
              onClick={app.action}
            />
          </div>
        ))}
      </section>
    </section>
  );
}