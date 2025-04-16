'use client'

import { useContext, createContext } from "react";

type opinions = {
  opnion: string,
  id: string,
  name: string,
  stars: string
}[]

const UsersOpinions = createContext<opinions | null>(null)
export function useFunctionalites() {
    const opniosValue = useContext(UsersOpinions);
    if (!opniosValue) throw new Error("useFunctionalites must be used within a FunctionalitesProvider");
    return opniosValue;
}

export function FunctionalitesProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const opniosValue = [{
      opnion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo?',
      id: '1',
      name: 'Jonh',
      stars: '3'
    },
    {
      opnion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
      id: '2',
      name: 'Alice',
      stars: '5'
    },
    {
      opnion: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      id: '3',
      name: 'Mark',
      stars: '4'
    },
    {
      opnion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      id: '4',
      name: 'Sophia',
      stars: '2'
    },
    {
      opnion: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      id: '5',
      name: 'Carlos',
      stars: '3'
    },
    {
      opnion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
      id: '6',
      name: 'Emma',
      stars: '5'
    },
    {
      opnion: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
      id: '7',
      name: 'Liam',
      stars: '1'
    },
    {
      opnion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
      id: '8',
      name: 'Olivia',
      stars: '4'
    },
    {
      opnion: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
      id: '9',
      name: 'Lucas',
      stars: '2'
    },
    {
      opnion: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
      id: '10',
      name: 'Mia',
      stars: '5'
    }
  ];
    return <UsersOpinions.Provider value={opniosValue}>{children}</UsersOpinions.Provider>;
  }