import Accordion from 'react-bootstrap/Accordion';
import '../styles_components/Accordians.css';

function AllCollapse() {
  return (
    <>
      {/* Accordians - About me set */}
      <Accordion className="acc-about-me">

        {/* 1st accordian */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction</Accordion.Header>
            <Accordion.Body>

              <p>
                I am a creative and inquisitve professional software developer 
                who has an intense desire to learn and develop the necessary 
                skills for software development; a developer who wants to bring 
                to life novel ideas in the form of a software product.

                Knowing that I have poured my sweat and tears into 
                understanding software develpoment, I know the power 
                that technology has to change the lives of 
                our users, one line of code at a time.

                And so, all I want to wholeheartedly do is to design and 
                create software that I can be proud off and that I know 
                can benefit the end users in way that leaves them 
                appreciative of the technology that we develop and 
                that benefits them to better shape their 
                individual future.
              </p>
            </Accordion.Body>
        </Accordion.Item>

        {/* 2nd accordian */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              <p>
                Enrolled for Software Engineering at HyperionDev from December 2021
                and recently graduated in August 2022.
                It was there that I learnt Python and Java as my 
                main programming languages. I also covered how to use MySQL 
                as a way of learning about databases and gained an 
                introductory understanding of Machine Learning using Python.

                As I began building projects in both languages,
                I gained an understanding on various SDLC practices and their value 
                in the software development process. It was at HyperionDev that 
                I applied software concepts including:
              </p>

              <p>
                <ul>
                    <li>Defensive Programming</li>
                    <li>Refactoring</li>
                    <li>Types of Software Development Methodologies</li>
                    <li>Software Testing</li>
                    <li>Sofware Documentation</li>
                    <li>System Requirements and Design</li>
                  </ul>
              </p>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

/* Returns AllCollapse function to App.js */
export default AllCollapse;