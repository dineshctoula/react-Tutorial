import { useActionState } from "react";

function submitFeedback(prevState, formData) {
  const name = formData.get("name");
  const feedback = formData.get("feedback");

  if (name && feedback) {
    return `Thank you ${name} for your feedback`;
  } else {
    return "Please enter both name and feedback";
  }
}

export default function App() {
  const [message, formAction, pending] = useActionState(submitFeedback, "");

  return (
    <>
      <h1>useActionState Hook in ReactJS</h1>

      <form action={formAction}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <br /><br />

        <textarea
          name="feedback"
          placeholder="Enter your feedback"
        />
        <br /><br />

        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>

        <p>{message}</p>
      </form>
    </>
  );
}
