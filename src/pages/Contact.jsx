
export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData);
    
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input 
        type="text" 
        name="username" 
        className="form-control"
        placeholder="Enter your name"
        autoComplete="false"
        required  
        />

        <input 
        type="email" 
        name="email" 
        className="form-control"
        placeholder="Enter your email"
        autoComplete="false"
        required  
        />

        <textarea
        className="form-control"
        rows="10"
        placeholder="Enter your message"
        name="message"
        required
        autoComplete="false"
        ></textarea>

        <button type="submit" value="send">Send</button>
      </form>
      </div>
    </section>
  );
};

