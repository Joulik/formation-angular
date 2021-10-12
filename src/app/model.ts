export class Matiere {
    public Id: number;
    public Titre: string;
    public Duree: number;
    public Objectifs: string;
    public PreRequis: string;
    public Programme: string;

    constructor(id?: number, titre?: string, duree?: number, objectifs?: string, preRequis?: string, programme?: string) {
        this.Id = id;
        this.Titre = titre;
        this.Duree = duree;
        this.Objectifs = objectifs;
        this.PreRequis = preRequis;
        this.Programme = programme;
    }
}

export abstract class Personne {

    public Id: number;
    public PersonneType: string;
    //public Civilite Civilite;
    public Nom: string;
    public Prenom: string;
    // public Email: string;
    // public Telephone: string;
    // public AdresseId: number;
    // public Adresse: Adresse;

    constructor(Id:number, PersonneType: string, Nom:string, Prenom:string) {
        this.Id = Id;
        this.PersonneType = PersonneType;
        this.Nom = Nom;
        this.Prenom = Prenom;
    }
}

export class Formateur {
    public Id: number;
    public Externe: boolean;
    //public UtilisateurId: number;
    public competences: Array<Matiere> = new Array<Matiere>();

    constructor(Id: number, Externe: boolean, competences:Array<Matiere>) {
        this.Id=Id;
        this.Externe=Externe;
        this.competences=competences;
    }
}

export class Stagiaire extends Personne {

    public DateNaissance: Date;
    public CursusId:number;
    public Cursus: Cursus;
    // public List<Evaluation> Evaluations { get; set; } = new List<Evaluation>();

    constructor(Id?: number, PersonneType?:string, Nom?:string, Prenom?:string, DateNaissance?: Date, CursusId?: number, Cursus?: Cursus) {
        super(Id,PersonneType,Nom,Prenom);
        this.DateNaissance = DateNaissance;
        this.CursusId = CursusId;
        this.Cursus = Cursus;
    } 
}

export class Cursus{

    public Id : number ;
    public  Intitule : string;
    public  DateDebut :Date;
    public  DateFin : Date;
    public Stagiaires : Array<Stagiaire>  = new Array<Stagiaire>();

    constructor(id: number, intitule : string, datedebut:Date, datefin : Date, stagiaires: Array<Stagiaire>){
        this.Id=id;
        this.Intitule=intitule;
        this.DateDebut=datedebut;
        this.DateFin=datefin;
        this.Stagiaires=stagiaires;
    }
}

