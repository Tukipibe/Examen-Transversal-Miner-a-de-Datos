<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TukiNeta Logistics · Predicción de Riesgo Climático</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');

:root{
  --bg-void:#08060c;
  --bg-deep:#0f0a1a;
  --bg-panel:#150e24;
  --bg-panel-2:#1a1229;
  --line:#2c2044;
  --violet-1:#7c3aed;
  --violet-2:#9d5cf0;
  --violet-3:#c4a6f7;
  --petal:#d472c9;
  --petal-deep:#7a2f8f;
  --ink:#f3ecff;
  --ink-dim:#b4a5d6;
  --ink-faint:#6f6390;
  --good:#7fe0b0;
  --warn:#f0b45f;
  --bad:#f0708a;
  --radius:18px;
}

*{box-sizing:border-box;}
html,body{margin:0;padding:0;}
body{
  background:
    radial-gradient(ellipse 900px 600px at 85% -10%, rgba(124,58,237,0.28), transparent 60%),
    radial-gradient(ellipse 700px 500px at -10% 110%, rgba(212,114,201,0.16), transparent 60%),
    var(--bg-void);
  color:var(--ink);
  font-family:'Manrope',sans-serif;
  min-height:100vh;
  padding:0 0 80px 0;
  position:relative;
  overflow-x:hidden;
}

/* ---------- decorative violet flower field ---------- */
.bloom-field{position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.55;}
.bloom-field svg{position:absolute;}

/* ---------- header ---------- */
header{
  position:relative;z-index:1;
  max-width:1180px;margin:0 auto;
  padding:56px 28px 34px;
  display:flex;align-items:center;gap:28px;
}
.mark{
  width:64px;height:64px;flex:0 0 auto;
}
header h1{
  font-family:'Fraunces',serif;
  font-weight:500;
  font-size:clamp(28px,4vw,42px);
  margin:0 0 6px;
  letter-spacing:-0.01em;
  background:linear-gradient(120deg,var(--ink) 30%,var(--violet-3) 75%,var(--petal) 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
header p{
  margin:0;color:var(--ink-dim);font-size:15px;line-height:1.5;max-width:560px;
}
header .eyebrow{
  font-size:11.5px;letter-spacing:0.16em;text-transform:uppercase;color:var(--violet-3);
  font-weight:700;margin-bottom:10px;display:block;
}

/* ---------- layout ---------- */
.wrap{position:relative;z-index:1;max-width:1180px;margin:0 auto;padding:0 28px;
  display:grid;grid-template-columns:1.15fr 0.85fr;gap:26px;align-items:start;}
@media(max-width:920px){.wrap{grid-template-columns:1fr;}}

.card{
  background:linear-gradient(160deg,var(--bg-panel) 0%,var(--bg-panel-2) 100%);
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:28px;
  position:relative;
  box-shadow:0 30px 60px -30px rgba(0,0,0,0.6);
}

.section-title{
  font-family:'Fraunces',serif;font-weight:500;font-size:20px;
  margin:0 0 4px;color:var(--ink);
}
.section-sub{font-size:13px;color:var(--ink-faint);margin:0 0 22px;}

fieldset{border:none;margin:0 0 24px;padding:0;}
fieldset legend{
  font-size:12.5px;letter-spacing:0.08em;text-transform:uppercase;
  color:var(--violet-3);font-weight:700;margin-bottom:14px;padding:0;
  display:flex;align-items:center;gap:8px;
}
fieldset legend::before{
  content:'';width:14px;height:14px;border-radius:50%;
  background:radial-gradient(circle at 35% 30%,var(--petal),var(--violet-1));
  flex:0 0 auto;
}

.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
@media(max-width:640px){.grid{grid-template-columns:repeat(2,1fr);}}

.field{display:flex;flex-direction:column;gap:6px;}
.field label{font-size:12.5px;color:var(--ink-dim);font-weight:600;}
.field .unit{color:var(--ink-faint);font-weight:400;}
.field input[type=number],.field select{
  background:var(--bg-void);
  border:1px solid var(--line);
  color:var(--ink);
  border-radius:10px;
  padding:10px 12px;
  font-family:'Manrope',sans-serif;
  font-size:14.5px;
  outline:none;
  transition:border-color .15s, box-shadow .15s;
}
.field input[type=number]:focus,.field select:focus{
  border-color:var(--violet-2);
  box-shadow:0 0 0 3px rgba(157,92,240,0.22);
}
.field select{appearance:none;-webkit-appearance:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23b4a5d6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 12px center;padding-right:30px;
}

.toggle-row{display:flex;gap:10px;}
.toggle-row button{
  flex:1;padding:10px;border-radius:10px;border:1px solid var(--line);
  background:var(--bg-void);color:var(--ink-dim);font-family:'Manrope';font-weight:600;font-size:13.5px;
  cursor:pointer;transition:all .15s;
}
.toggle-row button.active{
  background:linear-gradient(135deg,var(--violet-1),var(--petal-deep));
  border-color:var(--violet-2);color:#fff;
}

.actions{display:flex;gap:12px;margin-top:6px;flex-wrap:wrap;}
.btn{
  border:none;border-radius:12px;padding:14px 22px;font-family:'Manrope';font-weight:700;
  font-size:14.5px;cursor:pointer;transition:transform .15s, box-shadow .15s;
}
.btn-primary{
  background:linear-gradient(135deg,var(--violet-1),var(--petal) 130%);
  color:#fff;box-shadow:0 12px 26px -10px rgba(124,58,237,0.6);
  flex:1;
}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 16px 30px -10px rgba(124,58,237,0.75);}
.btn-ghost{
  background:transparent;border:1px solid var(--line);color:var(--ink-dim);
}
.btn-ghost:hover{border-color:var(--violet-2);color:var(--ink);}

/* ---------- results ---------- */
.results-sticky{position:sticky;top:24px;display:flex;flex-direction:column;gap:18px;}

.result-card{
  background:linear-gradient(160deg,var(--bg-panel) 0%,var(--bg-panel-2) 100%);
  border:1px solid var(--line);border-radius:var(--radius);padding:24px;
}
.result-card .r-eyebrow{font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-faint);font-weight:700;margin-bottom:10px;}
.result-card h3{font-family:'Fraunces',serif;font-weight:500;font-size:19px;margin:0 0 12px;}
.placeholder-note{color:var(--ink-faint);font-size:13.5px;line-height:1.6;}

