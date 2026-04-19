import { format } from "sql-formatter";
import { format as prettierFormat } from "prettier";
import * as prettierPluginBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";
import * as prettierPluginHtml from "prettier/plugins/html";
import formatter from "xml-formatter";
import cronstrue from "cronstrue";

export const formatSql = (sql: string) => format(sql);

export const beautifyCode = async (code: string, parser: 'babel' | 'html') => {
  return await prettierFormat(code, {
    parser,
    plugins: [prettierPluginBabel, prettierPluginEstree, prettierPluginHtml],
  });
};

export const formatXml = (xml: string) => formatter(xml);

export const explainCron = (cron: string) => cronstrue.toString(cron);
