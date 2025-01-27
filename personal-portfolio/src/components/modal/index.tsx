import './modal.css';

type ModalProps = {
  onClose: () => void,
  title: string,
  image: string,
  description: string,
  details: string,
  siteLink: string,
  repoLink: string,
};

function Modal({ onClose, title, image, description, details, siteLink, repoLink }: ModalProps) {
  return (
    <section className="modal-container">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <img src={image} alt="foto do projeto" />
        <p>{description}</p>
        <p>{details}</p>
        <div className="modal-links">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            Acessar Site
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            Ver Repositório
          </a>
        </div>
      </div>
    </section>
  );
}

export default Modal;