.rain-badge{
  display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border-radius:999px;
  font-weight:800;font-size:15px;margin-bottom:14px;
}
.rain-badge.yes{background:rgba(240,112,138,0.14);color:var(--bad);border:1px solid rgba(240,112,138,0.35);}
.rain-badge.no{background:rgba(127,224,176,0.14);color:var(--good);border:1px solid rgba(127,224,176,0.35);}
.rain-badge .dot{width:9px;height:9px;border-radius:50%;background:currentColor;}

.prob-bar-track{height:9px;border-radius:99px;background:var(--bg-void);overflow:hidden;border:1px solid var(--line);}
.prob-bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--violet-1),var(--petal));transition:width .6s ease;}
.prob-label{display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink-faint);margin-top:6px;}

.risk-value{font-family:'Fraunces',serif;font-size:44px;font-weight:500;line-height:1;margin:4px 0 6px;
  background:linear-gradient(120deg,var(--violet-3),var(--petal));-webkit-background-clip:text;background-clip:text;color:transparent;}
.risk-unit{font-size:14px;color:var(--ink-faint);font-weight:600;}
.risk-note{font-size:12.5px;color:var(--ink-faint);margin-top:10px;line-height:1.55;}

.cluster-chip{display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(157,92,240,0.16);
  border:1px solid rgba(157,92,240,0.4);color:var(--violet-3);font-weight:800;font-size:13px;margin-bottom:12px;}
.cluster-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;font-size:13px;color:var(--ink-dim);}
.cluster-stats b{color:var(--ink);}

.footnote{
  font-size:12px;color:var(--ink-faint);line-height:1.7;margin-top:8px;
  border-top:1px solid var(--line);padding-top:14px;
}

.model-tag{
  display:inline-block;font-size:10.5px;letter-spacing:0.06em;text-transform:uppercase;
  color:var(--ink-faint);border:1px solid var(--line);border-radius:6px;padding:3px 8px;margin-bottom:10px;
}

footer{max-width:1180px;margin:50px auto 0;padding:0 28px;position:relative;z-index:1;}
footer p{color:var(--ink-faint);font-size:12.5px;line-height:1.7;}
</style>
</head>
<body>

<div class="bloom-field" id="bloomField"></div>

