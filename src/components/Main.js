
import Contact from "./Contact"
import Data from "../data/contacts.json"

function Main() {
  console.log(Data);

  return (
    <div >
      {
        Data.results.map((contact) => {
          return <Contact contactObj={contact} />
        })
      }
    </div>
  );
}

export default Main