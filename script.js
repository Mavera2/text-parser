function compareTexts() {
    const mainText = document.getElementById("main-text").value;
    const subText = document.getElementById("sub-text").value;

    // Ana ve yan metinleri cümlelere ayır
    const mainSentences = mainText.split(/[.!?]\s*/).filter(Boolean);
    const subSentences = subText.split(/[.!?]\s*/).filter(Boolean);

    // Aynı cümleleri çıkar
    const filteredSentences = mainSentences.filter(sentence => 
        !subSentences.some(subSentence => sentence.trim() === subSentence.trim())
    );

    // Sonuçları ekrana yazdır
    const resultDiv = document.getElementById("result");
    if (filteredSentences.length > 0) {
        resultDiv.textContent = filteredSentences.join(". ") + ".";
    } else {
        resultDiv.textContent = "Tüm cümleler eşleşti, sonuç yok.";
    }
}
