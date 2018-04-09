import { injectGlobal } from 'styled-components';
import proxima from './assets/proximanova-light-webfont.woff'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Open Sans';
    src: url(${proxima}) format('woff'),
    url('@{base}/fonts/proximanova/proximanova-regular-webfont.ttf') format('truetype'),
    url('@{base}/fonts/proximanova/proximanova-regular-webfont.svg?proxima_novaregular') format('svg');
  }

  html,
  body {
    height: 100vh;
    width: 100%;
    margin:0;
    padding:0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    color: #2a303c!important;
    letter-spacing: .1rem;
    background-color:#eee;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  .top-bar {
    border-bottom: #fafafa 3px solid;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
    background-color: #fafafa;
    height:60px;
  }

  .content {
    margin: auto 5em;
  }

  .demo {
    margin: 70px auto;
    width: 96vw;
		height: 600px; /* change height to see repeat-y behavior */
    
		background-image:			
			linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
			linear-gradient( lightgray 30px, transparent 0 ),
			linear-gradient( lightgray 30px, transparent 0 ),
			linear-gradient( lightgray 30px, transparent 0 ),
      linear-gradient( lightgray 30px, transparent 0 );

		background-repeat: repeat-y;

		background-size:			
			150px 200px, /* highlight */
			100vw 200px,
			100vw 200px,
			100vw 200px,
      100vw 200px;     

		background-position:			
			0 0, /* highlight */
			0 0,
			0 40px,
			0 80px,
			0 120px;

		animation: shine 1s infinite;
	}

	@keyframes shine {
		to {
			background-position:				
				100% 0, /* move highlight to right */
				0 0,
				0 40px,
				0 80px,
				0 120px;
		}
	}

  .center {
    display: flex;
    justify-content: center;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    margin: .5rem;
  }

  .right > * {
    margin: auto 1.2rem 
  }

  .left-bar {
    background-color: #4d394b;
    border-right: #ccc 1px solid;
    height:100vh;
  }
  
  .link {
    text-decoration:none;
    margin: 1rem;
    color: #fff;
    font-size: 1.2rem;
  }

  em.warn {
    background-color: salmon;
    font-weight:bold;
    border: salmon 1px solid;
    padding: .3rem;
    border-radius: .5rem;
    color: white;
    margin-left: .5rem;
  }

  em {
    font-weight:bold;
    color: black;
    margin-left: .5rem;
  }

  small {
    border: 1px solid #eee;
    color: #555;
    padding: .4rem;
    border-radius: .3rem;
    margin-left: 1rem;
  }

  .ui-accordion {
    font-size: .9rem;
  }

  table.table-grid {
    display: block;
    height: 300px;
    overflow-y: scroll;
    width: 800px;
  }

  table.table-grid td {
    padding: .5rem 2rem; 
  }

  table.table-grid  tr:nth-child(even) {background: #eee}
  table.table-grid  tr:nth-child(odd) {background: #FFF}
  
  .fa-step-backward:after {
    content: "|<";
  }

  .fa-backward:after {
    content: "<<";
  }

  .fa-step-forward:after {
    content: ">|";
  }

  .fa-forward:after {
    content: ">>";
  }

  .fa-caret-down:after{
    content: "▼";
  }

  .fa-caret-right:after{
    content: "►";
  }
  
  .ui-tabview-selected {
    border:black 1px solid;
  }

  .ui-datepicker-prev:after{
    content: "<<";
  }
  .ui-datepicker-next:after{
    content: ">>";
  }
`;
