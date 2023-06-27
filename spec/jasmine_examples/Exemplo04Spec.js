//Exe 4
// Faça uma suíte de teste para validar o novo preço de um produto, sabendo-se que o preço atual sofreu um desconto de 10%.
describe("Faça uma suíte de teste para validar o novo preço de um produto, sabendo-se que o preço atual sofreu um desconto de 10%", function () {
  var valor = 50;
  var desc = 10 / 100;
  var valF = valor * desc;
  it("deve validar preço final", function () {
    expect(valF).toBe(5);
    // expect(valF).toBe(10);
  });
});