<header>
  <svg class="mark" viewBox="0 0 64 64" fill="none">
    <g>
      <ellipse cx="32" cy="18" rx="11" ry="15" fill="url(#p1)"/>
      <ellipse cx="32" cy="46" rx="11" ry="15" fill="url(#p2)"/>
      <ellipse cx="18" cy="32" rx="15" ry="11" fill="url(#p3)"/>
      <ellipse cx="46" cy="32" rx="15" ry="11" fill="url(#p4)"/>
      <ellipse cx="21.5" cy="21.5" rx="12" ry="9" transform="rotate(-45 21.5 21.5)" fill="url(#p5)"/>
      <ellipse cx="42.5" cy="42.5" rx="12" ry="9" transform="rotate(-45 42.5 42.5)" fill="url(#p5)"/>
      <ellipse cx="42.5" cy="21.5" rx="12" ry="9" transform="rotate(45 42.5 21.5)" fill="url(#p5)"/>
      <ellipse cx="21.5" cy="42.5" rx="12" ry="9" transform="rotate(45 21.5 42.5)" fill="url(#p5)"/>
      <circle cx="32" cy="32" r="7" fill="#ffe38a"/>
    </g>
    <defs>
      <linearGradient id="p1" x1="32" y1="3" x2="32" y2="33"><stop stop-color="#c99bf5"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
      <linearGradient id="p2" x1="32" y1="31" x2="32" y2="61"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#5b21b6"/></linearGradient>
      <linearGradient id="p3" x1="3" y1="32" x2="33" y2="32"><stop stop-color="#d472c9"/><stop offset="1" stop-color="#8b3fa8"/></linearGradient>
      <linearGradient id="p4" x1="31" y1="32" x2="61" y2="32"><stop stop-color="#8b3fa8"/><stop offset="1" stop-color="#d472c9"/></linearGradient>
      <linearGradient id="p5" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a86ce8"/><stop offset="1" stop-color="#6d28d9"/></linearGradient>
    </defs>
  </svg>
  <div>
    <span class="eyebrow">TukiNeta Logistics · Modelo climático</span>
    <h1>Predicción de riesgo climático</h1>
    <p>Ingresa las condiciones meteorológicas del día y obtén, en un mismo lugar, si se espera lluvia mañana, cuántos milímetros de riesgo se estiman y a qué perfil climático corresponde la jornada.</p>
  </div>
</header>

<div class="wrap">
  <!-- FORM -->
  <div class="card">
    <div class="section-title">Condiciones del día</div>
    <p class="section-sub">Todos los campos provienen de las mismas variables usadas para entrenar los modelos (weatherAUS). El escalado se aplica automáticamente con la misma técnica —RobustScaler— usada en el entrenamiento.</p>

    <form id="weatherForm">
      <fieldset>
        <legend>Temperatura y radiación</legend>
        <div class="grid">
          <div class="field"><label>Temp. mínima <span class="unit">°C</span></label><input type="number" step="0.1" id="MinTemp" required></div>
          <div class="field"><label>Temp. máxima <span class="unit">°C</span></label><input type="number" step="0.1" id="MaxTemp" required></div>
          <div class="field"><label>Evaporación <span class="unit">mm</span></label><input type="number" step="0.1" id="Evaporation" required></div>
          <div class="field"><label>Horas de sol <span class="unit">h</span></label><input type="number" step="0.1" min="0" max="14" id="Sunshine" required></div>
          <div class="field"><label>Lluvia del día <span class="unit">mm</span></label><input type="number" step="0.1" min="0" id="Rainfall" required></div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Viento</legend>
        <div class="grid">
          <div class="field"><label>Ráfaga máx. <span class="unit">km/h</span></label><input type="number" step="1" min="0" id="WindGustSpeed" required></div>
          <div class="field"><label>Dirección ráfaga</label><select id="WindGustDir"></select></div>
          <div class="field"><label>Vel. 9am <span class="unit">km/h</span></label><input type="number" step="1" min="0" id="WindSpeed9am" required></div>
          <div class="field"><label>Vel. 15pm <span class="unit">km/h</span></label><input type="number" step="1" min="0" id="WindSpeed3pm" required></div>
          <div class="field"><label>Dirección 9am</label><select id="WindDir9am"></select></div>
          <div class="field"><label>Dirección 15pm</label><select id="WindDir3pm"></select></div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Humedad, presión y nubosidad</legend>
        <div class="grid">
          <div class="field"><label>Humedad 9am <span class="unit">%</span></label><input type="number" step="1" min="0" max="100" id="Humidity9am" required></div>
          <div class="field"><label>Humedad 15pm <span class="unit">%</span></label><input type="number" step="1" min="0" max="100" id="Humidity3pm" required></div>
          <div class="field"><label>Presión 9am <span class="unit">hPa</span></label><input type="number" step="0.1" id="Pressure9am" required></div>
          <div class="field"><label>Presión 15pm <span class="unit">hPa</span></label><input type="number" step="0.1" id="Pressure3pm" required></div>
          <div class="field"><label>Nubosidad 9am <span class="unit">oktas</span></label><input type="number" step="1" min="0" max="9" id="Cloud9am" required></div>
          <div class="field"><label>Nubosidad 15pm <span class="unit">oktas</span></label><input type="number" step="1" min="0" max="9" id="Cloud3pm" required></div>
        </div>
      </fieldset>

      <fieldset>
        <legend>¿Llovió hoy?</legend>
        <div class="toggle-row" style="max-width:280px;">
          <button type="button" class="toggle-opt active" data-field="RainToday" data-value="No">No</button>
          <button type="button" class="toggle-opt" data-field="RainToday" data-value="Yes">Sí</button>
        </div>
      </fieldset>

      <div class="actions">
        <button type="submit" class="btn btn-primary">Predecir</button>
        <button type="button" class="btn btn-ghost" id="fillExample">Cargar valores de ejemplo</button>
      </div>
    </form>
  </div>

  <!-- RESULTS -->
  <div class="results-sticky">
    <div class="result-card" id="cardRain">
      <div class="r-eyebrow">Clasificación · Naive Bayes</div>
      <h3>¿Lloverá mañana?</h3>
      <p class="placeholder-note">Completa el formulario y presiona «Predecir» para ver el resultado.</p>
    </div>

    <div class="result-card" id="cardRisk">
      <div class="r-eyebrow">Regresión lineal</div>
      <h3>Riesgo de lluvia estimado</h3>
      <p class="placeholder-note">Aquí aparecerá la estimación de milímetros de riesgo (RISK_MM).</p>
    </div>

    <div class="result-card" id="cardCluster">
      <div class="r-eyebrow">No supervisado · K-Means</div>
      <h3>Perfil climático del día</h3>
      <p class="placeholder-note">El día se agrupará junto a jornadas históricas con condiciones similares.</p>
    </div>
  </div>
