import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-imc-calc',
  templateUrl: './imc-calc.component.html',
  styleUrls: ['./imc-calc.component.css']
})

export class ImcCalcComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;

  classificacao: string = '';

  calcularIMC(): void {
    const peso = parseFloat(this.peso.toString());
    const altura = parseFloat(this.altura.toString()) / 100.0; // converter altura para metros
  
    if (peso && altura) { // certificar-se de que as entradas são números válidos
      const imc = peso / (altura * altura);
      this.imc = parseFloat(imc.toFixed(2)); // arredondar o resultado para duas casas decimais
  
      if (imc < 18.5) {
        this.classificacao = 'Magreza';
      } else if (imc < 25) {
        this.classificacao = 'Normal';
      } else if (imc < 30) {
        this.classificacao = 'Sobrepeso';
      } else if (imc < 35) {
        this.classificacao = 'Obesidade grau I';
      } else if (imc < 40) {
        this.classificacao = 'Obesidade grau II';
      } else {
        this.classificacao = 'Obesidade grau III';
      }
    } else {
      this.imc = 0;
      this.classificacao = '';
    }
  }
}

