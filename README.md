# 🚀 Flask & Chart.js Lokális Integráció
 
Ez a projekt bemutatja, hogyan integrálható a Chart.js JavaScript könyvtár egy Flask (Python) alapú szerver oldali rendereléssel rendelkező alkalmazásba anélkül, hogy CDN-t használnánk.📁 Projekt StruktúraA projekt sikeres futtatásához az alábbi mappaszerkezet szükséges:

```
your_project/
├── app.py                      # Flask Applikáció
├── package.json                # NPM Függőségek és Szkriptek (Build parancs)
├── requirements.txt            # Python Függőségek (Flask)
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── chart.min.js        # Ide kerül a Chart.js a build után!
│       └── index.js            # A Chart.js inicializáló logikád
└── templates/
    └── index.html              # HTML Sablon (Jinja2)
```


## 🛠️ Előkészületek és Telepítés
A projekt beüzemeléséhez Python (Flask) és Node.js/NPM (Chart.js) is szükséges.1. Python Környezet Beállítása1.1. Virtuális Környezet Létrehozása és AktiválásaA projekt izolálása érdekében hozz létre egy virtuális környezetet (venv):RendszerLétrehozásAktiválásLinux/macOSpython3 -m venv venvsource venv/bin/activateWindowspython -m venv venvvenv\Scripts\activate1.2. Python Függőségek TelepítéseTelepítsd a Flaskot a requirements.txt fájl segítségével az aktivált környezetbe:Bash(venv) pip install -r requirements.txt

## 2. Chart.js és Frontend Függőségek Beállítása
A Chart.js-t az NPM kezeli, de át kell másolni a Flask static mappájába.
### 2.1. NPM Függőségek TelepítéseFuttasd a projekt gyökerében:Bashnpm install
npm install npm-run-all --save-dev
### 2.2. Build Szkriptek (package.json)Győződj meg róla, hogy a package.json a Windows rendszerednek megfelelő copy parancsot tartalmazza, és az indítás sorba állítja a build folyamatot:JSON// package.json (A te Windows-os beállításaid)
```
"scripts": {
  "build": "copy node_modules\\chart.js\\chart.umd.min.js static\\js\\chart.min.js",
  "serve": "python app.py", 
  "start": "npm-run-all --serial build serve" 
}
```

## ▶️ Futtatás
A projekt indítása egyetlen NPM paranccsal történik, ami először átmásolja a Chart.js fájlt, majd elindítja a Flask szervert.
```
npm run start
```
- A npm run start parancs végrehajtása:
```
build: A chart.umd.min.js fájlt átmásolja a static/js/chart.min.js helyre.
serve: Elindítja az app.py Flask alkalmazást.
```
A weboldal a szerver indulása után elérhető:Link: http://127.0.0.1:5000/🔗 Hivatkozás a HTML-benAz templates/index.html fájlban a Chart.js betöltése a következő sorrendben történik, a lokális fájlok használatával:HTML<script src="{{ url_for('static', filename='js/chart.min.js') }}"></script> 

<script src="{{ url_for('static', filename='js/index.js') }}"></script>