</div>

<footer>
  <p><strong>Nota técnica:</strong> el modelo de K-Means fue entrenado incluyendo, por un efecto secundario del pipeline original, su propia etiqueta de clúster como una variable más. Para reproducir fielmente ese modelo, este campo se fija internamente en 0, ya que no existe un valor de clúster antes de la predicción. Esto no afecta a los modelos de clasificación (Naive Bayes) ni de regresión (Regresión Lineal), que usan únicamente variables meteorológicas.</p>
</footer>

<script id="model-data" type="application/json">
{"scaler": {"numeric_cols": ["MinTemp", "MaxTemp", "Rainfall", "Evaporation", "Sunshine", "WindGustSpeed", "WindSpeed9am", "WindSpeed3pm", "AvgHumidity", "AvgPressure", "AvgCloud", "PressureDiff"], "center": [12.0, 22.6, 0.0, 4.6, 8.5, 39.0, 13.0, 19.0, 61.5, 1016.5, 5.0, -2.400000000000091], "scale": [9.200000000000001, 10.2, 0.6, 1.4000000000000004, 0.7000000000000011, 15.0, 12.0, 11.0, 24.5, 8.350000000000023, 2.0, 2.099999999999909]}, "nb": {"features": ["MinTemp", "MaxTemp", "Rainfall", "Evaporation", "Sunshine", "WindGustSpeed", "WindSpeed9am", "WindSpeed3pm", "AvgHumidity", "AvgPressure", "AvgCloud", "PressureDiff", "StrongWind", "HighHumidity", "WindGustDir", "WindDir9am", "WindDir3pm", "RainToday"], "classes": [0.0, 1.0], "theta": [[0.006854859865489128, 0.06176816265385339, 3.5724822133392267, 0.3629340717356481, -0.5824103304493877, 0.060307464112412154, 0.09514920682806537, -0.0165119404315376, -0.07920880849511515, 0.010577659824780495, -0.18456567237348218, 0.005573446966880033, 0.17308054906101517, 0.12305792292028056, 179.5621841767856, 157.96772475299795, 158.00505788521005, 0.01878912436835357], [0.2706912767458265, 0.04602057140749541, 10.916059252292523, 0.1811158509959356, -2.4200396358872687, 0.15614076338271074, -0.11897484128850162, -0.33071842335890966, 0.5062452914389363, -0.31166024405456627, 0.37450035269221726, -0.02912230022501249, 0.2351281448389372, 0.39454502703973665, 172.5246884552081, 163.27180813543382, 165.91170938161298, 0.4655537267810957]], "var": [[0.5209896414313967, 0.5209049298891343, 174.27087295529725, 5.382513796693943, 15.698032635405614, 0.8080115040908962, 0.588056093712829, 0.6833672254752119, 0.5837026166228315, 0.6791272863174243, 1.0061265508533621, 0.8466712992520928, 0.18433229798033285, 0.1491232959090583, 500.8972812293904, 528.7284564911761, 514.0208548688929, 0.05964471855619241], [0.47772476174469175, 0.5011065987031547, 742.7396907001884, 3.72653741284107, 18.961312227990152, 1.0867923731569362, 0.4381163917374504, 0.5858671748005129, 0.47182363833955976, 0.7007029955862538, 0.666785174465266, 0.9293416443795594, 0.22105152572593292, 0.2800878740603488, 10224.73787161904, 11481.921126282425, 10640.643982402149, 0.29002207964373206]], "class_prior": [0.9614502605937004, 0.03854973940629957]}, "lr": {"features": ["MinTemp", "MaxTemp", "Rainfall", "Evaporation", "Sunshine", "WindGustSpeed", "WindSpeed9am", "WindSpeed3pm", "AvgHumidity", "AvgPressure", "AvgCloud", "PressureDiff", "StrongWind", "HighHumidity", "WindGustDir", "WindDir9am", "WindDir3pm", "RainToday"], "coef": [0.9488247101075903, 0.21890280312300978, 0.11161183264184742, 0.04138095583013459, -0.20204715862197056, 1.6257797637250253, 0.18267991592456323, -0.7288309058816026, 1.8647854928107988, -0.4602944784389843, 0.09827340209495407, -1.0528776714637682, 0.05732114383527942, 3.483753620635708, -0.004079658171957781, -0.0007681144843210951, -0.0028253105737568195, 0.30783739798287096], "intercept": 2.5252118673946824}, "km": {"features": ["MinTemp", "MaxTemp", "Rainfall", "Evaporation", "Sunshine", "WindGustSpeed", "WindSpeed9am", "WindSpeed3pm", "AvgHumidity", "AvgPressure", "AvgCloud", "PressureDiff", "StrongWind", "HighHumidity", "WindGustDir", "WindDir9am", "WindDir3pm", "RainToday", "Cluster"], "centers": [[0.0012624195421545338, 0.05769632023933266, 2.106984385866691, 0.36822442502057096, -0.540002718282274, 0.06464714300562334, 0.10452327462378763, -0.0010458844555700508, -0.09283047399757924, 0.02035788208200048, -0.19849255270676736, 0.004478453426988034, 0.1726988543240768, 0.11691810775590752, 179.97661477945863, 157.53759623917705, 157.51996738061482, 0.004269301801286644, 0.002446453841185553], [0.0077239546647883735, 0.17787114845938384, 6.6131566028473365, 0.2565747948663995, -1.1140332421628392, 0.0028473244968090505, -0.3453608247422684, -0.3241397777480288, 0.07081241922394886, -0.2983208840051847, 0.10106774668629953, -0.08531453818637115, 0.1944035346097201, 0.22606774668630292, 263.6377025036799, 64.41826215022337, 268.12776141384325, 0.4160530191457968, 0.9455081001472875], [-0.07269489082850697, -0.17991023801640746, 8.201063164477837, -0.045921558116675865, -1.5901009559546095, 0.18161350844277654, -0.01730248071711503, -0.1705611461709023, 0.18861278094727585, -0.3002812386484059, 0.21357098186365653, 0.3367878733732935, 0.24265165728580496, 0.2557848655409644, 262.6125703564706, 267.7767354596655, 262.41557223264476, 0.47342088805503385, 1.8111319574734335], [0.07407999431656721, -0.00021626297577869574, 6.628131808278889, -0.1450163398692722, -1.4800420168067199, -0.17854030501089468, -0.15209694989106887, -0.5912804515745719, 0.23957916499933324, -0.05754177918672427, -0.008169934640521154, -0.16830065359473775, 0.14297385620914893, 0.21323529411764766, 259.9632352941164, 269.0808823529435, 77.05882352941113, 0.39460784313724945, 1.3823529411764828], [0.2216147197485593, 0.15719495629577107, 7.62374497991971, 0.013984509466445638, -1.1100473321858813, -0.4120983935743031, -0.3692269076305245, -0.427505476451265, 0.3258544381608066, 0.10124630257557107, 0.07134789156626323, -0.19829317269073135, 0.06551204819277406, 0.22891566265060126, 73.75188253011854, 261.96912650602644, 75.7341867469873, 0.4269578313252937, 1.192771084337361], [0.17012713703028748, 0.14941685256937093, 8.840984697272173, 0.2463644140290838, -1.2557741659537998, -0.06014637391882976, -0.2001829673985377, -0.480312103066599, 0.20841989490406948, -0.15204321895131853, 0.10179640718562943, 0.03564299971489689, 0.17165668662674685, 0.24950099800398973, 73.76497005987848, 265.46407185628885, 263.5104790419155, 0.39221556886227166, 1.699600798403206], [0.23083826316696338, 0.21750589271375673, 8.100946719506858, 0.3811568220418936, -1.3180788828080714, -0.25724350506385024, -0.18229854689563857, -0.464873303710824, 0.2267139352438466, -0.048442085446016483, 0.16380449141346548, -0.30993269170280885, 0.10898282694848399, 0.2523117569352724, 71.67602377807101, 72.49339498018732, 71.00726552179593, 0.43989431968295606, 0.06274768824306438], [0.20460684551341343, 0.3425031289111395, 6.659858156028382, 0.5857750759878415, -0.9786018237082029, -0.20612765957446924, -0.18496453900709148, -0.6537717601547378, -6.947459835004305e-05, -0.18639826729519646, -0.015319148936169091, -0.20693009118537808, 0.13617021276595612, 0.2144680851063827, 73.74255319148682, 67.40425531915076, 267.4340425531908, 0.37531914893616664, 0.9378723404255436], [0.18437225636523255, 0.25281895023154116, 5.771583260169735, 0.4132697855261498, -1.4383544462561095, 0.11290605794556677, -0.26807140766754406, -0.49437305451353397, 0.1690347780903405, -0.26311792569382697, 0.11918349429323682, -0.3897508257033928, 0.2247585601404728, 0.2379280070237048, 264.6861281826152, 61.73178226514689, 67.93459174714597, 0.35381913959613437, 0.06848112379280066], [0.4351014026935907, -0.047093485847533534, 76.54258738449066, 0.24972737186477767, -3.908109969580425, 0.5936788536225998, 0.42805008704967923, 0.23572811278717046, 0.7707791835094819, -0.5410921828500466, 0.6081759742868807, 0.5006026516673978, 0.36440337484932683, 0.5504218561671445, 179.8553635998393, 158.06046605062275, 157.83447167537162, 0.05865809562073278, 0.023704298915227538]], "n_clusters": 10}}
</script>

