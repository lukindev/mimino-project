(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prices-open-w]'),
    openSecondModalBtn: document.querySelector('[data-modal-prices-open-a]'),
    openThirdModalBtn: document.querySelector('[data-modal-prices-open-b]'),
    openFourthModalBtn: document.querySelector('[data-modal-prices-open-c]'),

    closeModalBtn: document.querySelector('[data-modal-prices-close]'),
    modal: document.querySelector('[data-modal-prices]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', toggleModal);
  refs.openThirdModalBtn.addEventListener('click', toggleModal);
  refs.openFourthModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
