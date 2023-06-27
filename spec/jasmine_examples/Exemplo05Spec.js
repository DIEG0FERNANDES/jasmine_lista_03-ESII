//Exe 5
//Faça uma suíte de teste para validar a quantidade de salários mínimos que um funcionário ganha, a partir das entradas: valor do salário mínimo e o valor do salário de um funcionário. %.
describe("Faça uma suíte de teste para validar a quantidade de salarios minoimo ", function () {
    valMin = 1302;
    valFun = 6510;
    qtSal = valFun/valMin;
    it('deve validar a quantidade de salarios',function() {
      expect(qtSal).toBe(5);
      // expect(qtSal).toBe(8);
    });
  });