<script>
const MP = JSON.parse(document.getElementById('model-data').textContent);

const WIND_DIRS = {
  'N':0,'NNE':22.5,'NE':45,'ENE':67.5,'E':90,'ESE':112.5,'SE':135,'SSE':157.5,
  'S':180,'SSW':202.5,'SW':225,'WSW':247.5,'W':270,'WNW':292.5,'NW':315,'NNW':337.5
};

const RAW_MEDIANS = {
  MinTemp:12.0, MaxTemp:22.6, Rainfall:0.0, Evaporation:4.6, Sunshine:8.5,
  WindGustSpeed:39.0, WindSpeed9am:13.0, WindSpeed3pm:19.0,
  Humidity9am:70.0, Humidity3pm:52.0, Pressure9am:1017.7, Pressure3pm:1015.3,
  Cloud9am:5.0, Cloud3pm:5.0
};

// populate wind direction selects
['WindGustDir','WindDir9am','WindDir3pm'].forEach(id=>{
  const sel = document.getElementById(id);
  Object.keys(WIND_DIRS).forEach(dir=>{
    const opt = document.createElement('option');
    opt.value = dir; opt.textContent = dir;
    sel.appendChild(opt);
  });
  sel.value = id==='WindGustDir' ? 'W' : (id==='WindDir9am' ? 'W' : 'WNW');
});

