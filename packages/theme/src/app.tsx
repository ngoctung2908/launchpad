import React from 'react';
import Buttons from './buttons';
import Texts from './texts';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>React App with Typescript.</h1>
      <Buttons />
      <Texts />

      <div className="bd-example">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dignissimos voluptas corporis est iste
                nihil vel quas ipsum perferendis perspiciatis aliquam nisi fugiat, delectus vero odio tenetur
                consectetur. Temporibus, et?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur numquam quaerat quod rem nobis
                veritatis amet et officiis placeat facilis pariatur commodi nemo magni, fuga sunt? Itaque, dolorem ut!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, dolore odio sapiente natus temporibus
                commodi, corporis pariatur rerum beatae et qui odit fuga quam quod adipisci sint at sunt alias?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
