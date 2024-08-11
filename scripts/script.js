const texts = ['python developer','Data analysis','Machine learning engineer','Data Engineer','power BI developer','Software Engineering'];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.getElementById('typing-text').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(() => {
                    document.getElementById('typing-text').textContent = "";
                    setTimeout(type, 10); // Delay before starting to type the next word
                }, 750); // Delay before backspacing starts
            } else {
                setTimeout(type, 200);
            }
        }());