// toggle buttons
document.querySelectorAll('.toggle-opt').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll(`.toggle-opt[data-field="${btn.dataset.field}"]`).forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.getElementById('fillExample').addEventListener('click', ()=>{
  Object.keys(RAW_MEDIANS).forEach(k=>{
    const el = document.getElementById(k);
    if(el) el.value = RAW_MEDIANS[k];
  });
  document.getElementById('WindGustDir').value='W';
  document.getElementById('WindDir9am').value='W';
  document.getElementById('WindDir3pm').value='WNW';
  document.querySelectorAll('.toggle-opt[data-field="RainToday"]').forEach(b=>b.classList.remove('active'));
  document.querySelector('.toggle-opt[data-field="RainToday"][data-value="No"]').classList.add('active');
});

function getToggleValue(field){
  const active = document.querySelector(`.toggle-opt[data-field="${field}"].active`);
  return active ? active.dataset.value : null;
}

function num(id){ return parseFloat(document.getElementById(id).value); }

function buildFeatures(){
  const raw = {
    MinTemp:num('MinTemp'), MaxTemp:num('MaxTemp'), Rainfall:num('Rainfall'),
    Evaporation:num('Evaporation'), Sunshine:num('Sunshine'),
    WindGustSpeed:num('WindGustSpeed'), WindSpeed9am:num('WindSpeed9am'), WindSpeed3pm:num('WindSpeed3pm'),
    Humidity9am:num('Humidity9am'), Humidity3pm:num('Humidity3pm'),
    Pressure9am:num('Pressure9am'), Pressure3pm:num('Pressure3pm'),
    Cloud9am:num('Cloud9am'), Cloud3pm:num('Cloud3pm')
  };

  const AvgHumidity = (raw.Humidity9am + raw.Humidity3pm)/2;
  const AvgPressure = (raw.Pressure9am + raw.Pressure3pm)/2;
  const AvgCloud = (raw.Cloud9am + raw.Cloud3pm)/2;
  const PressureDiff = raw.Pressure3pm - raw.Pressure9am;
  const StrongWind = raw.WindGustSpeed > 50 ? 1 : 0;
  const HighHumidity = AvgHumidity > 80 ? 1 : 0;
  const RainToday = getToggleValue('RainToday')==='Yes' ? 1 : 0;

  const WindGustDir = WIND_DIRS[document.getElementById('WindGustDir').value];
  const WindDir9am = WIND_DIRS[document.getElementById('WindDir9am').value];
  const WindDir3pm = WIND_DIRS[document.getElementById('WindDir3pm').value];

  // pre-scale values keyed by scaler's numeric_cols
  const preScale = {
    MinTemp:raw.MinTemp, MaxTemp:raw.MaxTemp, Rainfall:raw.Rainfall,
    Evaporation:raw.Evaporation, Sunshine:raw.Sunshine, WindGustSpeed:raw.WindGustSpeed,
    WindSpeed9am:raw.WindSpeed9am, WindSpeed3pm:raw.WindSpeed3pm,
    AvgHumidity, AvgPressure, AvgCloud, PressureDiff
  };

  const scaled = {};
  MP.scaler.numeric_cols.forEach((col,i)=>{
    const center = MP.scaler.center[i];
    const scale = MP.scaler.scale[i];
    scaled[col] = scale !== 0 ? (preScale[col]-center)/scale : 0;
  });

  const values = Object.assign({}, scaled, {
    StrongWind, HighHumidity,
    WindGustDir, WindDir9am, WindDir3pm,
    RainToday
  });

  return values; // dict keyed by feature name -> scaled/raw value ready for models
}

