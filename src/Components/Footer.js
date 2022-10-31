import github from '../icons/github.svg';
import linkedin from '../icons/linkedIn.svg';
import '../styles_components/Nav-to-Footer.css';

function Footer() {
  return (
    <>
    <footer id="sticky-footer" class="flex-shrink-0 py-4 text-white-50">
      <div class="container text-center">
        <small class="text-color">Copyright &copy; Motheo Motau</small>

          {/* LinkedIn Image Link*/}
          <a href="https://www.linkedin.com/in/motheomotau/">
              <img src={ linkedin } alt="" className="linkedin"/>
          </a>

          {/* Github Image Link*/}
          <a href="https://github.com/Motheo-M">
            <img src={ github } alt="" className="github"/>
          </a>
      </div>
    </footer>
    </>
  );
}

/* Returns AllCollapse function to App.js */
export default Footer;