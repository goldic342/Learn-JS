function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script cant be loaded ${src}`));

  document.head.append(script);
}

function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(error, data) {
        if (error) return reject(error);
        resolve(data);
      }
      args.push(callback);
      func.call(this, ...args);
    });
  };
}

const promLoadScript = promisify(loadScript);
promLoadScript("2.js")
  .then((data) => console.log(data))
  .catch((err) => console.warn(err));
