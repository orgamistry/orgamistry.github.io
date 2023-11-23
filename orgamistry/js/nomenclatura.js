document.getElementById('formBusca').addEventListener('submit', function(event) {
    
    event.preventDefault();


    var valorBusca = document.querySelector('.search-box-input').value;
    
    if (valorBusca.toLowerCase() === 'metano') {
        document.getElementById('resposta').textContent = 'CH4 | CH4';
    } 

    if (valorBusca.toLowerCase() === 'etano') {
        document.getElementById('resposta').textContent = 'C2H6 | H3C-CH3';
    } 

    if (valorBusca.toLowerCase() === 'propano') {
        document.getElementById('resposta').textContent = 'C3H3 | H3C-CH2-CH3';
    } 

    if (valorBusca.toLowerCase() === 'butano') {
        document.getElementById('resposta').textContent = 'C4H10 | H3C(CH2)2CH3';
    } 

    if (valorBusca.toLowerCase() === 'pentano') {
        document.getElementById('resposta').textContent = 'C5H12 | H3C(CH2)3CH3';
    } 

    if (valorBusca.toLowerCase() === 'hexano') {
        document.getElementById('resposta').textContent = 'C6H14 | H3C(CH2)4CH3';
    } 

    if (valorBusca.toLowerCase() === 'heptano') {
        document.getElementById('resposta').textContent = 'C7H16 | H3C(CH2)5CH3';
    } 

    if (valorBusca.toLowerCase() === 'octano') {
        document.getElementById('resposta').textContent = 'C3H18 | H3C(CH2)6CH3';
    } 

    if (valorBusca.toLowerCase() === 'nonano') {
        document.getElementById('resposta').textContent = 'C9H20 | H3C(CH2)7CH3';
    } 

    if (valorBusca.toLowerCase() === 'decano') {
        document.getElementById('resposta').textContent = 'C10H22 | H3C(CH2)8CH3';
    } 

    if (valorBusca.toLowerCase() === 'undecano') {
        document.getElementById('resposta').textContent = 'C11H24 | H3C(CH2)9CH3';
    } 

    if (valorBusca.toLowerCase() === 'metanal') {
        document.getElementById('resposta').textContent = 'CH3OH | CH3OH';
    } 

    if (valorBusca.toLowerCase() === 'etanal') {
        document.getElementById('resposta').textContent = 'C2H5OH | CH3-CH2-OH';
    }

    if (valorBusca.toLowerCase() === 'propanal') {
        document.getElementById('resposta').textContent = 'C3H7OH | CH3(CH2)2OH';
    }

    if (valorBusca.toLowerCase() === 'butanal') {
        document.getElementById('resposta').textContent = 'C4H9OH | CH3(CH2)3OH';
    }

    if (valorBusca.toLowerCase() === 'pentanal') {
        document.getElementById('resposta').textContent = 'C5H11OH | CH3(CH2)4OH';
    }

    if (valorBusca.toLowerCase() === 'hexanal') {
        document.getElementById('resposta').textContent = 'C6H13OH | CH3(CH2)5OH';
    }

    if (valorBusca.toLowerCase() === 'heptanal') {
        document.getElementById('resposta').textContent = 'C7H15OH | CH3(CH2)6OH';
    }

    if (valorBusca.toLowerCase() === 'octanal') {
        document.getElementById('resposta').textContent = 'C3H17OH | CH3(CH2)7OH';
    }

    if (valorBusca.toLowerCase() === 'nonanal') {
        document.getElementById('resposta').textContent = 'C9H19OH | CH3(CH2)8OH';
    }

    if (valorBusca.toLowerCase() === 'decanal') {
        document.getElementById('resposta').textContent = 'c10h21oh | CH3(CH2)9OH';
    }

    if (valorBusca.toLowerCase() === 'undecanal') {
        document.getElementById('resposta').textContent = 'c11h23oh | CH3(CH2)10OH';
    }

    if (valorBusca.toLowerCase() === 'metanol') {
        document.getElementById('resposta').textContent = 'ch3oh | CH3OH';
    }

    if (valorBusca.toLowerCase() === 'etanol') {
        document.getElementById('resposta').textContent = 'c2h5oh | CH3-CH2-OH';
    }

    if (valorBusca.toLowerCase() === 'propanol') {
        document.getElementById('resposta').textContent = 'c3h7oh | CH3(CH2)2OH';
    }

    if (valorBusca.toLowerCase() === 'butanol') {
        document.getElementById('resposta').textContent = 'c4h9oh | CH3(CH2)3OH';
    }

    if (valorBusca.toLowerCase() === 'pentanol') {
        document.getElementById('resposta').textContent = 'c5h11oh | CH3(CH2)4OH';
    }

    if (valorBusca.toLowerCase() === 'hexanol') {
        document.getElementById('resposta').textContent = 'c6h13oh | CH3(CH2)5OH';
    }

    if (valorBusca.toLowerCase() === 'heptanol') {
        document.getElementById('resposta').textContent = 'c7h15oh | CH3(CH2)6OH';
    }

    if (valorBusca.toLowerCase() === 'octanol') {
        document.getElementById('resposta').textContent = 'c8h17oh | CH3(CH2)7OH';
    }

    if (valorBusca.toLowerCase() === 'nonanol') {
        document.getElementById('resposta').textContent = 'c9h19oh | CH3(CH2)8OH';
    }

    if (valorBusca.toLowerCase() === 'decanol') {
        document.getElementById('resposta').textContent = 'c10h21oh | CH3(CH2)9OH';
    }

    if (valorBusca.toLowerCase() === 'undecanol') {
        document.getElementById('resposta').textContent = 'c11h23oh | CH3(CH2)10OH';
    }

    //Fluoretos

    if (valorBusca.toLowerCase() === 'fluoreto de metila') {
        document.getElementById('resposta').textContent = 'ch3f  | CH3F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de etila') {
        document.getElementById('resposta').textContent = 'c2h5f | CH3-CH2-F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de propila') {
        document.getElementById('resposta').textContent = 'c3h7f | CH3(CH2)2F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de butila') {
        document.getElementById('resposta').textContent = 'c4h9f | CH3(CH2)3F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de pentila') {
        document.getElementById('resposta').textContent = 'c5h11f | CH3(CH2)4F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de hexila') {
        document.getElementById('resposta').textContent = 'c6h13f | CH3(CH2)5F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de heptila') {
        document.getElementById('resposta').textContent = 'c7h15f | CH3(CH2)6F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de octila') {
        document.getElementById('resposta').textContent = 'c8h17f | CH3(CH2)7F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de nonila') {
        document.getElementById('resposta').textContent = 'c9h19f | CH3(CH2)8F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de decila') {
        document.getElementById('resposta').textContent = 'c10h21f | CH3(CH2)9F';
    }

    if (valorBusca.toLowerCase() === 'fluoreto de undecila') {
        document.getElementById('resposta').textContent = 'c11h23f | CH3(CH2)10F';
    }

    // Cloretos

    if (valorBusca.toLowerCase() === 'cloreto de metila') {
        document.getElementById('resposta').textContent = 'ch3cl | CH3CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de etila') {
        document.getElementById('resposta').textContent = 'c2h5cl | CH3-CH2-CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de propila') {
        document.getElementById('resposta').textContent = 'c3h7cl | CH3(CH2)2CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de butila') {
        document.getElementById('resposta').textContent = 'c4h9cl | CH3(CH2)3CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de pentila') {
        document.getElementById('resposta').textContent = 'c5h11cl | CH3(CH2)4CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de hexila') {
        document.getElementById('resposta').textContent = 'c6h13cl | CH3(CH2)5CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de heptila') {
        document.getElementById('resposta').textContent = 'c7h15cl | CH3(CH2)6CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de octila') {
        document.getElementById('resposta').textContent = 'c8h17cl | CH3(CH2)7CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de nonila') {
        document.getElementById('resposta').textContent = 'c9h19cl | CH3(CH2)8CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de decila') {
        document.getElementById('resposta').textContent = 'c10h21cl | CH3(CH2)9CL';
    }

    if (valorBusca.toLowerCase() === 'cloreto de undecila') {
        document.getElementById('resposta').textContent = 'c11h23cl | CH3(CH2)10CL';
    }

    //Brometos

    if (valorBusca.toLowerCase() === 'brometo de metila') {
        document.getElementById('resposta').textContent = 'ch3br | CH3BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de etila') {
        document.getElementById('resposta').textContent = 'c2h5br | CH3-CH2-BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de propila') {
        document.getElementById('resposta').textContent = 'c3h7br | CH3(CH2)2BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de butila') {
        document.getElementById('resposta').textContent = 'c4h9br | CH3(CH2)3BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de pentila') {
        document.getElementById('resposta').textContent = 'c5h11br | CH3(CH2)4BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de hexila') {
        document.getElementById('resposta').textContent = 'c6h13br | CH3(CH2)5BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de heptila') {
        document.getElementById('resposta').textContent = 'c7h15br | CH3(CH2)6BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de octila') {
        document.getElementById('resposta').textContent = 'c8h17br | CH3(CH2)7BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de nonila') {
        document.getElementById('resposta').textContent = 'c9h19br | CH3(CH2)8BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de decila') {
        document.getElementById('resposta').textContent = 'c10h21br | CH3(CH2)9BR';
    }

    if (valorBusca.toLowerCase() === 'brometo de undecila') {
        document.getElementById('resposta').textContent = 'c11h23br | CH3(CH2)10BR';
    }

    // Iodetos

    if (valorBusca.toLowerCase() === 'iodeto de metila') {
        document.getElementById('resposta').textContent = 'c3hi | CH3I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de etila') {
        document.getElementById('resposta').textContent = 'c2h5i | CH3-CH2-I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de propila') {
        document.getElementById('resposta').textContent = 'c3h7i | CH3(CH2)2I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de butila') {
        document.getElementById('resposta').textContent = 'c4h9i | CH3(CH2)3I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de pentila') {
        document.getElementById('resposta').textContent = 'c5h11i | CH3(CH2)4I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de hexila') {
        document.getElementById('resposta').textContent = 'c6h13i | CH3(CH2)5I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de heptila') {
        document.getElementById('resposta').textContent = 'c7h15i | CH3(CH2)6I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de octila') {
        document.getElementById('resposta').textContent = 'c8h17i | CH3(CH2)7I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de nonila') {
        document.getElementById('resposta').textContent = 'c9h19i | CH3(CH2)8I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de decila') {
        document.getElementById('resposta').textContent = 'c10h21i | CH3(CH2)9I';
    }

    if (valorBusca.toLowerCase() === 'iodeto de undecila') {
        document.getElementById('resposta').textContent = 'c11h23i | CH3(CH2)10I';
    }

    //Ácidos

    if (valorBusca.toLowerCase() === 'acido metanoico') {
        document.getElementById('resposta').textContent = 'ch2o2 | HCOOH';
    }

    if (valorBusca.toLowerCase() === 'acido etanoico') {
        document.getElementById('resposta').textContent = 'c2h4o2 | CH3-COOH';
    }

    if (valorBusca.toLowerCase() === 'acido propanoico') {
        document.getElementById('resposta').textContent = 'c3h6o2 | CH3-CH2-COOH';
    }

    if (valorBusca.toLowerCase() === 'acido butanoico') {
        document.getElementById('resposta').textContent = 'c4h8o2 | CH3(CH2)2COOH';
    }

    if (valorBusca.toLowerCase() === 'acido pentanoico') {
        document.getElementById('resposta').textContent = 'c5h10o2 | CH3(CH2)3COOH';
    }

    if (valorBusca.toLowerCase() === 'acido hexanoico') {
        document.getElementById('resposta').textContent = 'c6h12o2 | CH3(CH2)4COOH';
    }

    if (valorBusca.toLowerCase() === 'acido heptanoico') {
        document.getElementById('resposta').textContent = 'c7h14o2 | CH3(CH2)5COOH';
    }

    if (valorBusca.toLowerCase() === 'acido octanoico') {
        document.getElementById('resposta').textContent = 'c8h16o2 | CH3(CH2)6COOH';
    }

    if (valorBusca.toLowerCase() === 'acido nonanoico') {
        document.getElementById('resposta').textContent = 'c9h18o2 | CH3(CH2)7COOH';
    }

    if (valorBusca.toLowerCase() === 'acido decanoico') {
        document.getElementById('resposta').textContent = 'c10h20o2 | CH3(CH2)8COOH';
    }

    if (valorBusca.toLowerCase() === 'acido undecanoico') {
        document.getElementById('resposta').textContent = 'c11h22o2 | CH3(CH2)9COOH';
    }

    if (valorBusca.toLowerCase() === 'acido formico') {
        document.getElementById('resposta').textContent = 'ch2o2 | HCOOH';
    }

    if (valorBusca.toLowerCase() === 'acido acetico') {
        document.getElementById('resposta').textContent = 'c2h4o2 | CH3-COOH';
    }

    if (valorBusca.toLowerCase() === 'acido propionico') {
        document.getElementById('resposta').textContent = 'c3h6o2 | CH3-CH2-COOH';
    }

    if (valorBusca.toLowerCase() === 'acido butirico') {
        document.getElementById('resposta').textContent = 'c4h8o2 | CH3(CH2)2COOH';
    }

    if (valorBusca.toLowerCase() === 'acido valerico') {
        document.getElementById('resposta').textContent = 'c5h10o2 | CH3(CH2)3COOH';
    }

    if (valorBusca.toLowerCase() === 'acido caproico') {
        document.getElementById('resposta').textContent = 'c6h12o2 | CH3(CH2)4COOH';
    }

    if (valorBusca.toLowerCase() === 'acido enantico') {
        document.getElementById('resposta').textContent = 'c7h14o2 | CH3(CH2)5COOH';
    }

    if (valorBusca.toLowerCase() === 'acido caprilico') {
        document.getElementById('resposta').textContent = 'c8h16o2 | CH3(CH2)6COOH';
    }

    if (valorBusca.toLowerCase() === 'acido perlargonico') {
        document.getElementById('resposta').textContent = 'c9h18o2 | CH3(CH2)7COOH';
    }

    if (valorBusca.toLowerCase() === 'acido caprico') {
        document.getElementById('resposta').textContent = 'c10h20o2 | CH3(CH2)8COOH';
    }

    if (valorBusca.toLowerCase() === 'acido undecilico') {
        document.getElementById('resposta').textContent = 'c11h22o2 | CH3(CH2)9COOH';
    }

    //Cetonas

    if (valorBusca.toLowerCase() === 'propanona') {
        document.getElementById('resposta').textContent = 'c3h6o | H3C-CO-CH3';
    }

    if (valorBusca.toLowerCase() === 'butanona') {
        document.getElementById('resposta').textContent = 'c4h8o | H3C-CO-CH2-CH3';
    }

    if (valorBusca.toLowerCase() === 'pentanona') {
        document.getElementById('resposta').textContent = 'c5h10o | H3C-C0-(CH2)2-CH3';
    }

    if (valorBusca.toLowerCase() === 'hexanona') {
        document.getElementById('resposta').textContent = 'c6h12o | H3C-C0-(CH2)3-CH3';
    }

    if (valorBusca.toLowerCase() === 'heptanona') {
        document.getElementById('resposta').textContent = 'c7h14o | H3C-C0-(CH2)4-CH3';
    }

    if (valorBusca.toLowerCase() === 'octanona') {
        document.getElementById('resposta').textContent = 'c8h16o | H3C-C0-(CH2)5-CH3';
    }

    if (valorBusca.toLowerCase() === 'nonanona') {
        document.getElementById('resposta').textContent = 'c9h18o | H3C-C0-(CH2)6-CH3';
    }

    if (valorBusca.toLowerCase() === 'decanona') {
        document.getElementById('resposta').textContent = 'c10h20o | H3C-C0-(CH2)7-CH3';
    }

    if (valorBusca.toLowerCase() === 'undecanona') {
        document.getElementById('resposta').textContent = 'c11h22o | H3C-C0-(CH2)8-CH3';
    }
});