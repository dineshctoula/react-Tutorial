import User from "./User";

function App() {
  const user = ["dinesh", "pawan", "dipak"];

  // const books = [
  //   { id: 1, title: "Book 1", author: "author 1" },
  //   { id: 2, title: "Book 2", author: "author 2" },
  //   { id: 3, title: "Book 3", author: "author 3" },
  // ];

  // const fruits = ['apple', 'banana', 'cherry'];

  // function addFruits(){
  //   const item=[];
  //   for (let i =0; i<fruits.length; i++)
  //   {
  //     item.push(<li>{fruits[i]}</li>);
  //   }
  //   return item;
  // }

  return (
    <div>
      <h1>Map Object Loops</h1>

      {/* <ul>
        {
          fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))
        }
      </ul>

      <ul>
        {addFruits()}
      </ul> */}

      {/* 
      <ul>
        {
          books.map((book, index) => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))
        }
      </ul>
      */}

      {/* filter + map */}
      {/* <ul>
        {
          books
            .filter(book => book.id > 1)
            .map(book => (
              <li key={book.id}>
                {book.title} by {book.author}
              </li>
            ))
        }
      </ul> */}

      {/* user map */}
      <ul>
        {
          user.map((user, index) => (
            <li key={index}>
              <User key={index} item={user}/>
            </li>
          ))
        }
      </ul>

      

    </div>
  );
}

export default App;
