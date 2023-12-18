var i = 0, x = 1,
pol = document.querySelectorAll('.cell'),
res = document.querySelector('p'),
span = document.querySelectorAll('span'),
combo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function resetGame() {
pol.forEach(el => {
    el.textContent = '';
    el.style.backgroundColor = 'white';
});
i = 0; x = 1; res.textContent = 'Ходит: X';
}

function start(e) {
if (x) {
    if (e.target.textContent == "") e.target.textContent = i++ % 2 ? 'O' : 'X';
    var arrX = [], arrO = [], arrA = [], arrC = [];
    pol.forEach((el, n) => {
        el.textContent !== '' && (el.textContent == 'X' ? arrX.push(n) : arrO.push(n));
        el.textContent !== '' && arrA.push(n);
        el.textContent == '' && arrC.push(n);
    });

    res.textContent = i % 2 ? i == 9 ? 'Ничья' : 'Ходит: O' : 'Ходит: X';

    if (win(arrX)) {
        res.textContent = 'Победил: X';
        span[0].textContent++; x = 0;
        pol.forEach((el, i) => {
            if (win(arrX).includes(i)) el.style.backgroundColor = 'red';
        });
    } else if (win(arrO)) {
        res.textContent = 'Победил: O';
        span[1].textContent++; x = 0;
        pol.forEach((el, i) => {
            if (win(arrO).includes(i)) el.style.backgroundColor = 'green';
        });
    } else if (i == 9) span[2].textContent++;
}
}

pol.forEach(el => el.onclick = start);

var win = (a) => combo.find(el => el.every((el) => a.includes(el)));