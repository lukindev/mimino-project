(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prices-open-l]'),
    closeModalBtn: document.querySelector('[data-modal-prices-close]'),
    modal: document.querySelector('[data-modal-prices]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
