export interface NavigationType {
  url: string;
  label: string;
}

const navigation: NavigationType[] = [
  {
    url: '/quem-somos',
    label: 'Quem Somos'
  },
  {
    url: '/servicos',
    label: 'Serviços'
  },
  {
    url: '/planos',
    label: 'Planos'
  }
];

export default navigation;
