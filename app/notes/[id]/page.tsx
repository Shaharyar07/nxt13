import { useRouter } from "next/router";

async function fetchNote(id: string) {
  return fetch(`http://127.0.0.1:8090/api/collections/blog/records/${id}`).then(
    (res) => res.json()
  );
}
export default async function Page({ params }: any) {
  const data = await fetchNote(params.id as string);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
