import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  justify-content: center;
  align-items: center;
  transform: scale(1.5);
`;

const BasicCriteriaIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 94.402 127.214">
        <G
          id="document_copy"
          data-name="document copy"
          transform="translate(-20.9 -2.8)"
          opacity="0.5">
          <Path
            id="Path_687"
            data-name="Path 687"
            d="M72.09,2.893c2.887,1.055,4,3.166,3.849,6.178-.124,2.018-.186,1.738,1.676,1.738h8.071c3.135.031,5.06,1.8,5.215,4.936.062.931.373,1.055,1.18,1.055,4.625-.031,9.282-.031,13.907,0,5.712,0,9.313,3.6,9.313,9.282V69.294a4.582,4.582,0,0,1-.155,1.459,1.64,1.64,0,0,1-1.8,1.211,1.7,1.7,0,0,1-1.676-1.4,5.926,5.926,0,0,1-.093-1.49V25.989c0-2.825-1.3-4.75-3.694-5.339a6.367,6.367,0,0,0-1.707-.155c-4.687,0-9.344,0-14.031-.031-.838,0-1.211.124-1.242,1.118A4.631,4.631,0,0,1,86.4,26.3c-.869.093-1.055.435-1.055,1.242.031,2.142,0,2.142,2.173,2.142h15.646c2.763,0,4.16,1.335,4.16,4.1v84.437c0,2.763-1.366,4.129-4.129,4.129H73.27a4.508,4.508,0,0,1-1.118-.062,1.715,1.715,0,0,1-1.49-1.738,1.737,1.737,0,0,1,1.242-1.8,4.585,4.585,0,0,1,1.583-.155c9.592,0,19.216-.031,28.808.031,1.024,0,1.3-.279,1.3-1.3q-.047-41.349,0-82.7c0-.962-.217-1.273-1.211-1.242-5.308.062-10.586.062-15.894,0-.993,0-1.242.341-1.149,1.211.031.373,0,.745,0,1.118-.031,3.166-1.552,4.719-4.75,4.719H55.637c-3.228,0-4.75-1.521-4.75-4.812,0-2.2,0-2.2-2.235-2.2-4.967,0-9.934.031-14.9-.031-.869,0-1.118.248-1.118,1.118q.047,41.489,0,82.947c0,1.055.4,1.18,1.3,1.18,9.592-.031,19.216-.031,28.808-.031,1.987,0,2.918.621,2.887,1.925-.031,1.242-.931,1.8-2.856,1.8H33.348c-3.1,0-4.377-1.273-4.377-4.377V34c0-3.073,1.3-4.346,4.377-4.346,5.433,0,10.834-.031,16.267.031,1.024,0,1.459-.248,1.3-1.3a3.547,3.547,0,0,1,0-.993c.093-.807-.248-1.024-1.024-1.118a4.708,4.708,0,0,1-4.532-4.843c-.062-.869-.341-.993-1.087-.993-4.812.031-9.592,0-14.4.031a4.953,4.953,0,0,0-5.215,5.277V121.1a4.889,4.889,0,0,0,5.215,5.215h76.49c3.2,0,5.184-2.08,5.184-5.37v-41.1c0-1.925.559-2.825,1.832-2.856,1.3-.031,1.894.9,1.894,2.887v40.6c0,5.96-3.539,9.53-9.468,9.53H30.182c-4.47,0-7.73-2.328-8.909-6.3a10.531,10.531,0,0,1-.373-2.949V25.9c0-5.526,3.632-9.158,9.189-9.158,4.687-.031,9.344-.031,14.031,0,.807,0,1.149-.124,1.18-1.055.155-3.135,2.08-4.9,5.215-4.936,2.887-.031,5.805-.031,8.692,0,.9.031,1.211-.279,1.086-1.149a4.145,4.145,0,0,1,0-.621c-.279-3.011.931-5.122,3.818-6.178C66.782,2.893,69.451,2.893,72.09,2.893ZM68.241,14.534H50.732c-1.335,0-1.676.341-1.707,1.676-.031,1.459,0,2.887,0,4.346,0,1.832.279,2.111,2.08,2.111H85.252c1.645,0,1.956-.31,1.956-1.987V16.335c0-1.521-.31-1.8-1.832-1.8Zm0,11.858c-4.129,0-8.288.031-12.417-.031-.993,0-1.366.279-1.242,1.242a2.992,2.992,0,0,1,0,.745c-.186,1.087.248,1.366,1.335,1.366,7.854-.062,15.708-.031,23.562-.031,2.111,0,2.08,0,2.111-2.08.031-.962-.248-1.273-1.242-1.273C76.343,26.424,72.307,26.393,68.241,26.393ZM68.116,36.73H79.789c1.832,0,1.769,0,1.863-1.894.062-1.149-.31-1.428-1.428-1.428-7.854.062-15.708.031-23.593.031-2.049,0-1.987,0-2.049,2.018-.031,1.087.4,1.3,1.366,1.273C60.014,36.7,64.05,36.73,68.116,36.73Zm.031-25.921h1.49c2.67,0,2.639,0,2.546-2.67-.031-1.118-.528-1.552-1.614-1.521-1.149.031-2.328,0-3.477,0-3.135,0-3.228.124-3.042,3.322.031.652.248.869.869.869C66.006,10.778,67.061,10.809,68.147,10.809Z"
            transform="translate(0 0)"
            fill="#fff"
          />
          <Path
            id="Path_688"
            data-name="Path 688"
            d="M98.529,287.649a4.523,4.523,0,0,1-1.4,3.353c-3.166,3.228-6.271,6.457-9.5,9.623a4.548,4.548,0,0,1-6.581.031c-1.769-1.738-3.508-3.508-5.153-5.37a4.572,4.572,0,0,1,.186-6.581,4.756,4.756,0,0,1,6.705.186c1.676,1.614,1.676,1.614,3.291-.031,1.552-1.552,3.042-3.166,4.625-4.656a4.327,4.327,0,0,1,5.06-.776A4.494,4.494,0,0,1,98.529,287.649ZM84.373,298.3a1.5,1.5,0,0,0,.962-.528l8.94-9.127a2.627,2.627,0,0,0,.435-.59.878.878,0,0,0-.248-1.118.844.844,0,0,0-1.024-.062,6.267,6.267,0,0,0-.838.745c-2.173,2.2-4.346,4.439-6.519,6.643-1.18,1.18-2.111,1.18-3.291,0-.776-.776-1.552-1.614-2.328-2.421-.5-.5-1.024-.993-1.707-.4s-.279,1.18.217,1.707l4.47,4.656A1.607,1.607,0,0,0,84.373,298.3Z"
            transform="translate(-37.025 -193.178)"
            fill="#fff"
          />
          <Path
            id="Path_689"
            data-name="Path 689"
            d="M79.564,145.8a5.013,5.013,0,0,1,3.694,1.769c1.3,1.366,1.335,1.366,2.7-.031,1.49-1.521,2.949-3.011,4.439-4.5,2.142-2.142,5-2.266,6.954-.31,1.894,1.894,1.832,4.75-.217,6.861-2.98,3.1-5.991,6.147-9.034,9.22-1.987,1.987-4.625,2.235-6.55.435a77.863,77.863,0,0,1-5.65-5.9,4.25,4.25,0,0,1-.5-5A4.392,4.392,0,0,1,79.564,145.8Zm15.366.217a.912.912,0,0,0-1.335-.807,3.656,3.656,0,0,0-.838.714c-2.142,2.173-4.284,4.377-6.426,6.55-1.335,1.366-2.235,1.366-3.57,0-.776-.807-1.552-1.614-2.3-2.421-.466-.5-1.024-.807-1.614-.248-.621.559-.248,1.118.217,1.614l4.47,4.656a1.189,1.189,0,0,0,1.987.031l8.94-9.127A1.3,1.3,0,0,0,94.931,146.012Z"
            transform="translate(-37.183 -95.53)"
            fill="#fff"
          />
          <Path
            id="Path_690"
            data-name="Path 690"
            d="M98.62,216.913a4.592,4.592,0,0,1-1.428,3.446c-3.073,3.135-6.115,6.3-9.22,9.406a4.667,4.667,0,0,1-7.047-.031c-1.645-1.645-3.228-3.322-4.812-5.029a4.677,4.677,0,1,1,6.736-6.488c1.707,1.645,1.707,1.614,3.384-.062,1.552-1.552,3.042-3.166,4.656-4.656a4.283,4.283,0,0,1,4.967-.745A4.365,4.365,0,0,1,98.62,216.913ZM84.464,227.56c.528,0,.807-.373,1.118-.683,1.552-1.583,3.1-3.2,4.687-4.781,1.4-1.428,2.794-2.825,4.16-4.253.683-.714.559-1.552-.186-1.8-.652-.217-.993.248-1.366.621-2.266,2.3-4.5,4.594-6.767,6.892-1.149,1.149-2.049,1.149-3.2,0-.838-.838-1.676-1.738-2.483-2.577-.466-.5-.993-.838-1.614-.279-.59.559-.31,1.118.186,1.614,1.521,1.583,3.011,3.166,4.532,4.75A1.267,1.267,0,0,0,84.464,227.56Z"
            transform="translate(-37.115 -144.452)"
            fill="#fff"
          />
          <Path
            id="Path_691"
            data-name="Path 691"
            d="M182.8,166.183h12.666a9.828,9.828,0,0,1,1.366.062,1.809,1.809,0,0,1,.217,3.508,5.684,5.684,0,0,1-1.459.155H170.039a5.684,5.684,0,0,1-1.459-.155,1.8,1.8,0,0,1,.279-3.477,14.165,14.165,0,0,1,1.987-.062C174.788,166.152,178.793,166.183,182.8,166.183Z"
            transform="translate(-100.991 -112.658)"
            fill="#fff"
          />
          <Path
            id="Path_692"
            data-name="Path 692"
            d="M182.813,239H195.6a6.593,6.593,0,0,1,1.366.093,1.683,1.683,0,0,1,1.335,1.583,1.733,1.733,0,0,1-1.055,1.8,3.369,3.369,0,0,1-1.459.248H169.744a4.17,4.17,0,0,1-1.087-.124,1.637,1.637,0,0,1-1.3-1.956,1.616,1.616,0,0,1,1.614-1.583c.807-.062,1.645-.031,2.483-.031C175.208,239,179.026,239,182.813,239Z"
            transform="translate(-100.976 -162.876)"
            fill="#fff"
          />
          <Path
            id="Path_693"
            data-name="Path 693"
            d="M182.781,311.731h12.666a6.614,6.614,0,0,1,1.366.062,1.721,1.721,0,0,1,1.459,1.614,1.661,1.661,0,0,1-1.18,1.832,3.947,3.947,0,0,1-1.211.186H169.711a4.1,4.1,0,0,1-.869-.062,1.827,1.827,0,0,1,.186-3.632c.652-.031,1.335-.031,1.987-.031C174.927,311.731,178.869,311.731,182.781,311.731Z"
            transform="translate(-100.943 -213.008)"
            fill="#fff"
          />
        </G>
      </Svg>
    </SvgView>
  );
};

export default BasicCriteriaIcon;