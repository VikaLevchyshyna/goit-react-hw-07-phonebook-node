import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.info}>
            {name}: {number}
          </p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
