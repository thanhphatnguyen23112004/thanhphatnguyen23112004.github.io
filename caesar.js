function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function decrypt(text, key) {
    return encrypt(text, 26 - key);
}

function btnEncrypt() {
    let plaintext = document.getElementById('plainText').value;
    let key = parseInt(document.getElementById('key').value) % 26;
    let ciphertext = encrypt(plaintext, key);
    document.getElementById('cipherText').value = ciphertext;
}

function btnDecrypt() {
    let ciphertext = document.getElementById('cipherText').value;
    let key = parseInt(document.getElementById('key').value) % 26;
    let plaintext = decrypt(ciphertext, key);
    document.getElementById('plainText').value = plaintext;
}