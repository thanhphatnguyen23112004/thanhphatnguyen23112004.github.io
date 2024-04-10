function updateMatrixKey() {
    var alph = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    var key = document.getElementById("key").value.toUpperCase().replace(/[^A-Z]+/g, "");
    key = key.replace('J', 'I');
    document.getElementById("key").value = key;
    key = removeDuplicate(key + alph);
    for (let i = 0; i < 25; i++) {
        document.getElementById(getRow(i).toString() + getCol(i).toString()).innerHTML = key.charAt(i);
    }
}

function crypt(message, matrixKey, isDecrypt = false) {
    var text = message.toUpperCase().replace(/[^A-Z]+/g, "").replace('J', 'I');
    var result = "";
    var k = isDecrypt ? 4 : 1; // 1 => encrypt, 4 => decrypt

    // Chèn "X" và xử lý các cặp ký tự giống nhau
    for (let i = 0; i < text.length; i += 2) {
        let chrA = text.charAt(i);
        let chrB = (i + 1 < text.length) ? text.charAt(i + 1) : 'X'; // Chèn 'X' nếu là ký tự cuối cùng và không tạo thành cặp

        if (chrA == chrB) {
            chrB = 'X';
            text = text.substr(0, i + 1) + chrB + text.substr(i + 1);
        }

        result += encodePair(chrA, chrB, matrixKey, k);
    }
    return result;
}

function encodePair(chrA, chrB, matrixKey, k) {
    let posA = matrixKey.indexOf(chrA);
    let posB = matrixKey.indexOf(chrB);

    let rowA = getRow(posA);
    let colA = getCol(posA);
    let rowB = getRow(posB);
    let colB = getCol(posB);

    let encA, encB;

    if (rowA === rowB) {
        encA = matrixKey.charAt(rowA * 5 + (colA + k) % 5);
        encB = matrixKey.charAt(rowB * 5 + (colB + k) % 5);
    } else if (colA === colB) {
        encA = matrixKey.charAt(((rowA + k) % 5) * 5 + colA);
        encB = matrixKey.charAt(((rowB + k) % 5) * 5 + colB);
    } else {
        encA = matrixKey.charAt(rowA * 5 + colB);
        encB = matrixKey.charAt(rowB * 5 + colA);
    }

    return encA + encB;
}

function btnEncrypt() {
    var plainText = document.getElementById("plainText").value;
    if (plainText.length == 0) {
        document.getElementById("errorMsg").innerHTML = 'Chưa nhập Plain text!';
        return;
    }
    var matrixKey = getMatrixKey();
    if (matrixKey.length == 0) {
        document.getElementById("errorMsg").innerHTML = 'Khóa K không được để trống';
        return;
    }

    var cipherText = crypt(plainText, matrixKey);
    document.getElementById("cipherText").value = cipherText;
    document.getElementById("errorMsg").innerHTML = "";
}

function btnDecrypt() {
    var cipherText = document.getElementById("cipherText").value;
    if (cipherText.length == 0) {
        document.getElementById("errorMsg").innerHTML = 'Chưa nhập Cipher text!';
        return;
    }
    document.getElementById("cipherText").value = cipherText;
    var matrixKey = getMatrixKey();
    if (matrixKey.length == 0) {
        document.getElementById("errorMsg").innerHTML = 'Khóa K không được để trống!';
        return;
    }

    var plainText = crypt(cipherText, matrixKey, true);
    document.getElementById("plainText").value = plainText;
    document.getElementById("errorMsg").innerHTML = "";
}

function getCol(i) {
    return i % 5;
}

function getRow(i) {
    return Math.floor(i / 5);
}

function getMatrixKey() {
    var result = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            result += document.getElementById(i.toString() + j.toString()).innerHTML;
        }
    }
    return result;
}

function removeDuplicate(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        if (result.indexOf(text.charAt(i)) == -1) {
            result += text.charAt(i);
        }
    }
    return result;
}
