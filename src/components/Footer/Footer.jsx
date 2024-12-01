import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'
import { FaLinkedin } from "react-icons/fa";

import { NavFooter } from '@/constants/Nav'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Link href={'/'}>
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.723 22.3727H48.4312V11.9317H52.3793V10.5H42.7749V11.9317H46.723V22.3727Z" fill="white"/>
                <path d="M55.8858 16.9393H58.5522L61.3385 22.3727H63.1432V22.2807L60.5433 17.2795H59.2573V16.8964C59.5895 16.8557 59.9188 16.7942 60.2433 16.7124C60.3483 16.6867 60.4576 16.6589 60.5498 16.6289L60.6355 16.6011C61.2267 16.4265 61.7545 16.0846 62.1551 15.6167C62.5939 15.0642 62.8218 14.374 62.7982 13.6693C62.8056 13.1094 62.6636 12.5577 62.3866 12.0708C62.0746 11.561 61.6107 11.1614 61.0599 10.928C60.4497 10.6427 59.6417 10.5 58.6358 10.5H54.199V22.3727H55.8773L55.8858 16.9393ZM55.8858 11.8696H58.5372C59.4524 11.8696 60.1018 12.0301 60.4898 12.349C60.6863 12.5216 60.8407 12.737 60.941 12.9785C61.0413 13.22 61.0849 13.4812 61.0685 13.7421C61.0833 14.0028 61.039 14.2636 60.9388 14.5048C60.8386 14.746 60.6851 14.9615 60.4898 15.1352C60.1018 15.4648 59.4524 15.6296 58.5372 15.6296H55.8858V11.8696Z" fill="white"/>
                <path d="M67.6229 10.5L63.752 22.2807V22.3727H65.4131L66.5062 18.9166H71.363L72.4561 22.3727H74.2394V22.2807L70.3663 10.5H67.6229ZM66.9584 17.4935L68.7503 11.8311H69.1168L70.9086 17.4935H66.9584Z" fill="white"/>
                <path d="M87.8968 22.3727L90.1388 10.592V10.5H88.5527L86.6022 21.093H86.2357L83.9038 10.5H81.0059L78.7061 21.093H78.3396L76.357 10.5H74.6809V10.592L76.9529 22.3727H79.9086L82.2255 11.7947H82.592L84.924 22.3727H87.8968Z" fill="white"/>
                <path d="M99.3295 20.941H93.7203V10.5H92.0121V22.3727H99.3295V20.941Z" fill="white"/>
                <path d="M102.866 16.6653H107.532V15.2957H102.866V11.9317H108.782V10.5H101.16V22.3727H108.874V20.941H102.866V16.6653Z" fill="white"/>
                <path d="M117.402 17.2795H116.14V16.8964C116.466 16.8562 116.79 16.7962 117.109 16.7167C117.85 16.5719 118.523 16.1868 119.023 15.621C119.46 15.0676 119.687 14.378 119.666 13.6736C119.673 13.1137 119.531 12.5619 119.254 12.075C118.942 11.5652 118.478 11.1657 117.927 10.9323C117.319 10.6469 116.511 10.5043 115.503 10.5043H111.069V22.3727H112.745V16.9392H115.411L118.197 22.3727H119.996V22.2807L117.402 17.2795ZM115.396 15.6274H112.745V11.8696H115.396C116.311 11.8696 116.961 12.0301 117.349 12.3489C117.545 12.5216 117.7 12.737 117.8 12.9785C117.9 13.22 117.944 13.4812 117.927 13.7421C117.942 14.0028 117.898 14.2636 117.798 14.5048C117.698 14.746 117.544 14.9615 117.349 15.1352C116.961 15.4648 116.311 15.6296 115.396 15.6296V15.6274Z" fill="white"/>
                <path d="M14.4484 16.3424L1.38461 16.3039C1.38461 16.3039 1.75541 18.7028 2.88496 20.3485L3.11216 20.4255C3.4314 20.5367 3.77821 20.5412 4.10024 20.4384L5.60059 19.9654C6.409 19.7108 7.27633 19.7108 8.08474 19.9654L9.60652 20.4469C9.91609 20.5453 10.2486 20.5453 10.5582 20.4469L12.0821 19.9654C12.8898 19.7108 13.7564 19.7108 14.5641 19.9654L16.088 20.4469C16.3976 20.5453 16.7301 20.5453 17.0397 20.4469L18.5615 19.9654C19.3699 19.7108 20.2372 19.7108 21.0456 19.9654L22.5695 20.4469C22.8783 20.5454 23.2102 20.5454 23.519 20.4469L25.0472 19.9654C25.8557 19.7108 26.723 19.7108 27.5314 19.9654L28.0051 20.1174C28.0715 18.8869 28.3352 17.0122 29.2547 15.4094C30.3389 13.6058 31.5874 11.9059 32.9841 10.3311C32.9841 10.3311 28.4338 10.207 24.3057 11.7885C20.1775 13.3699 16.8918 16.244 14.4484 16.3424ZM26.7319 12.7044C26.8896 12.7048 27.0437 12.7519 27.1745 12.8398C27.3054 12.9276 27.4073 13.0522 27.4672 13.1978C27.5272 13.3434 27.5425 13.5035 27.5114 13.6579C27.4802 13.8122 27.4039 13.9539 27.2921 14.0649C27.1803 14.1759 27.038 14.2514 26.8832 14.2817C26.7285 14.312 26.5682 14.2958 26.4227 14.2351C26.2771 14.1745 26.1529 14.0721 26.0656 13.941C25.9784 13.8098 25.932 13.6558 25.9325 13.4983C25.9353 13.2887 26.0208 13.0886 26.1705 12.9416C26.3202 12.7945 26.5219 12.7124 26.7319 12.713V12.7044ZM23.6091 15.5763C23.4515 15.5759 23.2977 15.5289 23.1669 15.4412C23.0361 15.3536 22.9342 15.2292 22.8742 15.0839C22.8141 14.9385 22.7985 14.7786 22.8293 14.6244C22.8601 14.4701 22.936 14.3285 23.0474 14.2173C23.1588 14.1061 23.3007 14.0303 23.4551 13.9995C23.6096 13.9687 23.7697 13.9843 23.9153 14.0443C24.0609 14.1043 24.1855 14.206 24.2733 14.3366C24.361 14.4672 24.4081 14.6208 24.4085 14.7781C24.4097 14.8836 24.3898 14.9883 24.3502 15.0862C24.3105 15.184 24.2518 15.273 24.1774 15.348C24.1031 15.4231 24.0146 15.4826 23.917 15.5233C23.8194 15.5639 23.7148 15.5848 23.6091 15.5848V15.5763Z" fill="white"/>
                <path d="M28.6609 21.6539L27.1349 21.1659C26.5771 20.9887 25.978 20.9887 25.4202 21.1659L23.8963 21.6539C23.3381 21.8289 22.7397 21.8289 22.1816 21.6539L20.6577 21.1724C20.0998 20.9957 19.5008 20.9957 18.943 21.1724L17.4212 21.6539C16.863 21.8285 16.2647 21.8285 15.7065 21.6539L14.1847 21.1724C13.6269 20.9957 13.0279 20.9957 12.47 21.1724L10.9483 21.6539C10.3901 21.8285 9.79176 21.8285 9.23357 21.6539L7.71179 21.1724C7.15392 20.9957 6.55497 20.9957 5.99711 21.1724L4.49676 21.641C3.91703 21.8252 3.29337 21.8184 2.71777 21.6218L0 20.6909C1.40428 23.8954 3.71124 26.6233 6.64011 28.5425C9.56898 30.4618 12.9935 31.4896 16.4968 31.501C20.0001 31.5123 23.4312 30.5066 26.3724 28.6064C29.3137 26.7061 31.6383 23.9932 33.0634 20.7979L30.3778 21.6539C29.819 21.8293 29.2197 21.8293 28.6609 21.6539Z" fill="white"/>
                <path d="M1.22812 12.8264C1.46005 12.8264 1.68248 12.7344 1.84648 12.5707C2.01048 12.4069 2.10261 12.1848 2.10261 11.9533C2.10243 11.9124 2.09884 11.8716 2.09189 11.8313L7.08376 6.84724V9.68915H5.44839V11.123H6.43862V15.5121H13.591L14.7034 11.123H15.7279V9.68915H12.8237V8.50359H13.203C13.2504 8.50303 13.2957 8.48385 13.329 8.4502C13.3623 8.41655 13.3809 8.37114 13.3809 8.32383V7.68183C13.3809 7.63473 13.3622 7.58955 13.3288 7.55624C13.2955 7.52293 13.2502 7.50422 13.203 7.50422H10.2259C10.2026 7.50422 10.1794 7.50881 10.1578 7.51774C10.1363 7.52666 10.1166 7.53975 10.1001 7.55624C10.0836 7.57274 10.0705 7.59231 10.0616 7.61386C10.0526 7.63541 10.048 7.65851 10.048 7.68183V8.32383C10.048 8.37114 10.0667 8.41655 10.1 8.4502C10.1333 8.48385 10.1785 8.50303 10.2259 8.50359H10.6053V9.68915H7.94754V5.98482L11.8056 2.13282C11.904 2.03461 12.0205 1.95615 12.1485 1.90171C12.2578 2.04302 12.4072 2.14816 12.5772 2.20344C12.69 2.6123 12.8333 3.01218 13.0059 3.3997V3.4104C13.4147 4.29611 13.9705 5.10646 14.6498 5.8072C14.9803 6.15141 15.3388 6.46778 15.7215 6.75308C16.1199 7.04539 16.5422 7.30381 16.9839 7.52562C17.4516 7.76051 17.9402 7.95109 18.4435 8.09486C18.6938 8.16881 18.9478 8.22952 19.2044 8.27675C19.5223 8.33952 19.8437 8.38311 20.1668 8.4073C20.3919 8.42442 20.619 8.43298 20.8441 8.43298C21.0263 8.43298 21.202 8.43298 21.3778 8.41586C21.6859 8.39796 21.9928 8.36367 22.2973 8.31314C22.5888 8.26178 22.8674 8.19971 23.1246 8.12909C23.6342 7.99202 24.1295 7.80642 24.6035 7.57483C25.0499 7.35984 25.4766 7.10636 25.8788 6.81728C26.2708 6.53756 26.638 6.22468 26.9762 5.8821C27.3148 5.53929 27.6244 5.16925 27.9022 4.77572C28.4754 3.96977 28.902 3.06936 29.1625 2.11571C29.1925 2.09645 29.2182 2.07504 29.2461 2.05364L29.2803 2.02582C29.3039 2.00442 29.3275 1.98302 29.3489 1.95948C29.3704 1.93594 29.3489 1.95949 29.3597 1.94879C29.3982 1.90421 29.4327 1.85621 29.4625 1.8054H30.3499C30.4636 1.8054 30.5726 1.76031 30.653 1.68005C30.7334 1.59978 30.7786 1.49092 30.7786 1.3774C30.7786 1.26389 30.7334 1.15503 30.653 1.07476C30.5726 0.994497 30.4636 0.949405 30.3499 0.949405H29.4925C29.4925 0.936565 29.4775 0.925864 29.4711 0.915164L29.4432 0.876646C29.4168 0.837474 29.3867 0.800925 29.3532 0.767504L29.3361 0.750387C29.3046 0.721612 29.2717 0.694468 29.2375 0.669066L29.2053 0.647664C29.1634 0.619959 29.1189 0.596312 29.0724 0.577044C29.0271 0.55956 28.9805 0.545259 28.9331 0.534245H28.8967C28.8445 0.523157 28.7914 0.51742 28.7381 0.517124C28.6863 0.517761 28.6347 0.522773 28.5838 0.532106L28.5409 0.542807C28.4983 0.551415 28.4566 0.56432 28.4166 0.581325L28.3844 0.594164C28.3457 0.611173 28.3085 0.631209 28.273 0.654084L28.2258 0.686186C28.2008 0.704433 28.1772 0.724458 28.1551 0.746106C28.1316 0.765316 28.11 0.786823 28.0908 0.810306C28.0711 0.831437 28.0525 0.85358 28.0351 0.876646L27.9922 0.940843C27.9922 0.940843 27.9922 0.951542 27.9815 0.960102H25.5145C25.4385 0.825642 25.3281 0.713757 25.1946 0.635899C25.0611 0.558042 24.9093 0.51701 24.7547 0.51701C24.6 0.51701 24.4482 0.558042 24.3147 0.635899C24.1812 0.713757 24.0708 0.825642 23.9948 0.960102H21.5493C21.4733 0.825642 21.3629 0.713757 21.2294 0.635899C21.0959 0.558042 20.9441 0.51701 20.7894 0.51701C20.6348 0.51701 20.483 0.558042 20.3495 0.635899C20.216 0.713757 20.1056 0.825642 20.0296 0.960102H17.5819C17.5057 0.82569 17.395 0.713889 17.2614 0.636102C17.1277 0.558314 16.9757 0.517327 16.821 0.517327C16.6663 0.517327 16.5144 0.558314 16.3807 0.636102C16.247 0.713889 16.1364 0.82569 16.0601 0.960102H13.6124C13.533 0.8192 13.416 0.703137 13.2743 0.624901C13.1326 0.546665 12.9719 0.509347 12.8101 0.517121C12.6484 0.524895 12.4921 0.577454 12.3585 0.668919C12.225 0.760383 12.1197 0.88714 12.0542 1.035C11.73 1.12544 11.4347 1.29792 11.1969 1.53576L7.21022 5.51616L1.56034 11.1572C1.45536 11.1152 1.34336 11.0934 1.23026 11.093C0.998334 11.093 0.775905 11.185 0.611906 11.3487C0.447908 11.5125 0.355774 11.7345 0.355774 11.9661C0.355774 12.1977 0.447908 12.4198 0.611906 12.5835C0.775905 12.7472 0.998334 12.8392 1.23026 12.8392L1.22812 12.8264ZM11.872 11.7072H13.531L12.9608 13.9649H11.3019L11.872 11.7072ZM9.07065 11.7072H10.7275L10.1573 13.9649H8.49838L9.07065 11.7072ZM11.4283 8.49717H11.9835V9.68273H11.4283V8.49717ZM13.4624 3.36118L13.8632 2.961C13.9185 3.03677 13.9794 3.10831 14.0454 3.175L14.5233 3.65222L13.9446 4.23002C13.7695 3.94935 13.6114 3.65851 13.471 3.35904L13.4624 3.36118ZM14.1933 4.58954L14.8363 3.94754L15.5222 4.63234L14.8148 5.33854C14.5952 5.10103 14.3905 4.85017 14.2018 4.5874L14.1933 4.58954ZM25.433 4.63876L24.745 5.3257L24.0591 4.63876L24.745 3.95396L25.433 4.63876ZM25.0515 3.64794L25.7502 2.9503C25.8079 3.02607 25.8709 3.09758 25.9389 3.1643L26.4233 3.65008L25.7374 4.33488L25.0515 3.64794ZM24.4406 5.62958L23.7548 6.31438L23.0668 5.62958L23.7548 4.94478L24.4406 5.62958ZM23.7548 4.33488L23.0689 3.65008L23.5533 3.1643C23.6211 3.09811 23.6835 3.02654 23.7398 2.9503L24.4406 3.64794L23.7548 4.33488ZM23.4483 4.63876L22.7624 5.32356L22.0765 4.63876L22.7624 3.95396L23.4483 4.63876ZM22.4559 5.62958L21.77 6.31438L21.0842 5.62958L21.77 4.94478L22.4559 5.62958ZM20.7798 5.32356L20.0939 4.63876L20.7798 3.95396L21.4657 4.63876L20.7798 5.32356ZM20.4904 5.62744L19.8046 6.31224L19.1187 5.62744L19.8046 4.94264L20.4904 5.62744ZM19.8046 4.33274L19.1187 3.64794L19.6052 3.16216C19.6719 3.09486 19.7342 3.02338 19.7917 2.94816L20.4904 3.6458L19.8046 4.33274ZM19.5002 4.63662L18.8143 5.32142L18.1285 4.63662L18.8143 3.95182L19.5002 4.63662ZM18.5078 5.62744L17.822 6.31224L17.1361 5.62744L17.822 4.94264L18.5078 5.62744ZM17.822 4.33274L17.1361 3.6458L17.8348 2.94816C17.8925 3.02392 17.9555 3.09544 18.0234 3.16216L18.5078 3.64794L17.822 4.33274ZM17.5176 4.63662L16.8296 5.32142L16.1437 4.63662L16.8296 3.95182L17.5176 4.63662ZM15.8394 4.33274L15.1514 3.64794L15.6379 3.16216C15.7045 3.09486 15.7668 3.02338 15.8244 2.94816L16.5252 3.6458L15.8394 4.33274ZM15.1256 5.65312L15.8394 4.94264L16.5252 5.62744L15.8587 6.29298C15.5988 6.09478 15.3511 5.88111 15.1171 5.65312H15.1256ZM16.2102 6.55192L16.8296 5.93132L17.5176 6.61826L17.0654 7.06766C16.7685 6.91229 16.4809 6.74009 16.2037 6.55192H16.2102ZM18.4714 7.64332C18.1313 7.54042 17.7984 7.41531 17.4747 7.26882L17.822 6.92214L18.5078 7.60693L18.4714 7.64332ZM18.1285 6.61826L18.8143 5.93132L19.5002 6.61612L18.8122 7.30092L18.1285 6.61826ZM20.1304 7.96646C19.8772 7.94571 19.6254 7.91142 19.3759 7.86374L19.1187 7.60693L19.8046 6.92214L20.4904 7.60693L20.1304 7.96646ZM20.7969 7.30092L20.1111 6.61612L20.7969 5.93132L21.4828 6.61612L20.7969 7.30092ZM22.1837 7.89583C21.9458 7.93435 21.7079 7.96218 21.4742 7.97716L21.1013 7.60693L21.7872 6.92214L22.4752 7.60693L22.1837 7.89583ZM22.0937 6.61184L22.7796 5.92704L23.4654 6.61398L22.7796 7.29878L22.0937 6.61184ZM23.1546 7.68183L23.0861 7.61122L23.7719 6.92642L24.1556 7.3159C23.8276 7.45891 23.4903 7.57974 23.1461 7.67756L23.1546 7.68183ZM24.5778 7.1233L24.0763 6.62254L24.7622 5.9356L25.4416 6.61398C25.1593 6.80018 24.8659 6.96885 24.5628 7.11901L24.5778 7.1233ZM25.7995 6.36146L25.0687 5.63172L25.7545 4.94692L26.5411 5.7323C26.3031 5.95462 26.0527 6.16325 25.791 6.35718L25.7995 6.36146ZM26.8455 5.42628L26.0632 4.63662L26.749 3.95182L27.4714 4.673C27.2746 4.93475 27.0628 5.18484 26.8369 5.422L26.8455 5.42628ZM27.7136 4.3199L27.0427 3.65222L27.5207 3.175C27.5873 3.10826 27.6489 3.03674 27.705 2.961L28.2065 3.4639C28.0591 3.75858 27.8944 4.0444 27.7136 4.3199ZM28.3994 3.0359L27.9343 2.57152C27.9842 2.46401 28.0243 2.35229 28.0543 2.23768L28.1186 2.00014C28.2727 2.14858 28.4769 2.23408 28.6909 2.23982C28.6075 2.51 28.5102 2.77571 28.3994 3.0359ZM27.7243 1.79898L27.6364 2.12855C27.561 2.40549 27.413 2.65737 27.2077 2.85829L26.7298 3.3355L26.2432 2.85187C26.0366 2.64772 25.8886 2.39204 25.8145 2.11142L25.7331 1.79898H27.7243ZM24.0977 2.22698L24.1556 2.01298C24.3181 2.1654 24.5327 2.25025 24.7557 2.25025C24.9787 2.25025 25.1933 2.1654 25.3559 2.01298L25.4116 2.22698C25.4419 2.34288 25.4821 2.45599 25.5316 2.5651L24.7536 3.34192L23.9755 2.5651C24.027 2.45656 24.0679 2.34334 24.0977 2.22698ZM23.7612 1.79898L23.6798 2.11356C23.6047 2.39313 23.4568 2.64787 23.2511 2.85187L22.7645 3.3355L21.9672 2.53942L21.7765 1.79898H23.7612ZM21.7786 2.95458L22.4666 3.64152L21.7786 4.32632L21.0927 3.63938L21.7786 2.95458ZM20.1304 2.22056L20.1882 2.00656C20.3508 2.15898 20.5654 2.24383 20.7884 2.24383C21.0114 2.24383 21.226 2.15898 21.3885 2.00656L21.5385 2.58864L20.7884 3.33978L20.0103 2.56296C20.0601 2.45467 20.1002 2.34225 20.1304 2.22698V2.22056ZM19.796 1.79256L19.7124 2.10714C19.6382 2.38707 19.4902 2.64202 19.2837 2.84544L18.7993 3.32908L18.3128 2.84544C18.1071 2.64144 17.9592 2.38672 17.8841 2.10714L17.8027 1.79256H19.796ZM16.1652 2.22056L16.2209 2.00656C16.3834 2.15898 16.598 2.24383 16.821 2.24383C17.044 2.24383 17.2586 2.15898 17.4212 2.00656L17.479 2.22056C17.5091 2.33656 17.5492 2.4497 17.5991 2.55868L16.821 3.3355L16.043 2.55868C16.0938 2.45209 16.1347 2.34105 16.1652 2.22698V2.22056ZM15.8287 1.79256L15.7472 2.105C15.6738 2.3859 15.5257 2.64175 15.3185 2.84544L14.8341 3.32908L14.3562 2.85187C14.1514 2.65142 14.0035 2.40036 13.9275 2.12426L13.8375 1.79256H15.8287ZM13.4581 1.99158L13.5224 2.23555C13.5528 2.34866 13.5929 2.45892 13.6424 2.5651L13.2823 2.92462C13.1859 2.69136 13.1023 2.45597 13.0273 2.21629C13.1879 2.1873 13.3372 2.11389 13.4581 2.00442V1.99158Z" fill="white"/>
              </svg>
            </Link>
          </div>
          <p className={styles.text}>Ready for the next-gen?</p>
          <Link href='/' className={styles.btn}>Book a demo</Link>
        </div>
        <div className={styles.services}>
          {NavFooter.map((item, index) => (
            <div key={index} className={styles.services_item}>
              <p className={styles.services_title}>{item.title}</p>
              <div className={styles.services_list}>
                {item.list.map((item, index) => (
                <p key={index} className={styles.services_text}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.lower}>
          <div className={styles.social}>
            <p className={styles.social_text}>Follow us:</p>
            <div className={styles.social_list}>
              <div className={styles.docial_item}>
                <Link href={'/'} className={styles.social_link}><FaLinkedin /></Link>
              </div>
            </div>
          </div>
          <p className={styles.rights}>© 2024 Trawler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
