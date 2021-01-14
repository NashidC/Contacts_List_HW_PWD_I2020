

function Contact(props) {
  const { contactObj: contacts } = props;

  return (
    <div>
      <div>
        <img src={contacts.picture.large} />
      </div>
      <div>
        <h2>{contacts.name.first} {contacts.name.last}</h2>
        <p>Home: {contacts.phone}</p>
        <p>Mobile: {contacts.cell}</p>
      </div>
      <div>

      </div>
    </div>
  );
}


export default Contact