import React, {useState} from 'react';

export default function Contact() {
const [nameInput, setNameInput] = useState('')
const [emailInput, setEmailInput] = useState('')
const [messageInput, setMessageInput] = useState('')

const messages = []

localStorage.setItem('messages', JSON.stringify(messages))

const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      "name": nameInput,
      "email": emailInput,
      "message": messageInput
    }

    messages.push(newMessage)

    localStorage.setItem('messages', JSON.stringify(messages))

    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  };

  return (
    <div class= "section">

      <h1>Backend in works to handle form submissions-- for now, please either email me at <a href="mailto:alonp714@gmail.com">alonp714@gmail.com</a> or call me at <a href="tel:4253182644">425-218-2644</a> </h1>

      <br/><br/>

      <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Your name</label>
        <input type="text" class="form-control" id="formGroupExampleInput" value={nameInput} placeholder="Example input placeholder" required={true} onChange={handleNameChange}/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" value={emailInput} placeholder="name@example.com" onChange={handleEmailChange}/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={messageInput} required={true} onChange={handleMessageChange}></textarea>
      </div>
      <button type="submit "class= "btn btn-primary">Send me a message</button>
      </form>
    </div>
  );
}