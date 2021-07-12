using AutoMapper;
using Domain;

namespace Application.MaterialiMesimor
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
       {
           CreateMap<Materiali, MaterialiDto>();
           
           CreateMap<ProfessorMaterial, ProfessorDto>()
            .ForMember(d => d.Username, opt => opt.MapFrom(s => s.AppUser.UserName))
            .ForMember(d => d.DisplayName, opt => opt.MapFrom(s => s.AppUser.DisplayName));
       } 
    }
}