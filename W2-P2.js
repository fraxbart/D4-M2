/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
    name: 'Joh',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

  me.skills.pop();
  console.log(me);
  me.skills.pop();
  console.log(me); */
  
  /* ESERCIZIO 2
    Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
   */
  
   /* let i=0;
    var numero=0;

    for(i=0;numero<=100;i++){
        if(numero%2!=0){
            console.log(numero);
            
        }
        numero++;
    } *

    /* modo 2 con array */

   /* const arr =[];
    let i=0;

    for(i=0; i<=100; i++){
        if(i%2!=0){
            arr.push(i);
            
        }
    }
    console.log(arr); */


  /* ESERCIZIO 3
    Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
   */

   /* const arr = [];
    let i=0;

    for(i=0; i<=10;i++){
        const rand = Math.floor(Math.random()*100+1);
        arr.push(rand);
    }
    console.log(arr); */
  
  /* ESERCIZIO 4
    Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
   */

   /* const arr = [];
    let i=0;
    const arr3 = [1,3,6,8,9,10];

    for(i=0;i<arr3.length;i++){
        if(arr3[i]%2==0){
            arr.push(arr3[i]);
        }
    }

    console.log(arr); */


  
  /* ESERCIZIO 5
    Scrivi del codice per sommare a catena i numeri contenuti in un array.
   */
    
  /*  let somma=0;
    const arr3 = [2,4,6,8,10];
    let i=0;


    for(i=0;i<arr3.length;i++){
        somma=somma+arr3[i];
    }

    console.log(somma); */

  /* ESERCIZIO 6
    Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
  */
    /* const arr = [];
    const arr3 = [3,5,8];
    let i=0;

    for(i=0; i<arr3.length;i++){
        arr[i]=arr3[i]+1;
    }

    console.log(arr); */
    
  /* ESERCIZIO 7 (EXTRA)
    Scrivi del codice per eliminare solo i valori PARI da un array.
  */

 /*   const arr = [1, 4, 7, 9, 6, 4, 5];
    let i=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr.splice(i--,1);
        }
    }

    console.log(arr); */

  
  /* ESERCIZIO 8
    Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
   */

   /* const arr = [];
    let i=0;

    for(i=0;i<10;i++){
        const rand = Math.floor(Math.random()*10+1);
        arr.push(rand);
    }

    console.log(arr); */

  
  /* ESERCIZIO 9
    Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
    es.: ["EPICODE", "is", "great"] => [7, 2, 5]
  */

   /* const arr =["EPICODE", "is", "great"];
    let i=0;

    for(i=0;i<arr.length;i++){
      arr[i]=arr[i].length;
    }
    console.log(arr); */
  
  /* ESERCIZIO 10
    Scrivi un algoritmo in grado di invertire un array.
    es: [1, 3, 5] ==> [5, 3, 1]
  */

  /*  const arr = [1,3,5];
    arr.reverse();
    console.log(arr); */

  /* ESERCIZIO 11
    Scrivi del codice per estrarre il massimo valore numerico da un array.
  */

  /*  const arr =[1,3,5];
    let i=0;
    let max=0;
    for(i=0;i<arr.length;i++){
      if(arr[i]>max){
        max=arr[i];
      }
    }
    console.log(max); */
  
  /* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
  const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  
  /* ESERCIZIO 12
    Scrivi del codice per trovare il film più vecchio nell'array fornito.
  */
    
  /*  let annomassimo=parseInt(movies[0].Year);
    let filmpiuvecchio=0;

    for(i=0;i<movies.length;i++){
      const annoriferimento= parseInt(movies[i].Year);
      if(annoriferimento>annomassimo){
        filmpiuvecchio=movies[i];
      }

    }
    console.log(filmpiuvecchio); */

  
  /* ESERCIZIO 13
    Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
  */
   /* const arr = ["pippo","inzaghi" ,"desica"]
    let i=0;
    let contatore=0;

    for(i=0;i<arr.length;i++){
      contatore=contatore+1;
    }
    console.log(contatore); */

  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */

   /* const titles = [];
    let i=0;
    for(i=0;i<movies.length;i++){
      titles.push(movies[i].Title);
    }
    console.log(titles); */
  
  /* ESERCIZIO 15
    Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */

  /*  const thisMil =[];
    let i=0;

    for(i=0;i<movies.length;i++){
      
      if(parseInt(movies[i].Year)>2000) {
        thisMil.push=(movies[i]);
    } } 

    console.log(thisMil); 
*/
 
  
  /* ESERCIZIO 16
    Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
  */
 /* const id = 'tt0355702'
  let i=0;
  let valore=0;

  for(i=0;i<movies.length;i++){
      if(movies[i].imdbID===id){
          valore=movies[i];
          break;
      }
  }
  console.log(valore); */
  
  /* ESERCIZIO 17
    Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

   /* let i=0;
    let somma=0;

    for(i=0;i<movies.length;i++){
      somma=somma+parseInt(movies[i].Year);
    }
    console.log(somma); */

  
  /* ESERCIZIO 18
    Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
  */
  
  /* const parola= "Ring";
    const risultato =[];
    let i=0;

    for(i=0;i<movies.length;i++){
      if(movies[i].Title.includes(parola)){
        risultato.push=(movies[i]);
      }
    }
    console.log(risultato); */

