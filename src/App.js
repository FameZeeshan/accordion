import React, { useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "Do I Have To Allow The Use Of Cookies?",
      answer:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      isOpen: false,
    },
    {
      question: "How Do I Change My My Page Password?",
      answer:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
      isOpen: false,
    },
    {
      question: "What Is BankID?",
      answer:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
      isOpen: false,
    },
    {
      question: "Whose Birth Number Can I Use?",
      answer:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
      isOpen: false,
    },
    {
      question: "When Do I Recieve A Password Ordered By Letter?",
      answer:
        "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
      isOpen: false,
    },
  ]);

  const toggleAnswer = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].isOpen = !updatedQuestions[index].isOpen;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1>Questions</h1>
        {questions.map((item, index) => (
          <div className="question-container" key={index}>
            <div className="firstblock">
              <div className="question">{item.question}</div>
              <button
                className="toggle-button"
                onClick={() => toggleAnswer(index)}
              >
                {item.isOpen ? "-" : "+"}
              </button>
            </div>

            {item.isOpen && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
