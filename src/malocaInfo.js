
class MalocaInfo{
    constructor(){
        this.titulo = "Maloca";
        this.email = "contato@Malocagames.com";
        this.endereco = "rua do beco sem numero, maloca";
        this.telefone = "+55 (11) 33211-2232";
        this.frase = "colocar uma frase legal";
        this.social =[
            {nome:"instagram", url:"", icone:"fab fa-instagram"},
            {nome:"youtube", url:"", icone:"fab fa-youtube"},
        ];
        this.servicos=[
            {
                nome:"Game design", 
                icone:"fa fa-dumbbell", 
                descricao:"criamos jogos em qe todos se sintam incluidos"
            },
            {
                nome:"Gamefication", 
                icone:"fa fa-dumbbell", 
                descricao:"trazemos proposito a processos repetitivos"
            },
    
        ];
        this.time=[
            {
                nome:"Lucas",
                img:"img/equipe/team-1.jpg",
                cargo:"Diretor de arte",
                social:[
                    {nome:"instagram", url:"", icone:"fab fa-instagram"},
                    {nome:"youtube", url:"", icone:"fab fa-youtube"},
                ],
            },
            {
                nome:"Rennan",
                img:"img/equipe/team-2.jpg",
                cargo:"game developer",
                social:[
                    {nome:"instagram", url:"", icone:"fab fa-instagram"},
                    {nome:"youtube", url:"", icone:"fab fa-youtube"},
                ],
            },
            {
                nome:"Karol",
                img:"img/equipe/team-3.jpg",
                cargo:"Administrativo",
                social:[
                    {nome:"instagram", url:"", icone:"fab fa-instagram"},
                    {nome:"youtube", url:"", icone:"fab fa-youtube"},
                ],
            },
            {
                nome:"Sanderson",
                img:"img/equipe/team-4.jpg",
                cargo:"game deigner",
                social:[
                    {nome:"instagram", url:"", icone:"fab fa-instagram"},
                    {nome:"youtube", url:"", icone:"fab fa-youtube"},
                ],
            },
        ];
        this.projetos=[
            {
                nome:"maloca",
                img:"https://via.placeholder.com/1366x768?text=jogo1",
                frase:"projeto porreta da gota serena",
                jogadores:"2-4",
                tempo:"40min",
                idade:"6+",
                tipo:"Familia",
                complexidade:5,
            },
            {
                nome:"beco",
                img:"https://via.placeholder.com/1366x768?text=jogo2",
                frase:"projeto bom pra danar",
                jogadores:"2-6",
                tempo:"30min",
                idade:"12+",
                tipo:"Festivo",
                complexidade:2,
            },
            {
                nome:"gueto",
                img:"https://via.placeholder.com/1366x768?text=jogo3",
                frase:"é nois truta",
                jogadores:"2-6",
                tempo:"30min",
                idade:"12+",
                tipo:"Festivo",
                complexidade:2,
            },
            {
                nome:"viela",
                img:"https://via.placeholder.com/1366x768?text=jogo4",
                frase:"seguereto irmão",
                jogadores:"2-6",
                tempo:"30min",
                idade:"12+",
                tipo:"Festivo",
                complexidade:2,
            },
        ];
    }
}

export default MalocaInfo;