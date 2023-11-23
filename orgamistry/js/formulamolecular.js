document.getElementById('formBusca').addEventListener('submit', function(event) {
    
    event.preventDefault();


    var valorBusca = document.querySelector('.search-box-input').value;
    
    if (valorBusca.toLowerCase() === 'ch4') {
        document.getElementById('resposta').textContent = 'Metano | CH4';
    } 

    if (valorBusca.toLowerCase() === 'c2h6') {
        document.getElementById('resposta').textContent = 'Etano | H3C-CH3';
    } 

    if (valorBusca.toLowerCase() === 'c3h3') {
        document.getElementById('resposta').textContent = 'Propano | H3C(CH2)-CH3';
    } 

    if (valorBusca.toLowerCase() === 'c4h10') {
        document.getElementById('resposta').textContent = 'Butano | H3C(CH2)2CH3';
    } 

    if (valorBusca.toLowerCase() === 'c5h12') {
        document.getElementById('resposta').textContent = 'Pentano | H3C(CH2)3CH3';
    } 

    if (valorBusca.toLowerCase() === 'c6h14') {
        document.getElementById('resposta').textContent = 'Hexano | H3C(CH2)4CH3';
    } 

    if (valorBusca.toLowerCase() === 'c7h16') {
        document.getElementById('resposta').textContent = 'Heptano | H3C(CH2)5CH3';
    } 

    if (valorBusca.toLowerCase() === 'c3h18') {
        document.getElementById('resposta').textContent = 'Octano | H3C(CH2)6CH3';
    } 

    if (valorBusca.toLowerCase() === 'c9h20') {
        document.getElementById('resposta').textContent = 'Nonano | H3C(CH2)7CH3';
    } 

    if (valorBusca.toLowerCase() === 'c10h22') {
        document.getElementById('resposta').textContent = 'Decano | H3C(CH2)8CH3';
    } 

    if (valorBusca.toLowerCase() === 'c11h24') {
        document.getElementById('resposta').textContent = 'Undecano | H3C(CH2)9CH3';
    } 

    if (valorBusca.toLowerCase() === 'ch3oh') {
        document.getElementById('resposta').textContent = 'Metanal | CH3OH';
    } 

    if (valorBusca.toLowerCase() === 'c2h5oh') {
        document.getElementById('resposta').textContent = 'Etanal | CH3-CH2-OH';
    }

    if (valorBusca.toLowerCase() === 'c3h7oh') {
        document.getElementById('resposta').textContent = 'Propanal | CH3(CH2)2OH';
    }

    if (valorBusca.toLowerCase() === 'ch49oh') {
        document.getElementById('resposta').textContent = 'Butanal | CH3(CH2)3OH';
    }

    if (valorBusca.toLowerCase() === 'c5h11oh') {
        document.getElementById('resposta').textContent = 'Pentanal | CH3(CH2)4OH';
    }

    if (valorBusca.toLowerCase() === 'c6h13oh') {
        document.getElementById('resposta').textContent = 'hexanal | CH3(CH2)5OH';
    }

    if (valorBusca.toLowerCase() === 'c7h15oh') {
        document.getElementById('resposta').textContent = 'heptanal | CH3(CH2)6OH';
    }

    if (valorBusca.toLowerCase() === 'c3h17oh') {
        document.getElementById('resposta').textContent = 'Octanal | CH3(CH2)7OH';
    }

    if (valorBusca.toLowerCase() === 'c9h19oh') {
        document.getElementById('resposta').textContent = 'Nonanal | CH3(CH2)8OH';
    }

    if (valorBusca.toLowerCase() === 'c10h21oh') {
        document.getElementById('resposta').textContent = 'Decanal | CH3(CH2)9OH';
    }

    if (valorBusca.toLowerCase() === 'c11h23oh') {
        document.getElementById('resposta').textContent = 'Undecanal | CH3(CH2)10OH';
    }

    if (valorBusca.toLowerCase() === 'ch3oh') {
        document.getElementById('resposta').textContent = 'Metanol | CH3OH';
    }

    if (valorBusca.toLowerCase() === 'c2h5oh') {
        document.getElementById('resposta').textContent = 'Etanol | CH3-CH2-OH';
    }

    if (valorBusca.toLowerCase() === 'c3h7oh') {
        document.getElementById('resposta').textContent = 'Propanol | CH3(CH2)2OH';
    }

    if (valorBusca.toLowerCase() === 'c4h9oh') {
        document.getElementById('resposta').textContent = 'Butanol | CH3(CH2)3OH';
    }

    if (valorBusca.toLowerCase() === 'c5h11oh') {
        document.getElementById('resposta').textContent = 'Pentanol | CH3(CH2)4OH';
    }

    if (valorBusca.toLowerCase() === 'c6h13oh') {
        document.getElementById('resposta').textContent = 'Hexanol | CH3(CH2)5OH';
    }

    if (valorBusca.toLowerCase() === 'c7h15oh') {
        document.getElementById('resposta').textContent = 'Heptanol | CH3(CH2)6OH';
    }

    if (valorBusca.toLowerCase() === 'c8h17oh') {
        document.getElementById('resposta').textContent = 'Octanol | CH3(CH2)7OH';
    }

    if (valorBusca.toLowerCase() === 'c9h19oh') {
        document.getElementById('resposta').textContent = 'Nonanol | CH3(CH2)8OH';
    }

    if (valorBusca.toLowerCase() === 'c10h21oh') {
        document.getElementById('resposta').textContent = 'Decanol | CH3(CH2)9OH';
    }

    if (valorBusca.toLowerCase() === 'c11h23oh') {
        document.getElementById('resposta').textContent = 'Undecanol | CH3(CH2)10OH';
    }

    //Fluoretos

    if (valorBusca.toLowerCase() === 'ch3f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Metila  | CH3F';
    }

    if (valorBusca.toLowerCase() === 'c2h5f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Etila | CH3-CH2-F';
    }

    if (valorBusca.toLowerCase() === 'c3h7f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Propila | CH3(CH2)2F';
    }

    if (valorBusca.toLowerCase() === 'c4h9f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Butila | CH3(CH2)3F';
    }

    if (valorBusca.toLowerCase() === 'c5h11f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Pentila | CH3(CH2)4F';
    }

    if (valorBusca.toLowerCase() === 'c6h13f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Hexila | CH3(CH2)5F';
    }

    if (valorBusca.toLowerCase() === 'c7h15f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Heptila | CH3(CH2)6F';
    }

    if (valorBusca.toLowerCase() === 'c8h17f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Octila | CH3(CH2)7F';
    }

    if (valorBusca.toLowerCase() === 'c9h19f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Nonina | CH3(CH2)8F';
    }

    if (valorBusca.toLowerCase() === 'c10h21f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Decila | CH3(CH2)9F';
    }

    if (valorBusca.toLowerCase() === 'c11h23f') {
        document.getElementById('resposta').textContent = 'Fluoreto de Undecila | CH3(CH2)10F';
    }

    // Cloretos

    if (valorBusca.toLowerCase() === 'ch3cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Metila | CH3CL';
    }

    if (valorBusca.toLowerCase() === 'c2h5cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Etila | CH3-CH2-CL';
    }

    if (valorBusca.toLowerCase() === 'c3h7cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Propila | CH3(CH2)2CL';
    }

    if (valorBusca.toLowerCase() === 'c4h9cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Butila | CH3(CH2)3CL';
    }

    if (valorBusca.toLowerCase() === 'c5h11cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Pentila | CH3(CH2)4CL';
    }

    if (valorBusca.toLowerCase() === 'c6h13cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Hexila | CH3(CH2)5CL';
    }

    if (valorBusca.toLowerCase() === 'c7h15cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Heptila | CH3(CH2)6CL';
    }

    if (valorBusca.toLowerCase() === 'c8h17cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Octila | CH3(CH2)7CL';
    }

    if (valorBusca.toLowerCase() === 'c9h19cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Nonila | CH3(CH2)8CL';
    }

    if (valorBusca.toLowerCase() === 'c10h21cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Decila | CH3(CH2)9CL';
    }

    if (valorBusca.toLowerCase() === 'c11h23cl') {
        document.getElementById('resposta').textContent = 'Cloreto de Undecila | CH3(CH2)10CL';
    }

    //Brometos

    if (valorBusca.toLowerCase() === 'ch3br') {
        document.getElementById('resposta').textContent = 'Brometo de Metila | CH3BR';
    }

    if (valorBusca.toLowerCase() === 'c2h5br') {
        document.getElementById('resposta').textContent = 'Brometo de Etila | CH3-CH2-BR';
    }

    if (valorBusca.toLowerCase() === 'c3h7br') {
        document.getElementById('resposta').textContent = 'Brometo de Propila | CH3(CH2)2BR';
    }

    if (valorBusca.toLowerCase() === 'c4h9br') {
        document.getElementById('resposta').textContent = 'Brometo de Butila | CH3(CH2)3BR';
    }

    if (valorBusca.toLowerCase() === 'c5h11br') {
        document.getElementById('resposta').textContent = 'Brometo de Pentila | CH3(CH2)4BR';
    }

    if (valorBusca.toLowerCase() === 'c6h13br') {
        document.getElementById('resposta').textContent = 'Brometo de Hexila | CH3(CH2)5BR';
    }

    if (valorBusca.toLowerCase() === 'c7h15br') {
        document.getElementById('resposta').textContent = 'Brometo de Heptila | CH3(CH2)6BR';
    }

    if (valorBusca.toLowerCase() === 'c8h17br') {
        document.getElementById('resposta').textContent = 'Brometo de Octila | CH3(CH2)7BR';
    }

    if (valorBusca.toLowerCase() === 'c9h19br') {
        document.getElementById('resposta').textContent = 'Brometo de Nonila | CH3(CH2)8BR';
    }

    if (valorBusca.toLowerCase() === 'c10h21br') {
        document.getElementById('resposta').textContent = 'Brometo de Decila | CH3(CH2)9BR';
    }

    if (valorBusca.toLowerCase() === 'c11h23br') {
        document.getElementById('resposta').textContent = 'brometo de Undecila | CH3(CH2)10BR';
    }

    // Iodetos

    if (valorBusca.toLowerCase() === 'c3hi') {
        document.getElementById('resposta').textContent = 'Iodeto de Metila | CH3I';
    }

    if (valorBusca.toLowerCase() === 'c2h5i') {
        document.getElementById('resposta').textContent = 'iodeto de Etila | CH3-CH2-I';
    }

    if (valorBusca.toLowerCase() === 'c3h7i') {
        document.getElementById('resposta').textContent = 'Iodeto de Propila | CH3(CH2)2I';
    }

    if (valorBusca.toLowerCase() === 'c4h9i') {
        document.getElementById('resposta').textContent = 'Iodeto de Butila | CH3(CH2)3I';
    }

    if (valorBusca.toLowerCase() === 'c5h11i') {
        document.getElementById('resposta').textContent = 'Iodeto de Pentila | CH3(CH2)4I';
    }

    if (valorBusca.toLowerCase() === 'c6h13i') {
        document.getElementById('resposta').textContent = 'Iodeto de Hexila | CH3(CH2)5I';
    }

    if (valorBusca.toLowerCase() === 'c7h15i') {
        document.getElementById('resposta').textContent = 'Iodeto de Heptila | CH3(CH2)6I';
    }

    if (valorBusca.toLowerCase() === 'c8h17i') {
        document.getElementById('resposta').textContent = 'Iodeto de Octila | CH3(CH2)7I';
    }

    if (valorBusca.toLowerCase() === 'c9h19i') {
        document.getElementById('resposta').textContent = 'Iodeto de Nonila | CH3(CH2)8I';
    }

    if (valorBusca.toLowerCase() === 'c10h21i') {
        document.getElementById('resposta').textContent = 'Iodeto de Decila | CH3(CH2)9I';
    }

    if (valorBusca.toLowerCase() === 'c11h23i') {
        document.getElementById('resposta').textContent = 'Iodeto de Undecila | CH3(CH2)10I';
    }

    //Ácidos

    if (valorBusca.toLowerCase() === 'ch2o2') {
        document.getElementById('resposta').textContent = 'Ácido Metanoico ou Ácido Fórmico | HCOOH';
    }

    if (valorBusca.toLowerCase() === 'c2h4o2') {
        document.getElementById('resposta').textContent = 'Ácido Etanóico ou Ácido Acético | CH3-COOH';
    }

    if (valorBusca.toLowerCase() === 'c3h6o2') {
        document.getElementById('resposta').textContent = 'Ácido Propanoico ou Ácido Prpiônico | CH3-CH2-COOH';
    }

    if (valorBusca.toLowerCase() === 'c4h8o2') {
        document.getElementById('resposta').textContent = 'Ácido Butanoico ou Ácido Butírico | CH3(CH2)2COOH';
    }

    if (valorBusca.toLowerCase() === 'c5h10o2') {
        document.getElementById('resposta').textContent = 'Ácido Pentanoico ou Ácido Valérico | CH3(CH2)3COOH';
    }

    if (valorBusca.toLowerCase() === 'c6h12o2') {
        document.getElementById('resposta').textContent = 'Ácido Hexanoico ou Ácido Caproico | CH3(CH2)4COOH';
    }

    if (valorBusca.toLowerCase() === 'c7h14o2') {
        document.getElementById('resposta').textContent = 'Ácido Heptanoico ou Ácido Enântico | CH3(CH2)5COOH';
    }

    if (valorBusca.toLowerCase() === 'c8h16o2') {
        document.getElementById('resposta').textContent = 'Ácido Octanoico ou Ácido Caprílico | CH3(CH2)6COOH';
    }

    if (valorBusca.toLowerCase() === 'c9h18o2') {
        document.getElementById('resposta').textContent = 'Ácido Nonanoico ou Ácido Perlargônico | CH3(CH2)7COOH';
    }

    if (valorBusca.toLowerCase() === 'c10h20o2') {
        document.getElementById('resposta').textContent = 'Ácido Decanoico ou Ácido Caprico | CH3(CH2)8COOH';
    }

    if (valorBusca.toLowerCase() === 'c11h22o2') {
        document.getElementById('resposta').textContent = 'Ácido Undecanoico ou Ácido Undecílico | CH3(CH2)9COOH';
    }
    
        //Cetonas

        if (valorBusca.toLowerCase() === 'c3h6o') {
        document.getElementById('resposta').textContent = 'Propanona | H3C-CO-CH3';
    }

    if (valorBusca.toLowerCase() === 'c4h8o') {
        document.getElementById('resposta').textContent = 'butanona | H3C-CO-CH2-CH3';
    }

    if (valorBusca.toLowerCase() === 'c5h10o') {
        document.getElementById('resposta').textContent = 'pentanona | H3C-C0-(CH2)2-CH3';
    }

    if (valorBusca.toLowerCase() === 'c6h12o') {
        document.getElementById('resposta').textContent = 'hexanona | H3C-C0-(CH2)3-CH3';
    }

    if (valorBusca.toLowerCase() === 'c7h14o') {
        document.getElementById('resposta').textContent = 'heptanona | H3C-C0-(CH2)4-CH3';
    }

    if (valorBusca.toLowerCase() === 'c8h16o') {
        document.getElementById('resposta').textContent = 'octanona | H3C-C0-(CH2)5-CH3';
    }

    if (valorBusca.toLowerCase() === 'c9h18o') {
        document.getElementById('resposta').textContent = 'nonanona | H3C-C0-(CH2)6-CH3';
    }

    if (valorBusca.toLowerCase() === 'c10h20o') {
        document.getElementById('resposta').textContent = 'decanona | H3C-C0-(CH2)7-CH3';
    }

    if (valorBusca.toLowerCase() === 'c11h22o') {
        document.getElementById('resposta').textContent = 'undecanona | H3C-C0-(CH2)8-CH3';
    }
});