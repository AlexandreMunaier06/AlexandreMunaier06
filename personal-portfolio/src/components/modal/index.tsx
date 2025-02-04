import './modal.css';

type ModalProps = {
  onClose: () => void,
  title: string,
  tipo: string,
  image: string,
  details: string,
  siteLink: string,
  repoLink: string,
};

function Modal({ onClose, title, tipo, image, details, siteLink, repoLink }: ModalProps) {
  return (
    <section className="modal-container">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{tipo}</p>
        <img src={image} alt="foto do projeto" />
        <article>{details}</article>
        <div className="modal-links">
          {siteLink && <a href={siteLink} target="_blank" rel="noopener noreferrer">
            Acessar Site
          </a>}
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            Ver Repositório
          </a>
        </div>
      </div>
    </section>
  );
}

export default Modal;
