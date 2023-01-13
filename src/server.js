import { createServer } from "miragejs";

export function makeServer(environment = 'development') {
    return createServer({
        environment,

        routes() {
            this.namespace = "api"
            this.get("/quotes", () => [
                {
                    id: 1,
                    author: 'Platão',
                    quotes: [
                        'Deve-se temer a velhice, porque ela nunca vem só. Bengalas são provas de idade e não de prudência.',
                        'Os filhos dos homens, dentre todos os animais jovens, são os mais difíceis de serem tratados.',
                        'A coisa mais indispensável a um homem é reconhecer o uso que deve fazer do seu próprio conhecimento.',
                        'De todos os animais selvagens, o homem jovem é o mais difícil de domar.',
                        'Tente mover o mundo – o primeiro passo será mover a si mesmo.',
                        'Uma vida não questionada não merece ser vivida.',
                        'Onde não há igualdade, a amizade não perdura.',
                        'Todo homem é poeta quando está apaixonado.',
                        'A necessidade que é a mãe da invenção.',
                        'Devemos aprender durante toda a vida, sem imaginar que a sabedoria vem com a velhice.'
                    ]
                },
                {
                    id: 2,
                    author: 'Aristóteles',
                    quotes: [
                        'Você nunca fará nada neste mundo sem coragem. É a melhor qualidade da mente ao lado da honra.',
                        'Nós somos aquilo que fazemos repetidamente. Excelência, então, não é um modo de agir, mas um hábito.',
                        'Nunca existiu um gênio sem uma pitada de loucura.',
                        'O ignorante afirma, o sábio duvida, o sensato reflete.',
                        'A esperança é o sonho do homem acordado.',
                        'A alegria que se tem em pensar e aprender faz-nos pensar e aprender ainda mais.',
                        'A cultura é o melhor conforto para a velhice.',
                        'A amizade perfeita apenas pode existir entre os bons.',
                        'A música é celeste, de natureza divina e de tal beleza que encanta a alma e a eleva acima da sua condição.',
                        'A felicidade e a saúde são incompatíveis com a ociosidade.'
                    ]
                },
                {
                    id: 3,
                    author: 'Clarice Lispector',
                    quotes: [
                        'O que importa afinal, viver ou saber que se está vivendo?',
                        'Pegue para você o que lhe pertence, e o que lhe pertence é tudo o que sua vida exige. Parece uma vida amoral. Mas o que é verdadeiramente imoral é ter desistido de si mesma.',
                        'Acho que sábado é a rosa da semana.',
                        'Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.',
                        'Liberdade é pouco. O que desejo ainda não tem nome.',
                        'Mas tenho medo do que é novo e tenho medo de viver o que não entendo - quero sempre ter a garantia de pelo menos estar pensando que entendo, não sei me entregar à desorientação.',
                        'Eu não sou tão triste assim, é que hoje eu estou cansada.',
                        'O que verdadeiramente somos é aquilo que o impossível cria em nós.',
                        'Perder-se também é caminho.',
                        'Fique de vez em quando sozinho, senão você será submergido. Até o amor excessivo dos outros pode submergir uma pessoa.'
                    ]
                },
                {
                    id: 4,
                    author: 'Paulo Coelho',
                    quotes: [
                        'A felicidade às vezes é uma bênção, mas geralmente é uma conquista.',
                        'A única maneira de seguir nossos sonhos é sendo generosos conosco mesmos.',
                        'É justamente a possibilidade de realizar um sonho que torna a vida interessante.',
                        'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
                        'Uma coisa é você achar que está no caminho certo, outra é achar que o seu caminho é o único. Nunca podemos julgar a vida dos outros, porque cada um sabe da sua própria dor e renúncia.',
                        'De que me adianta temer o que já aconteceu? O tempo do medo já aconteceu, agora, começa o tempo da esperança.',
                        'Uma vez feita a escolha é preciso seguir adiante e confiar no seu próprio coração...',
                        'O maior de todos os pecados: o arrependimento.',
                        'Imagine uma nova história para sua vida e acredite nela.',
                        'As coisas mais simples da vida são as mais extraordinárias, e só os sábios conseguem vê-las.'
                    ]
                },
                {
                    id: 5,
                    author: 'Santo Agostinho',
                    quotes: [
                        'Enquanto houver vontade de lutar haverá esperança de vencer.',
                        'A esperança tem duas filhas lindas, a indignação e a coragem; a indignação nos ensina a não aceitar as coisas como estão; a coragem, a mudá-las.',
                        'O dom da fala foi concedido aos homens não para que eles enganassem uns aos outros, mas sim para que expressassem seus pensamentos uns aos outros.',
                        'Não há lugar para a sabedoria onde não há paciência.',
                        'O mundo é um livro, e quem fica sentado em casa lê somente uma página.',
                        'Aquele que tem caridade no coração tem sempre qualquer coisa para dar.',
                        'A felicidade é continuar desejando aquilo que possuímos.',
                        'Não procure fora, mas dentro de você, é no interior do homem que habita a verdade',
                        'O ocioso caminha devagar... por isso que todos os vícios o alcançam.',
                        'A verdade é como um leão; você não precisa defendê-la. Deixe-a solta, e ela se defenderá a si mesma.'
                    ]
                },
                {
                    id: 6,
                    author: 'Winston Churchill',
                    quotes: [
                        'É bom ter livros de citações. Gravadas na memória, elas inspiram-nos bons pensamentos!.',
                        'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores',
                        'Não há mal nenhum em mudar de opinião. Contanto que seja para melhor',
                        'A coragem é a primeira das qualidades humanas porque garante todas as outras.',
                        'A maior lição da vida é a de que, às vezes, até os tolos têm razão.',
                        'Estou sempre disposto a aprender, mas nem sempre gosto que me ensinem.',
                        'Não adianta dizer: "Estamos fazendo o melhor que podemos". Temos que conseguir o que quer que seja necessário.',
                        'É um erro tentar ver muito longe no futuro. A corrente do destino somente pode ser puxada um elo por vez.',
                        'O que eu espero senhores, é que depois de um razoável período de discussão, todo mundo concorde comigo.',
                        'Eu já tirei mais do álcool do que o álcool tirou de mim.'
                    ]
                },
                {
                    id: 7,
                    author: 'Søren Kierkegaard',
                    quotes: 
                    [
                        'A vida só se compreende mediante um retorno ao passado, mas só se vive para diante.',
                        'A coisa crucial é encontrar uma verdade que seja verdade para mim, encontrar a ideia pela qual eu esteja disposto a viver e morrer',
                        'Há duas maneiras de ser enganado. Uma é acreditar no que não é verdade; a outra é se recusar a acreditar no que é verdade.',
                        'Ousar é perder o equilíbrio momentaneamente. Não ousar é perder-se.',
                        'A porta da felicidade abre só para o exterior; quem a força em sentido contrário acaba por fechá-la ainda mais.',
                        'Não há nada em que paire tanta sedução e maldição como num segredo.',
                        'A fé é a mais elevada paixão de todos os homens.',
                        'Só quem já se modificou pode mudar os outros.',
                        'O desespero mais comum é não escolhermos ou não podermos ser nós mesmos, mas a forma mais profunda de desespero é escolhermos ser outra pessoa ao invés de nós mesmos.',
                        'A vida não é um problema a ser resolvido mas uma realidade a ser vivida.'
                    ]
                },
                {
                    id: 8,
                    author: 'Jesus Cristo',
                    quotes: 
                    [
                        'E conhecereis a verdade, e a verdade vos libertará. João 8:32.',
                        'Não se pode esconder uma cidade construída sobre um monte. E, também, ninguém acende uma candeia e a coloca debaixo de uma vasilha. Ao contrário, coloca-a no lugar apropriado, e assim ilumina a todos os que estão na casa.Mateus 5:14',
                        'Ou fazei a árvore boa e o seu fruto bom ou a árvore má e o seu fruto mau; porque pelo fruto se conhece a árvore. Mateus 12:33.',
                        'De que serve ao homem conquistar o mundo inteiro se perder a alma? Marcos 8:36',
                        'Não temas, eu venci o mundo! João 16:33',
                        'Mil cairão ao teu lado, dez mil à tua direita. Mas tu não serás atingido. Salmos 91:7',
                        'Tudo é possível ao que crer. Marcos 9',
                        'Nem só de pão viverá o Homem, mas de toda palavra de Deus! Mateus 4:4' ,
                        'A candeia do corpo são os olhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz. Mateus 6:22',
                        'O amor nunca falha, havendo profecias serão aniquiladas, havendo ciências cessarão. Coríntios 13:8'
                    ]
                },
                {
                    id: 9,
                    author: 'Chorão',
                    quotes: 
                    [
                        'Um homem quando está em paz não quer guerra com ninguém',
                        'O tempo, às vezes, é alheio à nossa vontade, mas só o que é bom dura tempo o bastante para se tornar inesquecível',
                        'Tenho um lado irônico. Tenho um lado insuportável. Tenho um lado amável. E cada um tem o meu lado que merece.',
                        'Não busco a perfeição em ninguém, porque não quero que busquem em mim',
                        'Melhores amigos, na verdade, são irmãos que por algum erro não caíram na nossa família.',
                        'A arte maior é o jeito de cada um... vivo pra ser feliz não vivo pra ser comum.',
                        'Não tenha medo de tentar, tenha medo de não tentar e ver que a vida passou e você não se arriscou como deveria.',
                        'Tem vários jeitos da gente matar uma pessoa, a indiferença é uma delas.',
                        'Eu tenho uma alma que é feita de sonhos.',
                        'Sem neurose. Cada um sabe o dom, o tom e o tamanho da dose.'
                    ]
                },
                {
                    id: 10,
                    author: 'Voltaire',
                    quotes: 
                    [
                        'Devemos julgar um homem mais pelas suas perguntas que pelas respostas',
                        'A amizade de um grande homem é um benefício dos deuses.',
                        'Todos os caminhos vão ao mesmo lugar! Mas escolha o seu, e vá até o final, não tente percorrer todos os caminhos.',
                        'Os que creem que o dinheiro tudo consegue são propensos a fazer tudo por ele',
                        'Tudo de bom acontece a pessoas com disposição alegre.',
                        'Toda perfeição é um defeito.',
                        'Os homens nunca sentem remorsos por coisas que estão habituados a fazer',
                        'O essencial é estar bem consigo mesmo.',
                        'Aquilo a que chamamos acaso não é, não pode deixar de ser, senão a causa ignorada de um efeito conhecido.',
                        'O homem argumenta, a natureza age.'
                    ]
                },
                {
                    id: 11,
                    author: 'William Shakespeare',
                    quotes: 
                    [
                        'Tudo o que nasce deve morrer, passando pela natureza em direção à eternidade.',
                        'Não sujes a fonte em que mataste a sede.',
                        'A desconfiança é o farol que guia o prudente.',
                        'A suspeita sempre persegue a consciência culpada; o ladrão vê em cada sombra um policial.',
                        'Choramos ao nascer porque chegamos a este imenso cenário de dementes.',
                        'Em tempo de paz convém ao homem serenidade e humildade; mas quando estoura a guerra deve agir como um tigre!',
                        'Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.',
                        'Os miseráveis não têm outro remédio a não ser a esperança.',
                        'Todo mundo é capaz de dominar uma dor, exceto quem a sente.',
                        'A alegria evita mil males e prolonga a vida.'
                    ]
                },
                {
                    id: 12,
                    author: 'Mario Quintana',
                    quotes: 
                    [
                        'O segredo é não correr atrás das borboletas. É cuidar do jardim para que elas venham até você.',
                        'A eternidade é um relógio sem ponteiros.',
                        'Se eu amo a meu semelhante? Sim. Mas onde encontrar o meu semelhante?',
                        'A poesia não se entrega a quem a define.',
                        'Os verdadeiros analfabetos são os que aprenderam a ler e não leem.',
                        'Quem pretende apenas a glória não a merece.',
                        'Às vezes a gente pensa que está dizendo bobagens e está fazendo poesia',
                        'Despertador é bom para a gente se virar para o outro lado e dormir de novo.',
                        'A indulgência é a maneira mais polida de desprezar alguém.',
                        'Nada jamais continua, tudo vai recomeçar!'
                    ]
                },
                {
                    id: 13,
                    author: 'Paulo Freire',
                    quotes: 
                    [
                        'A humildade exprime uma das raras certezas de que estou certo: a de que ninguém é superior a ninguém.',
                        'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.',
                        'Ninguém nasce feito, é experimentando-nos no mundo que nós nos fazemos.',
                        'Mudar é difícil mas é possível.',
                        'Não é no silêncio que os homens se fazem, mas na palavra, no trabalho, na ação-reflexão',
                        'É fundamental diminuir a distância entre o que se diz e o que se faz, de tal forma que, num dado momento, a tua fala seja a tua prática.',
                        'Amar é um ato de coragem.',
                        'Não há saber mais ou saber menos: há saberes diferentes.',
                        'A educação, qualquer que seja ela, é sempre uma teoria do conhecimento posta em prática.',
                        'Ninguém ignora tudo. Ninguém sabe tudo. Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso aprendemos sempre.'
                    ]
                },
                {
                    id: 14,
                    author: 'Chico Science',
                    quotes: 
                    [
                        'Um passo à frente e você não está mais no mesmo lugar.',
                        'Os problemas são problemas demais se não correr atrás da maneira certa de solucionar',
                        'Eu me organizando posso desorganizar.',
                        'Por detrás de algo que se esconde, á sempre uma grande mina de conhecimentos e sentimentos',
                        'Sempre certo na contramão',
                        'Uma cerveja antes do almoço é muito bom pra ficar pensando melhor',
                        'Um homem roubado nunca se engana',
                        'O medo dá origem ao mal, o homem coletivo sente a necessidade de lutar. O orgulho, a arrogância, a glória enche a imaginação de domínio',
                        'Não há mistérios em descobrir, o que você é e o que você faz'
                    ]
                },
                {
                    id: 15,
                    author: 'Hermes Trimegisto',
                    quotes: 
                    [
                        'O Homem nada sabe; mas é chamado a tudo conhecer.',
                        'Aquilo que está em cima é como aquilo que está em baixo',
                        'Os lábios da sabedoria estão fechados,exceto aos ouvidos do entendimento'
                    ]
                },
                {
                    id: 16,
                    author: 'Chico Buarque',
                    quotes: 
                    [
                        'Você que inventou a tristeza, ora, tenha a fineza de desinventar.',
                        'E pela minha lei, a gente era obrigado a ser feliz.',
                        'As pessoas têm medo das mudanças. Eu tenho medo que as coisas nunca mudem',
                        'Mas mesmo aquilo que a gente não se lembra de ter visto um dia, talvez se possa ver depois por algum viés da lembrança',
                        'Quem me vê sempre parado, distante, garante que eu não sei sambar… Tô me guardando pra quando o carnaval chegar.',
                        'Ouça um bom conselho que eu lhe dou de graça: inútil dormir que a dor não passa',
                        'Diga ao primeiro que passa que eu sou da cachaça mais que do amor.',
                        'Para sempre é sempre por um triz.',
                        'Não se afobe não que nada é pra já!',
                        'O olhar de uma mulher faz pouco até de Deus, mas não engana uma outra mulher',
                    
                    ]
                },
                {
                    id: 17,
                    author: 'Gilberto Gil',
                    quotes: 
                    [
                        'Se eu quiser falar com Deus, tenho que ficar a sós.',
                        'Quem quer ser mais do que é,um dia há de sofrer.',
                        'Andá com fé eu vou, que a fé não costuma faiá',
                        'Fogo eterno pra afugentar o inferno pra outro lugar',
                        'Pra você que me esqueceu, aquele abraço!',
                        'Mundo tão desigual, tudo é tão desigual. De um lado esse carnaval, de outro a fome total',
                        'Água mole, pedra dura, tanto bate que não restará nem pensamento',
                        'Já pensou, tudo sempre igual? Ser mais do mesmo o tempo todo não é tão legal',
                        'Todo mundo tem seu jeito singular de ser feliz, de viver e de enxergar',
                        'Quem diz uma coisa com dez palavras é porque não sabe dizer com cinco. Falo muito porque não sei falar.'
                        
                    ]
                },
                {
                    id: 18,
                    author: 'Kurt Cobain',
                    quotes: 
                    [
                        'A cada dia todos nós passamos pelo céu e pelo inferno!',
                        'Amigo autêntico é aquele que mesmo sabendo tudo sobre você ainda continua sendo seu amigo.',
                        'Não se influencie por ninguém, vá por si só.',
                        'Sabe viver quem dedica um dia ao sonho e outro à realidade.',
                        'As coisas tem um brilho que com o tempo se vai.',
                        'Melhor queimar do que apagar aos poucos.',
                        'Querer ser outra pessoa é uma completa perda de tempo da pessoa que você é.',
                        'Eu acho que eu sou um bobão. Ou talvez eu seja apenas feliz.',
                        'Eu prefiro ser odiado pelo que sou, do que amado pelo que eu não sou.',
                        'Paz, amor e empatia'
                    ]
                },
                {
                    id: 19,
                    author: 'Epicuro',
                    quotes: 
                    [
                    'A justiça é a vingança do homem em sociedade, como a vingança é a justiça do homem em estado selvagem.',
                    'Se queres a verdadeira liberdade, deves fazer-te servo da filosofia.',
                    'Nada é bastante ao homem para quem tudo é demasiado pouco.',
                    'Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade.',
                    'Cada um deixa a vida como se tivesse acabado de começá-la.',
                    'É estupidez pedir aos deuses aquilo que se pode conseguir sozinho.',
                    'A liberdade é o maior fruto da autossuficiência.',
                    'Não se pode não ter medo quando se inspira o medo.',
                    'Os grandes navegadores devem sua reputação aos temporais e tempestades.',
                    'Toda a amizade é desejável por si própria, mas inicia-se pela necessidade do que é útil.',
                    'Por que ter medo da morte? Enquanto somos, a morte não existe, e quando ela passa a existir, nós deixamos de ser.',
                    'Faz tudo como se alguém te contemplasse.',
                    'Lembre-se de que aquilo que você tem hoje, um dia esteve entre as coisas que desejava.'
                    ]
                },
                {
                    id: 20,
                    author: 'Friedrich Nietzsche',
                    quotes: 
                    [
                        'Aquilo que se faz por amor está sempre além do bem e do mal.',
                        'Ninguém pode construir em teu lugar as pontes que precisarás para atravessar o rio da vida ? ninguém, exceto tu, só tu.',
                        'A essência da felicidade é não ter medo.',
                        'É mais fácil lidar com uma má consciência do que com uma má reputação.',
                        'Temos a arte para não morrer da verdade.',
                        'A moralidade é a melhor de todas as regras para orientar a humanidade.',
                        'A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez.',
                        'Não há fatos eternos, como não há verdades absolutas',
                        'Tudo é precioso para aquele que foi, por muito tempo, privado de tudo.',
                        'O homem é uma corda esticada entre o animal e o super-homem, uma corda por cima do abismo.',
                        'Para a maioria, quão pequena é a porção de prazer que basta para fazer a vida agradável!',
                        'Logo que comunicamos os nossos conhecimentos, deixamos de gostar deles suficientemente.',
                        'O macaco é um animal demasiado simpático para que o homem descenda dele.',
                        'Os métodos são as verdadeiras riquezas. ',
                        'Nossa dor vem da distância entre aquilo que somos e o que idealizamos ser.',
                        'Se o conhecimento pode criar problemas, não é através da ignorância que podemos solucioná-los.',
                        'O amor é o estado no qual os homens têm mais probabilidades de ver as coisas tal como elas não são.',
                        'Se um homem tiver realmente muita fé, pode dar-se ao luxo de ser cético.',
                        'É preciso ter um caos dentro de si para dar à luz uma estrela cintilante.',
                        'Detesto quem me rouba a solidão, sem em troca me oferecer verdadeiramente companhia.'
                    ]
                },
                {
                    id: 21,
                    author: 'Clóvis de Barros Filho',
                    quotes: 
                    [
                        'A vida é uma sequência de encontros inéditos com o mundo, e portanto ela não se deixa traduzir em fórmulas de nenhuma espécie.',
                        'Você sabe que encontrou a felicidade quando vive um momento que não quer que acabe.',
                        'O universo é uma zona infinita, povoado por energia em trânsito. Logo a vida boa é com energia, com potência de agir. Alegria..',
                        'O mundo te respeitará na exata proporção que você não tiver medo dele. Por que tudo é só uma relação de forças..',
                        'Feliz é aquele que consegue enxergar na alegria dos outros o resultado de suas ações.',
                        'Pra trás, nem pra pegar impulso!.',
                        'Você é o espectador de si mesmo',
                        'Você tem brio?',
                        'Quando a felicidade começa antes, é melhor pra vida. Se precisar esperar sexta às 18h para a vida ser feliz, desculpa, a tua vida é muito ruim.',
                        'É bem mais legal se você se encantar com você mesmo.'
                    ]
                },
                {
                    id: 22,
                    author: 'Baruch Spinoza',
                    quotes: 
                    [
                        'Compreender é o começo da aprovação.',
                        'O amor é a alegria acompanhada da ideia de uma causa exterior.',
                        'Sendo todas as outras coisas iguais, o desejo que nasce da alegria é mais forte que o desejo que nasce da tristeza.',
                        'Não chore; não seja indigno. Entenda',
                        'Não é por julgarmos uma coisa boa que nos esforçamos por ela, que a queremos, que a apetecemos, que a desejamos, mas, ao contrário, é por nos esforçarmos por ela, por querê-la, por apetecê-la, por desejá-la, que a julgamos boa',
                        'Paz não é a ausência de guerra. É uma virtude, um estado mental, uma disposição para a benevolência, confiança e justiça.',
                        'Todo ser é potência e a potencialidade de cada um se desenvolve na relação.',
                        'Se o conhecimento estivesse ao alcance da mão e pudesse ser encontrado sem qualquer dificuldade, seria certamente negligenciado. Tudo que é nobre é tão difícil quanto raro.',
                        'O homem livre, no que pensa menos é na morte, e a sua sabedoria é uma meditação, não da morte, mas da vida.'
                    ]
                },
                {
                    id: 23,
                    author: 'René Descartes',
                    quotes: 
                    [
                        'Daria tudo que sei pela metade do que ignoro.',
                        'A leitura de todos os bons livros é uma conversação com as mais honestas pessoas dos séculos passados.',
                        'Não há nada que dominemos inteiramente a não ser os nossos pensamentos.',
                        'Não basta termos um bom espírito, o mais importante é aplicá-lo bem.',
                        'Os homens que se emocionam com as paixões são capazes de ter mais doçura na vida.',
                        'As paixões são todas boas por natureza e nós apenas temos de evitar o seu mau uso e os seus excessos.',
                        'Quando se é demasiado curioso de coisas praticadas nos séculos passados, é comum ficar-se ignorante das que se praticam no presente.',
                        'É propriamente não valer nada não ser útil a ninguém.',
                        'Divide as dificuldades que tenhas de examinar em tantas partes quantas for possível para uma melhor solução.',
                        'Penso, logo existo.',
                        'Não é suficiente ter uma boa mente: o principal é usá-la bem.',
                        'Para examinar a verdade, é necessário, uma vez na vida, colocar todas as coisas em dúvida o máximo possível.',
                        
                    ]
                },
                {
                    id: 24,
                    author: 'Tales de Mileto',
                    quotes: 
                    [
                        'A esperança é o único bem comum a todos os homens; aqueles que nada mais têm ainda a possuem.',
                        'Tomai para vóz os conselhos que derdes a outros.',
                        'Muitas palavras não indicam necessariamente muita sabedoria.',
                        'O maior é o espaço porque dentro dele cabe tudo.O mais veloz é o intelecto porque passa através de tudo.A mais forte é a necessidade porque tudo domina.O mais sábio é o tempo porque tudo revela.',
                        'Tenha sempre um plano "B" para todos os seus projetos. Busque o melhor e prepare-se para o pior, porque a vida é só dos vencedores.',
                        'Procure sempre uma ocupação; quando o tiver não pense em outra coisa além de procurar fazê-lo bem feito.',
                        'A água é o princípio de todas as coisas.',
                        'Todas as coisas estão cheias de deuses.',
                        'O maior é o espaço, porque encerra tudo.',
                        'Use suas palavras com cuidado; que eles não construam um muro entre você e aqueles que vivem com você.',
                    ]
                },
                {
                    id: 25,
                    author: 'Confúcio',
                    quotes: 
                    [
                        'Aja antes de falar e, portanto, fale de acordo com os seus atos.',
                        'A experiência é uma lanterna dependurada nas costas que apenas ilumina o caminho já percorrido.',
                        'Coloque a lealdade e a confiança acima de qualquer coisa; não te alies aos moralmente inferiores; não receies corrigir teus erros',
                        'A melhor maneira de ser feliz é contribuir para a felicidade dos outros.',
                        'De nada vale tentar ajudar aqueles que não se ajudam a si mesmos.',
                        'Não corrigir as próprias falhas é cometer a pior delas.',
                        'Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos.',
                        'É mais fácil vencer um mau hábito hoje do que amanhã.',
                        'Para quê preocuparmo-nos com a morte? A vida tem tantos problemas que temos de resolver primeiro.',
                        'Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.',
                        'Transportai um punhado de terra todos os dias e fareis uma montanha.',
                        'Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer.',
                        'Somente os extremamente sábios e os extremamente estúpidos é que não mudam.',
                        'Não importa o quanto você vá devagar desde que não pare.',
                        'Eu não procuro saber as respostas, procuro compreender as perguntas.'
            
                    ]
                },
                {
                    id: 26,
                    author: 'Heráclito ',
                    quotes: 
                    [
                        'Não se pode entrar duas vezes no mesmo rio.',
                        'Muito estudo não ensina compreensão.',
                        'O caminho para cima e o caminho para baixo são um único caminho.',
                        'Paremos de indagar o que o futuro nos reserva e recebamos como um presente o que quer que nos traga o dia de hoje.',
                        'Ninguém entra em um mesmo rio uma segunda vez, pois quando isso acontece já não se é o mesmo, assim como as águas que já serão outras.',
                        'O homem que volta ao mesmo rio, nem o rio é o mesmo rio, nem o homem é o mesmo homem',
                        'Olhos são testemunhas melhores do que ouvidos.',
                        'Para mim um único homem é dez mil, se ele for o melhor.',
                        'É necessário a necessidade da realidade.',
                        'A lei é como uma cerca - quando é forte a gente passa por baixo; quando é fraca a gente passa por cima.',
                        'Os homens vivem a sua morte, e morrem as suas vidas!',
                        'São iguais, os vivos e os mortos, os que estão acordados e os que dormem, os jovens e os velhos: porque cada um destes opostos quando se transformam tornam-se o anterior.'
                    ]
                },
                {
                    id: 27,
                    author: 'Immanuel Kant',
                    quotes: 
                    [
                        'Podemos julgar o coração de um homem pela forma como ele trata os animais.',
                        'O homem não é nada além daquilo que a educação faz dele.',
                        'Toda reforma interior e toda mudança para melhor dependem exclusivamente da aplicação do nosso próprio esforço.',
                        'A sabedoria das mulheres não é raciocinar, é sentir.',
                        'Quanto mais amor temos, tanto mais fácil fazemos a nossa passagem pelo mundo',
                        'Todo o conhecimento humano começou com intuições, passou daí aos conceitos e terminou com ideias.',
                        'Não há garantias. Do ponto de vista do medo, ninguém é forte o suficiente. Do ponto de vista do amor, ninguém é necessário.',
                        'A missão suprema do homem é saber o que precisa para ser homem.',
                        'Quem não sabe o que busca, não identifica o que acha.',
                        'Você é livre no momento em que não busca fora de si mesmo alguém para resolver os seus problemas.',
                        'Pensamentos sem conteúdos são vazios; intuições sem conceitos são cegas.',
                        'O sonho é uma arte poética involuntária.', 
                        'Há uma lógica curiosa e convincente, mesmo no mais perverso pensamento humano.'  
                    ]
                },
                {
                    id: 28,
                    author: ' Charles Bukowski',
                    quotes: 
                    [
                    'Nunca me senti só. Gosto de estar comigo mesmo. Sou a melhor forma de entretenimento que posso encontrar.',
                    'Se você vai tentar, vá até o fim, caso contrário, nem comece.',
                    'Bem, todos morrem um dia, é simples matemática. Nada de novo. A espera é que é um problema.',
                    'O indivíduo bem equilibrado é insano.',
                    'A diferença entre a Arte e a Vida é que a Arte é mais suportável.',
                    'Ás vezes você acha bondade no meio do inferno',
                    'Minha ambição é prejudicada pela preguiça.',
                    'Se o homem pode fazer apenas uma pessoa feliz durante toda uma vida, então sua vida foi justificada.',
                    'Se você está perdendo sua alma e você sabe disso, então você ainda tem uma alma a perder.',
                    'Às vezes, me sinto como se estivéssemos todos presos num filme. Sabemos nossas falas, onde caminhar, como atuar, só que não há uma câmera. No entanto, não conseguimos sair do filme. E é um filme ruim.',
                    'Ser são é fácil, mas pra ser bêbado tem que ter talento.',
                    'A vida pode ser boa em certos momentos, mas, às vezes, isso depende de nós.'
                    ]
                },
                {
                    id: 29,
                    author: 'Ferris Bueller',
                    quotes: 
                    [
                        'A vida passa muito depressa. Se não paramos para curti-la de vez em quando, ela passa e você nem vê!'
                    ]
                },
                {
                    id: 30,
                    author: 'Martin Luther King',
                    quotes: 
                    [
                        'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
                        'Se um homem não descobriu nada pelo qual morreria, não está pronto para viver',
                        'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.',
                        'Se não puder voar, corra. Se não puder correr, ande. Se não puder andar, rasteje, mas continue em frente de qualquer jeito.',
                        'A injustiça num lugar qualquer é uma ameaça à justiça em todo o lugar.',
                        'Temos de aprender a viver todos como irmãos ou morreremos todos como loucos.',
                        'Nossas vidas começam a terminar no dia em que permanecemos em silêncio sobre as coisas que importam.',
                        'Mesmo as noites totalmente sem estrelas podem anunciar a aurora de uma grande realização.',
                        'Inteligência e caráter: eis o objetivo da verdadeira educação.',
                        'Hoje é sempre o dia certo de fazer as coisas certas, de maneira certa, amanhã será tarde.'
                    ]
                },
                {
                    id: 31,
                    author: 'Fernando Pessoa',
                    quotes: 
                    [
                        'Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido',
                        'Tudo vale a pena quando a alma não é pequena.',
                        'Tenho em mim todos os sonhos do mundo.',
                        'A arte é a autoexpressão lutando para ser absoluta',
                        'Porque eu sou do tamanho do que vejo, e não do tamanho da minha altura...',
                        'Precisar de dominar os outros é precisar dos outros. O chefe é um dependente.',
                        'Há tanta suavidade em nada dizer e tudo entender...',
                        'Para viajar basta existir.',
                        'Tudo o que chega, chega sempre por alguma razão.',
                        'Tudo é orgulho e inconsciência. Tudo é querer mexer-se, fazer cousas, deixar rastro',
                        'É preciso ser um realista para descobrir a realidade. É preciso ser um romântico para criá-la.',
                        'Adoramos a perfeição, porque não a podemos ter; repugna-la-íamos se a tivéssemos. O perfeito é o desumano porque o humano é imperfeito.',
                        'Saber ser supersticioso ainda é uma das artes que, realizadas a auge, marcam o homem superior.',
                        'O coração, se pudesse pensar, pararia.',
                        'Sentir é criar. Sentir é pensar sem ideias, e por isso sentir é compreender, visto que o Universo não tem ideias.'
                    ]
                },
                {
                    id: 32,
                    author: 'Bertolt Brecht',
                    quotes: 
                    [
                        'Perante um obstáculo, a linha mais curta entre dois pontos pode ser a curva.',
                        'Apenas quando somos instruídos pela realidade é que podemos mudá-la.',
                        'O amor é a arte de criar algo com a ajuda da capacidade do outro.',
                        'Temam menos a morte e mais a vida insuficiente.',
                        'Um homem tem sempre medo de uma mulher que o ame muito.',
                        'A confiança pode exaurir-se caso seja muito exigida.',
                        'Quem não conhece a verdade não passa de um tolo; mas quem a conhece e a chama de mentira é um criminoso!',
                        'Todos correm atrás da felicidade sem perceber que a felicidade está nos seus calcanhares.',
                        'O que é roubar um banco comparado a fundar um banco?',
                        'Pergunta sempre a cada idéia: a quem serves?',
                        'A verdade é filha do tempo e não da autoridade.',
                        'Todas as artes contribuem para a maior de todas as artes, a arte de viver.',
                        'Nada deve parecer natural. Nada deve parecer impossível de mudar.',
                        'Não há problema em hesitar se depois prosseguir.',
                        'As convicções são esperanças.'
                    ]
                },
                {
                    id: 33,
                    author: 'Alice no País das Maravilhas — Lewis Carroll',
                    quotes: 
                    [
                        'Se você não sabe para onde ir, qualquer caminho serve'
                    ]
                },
                {
                    id: 34,
                    author: 'Batman - O Cavaleiro das Trevas',
                    quotes: 
                    [
                        'Faça seus medos terem medo de você.'
                    ]
                },
                {
                    id: 35,
                    author: 'Nina Simone',
                    quotes: 
                    [
                        'Você tem que aprender a levantar-se da mesa quando o amor não estiver mais sendo servido.',
                        'Esse é o mundo que vocês construiram, agora vão ter que viver nele.',
                        'Eu te digo o que a liberdade significa para mim: não ter medo.'
                    ]
                }    
            ])
        }
    })
}
