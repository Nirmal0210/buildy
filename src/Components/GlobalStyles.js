import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  p{
    color: ${({ theme }) => theme.text} ;
    transition: all 0.50s linear;
  }
  a{
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  h1, h2, h3, h4, h5,h6{
    color: ${({ theme }) => theme.text} ;
    transition: all 0.50s linear;
  }
  .header__area{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .feature__list li{
    color: ${({ theme }) => theme.text} !important;
  }
  .header__nav a{
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
  }
  .header__nav .li-active a{
    color: rgb(246, 138, 10) !important;
  }
  .header__support p{
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
  }
  .header__support a{
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
  }
  .header__support a:hover{
    color: rgb(246, 138, 10) !important;
    transition: all 0.50s linear;
  }
  .header__offcanvas i{
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
  }
  .header__offcanvas i:hover{
    color: rgb(246, 138, 10) !important;
    transition: all 0.25s linear;
  }
  .menu-fixed{
    border-bottom: 1px solid ${({ theme }) => theme.border} !important;
  }
  .b-right{
    border-right: 1px solid ${({ theme }) => theme.border} !important;
  }
  .hero__content-2 h1{
    color: ${({ theme }) => theme.text} !important;
  }
  .hero__content-2 h1::after{
    background-color: ${({ theme }) => theme.text} !important
  }


  .feature__title-wrapper-2 .section-sub-title-2{
    color: ${({ theme }) => theme.text} !important;
  }
  .section-sub-title-2::after{
    background-color: ${({ theme }) => theme.text} !important;
  }
  .feature__title-wrapper-2 .section-title{
    color: ${({ theme }) => theme.text} !important;
  }
  .feature__tab-wrapper li button{
    color: ${({ theme }) => theme.text} !important;
  }
  .progress__left .progress__title{
    color: ${({ theme }) => theme.text} !important;
  }

  .case-study__title-wrapper-2 h2{
    color: ${({ theme }) => theme.text} !important;
  }
  .case-study__title-wrapper-2 h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .case-study__tab-btns button{
    color: ${({ theme }) => theme.text};
  }
  .case-study__tab-btns .active{
    color: rgb(246, 138, 10) !important;
  }
  .team__title-wrapper-2 h2{
    color: ${({ theme }) => theme.text} !important;
  }
  .team__title-wrapper-2 h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .team__info.team__info-2 a{
    color: ${({ theme }) => theme.text} !important;
  }
  .team__info.team__info-2 a:hover{
    color:  rgb(246, 138, 10) !important;
  }
  .testimonial__slide-2 p{
    color: ${({ theme }) => theme.text} !important;
  }
  .testimonial__slide-2 h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__title-wrapper h2{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__title-wrapper h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__btn a{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__btn a:hover{
    color:  rgb(246, 138, 10) !important;
  }
  .blog__item-wrapper-2 h5{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__item-wrapper-2 h5:hover{
    color:  rgb(246, 138, 10) !important;
  }
  .blog__btn-rm{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__btn-rm:hover{
    color:  rgb(246, 138, 10) !important;
  }
  .service__area{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .service__item-inner{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear !important;
    
  }
  .service__item-inner h4{
    color: ${({ theme }) => theme.text} !important;
  }
  .service__item::after{
    border: 1px solid ${({ theme }) => theme.border} !important;
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear !important;
  }
  .line::before, .line::after{
    background: ${({ theme }) => theme.border} !important;
  }
  .line2, .line-3, .line-4, .line-5, .line-6{
    background: ${({ theme }) => theme.border} !important;
  }

  .about__right-4 h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .about__content-3 h4, .about__content-3 h5, .about__content-3 p{
    color: ${({ theme }) => theme.text} !important;
  }
  .step__content h4{
    color: ${({ theme }) => theme.text} !important;
  }
  .service__title h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .team__title-wrapper h3{
    color: ${({ theme }) => theme.text} !important;
  }
  .team__info a{
    color: ${({ theme }) => theme.text} !important;
  }
  
  .section-sub-title-2{
    color: ${({ theme }) => theme.text} !important;
  }
  .section-sub-title-2::after{
    background-color: ${({ theme }) => theme.text} !important;
  }
  .section-title{
    color: ${({ theme }) => theme.text} !important;
  }
  .case-study__text strong{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__title-4{
    color: ${({ theme }) => theme.text} !important;
  }
  .blog__title-4:hover{
    color: rgb(246, 138, 10) !important;
  }

  .contact__title{
    color:${({ theme }) => theme.text} !important;
  }
  .contact__form label{
    color:${({ theme }) => theme.text} !important;
  }

  .widget__project-details{
    color:${({ theme }) => theme.text} !important;
  }
  .service__detail-title{
    color:${({ theme }) => theme.text} !important;
  }
  .service__detail-sub-title{
    color:${({ theme }) => theme.text} !important;
  }
  .blog__detail-share li{
    color:${({ theme }) => theme.text} !important;
  }
  .blog__detail-title{
    color:${({ theme }) => theme.text} !important;
  }
  .blog__detail-meta ul li a{
    color:${({ theme }) => theme.text} !important;
  }
  .blog__detail-meta ul li a:hover{
    color: rgb(246, 138, 10) !important;
  }
  .offcanvas__inner{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .offcanvas__left {
    border-right: 1px solid ${({ theme }) => theme.border};
  }
  .mean-li a{
    color: ${({ theme }) => theme.text};
  }
  .mean-li a:hover{
    color: rgb(246, 138, 10) !important;
  }
  .offcanvas__contact ul li a{
    color: ${({ theme }) => theme.text};
  }
  .offcanvas__contact ul li a:hover{
    color: rgb(246, 138, 10) !important;
  }
  .close_offcanvas i{
    color: ${({ theme }) => theme.text};
  }
  .close_offcanvas i:hover{
    color: rgb(246, 138, 10) !important;
  }
  `;
