import Accordion from 'react-bootstrap/Accordion';
import '../styles_components/Accordians.css';

function AllCollapse() {
  return (
    <>
      {/* Accordians - Why SovTech set */}
      <Accordion className="acc-sovtech">

        {/* 1st accordian */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sovtech - Why?</Accordion.Header>
            <Accordion.Body>
              <p>
                As a recent Software graduate, I chose Sovtech as the place to 
                gain a firm foundation as professional Software Developer because
                it is an end to end development software company 
                that is full of passionate tech enthusiasts that endeavour
                to deliver top quality software products using the best technologies
                and software standards to meet their clients' needs.
              </p>

              <p>
                Your mission resonates with me as an individual who enjoys solving
                problems on a daily basis and who takes pride in what technology can do for people
                in their daily lives and on a worldwide scale. Working with people is 
                also great as I get to understand how users, clients and even businesses 
                think about technology and its applications in their respective fields
                and how it can contribute to solving their problems.
              </p>

              <p>
                Another reason is due to the various services that you offer
                such as Mobile App development, Web App development and software 
                maintenance to mention a few. Knowing that you have these services 
                means that I'll get the opportunity to work on a diverse range of 
                projects and have the opportunity to build real world software products.
                Working with expert mentors means I'll get specific feedback on how 
                to improve as a software developer and how to efficiently apply 
                the knowledge that I have to any project I work on.
              </p>
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </>
  );
}

/* Returns AllCollapse function to App.js */
export default AllCollapse;