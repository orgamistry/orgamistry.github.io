let contadorId = 0;

function permitirSoltar(ev) {
    ev.preventDefault();
}

function arrastar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev) {
    ev.preventDefault();
    let dado = ev.dataTransfer.getData("text");
    let copiaNo = document.getElementById(dado).cloneNode(true);
    copiaNo.id = "atomo_" + contadorId++;
    copiaNo.style.left = (ev.clientX - ev.target.offsetLeft - 25) + "px";
    copiaNo.style.top = (ev.clientY - ev.target.offsetTop - 25) + "px";
    ev.target.appendChild(copiaNo);
    validarMolecula();
}


function valencia(atomo) {
    switch (atomo.innerHTML) {
        case "C": return 0;
        case "CO": return 0;
        case "COOH": return 0;
        case "O": return 0;
        case "OH": return 0;
        case "F": return 0;
        case "Cl": return 0;
        case "Br": return 0;
        case "I": return 0;
    }
    return 0;
}


function validarMolecula() {
    let area = document.getElementById("area");
    let atomos = area.children;
    let contagens = {
        C: 0,
        O: 0,
        CO: 0,
        OH: 0,
        COOH: 0,
        F: 0,
        Cl: 0,
        Br: 0,
        I: 0
    };

    for (let atomo of atomos) {
        if (atomo.id.startsWith("atomo_")) {
            contagens[atomo.innerText]++;
        }
    }

    let nomeMolecula = "";
    let simplificada = "";
    //Hidrocarbonetos
    if (contagens.C === 1 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Metano (CH₄)"; simplificada = "CH₄"; }
    else if (contagens.C === 2 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Etano (C₂H₆)"; simplificada = "H₃C-CH₃"; }
    else if (contagens.C === 3 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Propano (C₃H₈)"; simplificada = "H₃C-CH₂-CH₃"; }
    else if (contagens.C === 4 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Butano (C₄H₁₀)"; simplificada = "H₃C(CH₂)₂CH₃"; }
    else if (contagens.C === 5 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Pentano (C₅H₁₂)"; simplificada = "H₃C(CH₂)₃CH₃"; }
    else if (contagens.C === 6 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Hexano (C₆H₁₄)"; simplificada = "H₃C(CH₂)₄CH₃"; }
    else if (contagens.C === 7 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Heptano (C₇H₁₆)"; simplificada = "H₃C(CH₂)₅CH₃"; }
    else if (contagens.C === 8 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Octano (C₈H₁₈)"; simplificada = "H₃C(CH₂)₆CH₃"; }
    else if (contagens.C === 9 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Nonano (C₉H₂₀)"; simplificada = "H₃C(CH₂)₇CH₃"; }
    else if (contagens.C === 10 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Decano (C₁₀H₂₂)"; simplificada = "H₃C(CH₂)₈CH₃"; }
    else if (contagens.C === 11 && contagens.O === 0 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Undecano (C₁₁H₂₄)"; simplificada = "H₃C(CH₂)₉CH₃"; }
    //Cetona
    else if (contagens.C === 0 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais dois carbonos para montar uma Cetona"; }
    else if (contagens.C === 1 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar uma Cetona"; }
    else if (contagens.C === 2 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Propanona (C₃H₆O)"; simplificada = "H₃C-CO-CH₃"; }
    else if (contagens.C === 3 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Butanona (C₄H₈O)"; simplificada = "H₃C-CO-CH₂-CH₃"; }
    else if (contagens.C === 4 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Pentanona (C₅H₁₀O)"; simplificada = "H₃C-CO-(CH₂)₂-CH₃"; }
    else if (contagens.C === 5 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Hexanona (C₆H₁₂O)"; simplificada = "H₃C-CO-(CH₂)₃-CH₃"; }
    else if (contagens.C === 6 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Heptanona (C₇H₁₄O)"; simplificada = "H₃C-CO-(CH₂)₄-CH₃"; }
    else if (contagens.C === 7 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Octanona (C₈H₁₆O)"; simplificada = "H₃C-CO-(CH₂)₅-CH₃"; }
    else if (contagens.C === 8 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Nonanona (C₉H₁₈O)"; simplificada = "H₃C-CO-(CH₂)₆-CH₃"; }
    else if (contagens.C === 9 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Decanona (C₁₀H₂₀O)"; simplificada = "H₃C-CO-(CH₂)₇-CH₃"; }
    else if (contagens.C === 10 && contagens.CO === 1 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Undecanona (C₁₁H₂₂O)"; simplificada = "H₃C-CO-(CH₂)₈-CH₃"; }
    //Aldeido
    else if (contagens.C === 0 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Aldeído"; }
    else if (contagens.C === 1 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Metanal (CH₃O)"; simplificada = "CHO"; }
    else if (contagens.C === 2 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Etanal (C₂H₄O)"; simplificada = "CH₃-CHO"; }
    else if (contagens.C === 3 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Propanal (C₃H₆O)"; simplificada = "CH₃-CH₂-CHO"; }
    else if (contagens.C === 4 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Butanal (C₄H₈O)"; simplificada = "CH₃(CH₂)₂CHO"; }
    else if (contagens.C === 5 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Pentanal (C₅H₁₀O)"; simplificada = "CH₃(CH₂)₃CHO"; }
    else if (contagens.C === 6 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Hexanal (C₆H₁₂O)"; simplificada = "CH₃(CH₂)₄CHO"; }
    else if (contagens.C === 7 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Heptanal (C₇H₁₄O)"; simplificada = "CH₃(CH₂)₅CHO"; }
    else if (contagens.C === 8 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Octanal (C₈H₁₆O)"; simplificada = "CH₃(CH₂)₆CHO"; }
    else if (contagens.C === 9 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Nonanal (C₉H₁₈O)"; simplificada = "CH₃(CH₂)₇CHO"; }
    else if (contagens.C === 10 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Decanal (C₁₀H₂₀O)"; simplificada = "CH₃(CH₂)₈CHO"; }
    else if (contagens.C === 11 && contagens.O === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Undecanal (C₁₁H₂₂O)"; simplificada = "CH₃(CH₂)₉CHO"; }
    //Álcool
    else if (contagens.C === 0 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Álcool"; }
    else if (contagens.C === 1 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Metanol (CH₃OH)"; simplificada = "CH₃OH"; }
    else if (contagens.C === 2 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Etanol (C₂H₅OH)"; simplificada = "CH₃-CH₂-OH"; }
    else if (contagens.C === 3 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Propanol (C₃H₇OH)"; simplificada = "CH₃(CH₂)₂OH"; }
    else if (contagens.C === 4 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Butanol (C₄H₉OH)"; simplificada = "CH₃(CH₂)₃OH"; }
    else if (contagens.C === 5 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Pentanol (C₅H₁₁OH)"; simplificada = "CH₃(CH₂)₄OH"; }
    else if (contagens.C === 6 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Hexanol (C₆H₁₃OH)"; simplificada = "CH₃(CH₂)₅OH"; }
    else if (contagens.C === 7 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Heptanol (C₇H₁₅OH)"; simplificada = "CH₃(CH₂)₅OH"; }
    else if (contagens.C === 8 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Octanol (C₈H₁₇OH)"; simplificada = "CH₃(CH₂)₇OH"; }
    else if (contagens.C === 9 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Nonanol (C₉H₁₉OH)"; simplificada = "CH₃(CH₂)₈OH"; }
    else if (contagens.C === 10 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Decanol (C₁₀H₂₁OH)"; simplificada = "CH₃(CH₂)₉OH"; }
    else if (contagens.C === 11 && contagens.OH === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.COOH === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Undecanol (C₁₁H₂₃OH)"; simplificada = "CH₃(CH₂)₁₀OH"; }
    //Ácido Carboxilico
    else if (contagens.C === 0 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido metanoico ou Ácido fórmico (CH₂O₂)"; simplificada = "HCCOOH"; }
    else if (contagens.C === 1 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido etanóico ou Ácido acético (C₂H₄O₂)"; simplificada = "CH₃-CCOOH"; }
    else if (contagens.C === 2 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido propanoico ou Ácido propiônico (C₃H₆O₂)"; simplificada = "CH₃-CH₂-CCOOH"; }
    else if (contagens.C === 3 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido butanoico ou Ácido butírico (C₄H₈O₂)"; simplificada = "CH₃(CH₂)₂CCOOH"; }
    else if (contagens.C === 4 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido pentanoico ou Ácido valérico (C₅H₁₀O₂)"; simplificada = "CH₃(CH₂)₃CCOOH"; }
    else if (contagens.C === 5 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido hexanoico ou Ácido caproico (C₆H₁₂O₂)"; simplificada = "CH₃(CH₂)₄CCOOH"; }
    else if (contagens.C === 6 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido heptanoico ou Ácido enântico (C₇H₁₄O₂)"; simplificada = "CH₃(CH₂)₅CCOOH"; }
    else if (contagens.C === 7 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido octanoico ou Ácido caprílico (C₈H₁₆O₂)"; simplificada = "CH₃(CH₂)₆CCOOH"; }
    else if (contagens.C === 8 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido nonanoico ou Ácido pelargônico (C₉H₁₈O₂)"; simplificada = "CH₃(CH₂)₇CCOOH"; }
    else if (contagens.C === 9 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido decanoico ou Ácido caprico (C₁₀H₂₀O₂)"; simplificada = "CH₃(CH₂)₈CCOOH"; }
    else if (contagens.C === 10 && contagens.COOH === 1 && contagens.CO === 0 && contagens.OH === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido undecanoico ou Ácido undecílico (C₁₁H₂₂O₂)"; simplificada = "CH₃(CH₂)₉CCOOH"; }

    else if (contagens.C === 0 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Ácido Carboxílico"; }
    else if (contagens.C === 1 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido metanoico ou Ácido fórmico (CH₂O₂)"; simplificada = "HCCOOH"; }
    else if (contagens.C === 2 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido etanóico ou Ácido acético (C₂H₄O₂)"; simplificada = "CH₃-CCOOH"; }
    else if (contagens.C === 3 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido propanoico ou Ácido propiônico (C₃H₆O₂)"; simplificada = "CH₃-CH₂-CCOOH"; }
    else if (contagens.C === 4 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido butanoico ou Ácido butírico (C₄H₈O₂)"; simplificada = "CH₃(CH₂)₂CCOOH"; }
    else if (contagens.C === 5 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido pentanoico ou Ácido valérico (C₅H₁₀O₂)"; simplificada = "CH₃(CH₂)₃CCOOH"; }
    else if (contagens.C === 6 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido hexanoico ou Ácido caproico (C₆H₁₂O₂)"; simplificada = "CH₃(CH₂)₄CCOOH"; }
    else if (contagens.C === 7 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido heptanoico ou Ácido enântico (C₇H₁₄O₂)"; simplificada = "CH₃(CH₂)₅CCOOH"; }
    else if (contagens.C === 8 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido octanoico ou Ácido caprílico (C₈H₁₆O₂)"; simplificada = "CH₃(CH₂)₆CCOOH"; }
    else if (contagens.C === 9 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido nonanoico ou Ácido pelargônico (C₉H₁₈O₂)"; simplificada = "CH₃(CH₂)₇CCOOH"; }
    else if (contagens.C === 10 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido decanoico ou Ácido caprico (C₁₀H₂₀O₂)"; simplificada = "CH₃(CH₂)₈CCOOH"; }
    else if (contagens.C === 11 && contagens.COOH === 0 && contagens.CO === 0 && contagens.OH === 1 && contagens.O === 1 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido undecanoico ou Ácido undecílico (C₁₁H₂₂O₂)"; simplificada = "CH₃(CH₂)₉CCOOH"; }

    else if (contagens.C === 0 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido metanoico ou Ácido fórmico (CH₂O₂)"; simplificada = "HCCOOH"; }
    else if (contagens.C === 1 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido etanóico ou Ácido acético (C₂H₄O₂)"; simplificada = "CH₃-CCOOH"; }
    else if (contagens.C === 2 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido propanoico ou Ácido propiônico (C₃H₆O₂)"; simplificada = "CH₃-CH₂-CCOOH"; }
    else if (contagens.C === 3 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido butanoico ou Ácido butírico (C₄H₈O₂)"; simplificada = "CH₃(CH₂)₂CCOOH"; }
    else if (contagens.C === 4 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido pentanoico ou Ácido valérico (C₅H₁₀O₂)"; simplificada = "CH₃(CH₂)₃CCOOH"; }
    else if (contagens.C === 5 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido hexanoico ou Ácido caproico (C₆H₁₂O₂)"; simplificada = "CH₃(CH₂)₄CCOOH"; }
    else if (contagens.C === 6 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido heptanoico ou Ácido enântico (C₇H₁₄O₂)"; simplificada = "CH₃(CH₂)₅CCOOH"; }
    else if (contagens.C === 7 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido octanoico ou Ácido caprílico (C₈H₁₆O₂)"; simplificada = "CH₃(CH₂)₆CCOOH"; }
    else if (contagens.C === 8 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido nonanoico ou Ácido pelargônico (C₉H₁₈O₂)"; simplificada = "CH₃(CH₂)₇CCOOH"; }
    else if (contagens.C === 9 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido decanoico ou Ácido caprico (C₁₀H₂₀O₂)"; simplificada = "CH₃(CH₂)₈CCOOH"; }
    else if (contagens.C === 10 && contagens.COOH === 0 && contagens.CO === 1 && contagens.OH === 1 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Ácido undecanoico ou Ácido undecílico (C₁₁H₂₂O₂)"; simplificada = "CH₃(CH₂)₉CCOOH"; }
    //Haletos
    else if (contagens.C === 0 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Haleto Orgânico"; }
    else if (contagens.C === 1 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Metila (CH₃F)"; simplificada = "CH₃F"; }
    else if (contagens.C === 2 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Etila (C₂H₅F)"; simplificada = "CH₃-CH₂-F"; }
    else if (contagens.C === 3 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Propila (C₃H₇F)"; simplificada = "CH₃(CH₂)₂F"; }
    else if (contagens.C === 4 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Butila (C₄H₉F)"; simplificada = "CH₃(CH₂)₃F"; }
    else if (contagens.C === 5 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Pentila (C₅H₁₁F)"; simplificada = "CH₃(CH₂)₄F"; }
    else if (contagens.C === 6 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Hexila (C₆H₁₃F)"; simplificada = "CH₃(CH₂)₅F"; }
    else if (contagens.C === 7 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Heptila (C₇H₁₅F)"; simplificada = "CH₃(CH₂)₅F"; }
    else if (contagens.C === 8 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Octila (C₈H₁₇F)"; simplificada = "CH₃(CH₂)₇F"; }
    else if (contagens.C === 9 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Nonila (C₉H₁₉F)"; simplificada = "CH₃(CH₂)₈F"; }
    else if (contagens.C === 10 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Decila (C₁₀H₂₁F)"; simplificada = "CH₃(CH₂)₉F"; }
    else if (contagens.C === 11 && contagens.F === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Fluoreto de Undecila (C₁₁H₂₃F)"; simplificada = "CH₃(CH₂)₁₀F"; }

    else if (contagens.C === 0 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Haleto Orgânico"; }
    else if (contagens.C === 1 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Metila (CH₃Cl)"; simplificada = "CH₃Cl"; }
    else if (contagens.C === 2 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Etila (C₂H₅Cl)"; simplificada = "CH₃-CH₂-Cl"; }
    else if (contagens.C === 3 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Propila (C₃H₇Cl)"; simplificada = "CH₃(CH₂)₂Cl"; }
    else if (contagens.C === 4 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Butila (C₄H₉Cl)"; simplificada = "CH₃(CH₂)₃Cl"; }
    else if (contagens.C === 5 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Pentila (C₅H₁₁Cl)"; simplificada = "CH₃(CH₂)₄Cl"; }
    else if (contagens.C === 6 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Hexila (C₆H₁₃Cl)"; simplificada = "CH₃(CH₂)₅Cl"; }
    else if (contagens.C === 7 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Heptila (C₇H₁₅Cl)"; simplificada = "CH₃(CH₂)₅Cl"; }
    else if (contagens.C === 8 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Octila (C₈H₁₇Cl)"; simplificada = "CH₃(CH₂)₇Cl"; }
    else if (contagens.C === 9 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Nonila (C₉H₁₉Cl)"; simplificada = "CH₃(CH₂)₈Cl"; }
    else if (contagens.C === 10 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Decila (C₁₀H₂₁Cl)"; simplificada = "CH₃(CH₂)₉Cl"; }
    else if (contagens.C === 11 && contagens.Cl === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.Br === 0 && contagens.I === 0) { nomeMolecula = "Cloreto de Undecila (C₁₁H₂₃Cl)"; simplificada = "CH₃(CH₂)₁₀Cl"; }

    else if (contagens.C === 0 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Haleto Orgânico"; }
    else if (contagens.C === 1 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Metila (CH₃Br)"; simplificada = "CH₃Br"; }
    else if (contagens.C === 2 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Etila (C₂H₅Br)"; simplificada = "CH₃-CH₂-Br"; }
    else if (contagens.C === 3 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Propila (C₃H₇Br)"; simplificada = "CH₃(CH₂)₂Br"; }
    else if (contagens.C === 4 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Butila (C₄H₉Br)"; simplificada = "CH₃(CH₂)₃Br"; }
    else if (contagens.C === 5 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Pentila (C₅H₁₁Br)"; simplificada = "CH₃(CH₂)₄Br"; }
    else if (contagens.C === 6 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Hexila (C₆H₁₃Br)"; simplificada = "CH₃(CH₂)₅Br"; }
    else if (contagens.C === 7 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Heptila (C₇H₁₅Br)"; simplificada = "CH₃(CH₂)₅Br"; }
    else if (contagens.C === 8 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Octila (C₈H₁₇Br)"; simplificada = "CH₃(CH₂)₇Br"; }
    else if (contagens.C === 9 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Nonila (C₉H₁₉Br)"; simplificada = "CH₃(CH₂)₈Br"; }
    else if (contagens.C === 10 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Decila (C₁₀H₂₁Br)"; simplificada = "CH₃(CH₂)₉Br"; }
    else if (contagens.C === 11 && contagens.Br === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.OH === 0 && contagens.COOH === 0 && contagens.I === 0) { nomeMolecula = "Brometo de Undecila (C₁₁H₂₃Br)"; simplificada = "CH₃(CH₂)₁₀Br"; }

    else if (contagens.C === 0 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Molécula Inválida"; simplificada = "Adicione mais um carbono para montar um Haleto Orgânico"; }
    else if (contagens.C === 1 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Metila (CH₃I)"; simplificada = "CH₃I"; }
    else if (contagens.C === 2 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Etila (C₂H₅I)"; simplificada = "CH₃-CH₂-I"; }
    else if (contagens.C === 3 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Propila (C₃H₇I)"; simplificada = "CH₃(CH₂)₂I"; }
    else if (contagens.C === 4 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Butila (C₄H₉I)"; simplificada = "CH₃(CH₂)₃I"; }
    else if (contagens.C === 5 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Pentila (C₅H₁₁I)"; simplificada = "CH₃(CH₂)₄I"; }
    else if (contagens.C === 6 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Hexila (C₆H₁₃I)"; simplificada = "CH₃(CH₂)₅I"; }
    else if (contagens.C === 7 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Heptila (C₇H₁₅I)"; simplificada = "CH₃(CH₂)₅I"; }
    else if (contagens.C === 8 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Octila (C₈H₁₇I)"; simplificada = "CH₃(CH₂)₇I"; }
    else if (contagens.C === 9 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Nonila (C₉H₁₉I)"; simplificada = "CH₃(CH₂)₈I"; }
    else if (contagens.C === 10 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Decila (C₁₀H₂₁I)"; simplificada = "CH₃(CH₂)₉I"; }
    else if (contagens.C === 11 && contagens.I === 1 && contagens.CO === 0 && contagens.O === 0 && contagens.F === 0 && contagens.Cl === 0 && contagens.Br === 0 && contagens.OH === 0 && contagens.COOH === 0) { nomeMolecula = "Iodeto de Undecila (C₁₁H₂₃I)"; simplificada = "CH₃(CH₂)₁₀I"; }
    else { nomeMolecula = "Molécula Inválida"; }

    document.getElementById("nomeMolecula").textContent = nomeMolecula;
    document.getElementById("simplificada").textContent = simplificada;

    mostrarLigacoes();
}


function criarLigacao(atomo1, atomo2, distancia) {
    let area = document.getElementById("area");
    let ligacao = document.createElement("div");
    ligacao.className = "ligacao";
    ligacao.style.width = distancia + "px";

    let inicioX = atomo1.offsetLeft + atomo1.offsetWidth / 2;
    let inicioY = atomo1.offsetTop + atomo1.offsetHeight / 2;
    let fimX = atomo2.offsetLeft + atomo2.offsetWidth / 2;
    let fimY = atomo2.offsetTop + atomo2.offsetHeight / 2;
    let angulo = Math.atan2(fimY - inicioY, fimX - inicioX) * (180 / Math.PI);

    ligacao.style.left = inicioX + "px";
    ligacao.style.top = inicioY - 1 + "px";

    ligacao.style.transformOrigin = "0% 50%";
    ligacao.style.transform = "rotate(" + angulo + "deg)";

    ligacao.style.height = "2px";
    ligacao.style.background = "#d8d8d8c7";


    area.appendChild(ligacao);
}

function mostrarLigacoes() {
    let area = document.getElementById("area");
    let ligacoesExistentes = document.querySelectorAll(".ligacao");
    ligacoesExistentes.forEach(l => l.remove());

    let atomos = area.querySelectorAll(".arrastavel");

    for (let i = 0; i < atomos.length - 1; i++) {
        if (atomos[i].conectado) {
            continue; // Se o átomo já está conectado, passe para o próximo átomo.
        }

        for (let j = i + 1; j < atomos.length; j++) {
            if (atomos[j].conectado) {
                continue; // Se o átomo já está conectado, passe para o próximo átomo.
            }

            let dx = atomos[j].offsetLeft - atomos[i].offsetLeft;
            let dy = atomos[j].offsetTop - atomos[i].offsetTop;
            let distancia = Math.sqrt(dx * dx + dy * dy);


            criarLigacao(atomos[i], atomos[j], distancia);
            break; // Saia do loop interno após conectar este átomo.

        }
    }
}

function limparArea() {
    let area = document.getElementById("area");
    area.innerHTML = "";
    contadorId = 0; // Reinicia o contador de IDs
    contagens = {
        C: 0,
        O: 0,
        CO: 0,
        OH: 0,
        COOH: 0,
        F: 0,
        Cl: 0,
        Br: 0,
        I: 0
    };
    let nomeMolecula = "";
    let simplificada = "";
    document.getElementById("nomeMolecula").textContent = nomeMolecula;
    document.getElementById("simplificada").textContent = simplificada;
}