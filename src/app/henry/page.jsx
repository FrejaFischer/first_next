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
      <img src={image.url} alt="Henry" />
    </main>
  );
}
