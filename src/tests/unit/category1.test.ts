import { describe, it, expect } from 'vitest';
import { jsonToTypescript } from '@/tools/data/jsonToTypescript';
import { jsonToGo } from '@/tools/data/jsonToGo';
import { jsonToJava } from '@/tools/data/jsonToJava';
import { jsonToPython } from '@/tools/data/jsonToPython';
import { xmlToJson } from '@/tools/data/xmlToJson';
import { yamlToJson, jsonToYaml } from '@/tools/data/yamlJson';
import { csvToJson, jsonToCsv } from '@/tools/data/csvJson';
import { tomlToJson } from '@/tools/data/tomlToJson';
import { sqlToJson } from '@/tools/data/sqlToJson';
import { jsonToHtmlTable } from '@/tools/data/jsonToHtmlTable';

describe('Category 1: Data Transformers', () => {
  const sampleJson = JSON.stringify({ id: 1, name: "Test" });

  it('Tool 1: jsonToTypescript', () => {
    const result = jsonToTypescript(sampleJson);
    expect(result).toContain('interface RootObject');
    expect(result).toContain('id: number');
  });

  it('Tool 2: jsonToGo', () => {
    const result = jsonToGo(sampleJson);
    expect(result).toContain('type RootObject struct');
    expect(result).toContain('Id int `json:"id"`');
  });

  it('Tool 3: jsonToJava', () => {
    const result = jsonToJava(sampleJson);
    expect(result).toContain('public class RootObject');
    expect(result).toContain('private Long id');
  });

  it('Tool 4: jsonToPython', () => {
    const result = jsonToPython(sampleJson);
    expect(result).toContain('@dataclass');
    expect(result).toContain('class RootObject:');
    expect(result).toContain('id: int');
  });

  it('Tool 5: xmlToJson', () => {
    const xml = '<root><id>1</id></root>';
    const result = xmlToJson(xml);
    expect(JSON.parse(result).root.id).toBe(1);
  });

  it('Tool 6: yamlToJson / jsonToYaml', () => {
    const yaml = 'id: 1\nname: Test';
    const json = yamlToJson(yaml);
    expect(JSON.parse(json).id).toBe(1);
    const backToYaml = jsonToYaml(json);
    expect(backToYaml).toContain('id: 1');
  });

  it('Tool 7: csvToJson / jsonToCsv', () => {
    const csv = 'id,name\n1,Test';
    const json = csvToJson(csv);
    expect(JSON.parse(json)[0].id).toBe(1);
    const backToCsv = jsonToCsv(json);
    expect(backToCsv).toContain('id,name');
  });

  it('Tool 8: tomlToJson', () => {
    const toml = 'id = 1\nname = "Test"';
    const result = tomlToJson(toml);
    expect(JSON.parse(result).id).toBe(1);
  });

  it('Tool 9: sqlToJson', () => {
    const sql = "INSERT INTO users (id, name) VALUES (1, 'Test');";
    const result = sqlToJson(sql);
    expect(JSON.parse(result)[0].id).toBe(1);
  });

  it('Tool 10: jsonToHtmlTable', () => {
    const jsonArr = JSON.stringify([{ id: 1, name: "Test" }]);
    const result = jsonToHtmlTable(jsonArr);
    expect(result).toContain('<table');
    expect(result).toContain('Test</td>');
  });
});
