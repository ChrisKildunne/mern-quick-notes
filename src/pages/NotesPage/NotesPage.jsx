import NotesItem from "../NotesItemPage/NotesItemPage";

export default function NotesPage({notes}) {
  const notesItems = notes.map((n, idx) => (
    <NotesItem note={n} key={idx} />
  ))
  return (
    
    <ul>
      {notesItems}
    </ul>
  );
}
