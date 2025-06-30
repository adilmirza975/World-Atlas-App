export const Contact = () => {

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries())
    const formInputData= Object.fromEntries(formData.entries())
    console.log(formInputData)

  }

  return (
    <section className="section-contact ">
      <h2 className="container-title">Contact Us</h2>
<div className="contact-wrapper">

      <form action={handleFormSubmit}>
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Enter your name"
          name="username"
        />
        <input
          type="email"
          required
          className="form-control"
          placeholder="Enter your email"
          name="email"
          autoComplete="off"
        />
        <textarea
          type="text"
          rows='10'
          required
          autoComplete="off"
          placeholder="Enter your name"
          name="message"
        ></textarea>

        <button type="submit" value='send'>Send</button>
      </form>
      </div>
    </section>
  );
};
