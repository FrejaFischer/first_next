import Image from "next/image";
export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}
export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  return (
    <main>
      <h1>{name}</h1>
      <p>
        {favouriteColor} - {age} years old
      </p>
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
        priority={true}
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
      />
    </main>
  );
}
