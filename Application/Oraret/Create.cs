using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Oraret
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid OrariId { get; set; }
        public string  Gjenerata { get; set; }
        public string  Klasa { get; set; }
        public string  Nderrimi { get; set; }
        public string  Dita { get; set; }
        public string LendaHen1 {get; set; }
        public string LendaHen2 {get; set; }
        public string LendaHen3 {get; set; }
        public string LendaHen4 {get; set; }
        public string LendaHen5 {get; set; }
        public string LendaHen6 {get; set; }
        public string LendaHen7 {get; set; }

        public string ProfaHen1 {get; set; }
        public string ProfaHen2 {get; set; }
        public string ProfaHen3 {get; set; }
        public string ProfaHen4 {get; set; }
        public string ProfaHen5 {get; set; }
        public string ProfaHen6 {get; set; }
        public string ProfaHen7 {get; set; }

        public string KohaHen1 {get; set; }
        public string KohaHen2 {get; set; }
        public string KohaHen3 {get; set; }
        public string KohaHen4 {get; set; }
        public string KohaHen5 {get; set; }
        public string KohaHen6 {get; set; }
        public string KohaHen7 {get; set; }

        public string LendaMar1 {get; set; }
        public string LendaMar2 {get; set; }
        public string LendaMar3 {get; set; }
        public string LendaMar4 {get; set; }
        public string LendaMar5 {get; set; }
        public string LendaMar6 {get; set; }
        public string LendaMar7 {get; set; }

        public string ProfaMar1 {get; set; }
        public string ProfaMar2 {get; set; }
        public string ProfaMar3 {get; set; }
        public string ProfaMar4 {get; set; }
        public string ProfaMar5 {get; set; }
        public string ProfaMar6 {get; set; }
        public string ProfaMar7 {get; set; }

        public string KohaMar1 {get; set; }
        public string KohaMar2 {get; set; }
        public string KohaMar3 {get; set; }
        public string KohaMar4 {get; set; }
        public string KohaMar5 {get; set; }
        public string KohaMar6 {get; set; }
        public string KohaMar7 {get; set; }

        public string LendaMer1 {get; set; }
        public string LendaMer2 {get; set; }
        public string LendaMer3 {get; set; }
        public string LendaMer4 {get; set; }
        public string LendaMer5 {get; set; }
        public string LendaMer6 {get; set; }
        public string LendaMer7 {get; set; }

        public string ProfaMer1 {get; set; }
        public string ProfaMer2 {get; set; }
        public string ProfaMer3 {get; set; }
        public string ProfaMer4 {get; set; }
        public string ProfaMer5 {get; set; }
        public string ProfaMer6 {get; set; }
        public string ProfaMer7 {get; set; }

        public string KohaMer1 {get; set; }
        public string KohaMer2 {get; set; }
        public string KohaMer3 {get; set; }
        public string KohaMer4 {get; set; }
        public string KohaMer5 {get; set; }
        public string KohaMer6 {get; set; }
        public string KohaMer7 {get; set; }


        public string LendaEnjt1 {get; set; }
        public string LendaEnjt2 {get; set; }
        public string LendaEnjt3 {get; set; }
        public string LendaEnjt4 {get; set; }
        public string LendaEnjt5 {get; set; }
        public string LendaEnjt6 {get; set; }
        public string LendaEnjt7 {get; set; }

        public string ProfaEnjt1 {get; set; }
        public string ProfaEnjt2 {get; set; }
        public string ProfaEnjt3 {get; set; }
        public string ProfaEnjt4 {get; set; }
        public string ProfaEnjt5 {get; set; }
        public string ProfaEnjt6 {get; set; }
        public string ProfaEnjt7 {get; set; }

        public string KohaEnjt1 {get; set; }
        public string KohaEnjt2 {get; set; }
        public string KohaEnjt3 {get; set; }
        public string KohaEnjt4 {get; set; }
        public string KohaEnjt5 {get; set; }
        public string KohaEnjt6 {get; set; }
        public string KohaEnjt7 {get; set; }

        public string LendaPre1 {get; set; }
        public string LendaPre2 {get; set; }
        public string LendaPre3 {get; set; }
        public string LendaPre4 {get; set; }
        public string LendaPre5 {get; set; }
        public string LendaPre6 {get; set; }
        public string LendaPre7 {get; set; }
        

        public string ProfaPre1 {get; set; }
        public string ProfaPre2 {get; set; }
        public string ProfaPre3 {get; set; }
        public string ProfaPre4 {get; set; }
        public string ProfaPre5 {get; set; }
        public string ProfaPre6 {get; set; }
        public string ProfaPre7 {get; set; }


        public string KohaPre1 {get; set; }
        public string KohaPre2 {get; set; }
        public string KohaPre3 {get; set; }
        public string KohaPre4 {get; set; }
        public string KohaPre5 {get; set; }
        public string KohaPre6 {get; set; }
        public string KohaPre7 {get; set; }
            
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var orari = new Orari
                {
                    OrariId=request.OrariId,
                    Gjenerata=request.Gjenerata, 
                    Klasa=request.Klasa,
                    Nderrimi=request.Nderrimi,
                    Dita=request.Dita, 
                    LendaHen1=request.LendaHen1,
                    LendaHen2=request.LendaHen2,
                    LendaHen3=request.LendaHen3,
                    LendaHen4=request.LendaHen4,
                    LendaHen5=request.LendaHen5,
                    LendaHen6=request.LendaHen6,
                    LendaHen7=request.LendaHen7,

                    ProfaHen1=request.ProfaHen1,
                    ProfaHen2=request.ProfaHen2,
                    ProfaHen3=request.ProfaHen3,
                    ProfaHen4=request.ProfaHen4,
                    ProfaHen5=request.ProfaHen5,
                    ProfaHen6=request.ProfaHen6,
                    ProfaHen7=request.ProfaHen7,

                    KohaHen1=request.ProfaHen1,
                    KohaHen2=request.ProfaHen2,
                    KohaHen3=request.ProfaHen3,
                    KohaHen4=request.ProfaHen4,
                    KohaHen5=request.ProfaHen5,
                    KohaHen6=request.ProfaHen6,
                    KohaHen7=request.ProfaHen7,


                    LendaMar1=request.LendaMar1,
                    LendaMar2=request.LendaMar2,
                    LendaMar3=request.LendaMar3,
                    LendaMar4=request.LendaMar4,
                    LendaMar5=request.LendaMar5,
                    LendaMar6=request.LendaMar6,
                    LendaMar7=request.LendaMar7,

                    ProfaMar1=request.ProfaMar1,
                    ProfaMar2=request.ProfaMar2,
                    ProfaMar3=request.ProfaMar3,
                    ProfaMar4=request.ProfaMar4,
                    ProfaMar5=request.ProfaMar5,
                    ProfaMar6=request.ProfaMar6,
                    ProfaMar7=request.ProfaMar7,

                    KohaMar1=request.KohaMar1,
                    KohaMar2=request.KohaMar2,
                    KohaMar3=request.KohaMar3,
                    KohaMar4=request.KohaMar4,
                    KohaMar5=request.KohaMar5,
                    KohaMar6=request.KohaMar6,
                    KohaMar7=request.KohaMar7,

                    LendaMer1=request.LendaMer1,
                    LendaMer2=request.LendaMer2,
                    LendaMer3=request.LendaMer3,
                    LendaMer4=request.LendaMer4,
                    LendaMer5=request.LendaMer5,
                    LendaMer6=request.LendaMer6,
                    LendaMer7=request.LendaMer7,

                    ProfaMer1=request.ProfaMer1,
                    ProfaMer2=request.ProfaMer2,
                    ProfaMer3=request.ProfaMer3,
                    ProfaMer4=request.ProfaMer4,
                    ProfaMer5=request.ProfaMer5,
                    ProfaMer6=request.ProfaMer6,
                    ProfaMer7=request.ProfaMer7,

                    KohaMer1=request.KohaMer1,
                    KohaMer2=request.KohaMer2,
                    KohaMer3=request.KohaMer3,
                    KohaMer4=request.KohaMer4,
                    KohaMer5=request.KohaMer5,
                    KohaMer6=request.KohaMer6,
                    KohaMer7=request.KohaMer7,

                    LendaEnjt1=request.LendaEnjt1,
                    LendaEnjt2=request.LendaEnjt2,
                    LendaEnjt3=request.LendaEnjt3,
                    LendaEnjt4=request.LendaEnjt4,
                    LendaEnjt5=request.LendaEnjt5,
                    LendaEnjt6=request.LendaEnjt6,
                    LendaEnjt7=request.LendaEnjt7,

                    ProfaEnjt1=request.ProfaEnjt1,
                    ProfaEnjt2=request.ProfaEnjt2,
                    ProfaEnjt3=request.ProfaEnjt3,
                    ProfaEnjt4=request.ProfaEnjt4,
                    ProfaEnjt5=request.ProfaEnjt5,
                    ProfaEnjt6=request.ProfaEnjt6,
                    ProfaEnjt7=request.ProfaEnjt7,

                    KohaEnjt1=request.KohaEnjt1,
                    KohaEnjt2=request.KohaEnjt2,
                    KohaEnjt3=request.KohaEnjt3,
                    KohaEnjt4=request.KohaEnjt4,
                    KohaEnjt5=request.KohaEnjt5,
                    KohaEnjt6=request.KohaEnjt6,
                    KohaEnjt7=request.KohaEnjt7,

                    LendaPre1=request.LendaPre1,
                    LendaPre2=request.LendaPre2,
                    LendaPre3=request.LendaPre3,
                    LendaPre4=request.LendaPre4,
                    LendaPre5=request.LendaPre5,
                    LendaPre6=request.LendaPre6,
                    LendaPre7=request.LendaPre7,

                    ProfaPre1=request.ProfaPre1,
                    ProfaPre2=request.ProfaPre2,
                    ProfaPre3=request.ProfaPre3,
                    ProfaPre4=request.ProfaPre4,
                    ProfaPre5=request.ProfaPre5,
                    ProfaPre6=request.ProfaPre6,
                    ProfaPre7=request.ProfaPre7,
                    
                    KohaPre1=request.KohaPre1,
                    KohaPre2=request.KohaPre2,
                    KohaPre3=request.KohaPre3,
                    KohaPre4=request.KohaPre4,
                    KohaPre5=request.KohaPre5,
                    KohaPre6=request.KohaPre6,
                    KohaPre7=request.KohaPre7,

                };

                _context.Oraret.Add(orari);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}