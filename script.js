let a=3;
let b=4;
console.log(a+b);
// 1️⃣ Butterfly Pattern
console.log("\n1️⃣ Butterfly Pattern");
let n = 5;
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i));
}
for (let i = n; i >= 1; i--) {
    console.log('*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i));
}

// 2️⃣ Hollow Diamond (X Inside a Square)
console.log("\n2️⃣ Hollow Diamond (X Inside a Square)");
let size = 5;
for (let i = 1; i <= size; i++) {
    let row = '';
    for (let j = 1; j <= size; j++) {
        if (j == i || j == size - i + 1 || i == 1 || i == size || j == 1 || j == size) row += '* ';
        else row += '  ';
    }
    console.log(row);
}

// 3️⃣ Numeric Palindromic Pyramid
console.log("\n3️⃣ Numeric Palindromic Pyramid");
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let str = ' '.repeat(rows - i);
    for (let j = 1; j <= i; j++) str += j;
    for (let j = i - 1; j >= 1; j--) str += j;
    console.log(str);
}

// 4️⃣ X Pattern with Numbers (Left Cross 1-5, Right Cross 5-1)
console.log("\n4️⃣ X Pattern with Numbers");
let num = 5;
for (let i = 1; i <= num; i++) {
    let row = '';
    for (let j = 1; j <= num; j++) {
        if (j == i) row += i;        // Left diagonal (1-5)
        else if (j == num - i + 1) row += num - i + 1; // Right diagonal (5-1)
        else row += ' ';
    }
    console.log(row);
}

// 5️⃣ Spiral Square Matrix
console.log("\n5️⃣ Spiral Square Matrix");
let matrixSize = 5;
let matrix = Array.from({ length: matrixSize }, () => Array(matrixSize).fill(1));
for (let layer = 1; layer < Math.ceil(matrixSize / 2); layer++) {
    for (let i = layer; i < matrixSize - layer; i++) {
        matrix[layer][i] = layer + 1;
        matrix[i][layer] = layer + 1;
        matrix[matrixSize - layer - 1][i] = layer + 1;
        matrix[i][matrixSize - layer - 1] = layer + 1;
    }
}
matrix.forEach(row => console.log(row.join(' ')));

// 6️⃣ Pyramid with Increasing Numbers (10, 9, 8, 7 to 1, 23, 456, 789, 101112131415)
console.log("\n6️⃣ Pyramid with Increasing Numbers");
let numRows = 5, numCounter = 10;
for (let i = 1; i <= numRows; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += numCounter + ' ';
        numCounter--;
    }
    console.log(str.trim());
}

// 7️⃣ Hollow Number Pyramid
console.log("\n7️⃣ Hollow Number Pyramid");
let height = 5;
for (let i = 1; i <= height; i++) {
    let row = ' '.repeat(height - i);
    for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i || i == height) row += j + ' ';
        else row += '  ';
    }
    console.log(row.trim());
}

// 8️⃣ Pascal’s Triangle (Only Edges, Middle is Empty)
console.log("\n8️⃣ Pascal’s Triangle (Only Edges)");
let pascalRows = 5;
for (let i = 0; i < pascalRows; i++) {
    let row = ' '.repeat(pascalRows - i);
    for (let j = 0; j <= i; j++) {
        if (j == 0 || j == i) row += '* ';
        else row += '  ';
    }
    console.log(row.trim());
}

// 9️⃣ Zig-Zag Wave Pattern
console.log("\n9️⃣ Zig-Zag Wave Pattern");
let waveHeight = 3, waveWidth = 6;
for (let i = 1; i <= waveHeight; i++) {
    let row = '';
    for (let j = 1; j <= waveWidth; j++) {
        if ((i + j) % 4 == 0 || (i == 2 && j % 4 == 0)) row += '* ';
        else row += '  ';
    }
    console.log(row);
}

// 🔟 Concentric Rectangle Pattern
console.log("\n🔟 Concentric Rectangle Pattern");
let rectSize = 5;
for (let i = 0; i < rectSize; i++) {
    let row = '';
    for (let j = 0; j < rectSize; j++) {
        let min = Math.min(i, j, rectSize - i - 1, rectSize - j - 1);
        row += (rectSize - min) + ' ';
    }
    console.log(row.trim());
}
