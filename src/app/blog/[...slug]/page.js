export default async function Slug({ params }) {
  const { slug } = await params;
  return (
    <>
      <h1>This is slug page: {slug}</h1>
    </>
  );
}
