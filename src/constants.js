export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `function greet() {\n\tconsole.log("Hello World in JavaScript!");\n}\n\ngreet();\n`,
  typescript: `type Params = {\n\tlanguage: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello World in " + data.language + "!");\n}\n\ngreet({ language: "TypeScript" });\n`,
  python: `def greet(language):\n\tprint("Hello World in " + language + "!")\n\ngreet("Python")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World in Java!");\n\t}\n}\n`,
  csharp: 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Hello World in PHP';\necho $name;\n\n?>\n",
};