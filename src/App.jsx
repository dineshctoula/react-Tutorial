export default function App() {
  async function handleSubmit(formData) {
    "use server";
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Form submitted");
  }

  return (
    <div>
      <h1>UseFormStatus Hook in React 19</h1>

      <form action={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <br /><br />

        <input type="email" name="email" placeholder="Email" required />
        <br /><br />

        <input type="password" name="password" placeholder="Password" required />
        <br /><br />

        <SubmitBtn />
      </form>
    </div>
  );
}
