const azkarData = {
    morning: [
        {
            arabic: "اللّهُـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ...",
            translit: "Аллахумма анта Раббий, ля иляха илля анта...",
            translate: "О Аллах, Ты — мой Господь, нет божества, кроме Тебя...",
            audio: "audio/morning1.mp3"
        },
        {
            arabic: "رَضيـتُ بِاللهِ رَبّـاً...",
            translit: "Радийту билляхи Раббан...",
            translate: "Я доволен Аллахом как Господом...",
            audio: "audio/morning2.mp3"
        }
    ],
    evening: [
        {
            arabic: "أَمْسَيْنا وَأَمْسَى المـلكُ للهِ...",
            translit: "Амсайна уа амсаль-мульку лиллях...",
            translate: "Мы встретили вечер, и вся власть принадлежит Аллаху...",
            audio: "audio/evening1.mp3"
        }
    ]
};

let currentLang = 'ru';

function showAzkar(type) {
    const content = document.getElementById('azkar-content');
    const title = document.getElementById('azkar-title');
    content.innerHTML = '';
    title.textContent = type === 'morning' ? 'Утренние азкары' : 'Вечерние азкары';

    azkarData[type].forEach(item => {
        const div = document.createElement('div');
        div.className = 'azkar-item';
        div.innerHTML = `
            <p><strong>Арабский:</strong> ${item.arabic}</p>
            <p><strong>Транскрипция:</strong> ${item.translit}</p>
            <p><strong>Перевод:</strong> ${item.translate}</p>
            <audio controls src="${item.audio}"></audio>
        `;
        content.appendChild(div);
    });
}

function changeLanguage() {
    const select = document.getElementById('language');
    currentLang = select.value;
    alert("Смена языка пока не реализована. Будет добавлена позже in shaa Allah.");
}
