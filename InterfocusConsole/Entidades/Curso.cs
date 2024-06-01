using System.ComponentModel.DataAnnotations;

namespace InterfocusConsole.Entidades
{
    public class Curso{
        public int Id {get; set;}
        [Required, StringLength(50, MinimumLength = 5)]
        public string Nome { get; set; }
        [Required]
        public string Descricao {get; set;}

        public NivelCurso Nivel {get; set;}
        // 0 - iniciante 1 - intermediario 2 - avançado 3 - expert
        public int Duracao {get; set;}

        // void metodo(){
        //     if (Nivel == NivelCurso.Intermediario)
        // }

    }

    public enum NivelCurso{
        Iniciante = 0,
        Intermediario = 1,
        Avancado = 2,
        Expert = 3
    }
}
