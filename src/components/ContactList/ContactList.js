import { ContactItem } from '../ContactItem/ContactItem';

// import PropTypes from 'prop-types';
import css from './ContactList.module.css'; 
import { useSelector } from 'react-redux';
import {getContacts} from '../../redux/selectors'


export const ContactList = () => {
  

  const contacts = useSelector(getContacts);
  console.log('🚀 ~ ContactList ~ contacts:', contacts);
  const filter = useSelector(state => state.contacts.filter);

  
  
  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <li className={css['contact_item']} key={id}>
            <ContactItem name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.protoType = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
