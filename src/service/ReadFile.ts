import { Readable } from "stream";
import readline from "readline";

export class ReadFile {
  public async execute(buffer: any) {
    const file = new Readable();
    file.push(buffer);
    file.push(null);

    //linha 1
    //linha 2
    const fileLine = readline.createInterface({
      input: file,
    });

    const dados: any = [];

    for await (let line of fileLine) {
      const lineSplit = line.split(",");
      dados.push({
        preco: lineSplit[0],
        peso: lineSplit[1],
        quantity: lineSplit[2],
        marca: lineSplit[3],
        cor: lineSplit[4],
      });
    }

    return dados;
  }
}
