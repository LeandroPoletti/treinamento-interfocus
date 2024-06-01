namespace InterfocusConsole.Entidades
{
    public class Curso{
        public virtual int Id {get; set;}

        public virtual string Nome { get; set; }

        public virtual string Descricao {get; set;}

        public virtual NivelCurso Nivel {get; set;}
        // 0 - iniciante 1 - intermediario 2 - avançado 3 - expert
        public virtual int Duracao {get; set;}

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
