function createModal(onConfirm) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const title = document.createElement('h2');
    title.textContent = 'Select Canvas Resolution';

    const widthLabel = document.createElement('label');
    widthLabel.textContent = 'Width (px):';
    const widthInput = document.createElement('input');
    widthInput.type = 'number';
    widthInput.min = '1';
    widthInput.value = '16';

    const heightLabel = document.createElement('label');
    heightLabel.textContent = 'Height (px):';
    const heightInput = document.createElement('input');
    heightInput.type = 'number';
    heightInput.min = '1';
    heightInput.value = '16';

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm';
    confirmButton.onclick = () => {
        const width = parseInt(widthInput.value);
        const height = parseInt(heightInput.value);
        onConfirm(width, height);
        closeModal();
    };

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = closeModal;

    modalContent.appendChild(title);
    modalContent.appendChild(widthLabel);
    modalContent.appendChild(widthInput);
    modalContent.appendChild(heightLabel);
    modalContent.appendChild(heightInput);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    function closeModal() {
        document.body.removeChild(modal);
    }
}

export default createModal;