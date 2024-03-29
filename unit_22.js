
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */

let k1 = 0;
function t1() {
    k1++;
    document.querySelector('.out-1').innerHTML = k1;
}

document.querySelector('.div-1').onclick = t1;

// Событие onclick на мобильных устроствах iphone работает нормально.

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */

let k2 = 0;
function t2() {
    k2++;
    document.querySelector('.out-2').innerHTML = k2;
}

document.querySelector('.div-2').ondblclick = t2;

// Событие ondblclick на мобильных устроствах iphone не работает.


// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */

let k3 = 0;
function t3() {
    k3++;
    document.querySelector('.out-3').innerHTML = k3;
}

document.querySelector('.div-3').onmousemove = t3;

// Событие onmousemove на мобильных устроствах iphone работает как событие onclick.

// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */

let k4 = 0;
function t4() {
    k4++;
    document.querySelector('.out-4').innerHTML = k4;
}

document.querySelector('.div-4').oncontextmenu = t4;

// Событие oncontextmenu на мобильных устроствах iphone не работает.

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */

let k5 = 0;
function t5() {
    k5++;
    document.querySelector('.out-5').innerHTML = k5;
}

document.querySelector('.div-5').onmousedown = t5;

// Событие onmousedown на мобильных устроствах iphone работает. Срабатывает после отпускания нажатия.

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */

let k6 = 0;
function t6() {
    k6++;
    document.querySelector('.out-6').innerHTML = k6;
}

document.querySelector('.div-6').onmouseenter = t6;

// Событие onmouseenter на мобильных устроствах iphone не работает. Срабатывает только когда нажать внутри div-6 а потом  за пределами div-6 и опять внутри div-6.

// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/

let k7 = 0;
function t7() {
    k7++;
    document.querySelector('.out-7').innerHTML = k7;
}

document.querySelector('.div-7').onmouseleave = t7;

// Событие onmouseleave на мобильных устроствах iphone не работает. Срабатывает только когда нажать за пределами div-7 если перед этим нажать внутри div-7.

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/

let k8 = 0;
function t8() {
    k8++;
    document.querySelector('.out-8').innerHTML = k8;
}

document.querySelector('.div-8').onmouseout = t8;

// Событие onmouseout на мобильных устроствах iphone не работает. Срабатывает только за пределами нажать нажать div-8 если перед этим нажать внутри div-8.

// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */

let k9 = 0;
function t9() {
    k9++;
    document.querySelector('.out-9').innerHTML = k9;
}

document.querySelector('.div-9').onmouseover = t9;

// Событие onmouseover на мобильных устроствах iphone не работает. Срабатывает только за если нажать нажать внутри div-8 если перед этим нажать за пределами div-8.

// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/

let k10 = 0;
function t10() {
    k10++;
    document.querySelector('.out-10').innerHTML = k10;
}

document.querySelector('.div-10').onmouseup = t10;

// Событие onmouseup на мобильных устроствах iphone работает нормально.