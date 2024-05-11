using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfocusConsole.Entidades
{
    public class Inscricao
    {
        public int Id{get; set;}
        public Curso Curso {get; set;}
        public Aluno Aluno {get; set;}

        public DateTime Data {get; set;} = DateTime.Now;
        //Funciona definindo o valor quando é criado a instância
        

    }
}
