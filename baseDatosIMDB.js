class Professional {

    


    constructor(name, age, genre, weight, height, hairColor,
                eyeColor, race, isRetired, nationality, oscarsNumber,profession, foto){
                
                this.name = name;
                this.age = age;
                this.genre = genre;
                this.weight = weight;
                this.height = height;
                this.hairColor = hairColor;
                this.eyeColor = eyeColor;
                this.race = race;
                this.isRetired = isRetired;
                this.nationality = nationality;
                this.oscarsNumber = oscarsNumber;
                this.profession = profession;
                this.foto = foto;
                }

    toString()
    {
        return "- NAME: " + this.name + "\n" + "- AGE: " + this.age + "\n" + "- GENRE: " + this.genre + "\n" +
               "- WEIGTH: " + this.weight + "\n" + "- HEIGTH: " + this.height + "\n" + "- HAIR COLOR: " + this.hairColor + "\n" + 
               "- EYES COLOR: " + this.eyeColor + "\n" + "- RACE: " + this.race + "\n" + "- IS RETIRED: " + this.isRetired + "\n" +
               "- NATIONALITY: " + this.nationality + "\n" + "- OSCARS NUMBER: " + this.oscarsNumber + "\n" + 
               "- PROFESSION: " + this.profession + "\n"

    }

    mostrarAtributos()
    {
        console.log(this.toString());
    }

}



class Movie {
    



    constructor(title, releaseYear, nationality, genre, foto) {

            this.title = title;
            this.releaseYear = releaseYear;
            this.nationality = nationality;
            this.genre = genre;
            this.foto = foto;
            
    }

    
    toString()
    {
        return "*  Details of movie: " + "\n" + 

                "- TITLE: " + this.title + "\n" + 

                "- RELEASE YEAR: " + this.releaseYear + "\n" + 

                "- ACTORS: " + this.actors + "\n" + 

                "- NATIONALITY: " + this.nationality + "\n" + 

                "- DIRECTOR: " + this.director + "\n" + 

                "- WRITER: " + this.writer + "\n" + 

                "- LANGUAGE: " + this.language + "\n" + 

                "- PLATAFORM: " + this.plataform + "\n" + 

                "- IS MCU: " + this.isMCU + "\n" + 

                "- MAIN CHARACTER NAME: " + this.mainCharacterName + "\n" + 

                "- PRODUCER: " + this.producer + "\n" + 

                "- DISTRIBUTOR: " + this.distributor + "\n" + 
                
                "- GENRE: " + this.genre 

    }


    


}

let person1 = new Professional("John Soplapo", 69, "Male", 87 , 1.85 , "Blonde", "Blue", "Mongoloid", true, "Australian",  5, "Actor", "https://img4.s3wfg.com/web/img/images_uploaded/6/6/trumptonto.gif");
let person2 = new Professional("Vladimir Putin", 53, "Male", 90, 1.92, "Bald", "Green", "Caucasian", false, "Russian", 0, "Director","https://www.infobae.com/new-resizer/aFSEFshYxqekmNQnh2CbDzh04bk=/768x512/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/16092829/2019-03-14T113734Z_1010715600_RC1497A8D440_RTRMADP_3_RUSSIA-BUSINESS-PUTIN.jpg");
let person3 = new Professional("Andrea Mostacho", 34, "Female", 61, 1.69, "Black", "Blue", "Caucasian", false, "Italian", 2, "Actor","https://cde.peru.com//ima/0/0/6/9/6/696581/611x458/chiste.jpg");
let person4 = new Professional("Miguel Lacambra", 30, "Male", 80, 1.70, "Black", "Black", "Caucasian", false, "Spanish", 1, "Actor","https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/01/14/15790218627103.jpg");
let person5 = new Professional("Angel Demon", 48, "Male", 120, 1.60, "Bald", "Blue", "Black", true, "EEUU", 3 ,"Writer","https://s03.s3c.es/imag/_v2/ecodiario/gente_estilo/225x250/angel-cristo.jpg");


let movie1 = new Movie("Ovejas asesinas", 2002, "Spain", "Terror","https://fotos.subefotos.com/946f349ef51afbb2e219826f368c340bo.jpg");

movie1.actors = [person1.name, person3.name, person4.name];
movie1.director = person2.name;
movie1.writer = person5.name;
movie1.language = "Spanish";
movie1.plataform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Martin Cabrales";
movie1.producer = "Jordi ENP";
movie1.distributor = "Mis Cojo...";


let movie2 = new Movie("Niggas in da house", 2012, "EEUU", "Comedy","https://pbs.twimg.com/media/By9UE61IMAI6beB?format=jpg&name=small");

movie2.actors = [person1.nombre, person3.name, person4.name];
movie2.director = person2.name;
movie2.writer = person5.name;
movie2.language = "English";
movie2.plataform = "Prime-video";
movie2.isMCU = false;
movie2.mainCharacterName = "Erik Dick Head";
movie2.producer = "Eminem";
movie2.distributor = "KAMEHAMEHA";


let movie3 = new Movie("El despierto no está dormido", 1995, "Spain", "Drama","https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdameditorialTelevisamexicomuyinteresantemxpreguntas-y-respuestas16113falling-asleep.imgo_.jpg");

movie3.actors = [person1.name, person3.name, person4.name];
movie3.director = person2.name;
movie3.writer = person5.name;
movie3.language = "Spanish";
movie3.plataform = "X-Video";
movie3.isMCU = true;
movie3.mainCharacterName = "Jordi ENP";
movie3.producer = "La Duquesa de Alba";
movie3.distributor = "Foro Coches";

