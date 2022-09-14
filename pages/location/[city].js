export async function getServerSideProps(context) {
  const slug = context.params.city;

  return {
    props: {
      slug: slug,
    },
  };
}

export default function City({ slug }) {
  return (
    <div>
      <h1>City page</h1>
      <h2>{slug}</h2>
    </div>
  );
}
