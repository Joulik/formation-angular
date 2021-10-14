export class Matiere {
    public id: number;
    public titre: string;
    public duree: number;
    public objectifs: string;
    public preRequis: string;
    public programme: string;
    public formateurs: Array<Formateur>;

    constructor(id?: number, titre?: string, duree?: number, objectifs?: string, preRequis?: string, programme?: string) {
        this.id = id;
        this.titre = titre;
        this.duree = duree;
        this.objectifs = objectifs;
        this.preRequis = preRequis;
        this.programme = programme;
        this.formateurs = new Array<Formateur>();
    }
}

export abstract class Personne {

    public id: number;
    public personneType: string;
    //public Civilite Civilite;
    public nom: string;
    public prenom: string;
    // public Email: string;
    // public Telephone: string;
    // public AdresseId: number;
    // public Adresse: Adresse;

    constructor(Id:number, PersonneType: string, Nom:string, Prenom:string) {
        this.id = Id;
        this.personneType = PersonneType;
        this.nom = Nom;
        this.prenom = Prenom;
    }
}

/*export class Formateur extends Personne {
    // public Id: number;
    public Externe: boolean;
    //public UtilisateurId: number;
    public Competences: Array<Matiere> = new Array<Matiere>();

    constructor(Id?: number, PersonneType?:string, Nom?:string, Prenom?:string, Externe?: boolean, Competences?:Array<Matiere>) {
        super(Id,PersonneType,Nom,Prenom);
        this.Externe=Externe;
        this.Competences=Competences;
    }
}*/

export class Formateur {
    public id: number;
    public nom: string;
    public prenom: string;
    public email: string;

    constructor(id?: number, nom?: string, prenom?: string, email?: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}

export class Stagiaire extends Personne {

    public dateNaissance: Date;
    public cursusId:number;
    public cursus: Cursus;
    // public List<Evaluation> Evaluations { get; set; } = new List<Evaluation>();

    constructor(Id?: number, PersonneType?:string, Nom?:string, Prenom?:string, DateNaissance?: Date, CursusId?: number, Cursus?: Cursus) {
        super(Id,PersonneType,Nom,Prenom);
        this.dateNaissance = DateNaissance;
        this.cursusId = CursusId;
        this.cursus = Cursus;
    } 
}

export class Cursus{

    public id : number ;
    public intitule : string;
    public dateDebut :Date;
    public dateFin : Date;
    public stagiaires : Array<Stagiaire>  = new Array<Stagiaire>();

    constructor(id?: number, intitule? : string, datedebut?:Date, datefin?: Date, stagiaires?: Array<Stagiaire>){
        this.id=id;
        this.intitule=intitule;
        this.dateDebut=datedebut;
        this.dateFin=datefin;
        this.stagiaires=stagiaires;
    }
}

