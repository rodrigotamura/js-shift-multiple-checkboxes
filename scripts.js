const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
let lastChecked;

function handleCheck(e) {
    // if shift is keydown and checkbox is checked
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(c => c.addEventListener('click', handleCheck));