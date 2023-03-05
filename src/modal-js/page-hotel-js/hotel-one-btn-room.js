(() => {
  const refs = {
    openModaloneBtn: document.querySelector('[data-modal-room-open-n]'),
    closeModaloneBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room]'),
    body: document.querySelector('body'),
  };

  refs.openModaloneBtn.addEventListener('click', toggleModalone);
  refs.closeModaloneBtn.addEventListener('click', toggleModalone);

  function toggleModalone() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
