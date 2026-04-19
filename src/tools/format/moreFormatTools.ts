import { format } from "graphql-prettier";
import { MarkdownTable } from "markdown-table-ts";
import katex from "katex";

export const prettifyGraphQL = (query: string) => format(query);

export const generateMarkdownTable = (data: any[]) => {
  const table = new MarkdownTable(data);
  return table.table();
};

export const renderLatex = (equation: string) => {
    return katex.renderToString(equation, { throwOnError: false });
};
