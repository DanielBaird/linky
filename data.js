data = {
    entities: [
        // barovia
        { name: 'Barovian Nobility', info: 'fun info about the noble families of Barovia' },
        { name: 'Buchvold Family', info: 'fun info about Buchvold Family' },
        { name: 'Krezkov Family', info: 'fun info about Krezkov Family' },
        { name: 'Anna Krezkov', info: 'fun info about Anna Krezkov, resident of Barovia' },
        { name: 'Dilisnya Family', info: 'fun info about Dilisnya Family' },
        { name: 'Leo Dilisnya', info: 'fun info about Leo Dilisnya, resident of Barovia' },
        { name: 'Boritsi Family', info: 'fun info about Boritsi Family' },
        { name: 'Von Zarovitch Family', info: 'fun info about Von Zarovitch Family' },
        { name: 'Klaus Von Zarovitch', info: 'fun info about Klaus Von Zarovitch, resident of Barovia' },
        { name: 'Rahadin', info:'fun info about Rahadin, resident of Barovia' },

        // I'Cath
        { name: 'Tsien Chiang', info: 'fun info about Tsien Chiang, resident of I\'Cath' },
        { name: 'Scream', info: 'fun info about Scream, resident of I\'Cath' },
        { name: 'Hate', info: 'fun info about Hate, resident of I\'Cath' },
        { name: 'Spite', info: 'fun info about Spite, resident of I\'Cath' },
        { name: 'Nightingale', info: 'fun info about Nightingale, resident of I\'Cath' },

        // Bending
        { name: 'Waterbending', info: 'Waterbending is one of the five fundamental bending arts' },
        { name: 'Earthbending', info: 'Earthbending is one of the five fundamental bending arts' },
        { name: 'Airbending', info: 'Airbending is one of the five fundamental bending arts' },
        { name: 'Firebending', info: 'Firebending is one of the five fundamental bending arts' },
        { name: 'Energybending', info: 'Energybending is one of the five fundamental bending arts' },

        { name: 'Flight', info: 'Flight is a bending sub-skill' },
        { name: 'Spiritual projection', info: 'Spiritual projection is a bending sub-skill' },
        { name: 'Healing', info: 'Healing is a bending sub-skill' },
        { name: 'Bloodbending', info: 'Bloodbending is a bending sub-skill' },
        { name: 'Seismic sense', info: 'Seismic sense is a bending sub-skill' },
        { name: 'Lavabending', info: 'Lavabending is a bending sub-skill' },
        { name: 'Metalbending', info: 'Metalbending is a bending sub-skill' },
        { name: 'Combustionbending', info: 'Combustionbending is a bending sub-skill' },
        { name: 'Generating lightning', info: 'Generating lightning is a bending sub-skill' },
        { name: 'Redirecting lightning', info: 'Redirecting lightning is a bending sub-skill' },

    ],
    links: [
        {left:'Buchvold Family',      conn:'allegiance',  right:'Barovian Nobility'},
        {left:'Krezkov Family',       conn:'allegiance',  right:'Barovian Nobility'},
        {left:'Dilisnya Family',      conn:'allegiance',  right:'Barovian Nobility'},
        {left:'Von Zarovitch Family', conn:'allegiance',  right:'Barovian Nobility'},
        {left:'Anna Krezkov',         conn:'allegiance',  right:'Barovian Nobility'},
        {left:'Boritsi Family',       conn:'allegiance',  right:'Dilisnya Family'},
        {left:'Leo Dilisnya',         conn:'allegiance',  right:'Dilisnya Family'},
        {left:'Klaus Von Zarovitch',  conn:'allegiance',  right:'Von Zarovitch Family'},
        {left:'Rahadin',              conn:'allegiance',  right:'Von Zarovitch Family'},

        {left:'Scream',               conn:'allegiance',  right:'Tsien Chiang'},
        {left:'Hate',                 conn:'allegiance',  right:'Tsien Chiang'},
        {left:'Spite',                conn:'allegiance',  right:'Tsien Chiang'},
        {left:'Nightingale',          conn:'allegiance',  right:'Tsien Chiang'},

        { left: 'Flight',                conn:'bending subskill',  right:'Airbending'},
        { left: 'Spiritual projection',  conn:'bending subskill',  right:'Airbending'},
        { left: 'Healing',               conn:'bending subskill',  right:'Waterbending'},
        { left: 'Bloodbending',          conn:'bending subskill',  right:'Waterbending'},
        { left: 'Seismic sense',         conn:'bending subskill',  right:'Earthbending'},
        { left: 'Lavabending',           conn:'bending subskill',  right:'Earthbending'},
        { left: 'Metalbending',          conn:'bending subskill',  right:'Earthbending'},
        { left: 'Combustionbending',     conn:'bending subskill',  right:'Firebending'},
        { left: 'Generating lightning',  conn:'bending subskill',  right:'Firebending'},
        { left: 'Redirecting lightning', conn:'bending subskill',  right:'Firebending'},

    ]
}

const entities = data.entities
const links = data.links
