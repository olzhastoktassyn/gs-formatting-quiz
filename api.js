// Small helper for talking to the Google Apps Script web app.
(function () {
  const cfg = window.QUIZ_CONFIG;
  function configured() {
    return cfg.API_URL && /^https:\/\/script\.google(usercontent)?\.com\//.test(cfg.API_URL);
  }
  async function get(params) {
    if (!configured()) throw new Error("NOT_CONFIGURED");
    const url = cfg.API_URL + "?" + new URLSearchParams(params).toString();
    const r = await fetch(url, { method: "GET", redirect: "follow" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }
  async function post(body) {
    if (!configured()) throw new Error("NOT_CONFIGURED");
    // text/plain avoids a CORS preflight, which Apps Script does not answer.
    const r = await fetch(cfg.API_URL, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body)
    });
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }
  window.QuizAPI = { get, post, configured };
})();
