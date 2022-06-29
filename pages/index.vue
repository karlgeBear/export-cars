<template>
  <div id="Home">
    <Nav :diyrate="1" />
    <div class="search">
      <div class="container">
        <div class="search__box">
          <h1 class="search__box-title">
            Find Your <span class="highColor">Perfect</span> Car
          </h1>
          <div class="filter">
            <div class="cars-type">
              <div
                class="all type-item"
                v-for="(item, index) in ['All', 'New', 'Used']"
                :key="index"
                :class="{ triangle: isTriangle == index }"
                @click="isTriangle = isTriangle == index ? isTriangle : index"
              >
                {{ item }}
              </div>
            </div>
            <div class="select">
              <div class="select__box">
                <el-select v-model="value" placeholder="All Makes">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="value" disabled placeholder="All Models">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="value" placeholder="Max price">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <button class="btn"><i class="fa-search"></i></button>
              </div>
              <div class="select-opacity-border"></div>
            </div>
            <div class="some-filter-car-types">
              <div class="type">
                <div class="type-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_557"
                      data-name="Group 557"
                      width="50"
                      height="64.102"
                      viewBox="0 0 164.104 64.102"
                    >
                      <path
                        id="Subtraction_30"
                        data-name="Subtraction 30"
                        d="M-13895.81,20663.1a14.9,14.9,0,0,1-10.609-4.395,14.9,14.9,0,0,1-4.393-10.607,14.9,14.9,0,0,1,4.393-10.6,14.9,14.9,0,0,1,10.609-4.395,14.889,14.889,0,0,1,10.6,4.395,14.9,14.9,0,0,1,4.393,10.6,14.9,14.9,0,0,1-4.393,10.607A14.889,14.889,0,0,1-13895.81,20663.1Zm0-24a9.009,9.009,0,0,0-9,9,9.011,9.011,0,0,0,9,9,9.009,9.009,0,0,0,9-9A9.007,9.007,0,0,0-13895.81,20639.1Z"
                        transform="translate(13925 -20599)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Subtraction_29"
                        data-name="Subtraction 29"
                        d="M-13895.81,20663.1a14.9,14.9,0,0,1-10.609-4.395,14.9,14.9,0,0,1-4.393-10.607,14.9,14.9,0,0,1,4.393-10.6,14.9,14.9,0,0,1,10.609-4.395,14.889,14.889,0,0,1,10.6,4.395,14.9,14.9,0,0,1,4.393,10.6,14.9,14.9,0,0,1-4.393,10.607A14.889,14.889,0,0,1-13895.81,20663.1Zm-.5-24a8.77,8.77,0,0,0-8.5,9,8.773,8.773,0,0,0,8.5,9,8.771,8.771,0,0,0,8.5-9A8.769,8.769,0,0,0-13896.308,20639.1Z"
                        transform="translate(14029 -20599)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Subtraction_28"
                        data-name="Subtraction 28"
                        d="M-13904.136,20686.107c-3.425,0-5.024-1.373-5.763-2.523a4.979,4.979,0,0,1-.79-2.52,67.152,67.152,0,0,1,.5-13.7,18.819,18.819,0,0,1,2.632-7.51c2.288-3.4,5.433-4.031,8.474-4.643l.017,0c.3-.059.6-.121.9-.184,13.069-.969,29.571-1.146,29.714-1.146a206.77,206.77,0,0,0,17.679-11.3,53.678,53.678,0,0,1,12.248-6.725c3.983-1.592,7.777-2.312,14.5-2.758a153.9,153.9,0,0,1,20.244,1.211,76.571,76.571,0,0,1,18.3,4.994,47.084,47.084,0,0,1,9.506,9.672,38.831,38.831,0,0,1,3.131,4.9h15.706a7.339,7.339,0,0,1,5.476,2.633,18.189,18.189,0,0,1,3.572,7.764,52.571,52.571,0,0,1,1.285,9.652,89.68,89.68,0,0,1-.2,11.7v.006h-12.326a30.669,30.669,0,0,0-.408-6.361c-.544-3.285-1.872-7.93-5.114-11.4-3.126-3.346-7.464-5.041-12.894-5.041-10.312,0-15.274,6.2-17.621,11.4a32.1,32.1,0,0,0-2.648,11.4h-64.184a30.162,30.162,0,0,0-.421-6.312c-.552-3.264-1.892-7.881-5.14-11.355-3.188-3.408-7.627-5.135-13.192-5.135-5.543,0-10.006,1.7-13.263,5.061-6.151,6.34-6.029,16.57-6,17.717,0,.014,0,.023,0,.025A18.617,18.617,0,0,1-13904.136,20686.107Zm46.36-31.562c.067.141,5.9.209,17.834.209,1.438,0,3.068,0,4.933-.006l6.105-15.047h0a41.4,41.4,0,0,0-14.236,4.387,63.744,63.744,0,0,0-14.631,10.453l-.006,0Zm46.291-15.639c-3.291,0-6.452.18-9.51.354l-.09.006-.187.016-6.272,15.451c2.433,0,5.121-.016,7.968-.029l.752,0,1.353,0,6.412-15.789Zm7.7.439-6.219,15.318,3.47-.02,1.088,0c4.3-.023,10.188-.053,16.615-.1.312,0,.478,0,.493,0a13.3,13.3,0,0,0-.161-5.219,10.916,10.916,0,0,0-2.123-4.371,12.332,12.332,0,0,0-5.192-3.65,32.811,32.811,0,0,0-7.97-1.953Z"
                        transform="translate(13910.81 -20633.102)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Path_211"
                        data-name="Path 211"
                        d="M14227.891-17798.156c.049-.1,1.166.375,2.176,3.344a23.225,23.225,0,0,1,.9,4.076c0-.068-5.548,0-5.548,0S14219.066-17798.758,14227.891-17798.156Z"
                        transform="translate(-14071.219 17822.395)"
                        fill="#ff4605"
                      ></path>
                      <path
                        id="Path_212"
                        data-name="Path 212"
                        d="M14226.857-17795.76c-.061-.1-4.7,1.8-5.48,5.779,0-.066,10.9,0,10.9,0S14238.238-17798.965,14226.857-17795.76Z"
                        transform="translate(-14216.396 17821.074)"
                        fill="#ff4605"
                      ></path>
                      <path
                        id="Path_268"
                        data-name="Path 268"
                        d="M13596.227-20971.381l46.691,32.488-51.559.025Z"
                        transform="translate(-13541.95 20991.875)"
                        fill="#f1efef"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="type-text"><a href="#">Sedan</a></div>
              </div>
              <div class="type">
                <div class="type-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="58.459"
                      viewBox="0 0 163.558 58.459"
                    >
                      <g
                        id="Group_559"
                        data-name="Group 559"
                        transform="translate(0.002 -0.002)"
                      >
                        <path
                          id="Path_240"
                          data-name="Path 240"
                          d="M14682.666-17675.51c6.831-.441,3.493-2,4.658-4.357s6.83-3.8,0-5.064-20.491-1.707-27.321,0-5.665,4.475,0,6.832S14675.836-17675.068,14682.666-17675.51Z"
                          transform="translate(-14527.08 17699.047)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_37"
                          data-name="Subtraction 37"
                          d="M-14351,20677.193c-4.549,0-10.068-.318-10.531-1.832-.166-.545.341-1.217,1.506-2-1-4.67.082-10.6,2.963-16.275a31.61,31.61,0,0,1,4.858-7.084,19.218,19.218,0,0,1,6.015-4.553c2.4-1.07,6.081-1.248,9.639-1.422h.021l.221-.012c.041,0,.081,0,.121-.006l.457-.023.449-.023c.063,0,.123,0,.181-.008l.222-.01c2.574-.145,5.389-.219,8.366-.219,4.87,0,8.565.2,8.971.217.016,0,.023,0,.023,0a49.835,49.835,0,0,1,8.942-8.25,46.131,46.131,0,0,1,10.239-5.662,36.257,36.257,0,0,1,13.245-2.574h1.987c18.48,0,41.806,6.238,58.118,11.471,13.4,4.3,22.219,7.941,22.265,8.033,1.4.955,2.458,2.762,3.146,5.367a34.248,34.248,0,0,1,.944,7.867,80.532,80.532,0,0,1-.675,11.512l-.011.072,0,.01,0,.021a.227.227,0,0,0,0,.031v.012a10.27,10.27,0,0,1-8.112,4.3,7.186,7.186,0,0,1-1.022-.066l-13.479.248a8.889,8.889,0,0,0,1.816-5.418,9.014,9.014,0,0,0-9-9,9.012,9.012,0,0,0-9,9,9.007,9.007,0,0,0,2.02,5.678l-13.386.244v.037h-52.056v-.006h-14.706a9.3,9.3,0,0,0,2.125-5.953,8.771,8.771,0,0,0-8.5-9,8.773,8.773,0,0,0-8.5,9,9.29,9.29,0,0,0,2.126,5.953h-13.165v.006a.117.117,0,0,1-.036,0C-14345.3,20677.084-14348.42,20677.193-14351,20677.193Zm68.726-44.031a51.983,51.983,0,0,0-11.112,1.063c-3.456.809-7.623,3.857-10.51,6.271-3.077,2.586-5.472,5.09-5.48,5.1h38.489s0-.039,0-.115a111.559,111.559,0,0,0,0-11.256A54.193,54.193,0,0,0-14282.279,20633.162Zm18,2.1h0v10.322h18.97l-.006,0a15.92,15.92,0,0,0-6.5-6.5C-14256.434,20636.564-14264.2,20635.27-14264.275,20635.264Z"
                          transform="translate(14361.565 -20627.461)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_270"
                          data-name="Path 270"
                          d="M13596.071-20971.381l45.2,31.449-49.911.025Z"
                          transform="translate(-13543.885 20989.234)"
                          fill="#f1efef"
                        ></path>
                        <path
                          id="Subtraction_36"
                          data-name="Subtraction 36"
                          d="M-14346.568,20657.461a14.9,14.9,0,0,1-10.605-4.393,14.9,14.9,0,0,1-4.393-10.605,14.9,14.9,0,0,1,4.393-10.607,14.9,14.9,0,0,1,10.605-4.4,14.9,14.9,0,0,1,10.605,4.4,14.9,14.9,0,0,1,4.393,10.607,14.9,14.9,0,0,1-4.393,10.605A14.9,14.9,0,0,1-14346.568,20657.461Zm0-24a9.01,9.01,0,0,0-9,9,9.01,9.01,0,0,0,9,9,9.01,9.01,0,0,0,9-9A9.01,9.01,0,0,0-14346.568,20633.463Z"
                          transform="translate(14479 -20599)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_38"
                          data-name="Subtraction 38"
                          d="M-14346.568,20657.461a14.9,14.9,0,0,1-10.605-4.393,14.9,14.9,0,0,1-4.393-10.605,14.9,14.9,0,0,1,4.393-10.607,14.9,14.9,0,0,1,10.605-4.4,14.9,14.9,0,0,1,10.605,4.4,14.9,14.9,0,0,1,4.393,10.607,14.9,14.9,0,0,1-4.393,10.605A14.9,14.9,0,0,1-14346.568,20657.461Zm0-24a9.01,9.01,0,0,0-9,9,9.01,9.01,0,0,0,9,9,9.01,9.01,0,0,0,9-9A9.01,9.01,0,0,0-14346.568,20633.463Z"
                          transform="translate(14385 -20599)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_234"
                          data-name="Path 234"
                          d="M14672.021-17633.193h-4.091s-1.186,4.4,2.152,6.127h2.729a12.841,12.841,0,0,0,.188-3.463A6.689,6.689,0,0,0,14672.021-17633.193Z"
                          transform="translate(-14512.557 17655.711)"
                          fill="#ff4605"
                        ></path>
                        <path
                          id="Path_235"
                          data-name="Path 235"
                          d="M14925.816-17637.883a3.027,3.027,0,0,0-.832.637c-.32.391-.746.926-.746.926h6.58l.775-1.562S14928.518-17639.443,14925.816-17637.883Z"
                          transform="translate(-14911.271 17658.619)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_236"
                          data-name="Path 236"
                          d="M0,5.691a26.481,26.481,0,0,0,5.8-.1A3.041,3.041,0,0,0,8.255,4.01C9.178,2.59,10.661,0,10.661,0L2.633.14Z"
                          transform="matrix(-1, -0.017, 0.017, -1, 18.502, 29.281)"
                          fill="#ff4605"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="type-text"><a href="#">Coupe</a></div>
              </div>
              <div class="type">
                <div class="type-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="64.414"
                      viewBox="0 0 148.092 64.414"
                    >
                      <g
                        id="Group_562"
                        data-name="Group 562"
                        transform="translate(-15054.172 20866.895)"
                      >
                        <path
                          id="Subtraction_23"
                          data-name="Subtraction 23"
                          d="M13,26A13,13,0,0,1,7.94,1.022,13,13,0,0,1,18.06,24.978,12.919,12.919,0,0,1,13,26ZM13,5.4A7.6,7.6,0,1,0,20.6,13,7.612,7.612,0,0,0,13,5.4Z"
                          transform="translate(15068 -20828.48)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_22"
                          data-name="Subtraction 22"
                          d="M13,26A13,13,0,0,1,7.94,1.022,13,13,0,0,1,18.06,24.978,12.919,12.919,0,0,1,13,26ZM13,5.4A7.6,7.6,0,1,0,20.6,13,7.612,7.612,0,0,0,13,5.4Z"
                          transform="translate(15158 -20828.48)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_24"
                          data-name="Subtraction 24"
                          d="M4.79,55.743a9.09,9.09,0,0,1-2.406-.132.018.018,0,0,1,0-.018c-2.017-2.013-2.759-5.142-2.2-9.3a34.145,34.145,0,0,1,2.03-7.471,3.138,3.138,0,0,0,.176-.5h0c.093-5.967,3.757-10.3,10.89-12.873,6.1-2.2,13.551-2.662,18.731-2.662,1.677,0,4.262.049,7.059.284l.158.012a101.441,101.441,0,0,1,9.812-11.362,60.4,60.4,0,0,1,7.707-6.5,24.215,24.215,0,0,1,6.843-3.64L130.358.049C130.983.017,131.583,0,132.143,0c3.935,0,6.254.81,6.892,2.408a3.332,3.332,0,0,1-.054,2.3,9.35,9.35,0,0,1-1.22,2.317,18.053,18.053,0,0,1-2.12,2.5l.02.044c.981,2.212,5.866,13.261,5.712,13.5a.008.008,0,0,1-.007,0,9.681,9.681,0,0,1,1.435,3.669,31.171,31.171,0,0,1,.582,4.607,54.535,54.535,0,0,1,.036,5.61l.183.2c2.133,2.354,3.257,3.6,3.34,3.692a9.394,9.394,0,0,1,.981,3.186,19.173,19.173,0,0,1,.156,3.377,26.38,26.38,0,0,1-.4,3.769l-15.555,4.4A27.2,27.2,0,0,0,131.953,50c-.378-2.885-1.4-6.963-4.147-10-2.63-2.914-6.364-4.392-11.1-4.392s-8.511,1.481-11.206,4.4a19.131,19.131,0,0,0-4.356,10,26.949,26.949,0,0,0-.286,5.583H43.183a27.626,27.626,0,0,0-.282-5.632c-.438-2.9-1.547-7-4.346-10.038-2.64-2.862-6.317-4.313-10.93-4.313s-8.3,1.452-10.963,4.315c-2.82,3.035-3.959,7.133-4.418,10.037a27.493,27.493,0,0,0-.323,5.631l-.06,0C10.816,55.63,7.216,55.743,4.79,55.743Zm67.9-49.63c-6.185.007-9.75.016-9.779.025a48.793,48.793,0,0,0-8.3,5.62,36.725,36.725,0,0,0-5.083,5.217,21,21,0,0,0-3.245,5.338l29.8-.5ZM97.568,6.1c-7.234,0-14.817,0-20.806.008L80.14,21.741,106.3,21.3,103.011,6.1H97.568Zm9.521,0,3.27,15.129,11.1-.186,6.6-8.088A7.91,7.91,0,0,0,128.3,11.2a5.258,5.258,0,0,0-.889-3.271,5.208,5.208,0,0,0-4.3-1.794c-.74-.018-6.129-.03-16.018-.035Z"
                          transform="translate(15054.172 -20866.895)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_252"
                          data-name="Path 252"
                          d="M18443.912-21087.6s1.129-5.34-.436-5.994-5.883.795-5.883.795-1.25,2.672,0,3.541S18443.912-21087.6,18443.912-21087.6Z"
                          transform="translate(-3247.885 255.873)"
                          fill="#ff7443"
                        ></path>
                        <path
                          id="Path_254"
                          data-name="Path 254"
                          d="M18644.531-21084.064c-1.186-.162-8.268-1.527-9.451,5.209.07.078,4.029,0,4.029,0S18643.834-21080.219,18644.531-21084.064Z"
                          transform="translate(-3576.694 248.652)"
                          fill="#ff4605"
                        ></path>
                        <path
                          id="Path_266"
                          data-name="Path 266"
                          d="M13596.393-20971.381l48.289,33.6-53.322.025Z"
                          transform="translate(1507.626 126.604)"
                          fill="#f1efef"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="type-text"><a href="#">SUV</a></div>
              </div>
              <div class="type">
                <div class="type-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="54.465"
                      viewBox="0 0 127.603 54.465"
                    >
                      <g
                        id="Group_561"
                        data-name="Group 561"
                        transform="translate(-14684.518 20863.809)"
                      >
                        <path
                          id="Subtraction_21"
                          data-name="Subtraction 21"
                          d="M118.832,43.013a1.3,1.3,0,0,1-.035-.273c-.429-4.477-2.738-14.891-14.873-14.891-7.591,0-11.447,4.123-13.345,7.581a20.472,20.472,0,0,0-2.323,7.581H43.1a21.368,21.368,0,0,0-2.078-7.594,13.077,13.077,0,0,0-12.373-7.594c-.332,0-.659.009-1,.026-7.591.391-11.241,4.493-12.966,7.865a18.574,18.574,0,0,0-1.944,7.3H4.2a8.178,8.178,0,0,1-1.972-.8A3.852,3.852,0,0,1,.094,39.3c-.212-2.776,0-9.87,0-9.941A5.384,5.384,0,0,1,.9,27.494a15.4,15.4,0,0,1,4.514-4.4,42.655,42.655,0,0,1,11.361-5.128,114.82,114.82,0,0,1,21.349-4.054,25.375,25.375,0,0,1,2.5-2.211,53.8,53.8,0,0,1,7.1-4.778,54.752,54.752,0,0,1,11.13-4.761A50.642,50.642,0,0,1,73.443,0C84.5,0,95.624,3.663,106.518,10.886a16.257,16.257,0,0,0,1.989.048c2.155,0,5.325-.043,5.679-.048l.007,0a95.794,95.794,0,0,1,7.8,10.484,45.044,45.044,0,0,1,4.6,9.084c1.15,3.326,1.315,6.039.491,8.066-1.075,2.643-3.852,4.153-8.253,4.489h0ZM70.8,5.323h0a37.186,37.186,0,0,0-23.624,9.3l48.494-2.734a43.116,43.116,0,0,0-6.928-3.215,53.066,53.066,0,0,0-17.54-3.353l-.4,0Z"
                          transform="translate(14684.518 -20863.809)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_176"
                          data-name="Path 176"
                          d="M16313.668-17534.393s6.613-5.395,9.764-5.326c4.773.064,4.773,5.326,2.027,5.326Z"
                          transform="translate(-1625.359 -3301.786)"
                          fill="#ff4605"
                        ></path>
                        <path
                          id="Path_179"
                          data-name="Path 179"
                          d="M16313.665-17531.758s8.018-3.207,11.9-3.131c3.043-4.037,6.029,3.131,2.643,3.131Z"
                          transform="translate(-1524.175 -3320.697)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_20"
                          data-name="Subtraction 20"
                          d="M12,24A12,12,0,0,1,3.514,3.515,12,12,0,1,1,20.485,20.485,11.921,11.921,0,0,1,12,24ZM12,5.333A6.667,6.667,0,1,0,18.666,12,6.674,6.674,0,0,0,12,5.333Z"
                          transform="translate(14700.46 -20833.344)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_19"
                          data-name="Subtraction 19"
                          d="M12,24A12,12,0,0,1,3.514,3.515,12,12,0,1,1,20.485,20.485,11.921,11.921,0,0,1,12,24ZM12,5.333A6.667,6.667,0,1,0,18.666,12,6.674,6.674,0,0,0,12,5.333Z"
                          transform="translate(14775.46 -20833.344)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_6"
                          data-name="Subtraction 6"
                          d="M12.589,7.919H3.959A3.96,3.96,0,0,1,3.959,0H7.9l4.683,7.918Z"
                          transform="translate(14796.028 -20844.098)"
                          fill="#ff4605"
                        ></path>
                        <path
                          id="Path_265"
                          data-name="Path 265"
                          d="M13595.619-20971.383l40.867,28.436-45.127.021Z"
                          transform="translate(1136.298 122.13)"
                          fill="#f1efef"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="type-text"><a href="#">Hatchback</a></div>
              </div>
              <div class="type">
                <div class="type-icon">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="61.482"
                      viewBox="0 0 164.044 61.482"
                    >
                      <g
                        id="Group_558"
                        data-name="Group 558"
                        transform="translate(-0.003)"
                      >
                        <path
                          id="Subtraction_33"
                          data-name="Subtraction 33"
                          d="M-14120.83,20656.484a14.4,14.4,0,0,1-10.252-4.248,14.413,14.413,0,0,1-4.246-10.256,14.4,14.4,0,0,1,4.246-10.252,14.4,14.4,0,0,1,10.252-4.246,14.4,14.4,0,0,1,10.252,4.246,14.4,14.4,0,0,1,4.246,10.252,14.408,14.408,0,0,1-4.246,10.256A14.4,14.4,0,0,1-14120.83,20656.484Zm0-23.205a8.709,8.709,0,0,0-8.7,8.7,8.709,8.709,0,0,0,8.7,8.7,8.709,8.709,0,0,0,8.7-8.7A8.71,8.71,0,0,0-14120.83,20633.279Z"
                          transform="translate(14149 -20595)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_32"
                          data-name="Subtraction 32"
                          d="M-14120.83,20656.484a14.4,14.4,0,0,1-10.252-4.248,14.413,14.413,0,0,1-4.246-10.256,14.4,14.4,0,0,1,4.246-10.252,14.4,14.4,0,0,1,10.252-4.246,14.4,14.4,0,0,1,10.252,4.246,14.4,14.4,0,0,1,4.246,10.252,14.408,14.408,0,0,1-4.246,10.256A14.4,14.4,0,0,1-14120.83,20656.484Zm0-23.205a8.709,8.709,0,0,0-8.7,8.7,8.709,8.709,0,0,0,8.7,8.7,8.709,8.709,0,0,0,8.7-8.7A8.71,8.71,0,0,0-14120.83,20633.279Z"
                          transform="translate(14248 -20595)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Subtraction_31"
                          data-name="Subtraction 31"
                          d="M-13990.584,20674.887v0a25.019,25.019,0,0,0-2.979-8.184,16.663,16.663,0,0,0-14.1-8.678c-.331-.014-.619-.02-.88-.02a14.835,14.835,0,0,0-13.31,7.693,23.029,23.029,0,0,0-2.782,7.7h-65.425a21.34,21.34,0,0,0-2.913-7.9c-2.241-3.6-6.646-7.9-14.91-7.9-8.076,0-12.209,4.123-14.253,7.582a19.418,19.418,0,0,0-2.168,5.529,9.751,9.751,0,0,0-.342,2.678c-4.977-2.93-7.726-5.2-9.194-7.584-1.424-2.311-1.788-4.9-1.258-8.953.264-1.76,3.22-5.633,10.03-8.541,7.8-2.193,21.052-4.367,30.791-5.807,10.664-1.572,19.413-2.617,19.482-2.625.043-.037,7.152-6.262,13.34-11.523,1.109-.129,2.148-.26,3.064-.375l.209-.027a45.629,45.629,0,0,1,4.761-.471c.782,0,1.229.111,1.41.352a.561.561,0,0,1,.057.521c-.661,2.557-15.752,17.67-15.9,17.822h46.107l5.76-5.764c.092.01,2.661.326,6.216.764,9.6,1.182,27.466,3.381,27.511,3.4l.567.113c8.667,1.752,8.667,1.752,9.891,5.625l.048.152.063.2a30.078,30.078,0,0,1,0,9.707,14.426,14.426,0,0,1-4.123,6.322,31.111,31.111,0,0,1-6.365,4.539,48.054,48.054,0,0,1-8.4,3.654Zm-69.823-43.678h0l-11.872,10.045,2.543,2.869,12.3-12.914Z"
                          transform="translate(14135.329 -20627.482)"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_222"
                          data-name="Path 222"
                          d="M14916.186-18071.605s-9.358,4.66-8.392,7.77c0-.035,8.08.449,8.392-3.109A15.845,15.845,0,0,0,14916.186-18071.605Z"
                          transform="translate(-14904.673 18095.307)"
                          fill="#ff4605"
                        ></path>
                        <path
                          id="Rectangle_545"
                          data-name="Rectangle 545"
                          d="M0,0H0A3.954,3.954,0,0,1,3.954,3.954V7.344a0,0,0,0,1,0,0h0A3.954,3.954,0,0,1,0,3.389V0A0,0,0,0,1,0,0Z"
                          transform="matrix(-0.996, 0.087, -0.087, -0.996, 161.709, 27.005)"
                          fill="#ff4605"
                        ></path>
                        <rect
                          id="Rectangle_546"
                          data-name="Rectangle 546"
                          width="17"
                          height="4"
                          rx="2"
                          transform="translate(143.671 41.482)"
                          fill="#fff"
                        ></rect>
                        <path
                          id="Path_269"
                          data-name="Path 269"
                          d="M13595.381-20971.379l38.592,26.852-42.614.021Z"
                          transform="translate(-13528.095 20990.256)"
                          fill="#f1efef"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="type-text"><a href="#">Convertible</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="featured-listings">
      <div class="container">
        <div class="featured-title">
          <div class="handy-picked">Handy picked</div>
          <h1 class="title">Featured Listings</h1>
        </div>
        <div class="featured-items">
          <div class="featured-large-items">
            <div class="item-img">
              <a href="#">
                <div class="single-car-img">
                  <img
                    src="~/assets/imgs/cars/car-768x600.jpg"
                    alt="car"
                    class="scaling"
                  />
                </div>
                <div class="img-inner">
                  <div class="img-inner__favorite">
                    <i class="far fa-star"></i>
                  </div>
                  <div class="img-inner__num">
                    <i class="far fa-images"><span>7</span></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="item-text">
              <div class="item-text-top">
                <div class="car-title">Ferrari LaFerrari 2-door coupe red</div>
              </div>
              <div class="item-text-bottom">
                <div>
                  <div class="btn vehica-car-card__info__single">2021</div>
                  <div class="vehica-car-card__info__single">Automatic</div>
                  <div class="vehica-car-card__info__single">Petrol</div>
                  <div class="vehica-car-card__info__single">
                    Front Wheel Drive
                  </div>
                </div>
                <div>
                  <div class="single-car-price">$810,000</div>
                </div>
              </div>
            </div>
          </div>
          <div class="featured-small-items">
            <div class="featured-item">
              <div class="item-img">
                <a href="#">
                  <div class="single-car-img">
                    <img
                      src="~/assets/imgs/cars/audi3-670x372.jpg"
                      alt="car"
                      class="scaling"
                    />
                  </div>
                  <div class="img-inner">
                    <div class="img-inner__favorite">
                      <i class="far fa-star"></i>
                    </div>
                    <div class="img-inner__num">
                      <i class="far fa-images"><span>6</span></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="item-text">
                <div class="item-text-top">
                  <div class="single-car-title">
                    Ferrari LaFerrari 2-door coupe red
                  </div>
                  <div class="single-car-price">$810,000</div>
                </div>
                <div class="item-text-bottom">
                  <div class="btn vehica-car-card__info__single">2021</div>
                  <div class="vehica-car-card__info__single">Automatic</div>
                  <div class="vehica-car-card__info__single">Diesel</div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="item-img">
                <a href="#">
                  <div class="single-car-img">
                    <img
                      src="~/assets/imgs/cars/audi3-670x372.jpg"
                      alt="car"
                      class="scaling"
                    />
                  </div>
                  <div class="img-inner">
                    <div class="img-inner__favorite">
                      <i class="far fa-star"></i>
                    </div>
                    <div class="img-inner__num">
                      <i class="far fa-images"><span>6</span></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="item-text">
                <div class="item-text-top">
                  <div class="single-car-title">
                    Ferrari LaFerrari 2-door coupe red
                  </div>
                  <div class="single-car-price">$810,000</div>
                </div>
                <div class="item-text-bottom">
                  <div class="btn vehica-car-card__info__single">2021</div>
                  <div class="vehica-car-card__info__single">Automatic</div>
                  <div class="vehica-car-card__info__single">Diesel</div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="item-img">
                <a href="#">
                  <div class="single-car-img">
                    <img
                      src="~/assets/imgs/cars/audi3-670x372.jpg"
                      alt="car"
                      class="scaling"
                    />
                  </div>
                  <div class="img-inner">
                    <div class="img-inner__favorite">
                      <i class="far fa-star"></i>
                    </div>
                    <div class="img-inner__num">
                      <i class="far fa-images"><span>6</span></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="item-text">
                <div class="item-text-top">
                  <div class="single-car-title">
                    Ferrari LaFerrari 2-door coupe red
                  </div>
                  <div class="single-car-price">$810,000</div>
                </div>
                <div class="item-text-bottom">
                  <div class="btn vehica-car-card__info__single">2021</div>
                  <div class="vehica-car-card__info__single">Automatic</div>
                  <div class="vehica-car-card__info__single">Diesel</div>
                </div>
              </div>
            </div>
            <div class="featured-item">
              <div class="item-img">
                <a href="#">
                  <div class="single-car-img">
                    <img
                      src="~/assets/imgs/cars/audi3-670x372.jpg"
                      alt="car"
                      class="scaling"
                    />
                  </div>
                  <div class="img-inner">
                    <div class="img-inner__favorite">
                      <i class="far fa-star"></i>
                    </div>
                    <div class="img-inner__num">
                      <i class="far fa-images"><span>6</span></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="item-text">
                <div class="item-text-top">
                  <div class="single-car-title">
                    Ferrari LaFerrari 2-door coupe red
                  </div>
                  <div class="single-car-price">$810,000</div>
                </div>
                <div class="item-text-bottom">
                  <div class="btn vehica-car-card__info__single">2021</div>
                  <div class="vehica-car-card__info__single">Automatic</div>
                  <div class="vehica-car-card__info__single">Diesel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-footer">
          <div class="follow-us">
            <div class="follow-us-label">follow us</div>
            <div class="follow-us-icons">
              <a href="#" class="follow-us-icon"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" class="follow-us-icon"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="follow-us-icon"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popular-makes">
      <div class="container">
        <div class="popular-makes-tabs">
          <div class="popular-makes-tab-title">
            <h1 class="title">Popular Makes</h1>
          </div>
          <div class="popular-makes-tab-btns">
            <div class="popular-makes-tab-btn">
              <div class="popular-makes-tab-btn__title">Audi</div>
              <div class="popular-makes-tab-btn__subtitle" id="subtitle">4 Listings</div>
            </div>
            <div class="popular-makes-tab-btn">
              <div class="popular-makes-tab-btn__title">BMW</div>
              <div class="popular-makes-tab-btn__subtitle">1 Listings</div>
            </div>
            <div class="popular-makes-tab-btn">
              <div class="popular-makes-tab-btn__title">Cadillac</div>
              <div class="popular-makes-tab-btn__subtitle">0 Listings</div>
            </div>
            <div class="popular-makes-tab-btn">
              <div class="popular-makes-tab-btn__title">Ferrari</div>
              <div class="popular-makes-tab-btn__subtitle">1 Listings</div>
            </div>
          </div>
        </div>
        <div class="popular-makes-car-list">
          <div class="featured-item">
            <div class="item-img">
              <a href="#">
                <div class="single-car-img">
                  <img
                    src="~/assets/imgs/cars/audi3-670x372.jpg"
                    alt="car"
                    class="scaling"
                  />
                </div>
                <div class="img-inner">
                  <div class="img-inner__favorite">
                    <i class="far fa-star"></i>
                  </div>
                  <div class="img-inner__num">
                    <i class="far fa-images"><span>6</span></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="item-text">
              <div class="item-text-top">
                <div class="single-car-title">
                  Ferrari LaFerrari 2-door coupe red
                </div>
                <div class="single-car-price">$810,000</div>
              </div>
              <div class="item-text-bottom">
                <div class="btn vehica-car-card__info__single">2021</div>
                <div class="vehica-car-card__info__single">Automatic</div>
                <div class="vehica-car-card__info__single">Diesel</div>
              </div>
            </div>
          </div>
          <div class="featured-item">
            <div class="item-img">
              <a href="#">
                <div class="single-car-img">
                  <img
                    src="~/assets/imgs/cars/audi3-670x372.jpg"
                    alt="car"
                    class="scaling"
                  />
                </div>
                <div class="img-inner">
                  <div class="img-inner__favorite">
                    <i class="far fa-star"></i>
                  </div>
                  <div class="img-inner__num">
                    <i class="far fa-images"><span>6</span></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="item-text">
              <div class="item-text-top">
                <div class="single-car-title">
                  Ferrari LaFerrari 2-door coupe red
                </div>
                <div class="single-car-price">$810,000</div>
              </div>
              <div class="item-text-bottom">
                <div class="btn vehica-car-card__info__single">2021</div>
                <div class="vehica-car-card__info__single">Automatic</div>
                <div class="vehica-car-card__info__single">Diesel</div>
              </div>
            </div>
          </div>
          <div class="featured-item">
            <div class="item-img">
              <a href="#">
                <div class="single-car-img">
                  <img
                    src="~/assets/imgs/cars/audi3-670x372.jpg"
                    alt="car"
                    class="scaling"
                  />
                </div>
                <div class="img-inner">
                  <div class="img-inner__favorite">
                    <i class="far fa-star"></i>
                  </div>
                  <div class="img-inner__num">
                    <i class="far fa-images"><span>6</span></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="item-text">
              <div class="item-text-top">
                <div class="single-car-title">
                  Ferrari LaFerrari 2-door coupe red
                </div>
                <div class="single-car-price">$810,000</div>
              </div>
              <div class="item-text-bottom">
                <div class="btn vehica-car-card__info__single">2021</div>
                <div class="vehica-car-card__info__single">Automatic</div>
                <div class="vehica-car-card__info__single">Diesel</div>
              </div>
            </div>
          </div>
          <div class="featured-item">
            <div class="item-img">
              <a href="#">
                <div class="single-car-img">
                  <img
                    src="~/assets/imgs/cars/audi3-670x372.jpg"
                    alt="car"
                    class="scaling"
                  />
                </div>
                <div class="img-inner">
                  <div class="img-inner__favorite">
                    <i class="far fa-star"></i>
                  </div>
                  <div class="img-inner__num">
                    <i class="far fa-images"><span>6</span></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="item-text">
              <div class="item-text-top">
                <div class="single-car-title">
                  Ferrari LaFerrari 2-door coupe red
                </div>
                <div class="single-car-price">$810,000</div>
              </div>
              <div class="item-text-bottom">
                <div class="btn vehica-car-card__info__single">2021</div>
                <div class="vehica-car-card__info__single">Automatic</div>
                <div class="vehica-car-card__info__single">Diesel</div>
              </div>
            </div>
          </div>
        </div>
        <div class="popular-makes-btn">
          <a href="#" title="without relative">View 4 Audi</a>
        </div>
      </div>
    </div>
    <div class="why-choose-us">
      <div class="container">
        <h1 class="title">Why choose us?</h1>
        <div class="because-our-info">
          <div class="because-item">
            <div class="because-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34"><g id="medal" transform="translate(-71.962)"><path id="Path_20" data-name="Path 20" d="M89.3,23.828l1.527-2.523,2.755-.957.305-2.947,2.073-2.078-.985-2.789.985-2.79L93.889,7.666l-.305-2.947-2.755-.957L89.3,1.239l-2.888.355L83.962,0,81.509,1.594l-2.887-.355L77.1,3.762l-2.755.957-.305,2.947L71.962,9.744l.985,2.79-.985,2.79L74.035,17.4l.305,2.947,2.755.957,1.527,2.523,2.888-.355,2.453,1.594,2.453-1.594ZM75.523,12.534a8.441,8.441,0,1,1,16.879,0,8.441,8.441,0,1,1-16.879,0Z" transform="translate(0 0)" fill="#ff4605"></path><path id="Path_21" data-name="Path 21" d="M163.072,89.333a6.6,6.6,0,1,0,6.482,6.6A6.55,6.55,0,0,0,163.072,89.333Z" transform="translate(-79.11 -83.401)" fill="#ff4605"></path><path id="Path_22" data-name="Path 22" d="M89.039,345.326l-3.435.422-1.815-3-.617-.214-2.661,8.471,4.791-.268,3.748,3.051,2.206-7.021Z" transform="translate(-7.992 -319.789)" fill="#ff4605"></path><path id="Path_23" data-name="Path 23" d="M274.168,342.749l-1.815,3-3.435-.422-2.217,1.441,2.206,7.021,3.748-3.051,4.791.268-2.661-8.471Z" transform="translate(-182.041 -319.789)" fill="#ff4605"></path></g></svg>
            </div>
            <h2 class="because-item-title">Wide range of brands</h2>
            <div class="because-item-content">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</div>
          </div>
          <div class="because-item">
            <div class="because-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 37.001 32"><g id="trust" transform="translate(0.001)"><path id="Path_271" data-name="Path 271" d="M243.168,1.072a1.084,1.084,0,0,0-2.168,0V5.665a1.084,1.084,0,0,0,2.168,0Zm0,0" transform="translate(-223.585)" fill="#49df0b"></path><path id="Path_272" data-name="Path 272" d="M147.238,52.326a1.092,1.092,0,0,0,1.533,0,1.064,1.064,0,0,0,0-1.516l-2.322-2.3a1.092,1.092,0,0,0-1.533,0,1.064,1.064,0,0,0,0,1.516Zm0,0" transform="translate(-134.149 -44.754)" fill="#49df0b"></path><path id="Path_273" data-name="Path 273" d="M306.35,52.64a1.086,1.086,0,0,0,.766-.314l2.322-2.3a1.064,1.064,0,0,0,0-1.516,1.092,1.092,0,0,0-1.533,0l-2.322,2.3a1.063,1.063,0,0,0,0,1.516,1.087,1.087,0,0,0,.766.314Zm0,0" transform="translate(-283.206 -44.754)" fill="#49df0b"></path><path id="Path_274" data-name="Path 274" d="M15.364,141.319l-.032.027-4.687,3.973a2.418,2.418,0,0,1-1.562.571H5.727A5.693,5.693,0,0,0,0,151.554V161.89a1.078,1.078,0,0,0,1.084,1.072h9.288a1.078,1.078,0,0,0,1.084-1.072v-9.842l5.516-4.676a1.251,1.251,0,0,0,.444-.954V142.3a1.266,1.266,0,0,0-2.052-.983Zm0,0" transform="translate(0 -130.962)" fill="#49df0b"></path><path id="Path_275" data-name="Path 275" d="M282.689,145.89h-3.357a2.417,2.417,0,0,1-1.562-.571l-4.687-3.973-.032-.027A1.266,1.266,0,0,0,271,142.3v4.116a1.251,1.251,0,0,0,.444.954l5.516,4.676v9.841a1.078,1.078,0,0,0,1.084,1.072h9.288a1.078,1.078,0,0,0,1.084-1.072V151.554a5.693,5.693,0,0,0-5.727-5.664Zm0,0" transform="translate(-251.416 -130.962)" fill="#49df0b"></path><path id="Path_276" data-name="Path 276" d="M25.2,86.982A4.567,4.567,0,1,0,20.634,91.5,4.547,4.547,0,0,0,25.2,86.982Zm0,0" transform="translate(-14.906 -76.571)" fill="#49df0b"></path><path id="Path_277" data-name="Path 277" d="M378.67,86.982A4.567,4.567,0,1,0,374.1,91.5,4.547,4.547,0,0,0,378.67,86.982Zm0,0" transform="translate(-342.831 -76.571)" fill="#49df0b"></path></g></svg>
            </div>
            <h2 class="because-item-title">Trusted by our clients</h2>
            <div class="because-item-content">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</div>
          </div>
          <div class="because-item">
            <div class="because-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 28 44.654"><g id="money2" transform="translate(-91.358)"><g id="Group_568" data-name="Group 568" transform="translate(91.358)"><g id="Group_564" data-name="Group 564" transform="translate(0)"><path id="Path_288" data-name="Path 288" d="M118.257,24.848c-.5-.392-5.733-6.2-7.146-7.019V2.762A2.76,2.76,0,0,0,108.348,0H94.12a2.76,2.76,0,0,0-2.762,2.762V29.141A2.76,2.76,0,0,0,94.12,31.9h6.2l-.255-2.169c-.082-.073-.137-.118-.219-.191H97.11a2.8,2.8,0,0,0-3.4-3.409V5.6a3.126,3.126,0,0,0,.51.046,2.8,2.8,0,0,0,2.8-2.8,3,3,0,0,0-.046-.492h8.5a3,3,0,0,0-.046.492,2.793,2.793,0,0,0,2.8,2.8,3.126,3.126,0,0,0,.51-.046V25.641h0V31.4a10.463,10.463,0,0,1-2.042-2.935s-.529-5.916-3.528-5.916a2.059,2.059,0,0,0-.237.009s-2.27.191-.392,6.681l.839,7.21a16.375,16.375,0,0,0,3.528,6.618v.8a.784.784,0,0,0,.784.784h8.431a.78.78,0,0,0,.775-.693c.3-2.807,1.468-13.244,2.151-14.83a2.992,2.992,0,0,0,.237-.784A3.6,3.6,0,0,0,118.257,24.848Z" transform="translate(-91.358 0)" fill="#0575ff"></path></g><g id="Group_565" data-name="Group 565" transform="translate(8.504 5.642)"><circle id="Ellipse_125" data-name="Ellipse 125" cx="1.677" cy="1.677" r="1.677" fill="#0575ff"></circle></g><path id="Union_22" data-name="Union 22" d="M-16320,20218.059a6.054,6.054,0,0,1,6.055-6.059,6.063,6.063,0,0,1,6.061,6.059,6.066,6.066,0,0,1-1.913,4.422,4.662,4.662,0,0,0-2.2-.543,3.734,3.734,0,0,0-.492.025,3.5,3.5,0,0,0-2.518,1.578,4.23,4.23,0,0,0-.264.436A6.072,6.072,0,0,1-16320,20218.059Z" transform="translate(16323.819 -20201.918)" fill="#0575ff"></path></g></g></svg>
            </div>
            <h2 class="because-item-title">Fast & easy financing</h2>
            <div class="because-item-content">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="our-team">
      <div class="bg-modify"></div>
      <div class="container">
        <div class="our-team__info">
          <div class="our-team-info__left">
            <h1 class="title">Our team</h1>
            <ul class="team-info-list">
              <li class="team-item">Praesent nibh luctus viverra</li>
              <li class="team-item">Adipiscing elit</li>
              <li class="team-item">Tempor incididunt ut labore</li>
              <li class="team-item">Quis ipsum suspendisseviverra</li>
              <li class="team-item">Maecenas ac</li>
            </ul>
            <div class="learn-btn"><a href="#" class="vahica-buttom">Learn more</a></div>
            <div class="slideshow">
              <div class="slideshow-left-btn" @click="swiperLeft(1)"><i class="far fa-chevron-left"></i></div>
              <div class="slideshow-right-btn" @click="swiperRight(1)"><i class="far fa-chevron-right"></i></div>
            </div>
          </div>
        </div>
        <div class="our-team-info__right">
          <div class="our-team-member-card-list">
            <div class="vehica-swiper-wrapper" :style="{left:cardPosi + 'px'}">
              <div class="our-team-member-card-item">
                <div class="card-member-img">
                  <a href="#">
                    <img src="~/assets/imgs/ourTeamMember/p7-1-336x284.jpg" alt="Emily">
                  </a>
                </div>
                <div class="card-member-info">
                  <div class="contact-click-methods">
                    <div class="phone-btn"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
                    <div class="email-btn"><a href="#"><i class="fas fa-envelope"></i></a></div>
                  </div>
                  <div class="member-info">
                    <div class="member-name"><a href="#">Emily Ress</a></div>
                    <div class="member-profession">Customer Advisor</div>
                  </div>
                  <div class="contact-methods">
                    <div class="emial"><a href="#">george@vehica.com</a></div>
                    <div class="phone"><a href="#">(123) 345-6789</a></div>
                  </div>
                </div>
              </div>
              <div class="our-team-member-card-item">
                <div class="card-member-img">
                  <a href="#">
                    <img src="~/assets/imgs/ourTeamMember/p6-1-336x284.jpg" alt="Emily">
                  </a>
                </div>
                <div class="card-member-info">
                  <div class="contact-click-methods">
                    <div class="phone-btn"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
                    <div class="email-btn"><a href="#"><i class="fas fa-envelope"></i></a></div>
                  </div>
                  <div class="member-info">
                    <div class="member-name"><a href="#">Emily Ress</a></div>
                    <div class="member-profession">Customer Advisor</div>
                  </div>
                  <div class="contact-methods">
                    <div class="emial"><a href="#">george@vehica.com</a></div>
                    <div class="phone"><a href="#">(123) 345-6789</a></div>
                  </div>
                </div>
              </div>
              <div class="our-team-member-card-item">
                <div class="card-member-img">
                  <a href="#">
                    <img src="~/assets/imgs/ourTeamMember/p4-1-336x284.jpg" alt="Emily">
                  </a>
                </div>
                <div class="card-member-info">
                  <div class="contact-click-methods">
                    <div class="phone-btn"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
                    <div class="email-btn"><a href="#"><i class="fas fa-envelope"></i></a></div>
                  </div>
                  <div class="member-info">
                    <div class="member-name"><a href="#">Emily Ress</a></div>
                    <div class="member-profession">Customer Advisor</div>
                  </div>
                  <div class="contact-methods">
                    <div class="emial"><a href="#">george@vehica.com</a></div>
                    <div class="phone"><a href="#">(123) 345-6789</a></div>
                  </div>
                </div>
              </div>
              <div class="our-team-member-card-item">
                <div class="card-member-img">
                  <a href="#">
                    <img src="~/assets/imgs/ourTeamMember/p3-1-336x284.jpg" alt="Emily">
                  </a>
                </div>
                <div class="card-member-info">
                  <div class="contact-click-methods">
                    <div class="phone-btn"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
                    <div class="email-btn"><a href="#"><i class="fas fa-envelope"></i></a></div>
                  </div>
                  <div class="member-info">
                    <div class="member-name"><a href="#">Emily Ress</a></div>
                    <div class="member-profession">Customer Advisor</div>
                  </div>
                  <div class="contact-methods">
                    <div class="emial"><a href="#">george@vehica.com</a></div>
                    <div class="phone"><a href="#">(123) 345-6789</a></div>
                  </div>
                </div>
              </div>
              <div class="our-team-member-card-item">
                <div class="card-member-img">
                  <a href="#">
                    <img src="~/assets/imgs/ourTeamMember/p2-1-336x284.jpg" alt="Emily">
                  </a>
                </div>
                <div class="card-member-info">
                  <div class="contact-click-methods">
                    <div class="phone-btn"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
                    <div class="email-btn"><a href="#"><i class="fas fa-envelope"></i></a></div>
                  </div>
                  <div class="member-info">
                    <div class="member-name"><a href="#">Emily Ress</a></div>
                    <div class="member-profession">Customer Advisor</div>
                  </div>
                  <div class="contact-methods">
                    <div class="emial"><a href="#">george@vehica.com</a></div>
                    <div class="phone"><a href="#">(123) 345-6789</a></div>
                  </div>
                </div>
              </div>
              <div class="our-team-member-card-item">
                <div class="card-member-img">
                  <a href="#">
                    <img src="~/assets/imgs/ourTeamMember/p1-1-336x284.jpg" alt="Emily">
                  </a>
                </div>
                <div class="card-member-info">
                  <div class="contact-click-methods">
                    <div class="phone-btn"><a href="#"><i class="fas fa-phone-alt"></i></a></div>
                    <div class="email-btn"><a href="#"><i class="fas fa-envelope"></i></a></div>
                  </div>
                  <div class="member-info">
                    <div class="member-name"><a href="#">Emily Ress</a></div>
                    <div class="member-profession">Customer Advisor</div>
                  </div>
                  <div class="contact-methods">
                    <div class="emial"><a href="#">george@vehica.com</a></div>
                    <div class="phone"><a href="#">(123) 345-6789</a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div class="how-to-buy-car">
      <div class="container">
        <div class="how-to-buy-car-top swiper">
          <div class="swiper-wraper">
            <div class="slideshow-left-btn" @click="swiperLeft(2)"><i class="far fa-chevron-left"></i></div>
            <div class="swiper-content">
              <ul class="swiper-list" :style="{left:imgPosi + 'px'}">
                <li class="swiper-list-item"><a href="#" class="swiper-list-item-link"><img src="~/assets/imgs/themeforest.png" alt="a"></a></li>
                <li class="swiper-list-item"><a href="#" class="swiper-list-item-link"><img src="~/assets/imgs/themeforest.png" alt="b"></a></li>
                <li class="swiper-list-item"><a href="#" class="swiper-list-item-link"><img src="~/assets/imgs/themeforest.png" alt="v"></a></li>
                <li class="swiper-list-item"><a href="#" class="swiper-list-item-link"><img src="~/assets/imgs/themeforest.png" alt="d"></a></li>
                <li class="swiper-list-item"><a href="#" class="swiper-list-item-link"><img src="~/assets/imgs/themeforest.png" alt="s"></a></li>
              </ul>
            </div>
            <div class="slideshow-right-btn" @click="swiperRight(2)"><i class="far fa-chevron-right"></i></div>
          </div>
        </div>
        <div class="how-to-buy-car-bottom">
            <div class="how-to-buy-car-sub">download APP</div>
            <div class="how-to-buy-car-main">
              <div class="main-title">
                <h1 class="title">How to buy a car</h1>
                <div class="buttom">
                  <a href="" class="vahica-buttom">Read more</a>
                </div>
              </div>
              <div class="main-info">
                <ul class="main-info-list">
                  <li class="main-info-item">best deals</li>
                  <li class="main-info-item">sell your car</li>
                  <li class="main-info-item">car book values</li>
                  <li class="main-info-item">car dealers</li>
                  <li class="main-info-item">compare prices</li>
                </ul>
              </div>
            </div>
          </div>
      </div>

    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
  name: "IndexPage",
  data() {
    return {
      isTriangle: 0,
      cardPosi:0,
      imgPosi:0,
      options: [
        {
          value: "1",
          label: "Audi",
        },
        {
          value: "2",
          label: "BMW",
        },
        {
          value: "3",
          label: "Bentley",
        },
        {
          value: "4",
          label: "Porsche",
        },
        {
          value: "5",
          label: "Cadillac",
        },
      ],
      value: "",
    };
  },
  methods: {
    swiperLeft(item){
      let singleCardWidth = 356
      let singleImgWidth = 320
      switch(item) {
      case 1:
        //card swiper
        if(this.cardPosi === 0){
          this.cardPosi -= singleCardWidth*2
        }else if(this.cardPosi < 0){
          this.cardPosi += singleCardWidth
        }
        break;
      case 2:
        // img swiper
        if(this.imgPosi === 0){
          this.imgPosi -= singleImgWidth
        }else{
          this.imgPosi = 0
        }
        break;
      } 
    },
    swiperRight(item){
      let singleCardWidth = 356
      let singleImgWidth = 320
      switch(item) {
        case 1:
          //card swiper
          if(Math.abs(this.cardPosi) == Math.abs(singleCardWidth*2)){
            this.cardPosi = 0
          }else if(this.cardPosi <= 0){
            this.cardPosi -= singleCardWidth
          }
          break;
        case 2:
          // img swiper
          if(this.imgPosi === 0){
            this.imgPosi -= singleImgWidth
          }else{
            this.imgPosi = 0
          }
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 50px;
  line-height: 63px;
  text-align: left;
  font-weight: 900;
}
.scaling {
  width: 100%;
  transform: scale(1);
  transition: transform 0.6s ease-in-out;
  &:hover {
    transform: scale(1.11);
  }
}
.featured-item {
  width: 47.1%;
  margin: 0 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  .item-img {
    position: relative;
    a {
      width: 100%;
      display: inline-block;
      overflow: hidden;
      .img-inner {
        width: 100%;
        position: absolute;
        bottom: 2px;
        padding: 0 22px 19px 22px;
        display: flex;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0)
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.6) 8%,
            rgba(0, 0, 0, 0) 94%
          )
          repeat scroll 0 0;
        z-index: 2;
        line-height: 25px;
        color: #a7a7a7;
        span {
          margin-left: 5px;
          font-weight: 900;
        }
      }
    }
  }
  .item-text {
    background-color: #222732;
    margin-top: -2px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    .item-text-top {
      padding-bottom: 10px;
      border-bottom: 1px solid #343b4a;
      .single-car-title {
        font-size: 17px;
        line-height: 21px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
      }
      .single-car-price {
        line-height: 35px;
        font-size: 20px;
        font-weight: 900;
      }
    }
    .item-text-bottom {
      display: flex;
      margin-top: 15px;
      div:first-child {
        display: flex;
      }
      .vehica-car-card__info__single {
        line-height: 28px;
        font-size: 14px;
        margin-right: 12px;
        &:not(:first-child) {
          color: #99a1b2;
        }
      }
      .btn {
        padding: 0 11px;
        color: #fff;
        background: var(--primary);
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
        margin-right: 20px;
        line-height: 28px;
      }
    }
  }
}
.vahica-buttom{
  overflow: hidden;
  display: inline-block;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border: 0 solid transparent;
  box-shadow: none;
  cursor: pointer;
  padding: 16px 25px 16px 25px;
  vertical-align: top;
  border-radius: 10px;
  background-color: var(--primary);
  transition: all 0.2s ease-in-out;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  transition-delay: 0s;
  align-items: center;
  transform: translateZ(0);
  text-decoration: none;
}
.slideshow-left-btn,.slideshow-right-btn{
  background-color: #fff;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: inline-block;
  text-align: center;
  transition: all 0.2s ease;
  i{
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #2f3b48;
    line-height: 55px;
  }
}

