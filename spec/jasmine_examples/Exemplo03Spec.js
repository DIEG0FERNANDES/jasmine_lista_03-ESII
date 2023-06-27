//Exe 3
// Faça uma suíte de teste para validar o estoque médio da equação a seguir:
describe("Faça uma suíte de teste para validar o estoque médio da equação a seguir", function () {
    var qtMin = 10;
    var qtMax = 50;
    var estqMedio = ((qtMin+qtMax) / 2);
    it("deve validar o estoque médio", function () {
      expect(estqMedio).toBe(30);
      // expect(estqMedio).toBe(2);
    });
  });
