
const FIELD_META = {
  MinTemp:        { label: "MinTemp", step: 0.1, value: 15 },
  MaxTemp:        { label: "MaxTemp", step: 0.1, value: 24 },
  Rainfall:       { label: "Rainfall", step: 0.1, value: 0 },
  Evaporation:    { label: "Evaporation", step: 0.1, value: 4 },
  Sunshine:       { label: "Sunshine", step: 0.1, value: 7 },
  WindGustSpeed:  { label: "WindGustSpeed", step: 1, value: 35 },
  WindSpeed9am:   { label: "WindSpeed9am", step: 1, value: 15 },
  WindSpeed3pm:   { label: "WindSpeed3pm", step: 1, value: 18 },
  AvgHumidity:    { label: "AvgHumidity", step: 1, value: 60 },
  AvgPressure:    { label: "AvgPressure", step: 0.1, value: 1015 },
  AvgCloud:       { label: "AvgCloud", step: 1, value: 4 },
  PressureDiff:   { label: "PressureDiff", step: 0.1, value: 0 },
  StrongWind:     { label: "StrongWind", type: "select", value: 0 },
  HighHumidity:   { label: "HighHumidity", type: "select", value: 0 },
  WindGustDir:    { label: "WindGustDir", step: 1, value: 180 },
  WindDir9am:     { label: "WindDir9am", step: 1, value: 180 },
  WindDir3pm:     { label: "WindDir3pm", step: 1, value: 180 },
  RainToday:      { label: "RainToday", type: "select", value: 0 },
  Cluster:        { label: "Cluster", step: 1, value: 0 },
};

function fieldHTML(name) {
  const meta = FIELD_META[name] || { label: name, step: 1, value: 0 };
  const id = `f_${name}`;
  if (meta.type === "select") {
    return `
      <div class="form-group">
        <label for="${id}">${meta.label}</label>
        <select id="${id}">
          <option value="0" ${meta.value === 0 ? "selected" : ""}>No</option>
          <option value="1" ${meta.value === 1 ? "selected" : ""}>Sí</option>
        </select>
      </div>`;
  }
  return `
    <div class="form-group">
      <label for="${id}">${meta.label}</label>
      <input id="${id}" type="number" step="${meta.step ?? 1}" value="${meta.value ?? 0}">
    </div>`;
}

function leerValores(features) {
  return features.map((name) => Number(document.getElementById(`f_${name}`).value));
}

function mostrar(id, html) {
  document.getElementById(id).innerHTML = html;
}

// ---------- construir los 3 formularios al cargar la página ----------
document.getElementById("campos-regresion").innerHTML = MODEL_PARAMS.lr.features.map(fieldHTML).join("");
document.getElementById("campos-bayes").innerHTML = MODEL_PARAMS.nb.features.map(fieldHTML).join("");
document.getElementById("campos-kmeans").innerHTML = MODEL_PARAMS.km.features.map(fieldHTML).join("");

// ---------- Regresión lineal: y = x·coef + intercept ----------
function predecirRegresion() {
  const { features, coef, intercept } = MODEL_PARAMS.lr;
  const x = leerValores(features);
  let y = intercept;
  for (let i = 0; i < x.length; i++) y += x[i] * coef[i];
  mostrar("resultado-regresion", `Valor predicho: <strong>${y.toFixed(3)}</strong>`);
}

// ---------- Naive Bayes gaussiano ----------
function predecirBayes() {
  const { features, classes, theta, var: varr, class_prior } = MODEL_PARAMS.nb;
  const x = leerValores(features);

  // log-verosimilitud conjunta por clase, igual que sklearn GaussianNB
  const jll = classes.map((_, c) => {
    let suma = Math.log(class_prior[c]);
    for (let i = 0; i < x.length; i++) {
      const v = varr[c][i];
      const m = theta[c][i];
      suma += -0.5 * Math.log(2 * Math.PI * v) - Math.pow(x[i] - m, 2) / (2 * v);
    }
    return suma;
  });

  // normalizar a probabilidades (softmax sobre las log-verosimilitudes)
  const maxJll = Math.max(...jll);
  const exps = jll.map((v) => Math.exp(v - maxJll));
  const suma = exps.reduce((a, b) => a + b, 0);
  const proba = exps.map((v) => v / suma);

  const claseIdx = proba.indexOf(Math.max(...proba));
  const clase = classes[claseIdx];

  mostrar(
    "resultado-bayes",
    `¿Lloverá mañana? <strong>${clase === 1 ? "Sí" : "No"}</strong><br>
     Probabilidad de sí: ${(proba[1] * 100).toFixed(1)}% · de no: ${(proba[0] * 100).toFixed(1)}%`
  );
}

// ---------- K-Means: cluster con centroide más cercano ----------
function predecirKmeans() {
  const { features, centers } = MODEL_PARAMS.km;
  const x = leerValores(features);

  let mejorCluster = 0;
  let mejorDist = Infinity;
  centers.forEach((centro, idx) => {
    let dist = 0;
    for (let i = 0; i < x.length; i++) dist += Math.pow(x[i] - centro[i], 2);
    if (dist < mejorDist) {
      mejorDist = dist;
      mejorCluster = idx;
    }
  });

  mostrar("resultado-kmeans", `Grupo climático asignado: <strong>Cluster ${mejorCluster}</strong>`);
}

