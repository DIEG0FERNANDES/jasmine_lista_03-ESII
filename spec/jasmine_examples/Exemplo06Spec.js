//Exe6
// Faça uma suíte de teste para converter cm para m.
describe("Faça uma suíte de teste para validar a conversão de cm para m", function () {
    var cm = 150;
    var conv = 100;
    var m = cm / conv
    it('deve validar a conversão de centimetros para metros',function() {
      expect(m).toBe(1.5);
      // expect(conv).toBe(2);
    });
});