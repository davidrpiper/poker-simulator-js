const holeCardHands = {
    pAA: ["As", "Ah"],
    pKK: ["2s", "2h"],
    pQQ: ["3s", "3h"],
    pJJ: ["4s", "4h"],
    pTT: ["5s", "5h"],
    p99: ["6s", "6h"],
    p88: ["7s", "7h"],
    p77: ["8s", "8h"],
    p66: ["9s", "9h"],
    p55: ["Ts", "Th"],
    p44: ["Js", "Jh"],
    p33: ["Qs", "Qh"],
    p22: ["Ks", "Kh"],
    sAK: ["As", "Ks"],
    sAQ: ["As", "Qs"],
    sAJ: ["As", "Js"],
    sAT: ["As", "Ts"],
    sA9: ["As", "9s"],
    sA8: ["As", "8s"],
    sA7: ["As", "7s"],
    sA6: ["As", "6s"],
    sA5: ["As", "5s"],
    sA4: ["As", "4s"],
    sA3: ["As", "3s"],
    sA2: ["As", "2s"],
    sKQ: ["Ks", "Qs"],
    sKJ: ["Ks", "Js"],
    sKT: ["Ks", "Ts"],
    sK9: ["Ks", "9s"],
    sK8: ["Ks", "8s"],
    sK7: ["Ks", "7s"],
    sK6: ["Ks", "6s"],
    sK5: ["Ks", "5s"],
    sK4: ["Ks", "4s"],
    sK3: ["Ks", "3s"],
    sK2: ["Ks", "2s"],
    sQJ: ["Qs", "Js"],
    sQT: ["Qs", "Ts"],
    sQ9: ["Qs", "9s"],
    sQ8: ["Qs", "8s"],
    sQ7: ["Qs", "7s"],
    sQ6: ["Qs", "6s"],
    sQ5: ["Qs", "5s"],
    sQ4: ["Qs", "4s"],
    sQ3: ["Qs", "3s"],
    sQ2: ["Qs", "2s"],
    sJT: ["Js", "Ts"],
    sJ9: ["Js", "9s"],
    sJ8: ["Js", "8s"],
    sJ7: ["Js", "7s"],
    sJ6: ["Js", "6s"],
    sJ5: ["Js", "5s"],
    sJ4: ["Js", "4s"],
    sJ3: ["Js", "3s"],
    sJ2: ["Js", "2s"],
    sT9: ["Ts", "9s"],
    sT8: ["Ts", "8s"],
    sT7: ["Ts", "7s"],
    sT6: ["Ts", "6s"],
    sT5: ["Ts", "5s"],
    sT4: ["Ts", "4s"],
    sT3: ["Ts", "3s"],
    sT2: ["Ts", "2s"],
    s98: ["9s", "8s"],
    s97: ["9s", "7s"],
    s96: ["9s", "6s"],
    s95: ["9s", "5s"],
    s94: ["9s", "4s"],
    s93: ["9s", "3s"],
    s92: ["9s", "2s"],
    s87: ["8s", "7s"],
    s86: ["8s", "6s"],
    s85: ["8s", "5s"],
    s84: ["8s", "4s"],
    s83: ["8s", "3s"],
    s82: ["8s", "2s"],
    s76: ["7s", "6s"],
    s75: ["7s", "5s"],
    s74: ["7s", "4s"],
    s73: ["7s", "3s"],
    s72: ["7s", "2s"],
    s65: ["6s", "5s"],
    s64: ["6s", "4s"],
    s63: ["6s", "3s"],
    s62: ["6s", "2s"],
    s54: ["5s", "4s"],
    s53: ["5s", "3s"],
    s52: ["5s", "2s"],
    s43: ["4s", "3s"],
    s42: ["4s", "2s"],
    s32: ["3s", "2s"],
    oAK: ["As", "Kh"],
    oAQ: ["As", "Qh"],
    oAJ: ["As", "Jh"],
    oAT: ["As", "Th"],
    oA9: ["As", "9h"],
    oA8: ["As", "8h"],
    oA7: ["As", "7h"],
    oA6: ["As", "6h"],
    oA5: ["As", "5h"],
    oA4: ["As", "4h"],
    oA3: ["As", "3h"],
    oA2: ["As", "2h"],
    oKQ: ["Ks", "Qh"],
    oKJ: ["Ks", "Jh"],
    oKT: ["Ks", "Th"],
    oK9: ["Ks", "9h"],
    oK8: ["Ks", "8h"],
    oK7: ["Ks", "7h"],
    oK6: ["Ks", "6h"],
    oK5: ["Ks", "5h"],
    oK4: ["Ks", "4h"],
    oK3: ["Ks", "3h"],
    oK2: ["Ks", "2h"],
    oQJ: ["Qs", "Jh"],
    oQT: ["Qs", "Th"],
    oQ9: ["Qs", "9h"],
    oQ8: ["Qs", "8h"],
    oQ7: ["Qs", "7h"],
    oQ6: ["Qs", "6h"],
    oQ5: ["Qs", "5h"],
    oQ4: ["Qs", "4h"],
    oQ3: ["Qs", "3h"],
    oQ2: ["Qs", "2h"],
    oJT: ["Js", "Th"],
    oJ9: ["Js", "9h"],
    oJ8: ["Js", "8h"],
    oJ7: ["Js", "7h"],
    oJ6: ["Js", "6h"],
    oJ5: ["Js", "5h"],
    oJ4: ["Js", "4h"],
    oJ3: ["Js", "3h"],
    oJ2: ["Js", "2h"],
    oT9: ["Ts", "9h"],
    oT8: ["Ts", "8h"],
    oT7: ["Ts", "7h"],
    oT6: ["Ts", "6h"],
    oT5: ["Ts", "5h"],
    oT4: ["Ts", "4h"],
    oT3: ["Ts", "3h"],
    oT2: ["Ts", "2h"],
    o98: ["9s", "8h"],
    o97: ["9s", "7h"],
    o96: ["9s", "6h"],
    o95: ["9s", "5h"],
    o94: ["9s", "4h"],
    o93: ["9s", "3h"],
    o92: ["9s", "2h"],
    o87: ["8s", "7h"],
    o86: ["8s", "6h"],
    o85: ["8s", "5h"],
    o84: ["8s", "4h"],
    o83: ["8s", "3h"],
    o82: ["8s", "2h"],
    o76: ["7s", "6h"],
    o75: ["7s", "5h"],
    o74: ["7s", "4h"],
    o73: ["7s", "3h"],
    o72: ["7s", "2h"],
    o65: ["6s", "5h"],
    o64: ["6s", "4h"],
    o63: ["6s", "3h"],
    o62: ["6s", "2h"],
    o54: ["5s", "4h"],
    o53: ["5s", "3h"],
    o52: ["5s", "2h"],
    o43: ["4s", "3h"],
    o42: ["4s", "2h"],
    o32: ["3s", "2h"],
};

module.exports = {
	types: holeCardHands
};