function vectorFor(featureNames, values, extra){
  const vec = featureNames.map(f=>{
    if(f in values) return values[f];
    if(extra && (f in extra)) return extra[f];
    throw new Error('Falta la variable: '+f);
  });
  return vec;
}

// ---- Naive Bayes (GaussianNB) ----
function predictNB(vec){
  const jll = MP.nb.classes.map((c,ci)=>{
    let s = Math.log(MP.nb.class_prior[ci]);
    for(let i=0;i<vec.length;i++){
      const mean = MP.nb.theta[ci][i];
      const v = MP.nb.var[ci][i];
      s += -0.5*Math.log(2*Math.PI*v) - Math.pow(vec[i]-mean,2)/(2*v);
    }
    return s;
  });
  const maxJll = Math.max(...jll);
  const exps = jll.map(x=>Math.exp(x-maxJll));
  const sumExps = exps.reduce((a,b)=>a+b,0);
  const probs = exps.map(x=>x/sumExps);
  const idx = probs[1] >= probs[0] ? 1 : 0;
  return { pred: MP.nb.classes[idx], probs, classes: MP.nb.classes };
}

// ---- Linear Regression ----
function predictLR(vec){
  let y = MP.lr.intercept;
  for(let i=0;i<vec.length;i++) y += MP.lr.coef[i]*vec[i];
  return y;
}

// ---- KMeans ----
function predictKM(vec){
  let best=-1, bestDist=Infinity;
  MP.km.centers.forEach((center,ci)=>{
    let d=0;
    for(let i=0;i<vec.length;i++){ const diff = vec[i]-center[i]; d += diff*diff; }
    if(d<bestDist){ bestDist=d; best=ci; }
  });
  return best;
}

function inverseScale(col, val){
  const idx = MP.scaler.numeric_cols.indexOf(col);
  if(idx===-1) return val;
  return val*MP.scaler.scale[idx] + MP.scaler.center[idx];
}

function clusterProfile(ci){
  const featureNames = MP.km.features;
  const c = MP.km.centers[ci];
  const get = (name)=> c[featureNames.indexOf(name)];
  return {
    minTemp: inverseScale('MinTemp', get('MinTemp')),
    maxTemp: inverseScale('MaxTemp', get('MaxTemp')),
    rainfall: inverseScale('Rainfall', get('Rainfall')),
    humidity: inverseScale('AvgHumidity', get('AvgHumidity')),
    wind: inverseScale('WindGustSpeed', get('WindGustSpeed')),
    rainProb: get('RainToday')
  };
}

