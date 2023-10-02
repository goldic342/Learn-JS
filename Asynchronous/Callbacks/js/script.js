// base callback  + pseudo promise
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`Не удалось загрузить скрипт ${src}`));
  document.head.append(script);
}

loadScript("js/added_script.js", (err, script) => {
  // errors catch
  if (err) {
    try {
      throw err;
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log(`${script.src} has been download!`);
    displayer(); // function from js/added_script

    // callback in callback
    loadScript("js/added_script_2.js", (err, script) => {
      console.log(`${script.src} has been download!`);
      displayer_2();
    });
  }
});
    