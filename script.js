function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];

// news.unshift("");
// news.unshift("");
// news.unshift("");
news.unshift("if you find any bugs in the website. kindly let us know through feedback");
news.unshift("The notes for semester 7 has been updated in the subject");
news.unshift("Huge congratulations to Heamanth Kumar T R for securing the very first placement of the UG 2022–2026 batch — as a Full-Time Engineer at Texas Instruments! 🎉👏 ");
document.getElementById("news").innerHTML=news[i];
function nextnews(a){
  i=i+a; 
  if (i==news.length){
    i=0;
  }
  else if (i<0){
    i=news.length -1;
  } 
  document.getElementById("news").innerHTML=news[i];
  //setTimeout(nextnews, 5200,1);
}

//for NodeMCU page (es&IOT)
// function downloadPage() {
//   const htmlContent = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>LED Control</title>
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
//   <style>
//       body { text-align: center; padding: 20px; background-color: #f8f9fa; }
//       .btn { width: 120px; font-size: 18px; margin: 10px; }
//       .pwm-container { display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 20px; }
//       #pwmValue { font-size: 22px; font-weight: bold; }
//       #status { margin-top: 20px; font-size: 18px; font-weight: bold; color: green; }
//   </style>
// </head>
// <body>

//   <div class="container">
//       <h2 class="mt-3">NodeMCU LED Control</h2>

//       <!-- IP Address Input -->
//       <div class="mb-3">
//           <input type="text" id="ipAddress" class="form" placeholder="Enter NodeMCU IP">
//           <button class="btn btn-info mt-2" onclick="saveIP()">Save IP</button>
//       </div>

//       <div class="mt-4">
//           <button class="btn btn-success" onclick="controlLED('on')">Turn ON</button>
//           <button class="btn btn-danger" onclick="controlLED('off')">Turn OFF</button>
//       </div>
      
//       <h3 class="mt-4">Brightness Control</h3>
//       <div class="pwm-container">
//           <button class="btn btn-primary" onclick="adjustPWM(-1)">-</button>
//           <span id="pwmValue">0</span>
//           <button class="btn btn-primary" onclick="adjustPWM(1)">+</button>
//       </div>

//       <h3 class="mt-4">Quick Brightness Levels</h3>
//       <div class="pwm-container">
//           <button class="btn btn-secondary" onclick="setPWM(0)">0%</button>
//           <button class="btn btn-secondary" onclick="setPWM(256)">25%</button>
//           <button class="btn btn-secondary" onclick="setPWM(512)">50%</button>
//           <button class="btn btn-secondary" onclick="setPWM(768)">75%</button>
//           <button class="btn btn-secondary" onclick="setPWM(1023)">100%</button>
//       </div>

//       <h3 class="mt-4">Status</h3>
//       <div id="status" class="alert alert-info">Waiting for response...</div>
//   </div>

//   <script>
//       let pwm = 0;
//       let nodeMCU_IP = "";

//       function saveIP() {
//           nodeMCU_IP = document.getElementById("ipAddress").value.trim();
//           if (!nodeMCU_IP.startsWith("http://")) {
//               nodeMCU_IP = "http://" + nodeMCU_IP;
//           }

//           fetch(\`\${nodeMCU_IP}/test\`)
//               .then(response => {
//                   if (response.ok) {
//                       document.getElementById("status").innerText = "Connected to NodeMCU";
//                       document.getElementById("status").classList.remove("alert-danger");
//                       document.getElementById("status").classList.add("alert-success");
//                   } else {
//                       throw new Error("Connection Failed");
//                   }
//               })
//               .catch(() => {
//                   document.getElementById("status").innerText = "Connection Failed";
//                   document.getElementById("status").classList.remove("alert-success");
//                   document.getElementById("status").classList.add("alert-danger");
//               });
//       }

//       function controlLED(action) {
//           if (!nodeMCU_IP) {
//               alert("Please enter the NodeMCU IP address first!");
//               return;
//           }
//           fetch(\`\${nodeMCU_IP}/led?state=\${action}\`)
//               .then(response => response.text())
//               .then(data => {
//                   document.getElementById("status").innerText = data;
//                   if (action === 'off') {
//                       pwm = 0;
//                       document.getElementById("pwmValue").innerText = pwm;
//                       fetch(\`\${nodeMCU_IP}/pwm?value=0\`);
//                   }
//               })
//               .catch(() => document.getElementById("status").innerText = "Cannot connect to NodeMCU");
//       }

//       function adjustPWM(change) {
//           if (!nodeMCU_IP) {
//               alert("Please enter the NodeMCU IP address first!");
//               return;
//           }
//           pwm = Math.max(0, Math.min(1023, pwm + change));
//           document.getElementById("pwmValue").innerText = pwm;
//           fetch(\`\${nodeMCU_IP}/pwm?value=\${pwm}\`)
//               .then(response => response.text())
//               .then(data => document.getElementById("status").innerText = data)
//               .catch(() => document.getElementById("status").innerText = "Cannot GET /pwm");
//       }

//       function setPWM(value) {
//           if (!nodeMCU_IP) {
//               alert("Please enter the NodeMCU IP address first!");
//               return;
//           }
//           pwm = value;
//           document.getElementById("pwmValue").innerText = pwm;
//           fetch(\`\${nodeMCU_IP}/pwm?value=\${pwm}\`)
//               .then(response => response.text())
//               .then(data => document.getElementById("status").innerText = data)
//               .catch(() => document.getElementById("status").innerText = "Cannot GET /pwm");
//       }
//   </script>

// </body>
// </html>`;

//   const blob = new Blob([htmlContent], { type: "text/html" });
//   const a = document.createElement("a");
//   a.href = URL.createObjectURL(blob);
//   a.download = "nodemcu_test.html";
//   document.body.appendChild(a);
//   a.click();
//   setTimeout(() => {
//       window.open(a.href, "_blank");
//   }, 500);
//   document.body.removeChild(a);
// }


//for CGPA calculator

