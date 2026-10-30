import AppIcon from "./AppIcon";

export default function HomeScreen({ onOpenCamera }) {
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
  ];

  return (
    <section
      id="homeScreen"
      className="home-screen"
    >

      <h1>JOVI V70</h1>

      <section className="apps-grid">

        {aplicativos.map((app) => (
          <AppIcon
            key={app.name}
            icon={app.icon}
            name={app.name}
            camera={app.camera}
            onClick={app.action}
          />
        ))}

      </section>

    </section>
  );
}