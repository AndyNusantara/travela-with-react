import { useState } from "react";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
  };

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="newsletter">
      <h1>Subscribe to our newsletter</h1>
      <form onSubmit={formOnSubmitHandler}>
        <input
          type="text"
          required
          value={name}
          onChange={nameOnChangeHandler}
          placeholder="Your name.."
        />
        <input
          type="email"
          required
          value={email}
          onChange={emailOnChangeHandler}
          placeholder="Your email.."
        />
      </form>
      <button>SUBSCRIBE</button>
    </div>
  );
};

export default Newsletter;
