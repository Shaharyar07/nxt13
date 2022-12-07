import { Suspense } from "react";

async function getNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/blog/records?page=1&perpage=30"
  );
  const data = await response.json();
  return data?.items as any[];
}
export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <Suspense fallback='Loading...'>
      <div className='bg-red'>
        <h1>Notes</h1>

        {notes?.map((note) => (
          //blog card
          <div key={note._id} className='bg-white rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold'>{note.title}</h2>
            <p className='text-gray-500'>{note.content}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
