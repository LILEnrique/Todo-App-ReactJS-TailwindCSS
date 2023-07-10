# Dynamic Todo App 📓

Aplicación construida utilizando ReactJS, Tailwind CSS y Firebase. Proporciona a los usuarios una agenda interactiva para tareas del día a día, con la capacidad de almacenar los datos en Firebase para una persistencia y sincronización en tiempo real.

La aplicación está diseñada para ser responsive, asegurando una experiencia fluida en diferentes dispositivos, incluyendo ordenadores de escritorio y móviles. En pantallas de escritorio, el contenido se muestra centrado dentro del div principal, creando un diseño limpio y organizado. Cuando se visualiza en dispositivos móviles, la aplicación se ajusta a una pantalla completa sin espacios adicionales, permitiendo a los usuarios ver la información de las tareas de manera más conveniente.
![View_APP](https://i.imgur.com/OlEbdNH.png)


## Funcionalidades

- Crear, editar y eliminar tareas.
- Marcar tareas como completadas.
- Almacenamiento en Firebase para persistencia y sincronización en tiempo real.

## Instalación 🔧

#### Descarga de repositorio ✨

A través del siguiente comando puedes descargar el repositorio:
```
git clone https://github.com/LILEnrique/Todo-App-ReactJS-TailwindCSS-Firebase
```
### Configuración de Firebase 🔥

1. Crea un proyecto en Firebase y habilita la autenticación y la base de datos en tiempo real.

2. Copia las credenciales de tu proyecto de Firebase.

3. En el archivo `src/firebase.js`, reemplaza las siguientes líneas con tus propias credenciales:

```
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO_FIREBASE",
  databaseURL: "TU_URL_FIREBASE",
  projectId: "TU_ID_PROYECTO",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

```
### Ejecutar la aplicación 🚀

1. Navega al directorio del proyecto

```
cd Todo-App-ReactJS-TailwindCSS-Firebase
```
2. Instala las dependencias

```
npm install
```
3. Inicia la aplicación

```
npm start
```

Siéntete libre de personalizar y mejorar la app de acuerdo a tus requerimientos y preferencias específicas.


Desarrollado con ❤️ por [LILEnrique](https://github.com/LILEnrique) 😼
