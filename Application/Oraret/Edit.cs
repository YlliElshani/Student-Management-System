using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Oraret
{
    public class Edit
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
                var orari = await _context.Oraret.FindAsync(request.OrariId);

                if (orari == null)
                    throw new Exception("Could not find subject");
                    
                orari.Gjenerata = request.Gjenerata ?? orari.Gjenerata;
                orari.Klasa = request.Klasa ?? orari.Klasa;
                orari.Nderrimi = request.Nderrimi ?? orari.Nderrimi;
                orari.Dita = request.Dita ?? orari.Dita;
                orari.LendaHen1 = request.LendaHen1 ?? orari.LendaHen1;
                orari.LendaHen2 = request.LendaHen2 ?? orari.LendaHen2;
                orari.LendaHen3 = request.LendaHen3 ?? orari.LendaHen3;
                orari.LendaHen4 = request.LendaHen4 ?? orari.LendaHen4;
                orari.LendaHen5 = request.LendaHen5 ?? orari.LendaHen5;
                orari.LendaHen6 = request.LendaHen6 ?? orari.LendaHen6;
                orari.LendaHen7 = request.LendaHen7 ?? orari.LendaHen7;

                orari.ProfaHen1 = request.ProfaHen1 ?? orari.ProfaHen1;
                orari.ProfaHen2 = request.ProfaHen2 ?? orari.ProfaHen2;
                orari.ProfaHen3 = request.ProfaHen3 ?? orari.ProfaHen3;
                orari.ProfaHen4 = request.ProfaHen4 ?? orari.ProfaHen4;
                orari.ProfaHen5 = request.ProfaHen5 ?? orari.ProfaHen5;
                orari.ProfaHen6 = request.ProfaHen6 ?? orari.ProfaHen6;
                orari.ProfaHen7 = request.ProfaHen7 ?? orari.ProfaHen7;

                orari.KohaHen1 = request.KohaHen1 ?? orari.KohaHen1;
                orari.KohaHen2 = request.KohaHen1 ?? orari.KohaHen2;
                orari.KohaHen3 = request.KohaHen1 ?? orari.KohaHen3;
                orari.KohaHen4 = request.KohaHen1 ?? orari.KohaHen4;
                orari.KohaHen5 = request.KohaHen1 ?? orari.KohaHen5;
                orari.KohaHen6 = request.KohaHen1 ?? orari.KohaHen6;
                orari.KohaHen7 = request.KohaHen1 ?? orari.KohaHen7;

                orari.LendaMar1 = request.LendaMar1 ?? orari.LendaMar1;
                orari.LendaMar2 = request.LendaMar2 ?? orari.LendaMar2;
                orari.LendaMar3 = request.LendaMar3 ?? orari.LendaMar3;
                orari.LendaMar4 = request.LendaMar4 ?? orari.LendaMar4;
                orari.LendaMar5 = request.LendaMar5 ?? orari.LendaMar5;
                orari.LendaMar6 = request.LendaMar6 ?? orari.LendaMar6;
                orari.LendaMar7 = request.LendaMar7 ?? orari.LendaMar7;

                orari.ProfaMar1 = request.ProfaMar1 ?? orari.ProfaMar1;
                orari.ProfaMar2 = request.ProfaMar2 ?? orari.ProfaMar2;
                orari.ProfaMar3 = request.ProfaMar3 ?? orari.ProfaMar3;
                orari.ProfaMar4 = request.ProfaMar4 ?? orari.ProfaMar4;
                orari.ProfaMar5 = request.ProfaMar5 ?? orari.ProfaMar5;
                orari.ProfaMar6 = request.ProfaMar6 ?? orari.ProfaMar6;
                orari.ProfaMar7 = request.ProfaMar7 ?? orari.ProfaMar7;

                orari.KohaMar1 = request.KohaMar1 ?? orari.KohaMar1;
                orari.KohaMar2 = request.KohaMar2 ?? orari.KohaMar2;
                orari.KohaMar3 = request.KohaMar3 ?? orari.KohaMar3;
                orari.KohaMar4 = request.KohaMar4 ?? orari.KohaMar4;
                orari.KohaMar5 = request.KohaMar5 ?? orari.KohaMar5;
                orari.KohaMar6 = request.KohaMar6 ?? orari.KohaMar6;
                orari.KohaMar7 = request.KohaMar7 ?? orari.KohaMar7;

                orari.LendaMer1 = request.LendaMer1 ?? orari.LendaMer1;
                orari.LendaMer2 = request.LendaMer2 ?? orari.LendaMer2;
                orari.LendaMer3 = request.LendaMer3 ?? orari.LendaMer3;
                orari.LendaMer4 = request.LendaMer4 ?? orari.LendaMer4;
                orari.LendaMer5 = request.LendaMer5 ?? orari.LendaMer5;
                orari.LendaMer6 = request.LendaMer6 ?? orari.LendaMer6;
                orari.LendaMer7 = request.LendaMer7 ?? orari.LendaMer7;

                orari.ProfaMer1 = request.ProfaMer1 ?? orari.ProfaMer1;
                orari.ProfaMer2 = request.ProfaMer2 ?? orari.ProfaMer2;
                orari.ProfaMer3 = request.ProfaMer3 ?? orari.ProfaMer3;
                orari.ProfaMer4 = request.ProfaMer4 ?? orari.ProfaMer4;
                orari.ProfaMer5 = request.ProfaMer5 ?? orari.ProfaMer5;
                orari.ProfaMer6 = request.ProfaMer6 ?? orari.ProfaMer6;
                orari.ProfaMer7 = request.ProfaMer7 ?? orari.ProfaMer7;

                orari.KohaMer1 = request.KohaMer1 ?? orari.KohaMer1;
                orari.KohaMer2 = request.KohaMer2 ?? orari.KohaMer2;
                orari.KohaMer3 = request.KohaMer3 ?? orari.KohaMer3;
                orari.KohaMer4 = request.KohaMer4 ?? orari.KohaMer4;
                orari.KohaMer5 = request.KohaMer5 ?? orari.KohaMer5;
                orari.KohaMer6 = request.KohaMer6 ?? orari.KohaMer6;
                orari.KohaMer7 = request.KohaMer7 ?? orari.KohaMer7;

                orari.LendaEnjt1 = request.LendaEnjt1 ?? orari.LendaEnjt1;
                orari.LendaEnjt2 = request.LendaEnjt2 ?? orari.LendaEnjt2;
                orari.LendaEnjt3 = request.LendaEnjt3 ?? orari.LendaEnjt3;
                orari.LendaEnjt4 = request.LendaEnjt4 ?? orari.LendaEnjt4;
                orari.LendaEnjt5 = request.LendaEnjt5 ?? orari.LendaEnjt5;
                orari.LendaEnjt6 = request.LendaEnjt6 ?? orari.LendaEnjt6;
                orari.LendaEnjt7 = request.LendaEnjt7 ?? orari.LendaEnjt7;

                orari.ProfaEnjt1 = request.ProfaEnjt1 ?? orari.ProfaEnjt1;
                orari.ProfaEnjt2 = request.ProfaEnjt2 ?? orari.ProfaEnjt2;
                orari.ProfaEnjt3 = request.ProfaEnjt3 ?? orari.ProfaEnjt3;
                orari.ProfaEnjt4 = request.ProfaEnjt4 ?? orari.ProfaEnjt4;
                orari.ProfaEnjt5 = request.ProfaEnjt5 ?? orari.ProfaEnjt5;
                orari.ProfaEnjt6 = request.ProfaEnjt6 ?? orari.ProfaEnjt6;
                orari.ProfaEnjt7 = request.ProfaEnjt7 ?? orari.ProfaEnjt7;

                orari.KohaEnjt1 = request.KohaEnjt1 ?? orari.KohaEnjt1;
                orari.KohaEnjt2 = request.KohaEnjt2 ?? orari.KohaEnjt2;
                orari.KohaEnjt3 = request.KohaEnjt3 ?? orari.KohaEnjt3;
                orari.KohaEnjt4 = request.KohaEnjt4 ?? orari.KohaEnjt4;
                orari.KohaEnjt5 = request.KohaEnjt5 ?? orari.KohaEnjt5;
                orari.KohaEnjt6 = request.KohaEnjt6 ?? orari.KohaEnjt6;
                orari.KohaEnjt7 = request.KohaEnjt7 ?? orari.KohaEnjt7;

                orari.LendaPre1 = request.LendaPre1 ?? orari.LendaPre1;
                orari.LendaPre2 = request.LendaPre2 ?? orari.LendaPre2;
                orari.LendaPre3 = request.LendaPre3 ?? orari.LendaPre3;
                orari.LendaPre4 = request.LendaPre4 ?? orari.LendaPre4;
                orari.LendaPre5 = request.LendaPre5 ?? orari.LendaPre5;
                orari.LendaPre6 = request.LendaPre6 ?? orari.LendaPre6;
                orari.LendaPre7 = request.LendaPre7 ?? orari.LendaPre7;

                orari.ProfaPre1 = request.ProfaPre1 ?? orari.ProfaPre1;
                orari.ProfaPre2 = request.ProfaPre2 ?? orari.ProfaPre2;
                orari.ProfaPre3 = request.ProfaPre3 ?? orari.ProfaPre3;
                orari.ProfaPre4 = request.ProfaPre4 ?? orari.ProfaPre4;
                orari.ProfaPre5 = request.ProfaPre5 ?? orari.ProfaPre5;
                orari.ProfaPre6 = request.ProfaPre6 ?? orari.ProfaPre6;
                orari.ProfaPre7 = request.ProfaPre7 ?? orari.ProfaPre7;

                orari.KohaPre1 = request.KohaPre1 ?? orari.KohaPre1;
                orari.KohaPre2 = request.KohaPre2 ?? orari.KohaPre2;
                orari.KohaPre3 = request.KohaPre3 ?? orari.KohaPre3;
                orari.KohaPre4 = request.KohaPre4 ?? orari.KohaPre4;
                orari.KohaPre5 = request.KohaPre5 ?? orari.KohaPre5;
                orari.KohaPre6 = request.KohaPre6 ?? orari.KohaPre6;
                orari.KohaPre7 = request.KohaPre7 ?? orari.KohaPre7;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}