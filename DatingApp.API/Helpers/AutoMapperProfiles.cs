using AutoMapper;
using System.Linq;
using DatingApp.API.Models;
using DatingApp.API.Dtos;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // CreateMap<Source, Destination>();
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<PhotosForCreationDto, Photo>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<MessageForCreationDto, Message>().ReverseMap();
            CreateMap<Message,MessageToReturnDto>()
                .ForMember(dest => dest.SenderPhotoUrl, opt => {
                    opt.MapFrom(src => src.Sender.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.RecipientPhotoUrl, opt => {
                    opt.MapFrom(src => src.Recipient.Photos.FirstOrDefault(p => p.IsMain).Url);
                });
        }
    }
}