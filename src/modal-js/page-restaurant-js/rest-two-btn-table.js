(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-table-open-m]'),
        openSecondnextBtn: document.querySelector('[data-modal-table-open-o]'),
        closeModalBtn: document.querySelector('[data-modal-table-close]'),
        modal: document.querySelector('[data-modal-table]'),
        body: document.querySelector('body'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openSecondnextBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();