document.getElementById('weatherForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  try{
    const values = buildFeatures();

    const vecNB = vectorFor(MP.nb.features, values);
    const nbResult = predictNB(vecNB);

    const vecLR = vectorFor(MP.lr.features, values);
    const lrResult = predictLR(vecLR);

    const vecKM = vectorFor(MP.km.features, values, {Cluster:0});
    const kmResult = predictKM(vecKM);
    const profile = clusterProfile(kmResult);

    renderRain(nbResult);
    renderRisk(lrResult);
    renderCluster(kmResult, profile);

  }catch(err){
    alert('Revisa que todos los campos estén completos. ('+err.message+')');
  }
});

function renderRain(res){
  const willRain = res.pred === 1;
  const prob = res.probs[res.classes.indexOf(1)];
  const el = document.getElementById('cardRain');
  el.innerHTML = `
    <div class="r-eyebrow">Clasificación · Naive Bayes</div>
    <h3>¿Lloverá mañana?</h3>
    <div class="rain-badge ${willRain?'yes':'no'}"><span class="dot"></span>${willRain?'Sí, se espera lluvia':'No se espera lluvia'}</div>
    <div class="prob-bar-track"><div class="prob-bar-fill" style="width:${(prob*100).toFixed(1)}%"></div></div>
    <div class="prob-label"><span>Probabilidad de lluvia</span><span>${(prob*100).toFixed(1)}%</span></div>
  `;
}

function renderRisk(mm){
  const clipped = Math.max(0, mm);
  const el = document.getElementById('cardRisk');
  el.innerHTML = `
    <div class="r-eyebrow">Regresión lineal</div>
    <h3>Riesgo de lluvia estimado</h3>
    <div class="risk-value">${clipped.toFixed(1)}<span class="risk-unit"> mm</span></div>
    <div class="risk-note">Valor estimado por regresión lineal (RISK_MM)${mm<0?' — el modelo devolvió un valor negativo ('+mm.toFixed(2)+' mm), mostrado aquí como 0 por tratarse de un mínimo físico':''}.</div>
  `;
}

function renderCluster(ci, p){
  const el = document.getElementById('cardCluster');
  el.innerHTML = `
    <div class="r-eyebrow">No supervisado · K-Means</div>
    <h3>Perfil climático del día</h3>
    <div class="cluster-chip">Clúster ${ci} de ${MP.km.n_clusters}</div>
    <div class="cluster-stats">
      <div>Temp. típica <b>${p.minTemp.toFixed(1)}–${p.maxTemp.toFixed(1)}°C</b></div>
      <div>Lluvia media <b>${p.rainfall.toFixed(1)} mm</b></div>
      <div>Humedad media <b>${p.humidity.toFixed(0)}%</b></div>
      <div>Viento medio <b>${p.wind.toFixed(0)} km/h</b></div>
    </div>
    <div class="footnote" style="border:none;padding-top:14px;margin-top:12px;">Este grupo corresponde a jornadas históricas con condiciones similares a las ingresadas.</div>
  `;
}

// ---------- decorative bloom field (violet flower petals, ambient) ----------
(function(){
  const container = document.getElementById('bloomField');
  const svgNS = 'http://www.w3.org/2000/svg';
  const positions = [
    {x:'92%', y:'6%', s:220, r:0.5, dur:26},
    {x:'-4%', y:'78%', s:280, r:-0.6, dur:32},
    {x:'78%', y:'88%', s:160, r:0.3, dur:22},
  ];
  positions.forEach((p,idx)=>{
    const svg = document.createElementNS(svgNS,'svg');
    svg.setAttribute('width', p.s);
    svg.setAttribute('height', p.s);
    svg.setAttribute('viewBox','0 0 64 64');
    svg.style.left = p.x; svg.style.top = p.y;
    svg.style.opacity = 0.5;
    svg.style.filter = 'blur(0.3px)';
    svg.innerHTML = `
      <g style="transform-origin:32px 32px; animation: spin${idx} ${p.dur}s linear infinite;">
        <ellipse cx="32" cy="14" rx="10" ry="14" fill="#6d28d9" opacity="0.55"/>
        <ellipse cx="32" cy="50" rx="10" ry="14" fill="#6d28d9" opacity="0.4"/>
        <ellipse cx="14" cy="32" rx="14" ry="10" fill="#a855c9" opacity="0.45"/>
        <ellipse cx="50" cy="32" rx="14" ry="10" fill="#a855c9" opacity="0.35"/>
      </g>
    `;
    const styleTag = document.createElementNS(svgNS,'style');
    styleTag.textContent = `@keyframes spin${idx}{from{transform:rotate(${p.r*0}rad)}to{transform:rotate(${p.r*6.28}rad)}}`;
    svg.appendChild(styleTag);
    container.appendChild(svg);
  });
})();
</script>
</body>
</html>
