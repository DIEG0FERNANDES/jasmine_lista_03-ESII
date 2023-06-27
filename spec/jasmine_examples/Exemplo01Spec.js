//Exe1
//Faça uma suíte de teste para validar a soma de dois números fornecidos pelo usuário.
//Valide em outro teste “it” se os números estão entre -1000 e 1000.
describe("Faça uma suíte de teste para validar a soma de dois números fornecidos pelo usuário", function () {
    var n1 = 50;
    var n2 = 50;
    var soma = n1 + n2;
    it("deve validar a soma de dois números", function () {
      expect(soma).toBe(100);
      // expect(soma).toBe(60)
    });
    // var n3 = -1500;
    var n4 = 480;
    it("deve validar se os números estão entre -1000 e 1000", function () {
      // expect(n3).toBeLessThan(1000);
      // expect(n3).not.toBeLessThan(-1000);
      expect(n4).toBeLessThan(1000);
      expect(n4).not.toBeLessThan(-1000);
    });
  });