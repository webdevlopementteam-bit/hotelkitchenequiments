// Inner-page title banner: background photo, 50% gradient overlay, centred white H1.
export default function PageHero({ title, image, gradient = "linear-gradient(180deg, #000000 0%, #AAAAAA 100%)" }) {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundColor: image ? undefined : "#192a3d" }}
    >
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: gradient }} />
      <h1 className="relative px-[10px] pt-[60px] text-center text-white">{title}</h1>
    </section>
  );
}
