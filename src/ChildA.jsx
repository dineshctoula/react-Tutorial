function ChildA({ setMsg }) {
  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <h1>Child A</h1>
      <input type="text" onChange={handleMsg} />
    </div>
  );
}

export default ChildA;
