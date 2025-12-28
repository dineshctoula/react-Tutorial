import style from './App.module.css';
function App(){
  return (
    <div className={style.quoteCard}>
      <p className={style.quoteTag}>Education is the most powerful that you can use to change the world</p>
      <p className={style.quoteAuthor}>- Nelson Mandela</p>

    </div>
  );
  
}
export default App;