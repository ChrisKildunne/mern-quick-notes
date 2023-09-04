//import { format } from 'date-fns';

export default function NotesItem({ note }){
    return(
        <li>
            {note.text}
            {'---'}
            {new Date(note.createdAt).toLocaleString()}
        </li>
    )
}