import Link from "next/link";
import { Suspense } from "react";
import CreateNotes from "./CreateNotes";

async function getNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/blog/records?page=1&perpage=30",
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data?.items as any[];
}
export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <>
      <Suspense fallback='Loading....'>
        <div className='bg-red'>
          <h1>Notes</h1>

          {notes?.map((note) => (
            //blog card
            <div key={note.id}>
              <Link href={`/notes/${note.id}`}>
                <h2>{note.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
      <CreateNotes />
    </>
  );
}
