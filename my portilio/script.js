document.addEventListener('DOMContentLoaded', function() {
    // Slider de casos em destaque
    const cases = [
        {
            title: "Corte Penal Internacional - Caso XYZ",
            description: "Defesa bem-sucedida em caso de crimes contra a humanidade perante o TPI.",
            year: "2022"
        },
        {
            title: "Extradição EUA-Brasil",
            description: "Processo complexo de extradição envolvendo acusações de lavagem de dinheiro.",
            year: "2021"
        },
        {
            title: "Cooperação Jurídica Internacional",
            description: "Caso de cooperação entre Brasil e Portugal em investigação de tráfico internacional.",
            year: "2020"
        }
    ];

    const caseSlider = document.getElementById('caseSlider');
    let currentCase = 0;

    function displayCase(index) {
        const caseItem = cases[index];
        caseSlider.innerHTML = `
            <h3>${caseItem.title} (${caseItem.year})</h3>
            <p>${caseItem.description}</p>
            <div class="case-nav">
                <button onclick="prevCase()"><i class="fas fa-chevron-left"></i></button>
                <span>${index + 1}/${cases.length}</span>
                <button onclick="nextCase()"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
    }

    window.nextCase = function() {
        currentCase = (currentCase + 1) % cases.length;
        displayCase(currentCase);
    };

    window.prevCase = function() {
        currentCase = (currentCase - 1 + cases.length) % cases.length;
        displayCase(currentCase);
    };

    // Inicializar com o primeiro caso
    displayCase(0);

    // Rotação automática a cada 5 segundos
    setInterval(nextCase, 5000);

    // Newsletter form submission
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Obrigado por assinar nossa newsletter! Um e-mail foi enviado para ${email}`);
                this.querySelector('input[type="email"]').value = '';
            }
        });
    }
});