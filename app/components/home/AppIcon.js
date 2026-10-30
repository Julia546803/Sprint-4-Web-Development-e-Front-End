export default function AppIcon({
  icon,
  name,
  onClick,
  camera,
}) {
  return (
    <article
      className="app"
      onClick={onClick}
    >

      <div
        className={
          camera
            ? "icon camera-icon"
            : "icon"
        }
      >
        {icon}
      </div>

      <p>{name}</p>

    </article>
  );
}