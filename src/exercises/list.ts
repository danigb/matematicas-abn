export type Exercise = {
  title: string;
  url: string;
  description?: string;
};

export type Group = {
  title: string;
  description?: string;
  exercises: Exercise[];
};

export const CONTAR: Group = {
  title: "Contar",
  exercises: [
    {
      title: "Contar puntos",
      url: "/aprender-a-contar/contar-puntos",
      description: "Escribe el número de puntos que aparece"
    }
  ]
};

export const NUMEROS_AMIGOS: Group = {
  title: "Números amigos",
  description: "Aprende los amigos del 10 y del 100",
  exercises: [
    {
      title: "Amigos del 10",
      url: "/calculo-mental/amigos-del-10",
      description: "Busca los amigos del 10. Por ejemplo: Amigo del 7 = 3"
    },
    {
      title: "Amigos del 100",
      url: "/calculo-mental/amigos-del-100-decenas",
      description:
        "Busca los amigos del 100 con decenas. Por ejemplo: Amigo del 70 = 30"
    }
  ]
};

export const SUMAS: Group = {
  title: "Sumas",
  description: "Practica sumas de cabeza",
  exercises: [
    {
      title: "Suma unidades",
      url: "/calculo-mental/suma-unidades",
      description: "4 + 5 = 9"
    },
    {
      title: "Suma 3 unidades",
      url: "/calculo-mental/suma-unidades-3",
      description: "6 + 2 + 4 = 12"
    },
    {
      title: "Suma decenas",
      url: "/calculo-mental/suma-decenas",
      description: "60 + 20 = 80"
    },
    {
      title: "Suma 3 decenas",
      url: "/calculo-mental/suma-decenas-3",
      description: "20 + 50 + 40 = 110"
    },
    {
      title: "Suma centenas",
      url: "/calculo-mental/suma-centenas",
      description: "100 + 300 = 400"
    },
    {
      title: "Suma 3 centenas",
      url: "/calculo-mental/suma-centenas-3",
      description: "100 + 300 + 500 = 900"
    }
  ]
};

export const RESTAS: Group = {
  title: "Restas",
  description: "Practica restas de cabeza",
  exercises: [
    {
      title: "Resta unidades",
      url: "/calculo-mental/resta-unidades",
      description: "5 - 1 = 4"
    }
  ]
};

const NUM = [2, 3, 4, 5, 6, 7, 8, 9, 10];
export const MULTIPLICACIONES: Group = {
  title: "Multiplicaciones",
  description: "Practica la multiplicación de cabeza",
  exercises: NUM.map(num => ({
    title: `Multiplica por ${num}`,
    url: `/calculo-mental/multiplica-por-${num}`,
    description: `${num} x ${num} = ${num * num}`
  }))
};

export const TABLA_DE_MULTIPLICAR: Group = {
  title: "Tabla de multiplicar",
  description: "Aprende la tabla de multiplicar",
  exercises: [
    {
      title: `La tabla del...`,
      url: `/tabla-de-multiplicar/tabla-del`,
      description: `Por ejemplo, la del 2: 1, 2, 4, 8...`
    }
  ]
};