let movie4 = new Movie("El palacio", 2010, "Spain", "Comedia","https://cdn1.guias-viajar.com/wp-content/uploads/2016/08/Santander-Magdalena-FB-008-2-600x329.jpg");

movie4.actors = [person1.name, person3.name, person4.name];
movie4.director = person2.name;
movie4.writer = person5.name;
movie4.language = "Spanish";
movie4.plataform = "Chat-Roullet";
movie4.isMCU = false;
movie4.mainCharacterName = "Cardoso Estropicio";
movie4.producer = "Franco";
movie4.distributor = "Napalm";

let movie5 = new Movie("MADAFAKA", 2005, "EE.UU", "Terror"," https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/20121408_1377788685589999_687685873816294820_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=fPdPSu0ru5sAX-e_TLn&_nc_ht=scontent-mad1-1.xx&oh=5404cca43b4c583473eddb5a2ac52c2f&oe=5F6EA027");

movie5.actors = [person1.name, person3.name, person4.name];
movie5.director = person2.name;
movie5.writer = person5.name;
movie5.language = "Spanish";
movie5.plataform = "VHX";
movie5.isMCU = true;
movie5.mainCharacterName = "Tus Muertos";
movie5.producer = "Ana Chocholoco";
movie5.distributor = "Cocaina";

let movie6 = new Movie("Pedos locos", 2008, "Spain", "Drama","https://i2.wp.com/marcianos.com/wp-content/uploads/2017/08/por-que-es-bueno-tirarse-pedos-fb.jpg?fit=758%2C398");

movie6.actors = [person1.name, person3.name, person4.name];
movie6.director = person2.name;
movie6.writer = person5.name;
movie6.language = "Spanish";
movie6.plataform = "XXX";
movie6.isMCU = false;
movie6.mainCharacterName = "Jordi Foso";
movie6.producer = "Carmen Ebola";
movie6.distributor = "Foro Castaña";

let movie7 = new Movie("Mis muertos", 2014, "Spain", "Comedia","https://sooluciona.com/wp-content/uploads/2019/04/Que%CC%81-estilo-musical-tocan-Todos-Tus-Muertos.jpg");

movie7.actors = [person1.name, person3.name, person4.name];
movie7.director = person2.name;
movie7.writer = person5.name;
movie7.language = "Spanish";
movie7.plataform = "Cara mierder.com";
movie7.isMCU = true;
movie7.mainCharacterName = "La Pechotes";
movie7.producer = "Carmen de Mairena";
movie7.distributor = "NA NA NA";

let movie8 = new Movie("Mis muertos Part2", 2016, "Spain", "Terror","https://images.clarin.com/2016/08/22/SJR7JTKNe_1256x620.jpg");

movie8.actors = [person1.name, person3.name, person4.name];
movie8.director = person2.name;
movie8.writer = person5.name;
movie8.language = "Spanish";
movie8.plataform = "PornHub";
movie8.isMCU = true;
movie8.mainCharacterName = "El Negro";
movie8.producer = "Cara Anchoa";
movie8.distributor = "Netflix";

let movie9 = new Movie("Animales", 2015, "Spain", "Documental","https://www.latercera.com/resizer/omUUgJXLDaWABpXW2YJ-tzVRC0A=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/X5XJCUHEIZGS7B2DEIOUK34A74.jpg");

movie9.actors = [person1.name, person3.name, person4.name];
movie9.director = person2.name;
movie9.writer = person5.name;
movie9.language = "Spanish";
movie9.plataform = "Albaracin";
movie9.isMCU = true;
movie9.mainCharacterName = "Peter el Anguila";
movie9.producer = "La Juani";
movie9.distributor = "InstaLoosers";

let movie10 = new Movie("Sopla Gaitas", 2020, "Spain", "Porno","https://pbs.twimg.com/profile_images/478894617966829569/kPjTjbz_.jpeg");

movie10.actors = [person1.name, person3.name, person4.name];
movie10.director = person2.name;
movie10.writer = person5.name;
movie10.language = "Spanish";
movie10.plataform = "Java";
movie10.isMCU = true;
movie10.mainCharacterName = "Calvo Brazzers";
movie10.producer = "Pitorro";
movie10.distributor = "X-Videos"





class Imdb 
{
     

    constructor(peliculas)
    {
        this.peliculas = peliculas;
    }

     escribirEnFicheroJSON(nombreFichero)
    {
        
        
        let newJson = JSON.stringify(this.peliculas);

        fs.writeFileSync(nombreFichero, newJson);

    }

     obtenerInstanciaIMDB(nombreFichero)
    {
       let newObjeto = fs.readFileSync(nombreFichero);
       let miImdb3 = new Imdb ([])
       
       miImdb3.peliculas = JSON.parse(newObjeto);

       return miImdb3
    }

     


}


let baseDatosIMDB = new Imdb([movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10]);

function mostrarDetalles(foto,detalle,numero){
     document.getElementById(detalle).innerHTML = baseDatosIMDB.peliculas[numero].toString()

      document.getElementById(foto).src = baseDatosIMDB.peliculas[numero].foto

     

}

function ocultarDetalles(foto,detalle){
    

    document.getElementById(detalle).innerHTML = ""
    document.getElementById(foto).src =""

}



