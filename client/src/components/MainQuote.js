import React from "react";
import { Button, Modal } from "reactstrap";
import "../css/homepage.css";
import ModalExample from "./Terminal";
const MainQuote = () => {
  return (
    <div className="quote-main">
      <h2>My Code For Life</h2>
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, enim.
        Eum, non. Mollitia aspernatur, libero ipsa omnis repellendus laborum
        optio ut iste nesciunt! Vel iure, impedit sit harum obcaecati
        accusantium!
      </h3>
      <h4>while (!(success=try()))</h4>
      <ModalExample buttonLabel="Know More About Me" />
      {/* {"import { Discipline, hardwork, determination } from '......'"}
      <br />
      {"import { inspiration, confidence } from '......'"}
      <br />
      {"const MyLife = () => {"}
      <br />
      <span class="tab-space"></span>
      {"const [success,setSuccess] = useState(false)"}
      <br />
      {
        "const [qualities,setQualities] = useState([Discipline, hardwork, determination, inspiration, confidence])"
      }
      <br />
      {"const Action = () => {"}
      <br />
      <span class="tab-space"></span>
      {"try {"}
      <br />
      <span class="tab-space"></span>
      <span class="tab-space"></span>
      {"setSuccess(true)"}
      <br />
      <span class="tab-space"></span>
      {"} catch(failure) {"}
      <br />
      <span class="tab-space"></span>
      <span class="tab-space"></span>
      {"setQualities(...qualities,failure.learn)"}
      <br />
      <span class="tab-space"></span>
      {"}"}
      {"return ("}
      <br />
      <span class="tab-space"></span>
      {"<button onClick = {Action} > test </button>"}
      <br />
      <span class="tab-space"></span>
      {")"}
      <br />
      {"}"}
      <br />
      export default Life ; */}
    </div>
  );
};

export default MainQuote;
