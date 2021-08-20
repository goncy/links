export interface PageProps {
  actions?: Action[];
  title: string;
  app: string | undefined;
}

export interface Action {
  label: string;
  url: string;
}

export interface File {
  name: string;
  icon: StaticImageData;
  path: string;
}
