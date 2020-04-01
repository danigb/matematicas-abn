import React, { useState } from "react";
import Layout from "../components/Layout";
import { Header1, Header2, Header4, Paragraph } from "../components/Theme";
import { Link } from "gatsby";
import {
  Exercise,
  CONTAR,
  NUMEROS_AMIGOS,
  SUMAS,
  RESTAS,
  MULTIPLICACIONES,
  TABLA_DE_MULTIPLICAR,
  Group
} from "../exercises/list";

const List: React.FC = ({ children }) => (
  <div className="flex flex-col flex-wrap lg:flex-row">{children}</div>
);

const Item: React.FC<Exercise> = ({ title, url, description }) => (
  <Link
    className="flex flex-col px-4 bg-orange-300 rounded-md mr-4 mb-4 max-w-1/2"
    to={url}
  >
    <Header4>{title}</Header4>
    {description && <Paragraph>{description}</Paragraph>}
  </Link>
);

const ExerciseGroup: React.FC<Group> = ({ title, description, exercises }) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="text-left mb-8 rounded-md">
      <Header2>{title}</Header2>
      {description && <Paragraph>{description}</Paragraph>}
      {isOpen && (
        <div className="flex flex-col flex-wrap lg:flex-row">
          {exercises.map(exercise => (
            <Item key={exercise.url} {...exercise} />
          ))}
        </div>
      )}
    </div>
  );
};

const Indice: React.FC = () => {
  return (
    <Layout>
      <Header1>Aprende los números</Header1>
      <Paragraph>Pensado para infantil</Paragraph>
      <ExerciseGroup {...CONTAR} />

      <Header1>Cálculo mental</Header1>
      <Paragraph>Pensado para 1º y 2º de primaria</Paragraph>

      <ExerciseGroup {...NUMEROS_AMIGOS} />
      <ExerciseGroup {...SUMAS} />
      <ExerciseGroup {...RESTAS} />
      <ExerciseGroup {...TABLA_DE_MULTIPLICAR} />
      <ExerciseGroup {...MULTIPLICACIONES} />
    </Layout>
  );
};

export default Indice;
