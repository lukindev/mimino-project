(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open-h]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
