const copyBtns = document.querySelectorAll('._copy-to-cb');
const url = window.location.href;
const msgElem = document.querySelector('.clipboard-copy-msg');;

export const copyToClipboard = () => {
    if (!copyBtns.length) return;

    copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            copy(url);
        })
    })
}

function copy(text) {
    msgElem.classList.add('_active');

    setTimeout(() => {
        msgElem.classList.remove('_active');
    }, 1000);

    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}