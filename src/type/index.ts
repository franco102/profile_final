export type LinkPortafolio={
    url:string
    title:string
}
export type socialNetworks={
    url:string
    icon:string
    title:string
}
export type Hobbie={ 
    icon:string
    title:string
}
export type Skills={
    percentage: number;
    type: string;
    name: string;
}
export type Curriculum={
    type: string;
    tittle: string;
    subTitle: string;
    date: string;
    description: string;
}
export type Portafolio= {
    img: string;
    title: string;
    description: string;
    url: string;
}

export type FormEmail ={
    name: string
    email: string
    subject: string
    message: string
    phone: string
}