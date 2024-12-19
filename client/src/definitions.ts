interface Typographies {
  content: string;
  css?: string;
}

export interface Headings extends Typographies {
  kind: "h1" | "h2" | "h3";
}

export interface Paragraphs extends Typographies {
  kind: "p" | "span";
}
