interface LandingCarouselSecond extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
const LandingCarouselSecond: React.FC<LandingCarouselSecond> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      width="280"
      height="250"
      viewBox="0 0 280 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M0 194H280V250H0V194Z"
        fill="url(#paint0_linear_7521_4859)"
      />
      <path
        opacity="0.4"
        d="M131.079 40.22C131.079 38.66 131.356 37.308 131.911 36.164C132.5 34.9853 133.194 34.032 133.991 33.304C134.788 32.576 135.811 31.7787 137.059 30.912C138.307 30.0453 139.226 29.3 139.815 28.676C140.404 28.052 140.699 27.3067 140.699 26.44C140.699 25.0533 139.659 24.36 137.579 24.36C135.95 24.36 134.13 24.672 132.119 25.296C130.108 25.92 128.271 26.6307 126.607 27.428L123.851 16.82C126.139 15.7453 128.791 14.8093 131.807 14.012C134.823 13.2147 137.822 12.816 140.803 12.816C143.75 12.816 146.315 13.2667 148.499 14.168C150.718 15.0347 152.416 16.2827 153.595 17.912C154.774 19.5413 155.363 21.4307 155.363 23.58C155.363 25.452 155.051 27.0293 154.427 28.312C153.838 29.5947 153.11 30.652 152.243 31.484C151.376 32.2813 150.232 33.1653 148.811 34.136C147.632 34.968 146.679 35.696 145.951 36.32C145.258 36.944 144.668 37.7067 144.183 38.608C143.732 39.5093 143.507 40.584 143.507 41.832V42.612H131.079V40.22ZM131.079 54V45.472H143.455V54H131.079Z"
        fill="url(#paint1_linear_7521_4859)"
      />
      <mask id="path-3-inside-1_7521_4859" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28 71C21.3726 71 16 76.3726 16 83V105C16 111.627 21.3726 117 28 117H131.382L135.632 128.114C136.287 129.828 138.713 129.828 139.368 128.114L143.618 117H252C258.627 117 264 111.627 264 105V83C264 76.3726 258.627 71 252 71H28Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 71C21.3726 71 16 76.3726 16 83V105C16 111.627 21.3726 117 28 117H131.382L135.632 128.114C136.287 129.828 138.713 129.828 139.368 128.114L143.618 117H252C258.627 117 264 111.627 264 105V83C264 76.3726 258.627 71 252 71H28Z"
        fill="white"
      />
      <path
        d="M131.382 117L132.316 116.643L132.071 116H131.382V117ZM135.632 128.114L136.566 127.757L136.566 127.757L135.632 128.114ZM139.368 128.114L138.434 127.757L138.434 127.757L139.368 128.114ZM143.618 117V116H142.929L142.684 116.643L143.618 117ZM17 83C17 76.9249 21.9249 72 28 72V70C20.8203 70 15 75.8203 15 83H17ZM17 105V83H15V105H17ZM28 116C21.9249 116 17 111.075 17 105H15C15 112.18 20.8203 118 28 118V116ZM131.382 116H28V118H131.382V116ZM130.448 117.357L134.698 128.471L136.566 127.757L132.316 116.643L130.448 117.357ZM134.698 128.471C135.681 131.043 139.319 131.043 140.302 128.471L138.434 127.757C138.106 128.614 136.894 128.614 136.566 127.757L134.698 128.471ZM140.302 128.471L144.552 117.357L142.684 116.643L138.434 127.757L140.302 128.471ZM252 116H143.618V118H252V116ZM263 105C263 111.075 258.075 116 252 116V118C259.18 118 265 112.18 265 105H263ZM263 83V105H265V83H263ZM252 72C258.075 72 263 76.9249 263 83H265C265 75.8203 259.18 70 252 70V72ZM28 72H252V70H28V72Z"
        fill="#E1E9FF"
        mask="url(#path-3-inside-1_7521_4859)"
      />
      <path
        opacity="0.8"
        d="M35.2748 88.3945V99H33.3705V88.3945H35.2748ZM36.4836 89.9912V88.3945H44.9357V89.9912H41.6691V99H39.7648V89.9912H36.4836ZM60.9178 93.4336V94.7373H48.8475V93.4336H51.66V91.7563C50.6565 91.3315 50.0926 90.665 50.0926 89.8008C50.0926 88.2114 51.9456 87.2812 54.868 87.2812C57.783 87.2812 59.636 88.2114 59.6434 89.8008C59.636 90.6724 59.0647 91.3389 58.0613 91.7563V93.4336H60.9178ZM50.2537 97.9014C50.2537 96.3779 51.9749 95.5283 54.868 95.543C57.7171 95.5283 59.4456 96.3779 59.4529 97.9014C59.4456 99.4395 57.7171 100.274 54.868 100.274C51.9749 100.274 50.2537 99.4395 50.2537 97.9014ZM51.7918 89.8008C51.7771 90.6064 52.9124 91.0386 54.868 91.0312C56.8162 91.0386 57.9588 90.6064 57.9588 89.8008C57.9588 88.9878 56.8162 88.5337 54.868 88.541C52.9124 88.5337 51.7771 88.9878 51.7918 89.8008ZM51.909 97.9014C51.9017 98.6484 52.9417 99.0513 54.868 99.0439C56.7649 99.0513 57.8123 98.6484 57.827 97.9014C57.8123 97.1616 56.7649 96.7808 54.868 96.7734C52.9417 96.7808 51.9017 97.1616 51.909 97.9014ZM53.3006 93.4336H56.4354V92.1738C55.9593 92.2397 55.4319 92.2764 54.868 92.2764C54.304 92.2764 53.7767 92.2397 53.3006 92.1738V93.4336ZM65.1295 88.0283C66.9166 88.0283 68.2423 89.5225 68.4767 91.9395H71.0035V87.0615H72.6148V100.318H71.0035V93.2578H68.4913C68.3155 95.814 66.9679 97.3887 65.1295 97.3887C63.1373 97.3887 61.7237 95.5796 61.7311 92.7012C61.7237 89.8447 63.1373 88.0283 65.1295 88.0283ZM63.2984 92.7012C63.2911 94.7373 64.0382 95.9165 65.1295 95.9238C66.2281 95.9165 66.9679 94.7373 66.9752 92.7012C66.9679 90.6797 66.2281 89.4932 65.1295 89.4932C64.0382 89.4932 63.2911 90.6797 63.2984 92.7012ZM84.2902 87.8672C84.2829 91.2803 82.0344 93.6753 78.1818 94.752L77.5227 93.4775C80.489 92.6719 82.2468 91.1191 82.5471 89.1855H78.2404V87.8672H84.2902ZM79.8078 100.128V95.0596H88.5236V100.128H79.8078ZM81.4045 98.8389H86.9123V96.3486H81.4045V98.8389ZM84.3488 91.6465V90.3135H86.8977V87.0762H88.5236V94.5322H86.8977V91.6465H84.3488ZM94.2295 89.4639C94.2368 90.9434 95.0571 92.4082 96.793 93.0967L95.9141 94.3418C94.7495 93.873 93.9292 93.0088 93.4604 91.9541C92.9697 93.1406 92.1055 94.1514 90.8457 94.6934L89.9814 93.4336C91.8052 92.6353 92.6548 90.958 92.6621 89.4639V87.8525H94.2295V89.4639ZM92.3545 97.0225V95.7188H101.422V100.304H99.7959V97.0225H92.3545ZM97.0273 95.0156V87.2959H98.5508V90.3721H99.8691V87.0762H101.422V95.0889H99.8691V91.7197H98.5508V95.0156H97.0273ZM113.207 87.0322V90.0205H115.067V91.3389H113.207V94.2539H111.581V87.0322H113.207ZM102.777 89.376V88.1309H105.897V86.959H107.523V88.1309H110.629V89.376H102.777ZM103.451 91.9541C103.451 90.6357 104.747 89.7935 106.703 89.7861C108.666 89.7935 109.933 90.6357 109.94 91.9541C109.933 93.3091 108.666 94.1221 106.703 94.1221C104.747 94.1221 103.451 93.3091 103.451 91.9541ZM104.55 96.0264V94.8398H113.207V98.0332H106.176V98.9707H113.617V100.187H104.564V96.9053H111.581V96.0264H104.55ZM105.033 91.9541C105.026 92.606 105.678 92.9429 106.703 92.9502C107.728 92.9429 108.387 92.606 108.387 91.9541C108.387 91.3242 107.728 90.9507 106.703 90.958C105.678 90.9507 105.026 91.3242 105.033 91.9541ZM125.585 88.1602C125.578 89.8228 127.446 91.5146 130.273 91.8809L129.628 93.1992C127.38 92.8623 125.593 91.7563 124.728 90.2622C123.864 91.7563 122.084 92.8623 119.858 93.1992L119.213 91.8809C122.011 91.5146 123.871 89.8374 123.871 88.1602V87.4863H125.585V88.1602ZM118.686 95.6895V94.3418H130.756V95.6895H125.497V100.304H123.886V95.6895H118.686ZM139.312 95.6748C139.312 96.7808 139.817 97.9307 140.952 98.6631C142.109 97.8794 142.644 96.6782 142.651 95.6748V95.1328H144.248V95.6748C144.241 97.0591 145.061 98.3628 146.797 98.9121L146.006 100.099C144.717 99.6665 143.867 98.8242 143.406 97.7622C142.974 98.8096 142.197 99.7324 140.996 100.216C139.736 99.7544 138.945 98.8608 138.528 97.8135C138.052 98.8315 137.209 99.6592 135.986 100.099L135.181 98.9121C136.895 98.3115 137.722 96.9639 137.729 95.6748V95.1328H139.312V95.6748ZM134.844 90.9287C134.844 89.0684 136.367 87.7793 138.418 87.7793C140.461 87.7793 141.985 89.0684 141.978 90.9287C141.985 92.7671 140.461 94.0708 138.418 94.0635C136.367 94.0708 134.844 92.7671 134.844 90.9287ZM136.44 90.9287C136.433 92.0127 137.261 92.7085 138.418 92.7158C139.553 92.7085 140.381 92.0127 140.381 90.9287C140.381 89.8447 139.553 89.1489 138.418 89.1562C137.261 89.1489 136.433 89.8447 136.44 90.9287ZM143.999 94.5762V87.0762H145.64V94.5762H143.999ZM157.996 90.8115V92.1006H148.826V87.5449H150.437V90.8115H157.996ZM147.259 94.9277V93.6387H159.358V94.9277H147.259ZM148.709 99.9961V96.0996H150.335V98.6777H158.084V99.9961H148.709ZM173.773 87.6914V88.6875C173.78 89.6982 173.78 90.8408 173.451 92.335L171.825 92.1738C172.118 90.8408 172.147 89.8667 172.147 88.9658H164.603V87.6914H173.773ZM163.226 94.415V93.126H167.884V90.5918H169.496V93.126H175.238V94.415H163.226ZM163.988 98.9854C166.72 98.6265 168.338 97.2642 168.353 95.7773V95.2939H169.994V95.7773C169.986 97.2642 171.612 98.6265 174.388 98.9854L173.788 100.23C171.642 99.9375 169.994 99.0439 169.173 97.7695C168.346 99.0439 166.705 99.9375 164.574 100.23L163.988 98.9854ZM177.472 99.1172C176.842 99.1172 176.322 98.6045 176.329 97.9746C176.322 97.3594 176.842 96.854 177.472 96.8467C178.08 96.854 178.6 97.3594 178.6 97.9746C178.6 98.6045 178.08 99.1172 177.472 99.1172ZM181.259 99.1172C180.629 99.1172 180.109 98.6045 180.116 97.9746C180.109 97.3594 180.629 96.854 181.259 96.8467C181.867 96.854 182.387 97.3594 182.387 97.9746C182.387 98.6045 181.867 99.1172 181.259 99.1172ZM189.975 88.0283C191.762 88.0283 193.088 89.5225 193.322 91.9395H195.849V87.0615H197.461V100.318H195.849V93.2578H193.337C193.161 95.814 191.814 97.3887 189.975 97.3887C187.983 97.3887 186.569 95.5796 186.577 92.7012C186.569 89.8447 187.983 88.0283 189.975 88.0283ZM188.144 92.7012C188.137 94.7373 188.884 95.9165 189.975 95.9238C191.074 95.9165 191.814 94.7373 191.821 92.7012C191.814 90.6797 191.074 89.4932 189.975 89.4932C188.884 89.4932 188.137 90.6797 188.144 92.7012ZM210.037 87.0615V100.318H208.396V87.0615H210.037ZM199.841 97.125V88.2627H206.228V89.5957H201.482V95.748C203.913 95.7334 205.444 95.6675 207.209 95.3525L207.371 96.7002C205.474 97.0518 203.767 97.125 200.969 97.125H199.841ZM217.947 94.8105V96.2314H219.69V94.8105H221.199V99.0146C222.759 98.3555 223.47 97.0298 223.47 95.7627V94.708H225.096V95.7627C225.088 97.1323 225.806 98.4727 227.439 99.0293L226.604 100.245C225.433 99.8203 224.686 99.022 224.268 98.0186C223.829 98.9927 223.074 99.8057 221.976 100.245L221.199 99.0952V100.143H216.424V94.8105H217.947ZM215.12 90.6797C215.12 88.8706 216.592 87.5962 218.621 87.6035C220.328 87.5962 221.675 88.5557 222.012 89.9912H224.407V87.0615H226.033V94.0781H224.407V91.3389H222.02C221.697 92.811 220.342 93.7852 218.621 93.7852C216.592 93.7852 215.12 92.5181 215.12 90.6797ZM216.673 90.6797C216.673 91.749 217.479 92.4521 218.621 92.4521C219.734 92.4521 220.533 91.749 220.54 90.6797C220.533 89.6323 219.734 88.9438 218.621 88.9512C217.479 88.9438 216.673 89.6323 216.673 90.6797ZM217.947 98.8975H219.69V97.4473H217.947V98.8975ZM239.942 92.1738V93.5068H237.979V100.274H236.353V87.0615H237.979V92.1738H239.942ZM228.077 97.0078V88.3506H229.688V95.6602C231.453 95.6309 233.328 95.4771 235.328 95.0596L235.504 96.4365C233.27 96.8833 231.153 97.0005 229.19 97.0078H228.077ZM242.513 95.748C242.528 93.8804 243.055 93.3091 243.978 92.7451C244.601 92.3423 245.084 91.8516 245.077 91.1191C245.084 90.2988 244.44 89.7715 243.641 89.7715C242.916 89.7715 242.213 90.2402 242.162 91.2217H240.331C240.382 89.2515 241.847 88.248 243.656 88.248C245.633 88.248 246.988 89.3467 246.996 91.0898C246.988 92.2837 246.395 93.0601 245.443 93.624C244.593 94.144 244.242 94.6494 244.227 95.748V95.8799H242.513V95.748ZM242.279 97.9746C242.272 97.3594 242.792 96.854 243.421 96.8467C244.029 96.854 244.549 97.3594 244.549 97.9746C244.549 98.6045 244.029 99.1172 243.421 99.1172C242.792 99.1172 242.272 98.6045 242.279 97.9746Z"
        fill="black"
      />
      <path
        d="M180.238 234.142C180.238 240.523 161.12 241.995 137.537 241.995C113.953 241.995 94.835 240.523 94.835 234.142C94.835 227.762 113.953 226.289 137.537 226.289C161.12 226.289 180.238 227.762 180.238 234.142Z"
        fill="#DAE1FE"
      />
      <path
        d="M118.852 195.861H134.834V233.816C134.834 234.921 133.939 235.816 132.834 235.816H118.852V195.861Z"
        fill="#5C4ECD"
      />
      <path
        d="M109.974 231.162C109.974 227.848 112.66 225.162 115.974 225.162H132.834C133.939 225.162 134.834 226.058 134.834 227.162V233.817C134.834 234.921 133.939 235.817 132.834 235.817H111.974C110.869 235.817 109.974 234.921 109.974 233.817V231.162Z"
        fill="url(#paint2_linear_7521_4859)"
      />
      <path
        d="M154.368 195.861H138.386V233.816C138.386 234.921 139.281 235.816 140.386 235.816H154.368V195.861Z"
        fill="#5C4ECD"
      />
      <path
        d="M163.246 231.162C163.246 227.848 160.56 225.162 157.246 225.162H140.386C139.281 225.162 138.386 226.058 138.386 227.162V233.817C138.386 234.921 139.281 235.817 140.386 235.817H161.246C162.351 235.817 163.246 234.921 163.246 233.817V231.162Z"
        fill="url(#paint3_linear_7521_4859)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M185.27 161.655C185.346 150.731 176.91 141.489 165.86 140.717C160.922 140.372 156.266 141.774 152.496 144.397C148.902 140.721 143.998 138.298 138.465 137.911C133.133 137.538 128.115 139.12 124.114 142.047C120.805 139.149 116.557 137.269 111.831 136.939C100.782 136.166 91.1418 144.144 89.6961 154.972L89.6543 154.969L87.8376 180.949C86.8228 195.462 97.7649 208.049 112.277 209.064L155.38 212.078C169.893 213.093 182.48 202.151 183.495 187.638L183.764 183.801L183.764 183.801L185.219 162.987C185.222 162.949 185.224 162.912 185.227 162.874L185.312 161.658L185.27 161.655Z"
        fill="url(#paint4_linear_7521_4859)"
      />
      <circle
        cx="129.534"
        cy="165.109"
        r="6.58542"
        transform="rotate(4 129.534 165.109)"
        fill="white"
      />
      <circle
        cx="129.534"
        cy="163.333"
        r="3.37302"
        transform="rotate(4 129.534 163.333)"
        fill="#2A2C35"
      />
      <circle
        cx="142.198"
        cy="165.994"
        r="6.58542"
        transform="rotate(4 142.198 165.994)"
        fill="white"
      />
      <circle
        cx="142.199"
        cy="164.217"
        r="3.37302"
        transform="rotate(4 142.199 164.217)"
        fill="#2A2C35"
      />
      <path
        d="M115.994 174.67L154.965 177.395"
        stroke="#2A2C35"
        stroke-width="1.3"
      />
      <path
        d="M99.7125 179.291L102.642 185.511C103.814 187.998 106.774 189.073 109.269 187.917L121.229 182.372"
        stroke="url(#paint5_linear_7521_4859)"
        stroke-width="5"
        stroke-linejoin="round"
      />
      <circle
        cx="120.319"
        cy="182.234"
        r="3.55153"
        transform="rotate(47.1255 120.319 182.234)"
        fill="url(#paint6_linear_7521_4859)"
      />
      <path
        d="M181.448 176.773L189.616 183.635C191.107 184.887 191.029 187.205 189.457 188.354L181.004 194.531"
        stroke="url(#paint7_linear_7521_4859)"
        stroke-width="5"
        stroke-linejoin="round"
      />
      <circle
        cx="3.55153"
        cy="3.55153"
        r="3.55153"
        transform="matrix(0.383164 0.92368 0.92368 -0.383164 174.788 193.258)"
        fill="url(#paint8_linear_7521_4859)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7521_4859"
          x1="140"
          y1="194"
          x2="140"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21" stop-color="#D5DCFF" />
          <stop offset="1" stop-color="#E9EDFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7521_4859"
          x1="139.5"
          y1="12.5"
          x2="139.5"
          y2="55.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#333BFF" />
          <stop offset="1" stop-color="#8192FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_7521_4859"
          x1="122.404"
          y1="225.162"
          x2="122.404"
          y2="235.817"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6977F7" />
          <stop offset="1" stop-color="#6D5DE6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_7521_4859"
          x1="150.816"
          y1="225.162"
          x2="150.816"
          y2="235.817"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6977F7" />
          <stop offset="1" stop-color="#6D5DE6" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_7521_4859"
          x1="138.908"
          y1="137.942"
          x2="133.829"
          y2="210.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5F81F2" />
          <stop offset="0.765" stop-color="#7162ED" />
          <stop offset="1" stop-color="#6050E1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_7521_4859"
          x1="115.77"
          y1="192.022"
          x2="101.216"
          y2="177.206"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#809DFF" />
          <stop offset="0.845851" stop-color="#796EFF" />
          <stop offset="1" stop-color="#6E68EF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_7521_4859"
          x1="120.319"
          y1="178.682"
          x2="120.319"
          y2="185.786"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8AA1FF" />
          <stop offset="1" stop-color="#9EB3FF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_7521_4859"
          x1="192.509"
          y1="191.933"
          x2="179.816"
          y2="178.127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#809DFF" />
          <stop offset="0.781591" stop-color="#7A73FF" />
          <stop offset="1" stop-color="#6B6DF0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_7521_4859"
          x1="3.55153"
          y1="0"
          x2="3.55153"
          y2="7.10305"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8AA1FF" />
          <stop offset="1" stop-color="#9EB3FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LandingCarouselSecond;
