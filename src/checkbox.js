function clickCheckbox(id) {
    let checkbox = document.querySelector(`#${id}`);

    if (checkbox.classList.contains('checkboxjs-active')) checkbox.classList.remove('checkboxjs-active');
    else checkbox.classList.add('checkboxjs-active')
}