.search {
  height: 620px;
  background-color: #222732;
  background-image: url(https://chinaexportcar.com/wp-content/uploads/2020/10/bg-1920-new.jpg);
  background-position: center center;
  background-size: cover;
  margin-top: -105px;
  padding-top: 130px;
  .search__box {
    color: #fff;
    .search__box-title {
      text-align: center;
      font-size: 61px;
      line-height: 62px;
      font-weight: 900;
    }
    .filter {
      max-width: 800px;
      margin: 0 auto;
      width: 100%;
      .cars-type {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        .type-item {
          padding: 10px;
          margin: 0 18px 18px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          &::after {
            opacity: 0;
            content: "";
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #fff;
            position: absolute;
            bottom: -26px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: inline-block;
            transition: bottom 0.3s ease-in-out;
          }
        }
        .triangle {
          position: relative;
          color: var(--primary);
          &::after {
            opacity: 1;
            bottom: -18px;
          }
        }
      }
      .select {
        position: relative;
        z-index: 10;
        .select__box {
          padding: 15px;
          background-color: #ffffff;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          .btn {
            width: 57px;
            height: 53px;
            background-color: var(--primary);
            border-radius: 10px;
            i {
              font-family: "Font Awesome 5 Free";
              font-weight: 600;
              color: #ffffff;
            }
          }
        }
        .select-opacity-border {
          content: "";
          display: block;
          position: absolute;
          bottom: -9px;
          left: 0;
          background: #fff;
          width: 100%;
          height: 50%;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          opacity: 0.59;
          z-index: -1;
        }
      }

      .some-filter-car-types {
        margin-top: 80px;
        display: flex;
        justify-content: center;
        text-align: center;
        .type {
          .type-icon {
            width: 80px;
            height: 80px;
            margin: 0 15px 15px;
            a {
              display: inline-block;
              width: 80px;
              height: 80px;
              border: 2px solid #ffffff;
              border-radius: 50%;
              transition: border-color 0s ease-in-out 0s;
              &:hover {
                border-color: var(--primary);
              }
              svg {
                padding-top: 12px;
              }
            }
          }
        }
      }
    }
  }
}
.featured-listings {
  padding-top: 48px;
  padding-bottom: 48px;
  .handy-picked {
    font-size: 22px;
    line-height: 1.64;
    color: var(--primary);
  }
  .featured-items {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    .featured-large-items {
      width: 50%;
      margin-right: 10px;
      margin-bottom: 20px;
      border-radius: 10px;
      overflow: hidden;
      .item-img {
        width: 100%;
        a {
          display: inline-block;
          position: relative;
          width: 100%;
          .single-car-img {
            overflow: hidden;
          }
          .img-inner {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            padding: 20px 40px;
            background: rgba(0, 0, 0, 0)
              linear-gradient(0deg, rgba(0, 0, 0, 0.6) 8%, rgba(0, 0, 0, 0) 94%)
              repeat scroll 0 0;
            z-index: 2;
            font-size: 20px;
            font-weight: 800;
            line-height: 25px;
            color: #a7a7a7;
            .img-inner__favorite {
              border-radius: 50%;
              z-index: 20;
              width: 40px;
              height: 40px;
              text-align: center;
              opacity: 1;
              transition: all 0.5s ease;
              background: transparent;
              i {
                line-height: 40px;
              }
              &:hover {
                background: #ffffff;
                line-height: 40px;
              }
            }
            .img-inner__num {
              span {
                margin-left: 5px;
                font-weight: 900;
              }
            }
          }
        }
      }
      .item-text {
        background-color: #222732;
        margin-top: -2px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 30px 35px;
        .item-text-top {
          border-bottom: 1px solid #343b4a;
          .car-title {
            font-size: 22px;
            line-height: 28px;
            margin-bottom: 20px;
          }
        }
        .item-text-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          div:first-child {
            display: flex;
            div {
              margin-right: 15px;
            }
          }
          .vehica-car-card__info__single {
            line-height: 34px;
            font-size: 17px;
            &:not(:first-child) {
              color: #99a1b2;
            }
          }
          .btn {
            padding: 0 11px;
            color: #fff;
            background: var(--primary);
            border-radius: 5px;
            font-weight: 500;
          }
          .single-car-price {
            line-height: 35px;
            font-size: 28px;
            font-weight: 900;
          }
        }
      }
    }
    .featured-small-items {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .featured-footer {
    display: flex;
    justify-content: space-between;
    .follow-us {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .follow-us-label {
        margin-right: 30px;
        color: #99a1b2;
        font-size: 17px;
        font-weight: 500;
      }
      .follow-us-icons {
        display: flex;
        justify-content: center;
        align-items: cneter;
        .follow-us-icon {
          width: 40px;
          height: 40px;
          line-height: 40px;
          margin-right: 12px;
          border-radius: 50%;
          color: #222732;
          background: #eff0f1;
          transition: all 0.2s ease;
          text-align: center;
          &:hover {
            background: #ebebeb;
          }
        }
      }
    }
  }
}
.popular-makes {
  padding-top: 68px;
  padding-bottom: 68px;
  background: #eff3fa;
  .popular-makes-tabs{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .popular-makes-tab-btns{
      display: flex;
      .popular-makes-tab-btn{
        height: 64px;
        padding: 0 29px;
        margin: 0 6px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        background: #fff; 
        border: 1px solid #fff;
        text-align: center;
        .popular-makes-tab-btn__title{
          font-weight: 600;
        }
        .popular-makes-tab-btn__subtitle{
          font-size: 12px;
          color: rgba(34, 39, 50, 0.5);
          font-size: 12px;
          line-height: 15px;
          margin-top: 2px;
          text-align: center;;
        }
       #subtitle{
          color: var(--primary);
        }
        &:first-child{
          background: var(--primary-light); 
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        &:not(:first-child):hover{
          border: 1px solid var(--primary);
          background: var(--primary-light);
        }
      }
    }
  }
  .popular-makes-car-list{
    display: flex;
    margin: 30px 0;
    .featured-item{
      margin-left: 0;
      width: 25%;
      margin-right: 30px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .popular-makes-btn{
    text-align: right;
    -webkit-perspective: 1200px;
    perspective: 1200px;
    a{
      overflow: hidden;
      display: inline-block;
      font-size: 17px;
      line-height: 21px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      border: 0 solid transparent;
      cursor: pointer;
      padding: 16px 25px 16px 25px;
      vertical-align: top;
      border-radius: 10px;
      background-color: var(--primary);
      transition: all 0.2s ease-in-out;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: linear;
      transition-delay: 0s;
      align-items: center;
      transform: translateZ(0);
      &:hover{
        background: #FF591E;
      }
    }
  }
}
.why-choose-us{
  padding: 93px 0;
  h1{
    text-align: center;
  }
  .because-our-info{
    display: flex;
    justify-content: center;
    .because-item{
      padding: 105px 50px 0;
      .because-item-icon{
        width: 75px;
        height: 75px;
        border-radius: 50%;
        text-align: center;
        line-height: 93px;
        margin: 0 auto;
      }
      &:nth-child(1) .because-item-icon{
         background-color: #FFECE6;
      }
      &:nth-child(2) .because-item-icon{
         background-color: #ECFFE6;
      }
      &:nth-child(3) .because-item-icon{
         background-color: #E6F1FF;
      }
      .because-item-title{
        text-align: center;
        color: #000000;
        font-size: 24px;
        font-weight: 700;
        padding: 50px 0 30px;
      }
      .because-item-content{
        width:300px;
        text-align: center;
        color: #6F6F6F;
        font-size: 16px;
        line-height: 27px;
        width: 300px;
        max-width: 300px;
      }
    }
  }
}
.our-team{
  padding-bottom: 100px;
  position: relative;
  overflow: hidden;
  .bg-modify{
    width: 100%;
    height: 80%;
    background-color: var(--bg);
    position: absolute;
    top: 20%;
    z-index: -1;
    padding-bottom: 50px;
  }
  .our-team__info{
    display: flex;
    position: relative;
    &:after{
      border-radius: 22px;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url(~assets/imgs/background-team.png);
      background-size: cover;
      z-index: -1;
    }
    .our-team-info__left{
      position: relative;
      padding: 106px 30px 47px 74px;
      width: 450px;
      h1{
        color: #fff;
        margin-bottom: 45px;
      }
      .team-info-list{
        line-height: 1.65;
        line-height: 1.65;
        font-size: 20px;
        color: #99a1b2;
      }
      .team-item{
        margin-top: 4px;
        margin-bottom: 4px;
        padding-left: 38px;
        padding-right: 15px;
        position: relative;
        &::before{
          position: absolute;
          left: 0;
          top: 5px;
          content: "\f058";
          font-weight: 900;
          font-family: "Font Awesome 5 Free";
          display: inline-block;
          color: var(--primary);
          padding-right: 20px;
          font-size: 16px;
        }
      }
      .learn-btn{
        margin-top: 71px;
        width: auto;
        min-width: 166px;
      }
      .slideshow{
        margin-top: 50px;
        div{
          &:last-child{
            margin-left: 6px;
          }
          &:hover{
            box-shadow: 0px 3px 40px 0 #dbe0e8;
          }
        }
      }
    }
  }
  .container{
    position: relative;
    .our-team-info__right{
      position: absolute;
      top: 50px;
      left: 35%;
      width: 2200px;
      height: 510px;
      overflow: hidden;
      .our-team-member-card-list{
        width: 100%;
        position: relative;
        .vehica-swiper-wrapper{
          display: flex;
          position: absolute;
          transition: all .3s ease;
          width: 100%;
          .our-team-member-card-item{
            border-radius: 10px;
            overflow: hidden;
            margin-right: 20px;
            transition: all .3s ease;
            margin-top: 10px;
            &:hover{
              margin-top: 0;
            }
            .card-member-img{
              max-width: 336px;
              a{
                display: inline-block;
                width: 100%;
                height: 100%;
                img{
                  width: 100%;
                }
              }
            }
            .card-member-info{
              background-color: #fff;
              margin-top: -2px;
              padding: 45px 30px 30px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              .contact-click-methods{
                margin-top: -72px;
                display: flex;
                div{
                  width: 47px;
                  height: 47px;
                  line-height: 47px;
                  font-size: 20px;
                  border-radius: 10px;
                  color: #fff;
                  text-align: center;
                  display: inline-block;
                  margin-bottom: 25px;
                  margin-right: 10px;
                  background-color: var(--primary);
                }
              }
              .member-info{
                border-bottom: 1px solid #ecf0f3;
                .member-name{
                  font-size: 23px;
                  line-height: 29px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  letter-spacing: normal;
                  text-align: left;
                  margin-bottom: 7px;
                  color: #222732;
                }
                .member-profession{
                  opacity: 0.5;
                  font-size: 15px;
                  line-height: 19px;
                  font-weight: 500;
                  text-align: left;
                  color: #222732;
                  margin-bottom: 15px;
                }
              }
              .contact-methods{
                margin-top: 19px;
                .emial{
                  font-size: 16px;
                  line-height: 24px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: var(--primary);
                }
                .phone{
                  font-size: 16px;
                  color: #99a1b2;
                  line-height: 24px;
                }
              }
            }
          }
        }
        
      }
    }
  }

}
.how-to-buy-car{
  padding: 90px 0 65px;
  .swiper-wraper{
    display: flex;
    .swiper-content{
      width: 100%;
      overflow: hidden;
      position: relative;
      .swiper-list{
        display: flex;
        height: 55px;
        line-height: 55px;
        position: absolute;
        margin-left: 15px;
        transition: all .3s ease;
        .swiper-list-item{
          width: 320px;
          padding: 0 30px;
          a{
            display: inline-block;
            width: 100%;
            img{
              width: 100%;
              vertical-align: middle;
              filter: grayscale(1);
              opacity: 0.4;
              transition: all 0.2s ease;
              &:hover{
                filter: grayscale(0);
                opacity: 1;
              }
            }
          }
        }
      }
    }
    .slideshow-left-btn,.slideshow-right-btn{
      box-shadow: 0 3px 40px 0 #dbe0e8;;
    }

  }
  .how-to-buy-car-bottom{
    display: flex;
    margin: 90px 0;
    div{
      width: 50%;
      margin: 0 15px;
      color: #fff;
    }
    .how-to-buy-car-sub{
      border: 1px solid var(--primary);
      color: var(--primary);
    }
    .how-to-buy-car-main{
      padding: 50px;
      background: #222732;
      border-radius: 5px;
      display: flex;
      .main-title{
        width: 75%;
        .buttom{
          margin: 40px 0;
          .vahica-buttom{
            background-color: transparent;
            border: 1px solid var(--primary);
            &:hover{
              background-color: var(--primary);
            }
          }
        }
      }
      .main-info{
        margin: 20px 0;
        .main-info-list{
          padding: 20px 0;
          .main-info-item{
            margin: 15px 0;
            font-size: 20px;
            color: #99A1B2;
            position: relative;
            padding-left: 30px;
            &::before{
              position: absolute;
              left: 0;
              top: 5px;
              content: "\f058";
              font-weight: 900;
              font-family: "Font Awesome 5 Free";
              display: inline-block;
              color: var(--primary);
              padding-right: 20px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.search{
  .el-select {
    padding-right: 10px;
  }
  .el-input--suffix .el-input__inner {
    min-height: 51px;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    color: #2f3b48;
    border-radius: 10px;
  }
  .el-select .el-input .el-select__caret {
    color: #222732;
    font-weight: 600;
  }
  .el-select .el-input__inner:focus {
    border-color: var(--primary);
  }
  .el-select-dropdown__item {
    color: #222732;
  }
}

</style>
