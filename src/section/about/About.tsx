import CustomButton from '../../component/button/CustomButton';
import Title from '../../component/text/Title';

declare global {
  interface Document {
    documentMode?: number;
  }
  interface Navigator {
    msSaveBlob?: Function;
  }
}

const About = () => {
  return (
    <div className='container'>
      <div className='d-flex'>
        <div className='mx-auto'>
          <Title text="About Me"/>
        </div>
      </div>
      <div className="row pt-sm-5">
        <div className="col-12 col-sm-6 pe-sm-5 mb-4">
          <img className='w-100' src={`${process.env.PUBLIC_URL}/profile_picture.png`} alt="Terence on a boat"></img>
        </div>
        <div className="col-12 col-sm-6 text-start align-self-center">
          <div className='mb-4 mb-sm-5'>
            <small className='d-block mb-3'>I am currently working as a senior full stack engineer at Prudential's Digital Platform team, mainly focusing on 
              creating seamless digital experience for our customers. Being a tech enthusiast, I love to discuss about the latest 
              technological advancements, and I believe that in order to make the world a better place, technology and design have 
              to work hand in hand. I am passionate about making a positive change to the world and I believe it starts with the people around me, 
              hence I make a conscious effort to be kind to people and to offer a listening ear whenever anyone needs.
              </small>
            <small className='d-block mb-3'>I develop websites using JS frameworks such as ReactJS, AngularJS using CSS preprocessors like SASS. Libraries such
              as Babel and Webpack assist me to transpile and polyfill missing syntax, APIs and to minimize required asset loading.
              Besides the web layer, I also have experience building services using Java 8 and Springboot framework with the help
              of Oracle database with Hibernate ORM layer.
              </small>
            <small>Being a diligent and hardworking team player, I have worked with multiple software teams, project managers and QA
              teams to achieve the best performance and results for my projects.
            </small>
          </div>
          <CustomButton className='mb-4' onClick={DownloadResume}>Download Resume</CustomButton>
        </div>
      </div>
    </div>
  );
}

const DownloadResume = () => {
  //Set the File URL.
  var fileName = "2022 - Resume (FS).pdf";
  var url = process.env.PUBLIC_URL + "/" + fileName;
  var windowReference: Window | null;

  //Check the Browser type and download the File.
  let isIE = false || !!document.documentMode;
  let isSafari =  !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  let isIOS = ([
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document));

  if (isIOS && isSafari) {
    windowReference = window.open();
  }
 
  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
      //Convert the Byte Data to BLOB object.
      var blob = new Blob([req.response], { type: "application/octetstream" });
      if (isIE) {
        navigator.msSaveBlob && navigator.msSaveBlob(blob, fileName);
      } else {
          var url = window.URL || window.webkitURL;
          var link = url.createObjectURL(blob);
          if (isIOS && isSafari && windowReference !== null) {
            windowReference.location = url.createObjectURL(new Blob([req.response], { type: "application/pdf" }));
          } else if (isSafari) {
            window.open(link, "_blank");
          } else {
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
      }
  };
  req.send();
};

export default About;