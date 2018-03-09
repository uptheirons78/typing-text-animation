function typeIt() {
    const string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa harum porro nisi blanditiis quaerat officiis facilis eligendi,
    voluptatibus alias rerum, repellendus sapiente quibusdam fuga hic quae? Facilis, quasi id!Dolorum ipsa odio numquam optio a eos, atque aliquam
    vel fugiat doloremque nisi esse. Sit a aspernatur vel, aliquid, laboriosam,
    officiis voluptate magni corporis quo in recusandae exercitationem repellendus explicabo!`;
    let arr = string.split("");
    const display = document.querySelector('#display');

    function animateText() {
        if(arr.length > 0) {
            const letter = arr.shift(); //Remember: shift() method change also the length of the array
            display.textContent += letter;
        } else {
            display.textContent = "";
            arr = string.split("");
        }
        setTimeout(animateText, 120);
    }

    animateText();
}

setTimeout(typeIt, 3000);
