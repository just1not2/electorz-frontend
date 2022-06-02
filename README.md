# ElectorZ - Frontend

ElectorZ is a political game based on geographical strategies.

This repository hosts the frontend of the ElectorZ web application, written in [React](https://reactjs.org). The code of the backend is available in the [Electorz Backend repository](https://github.com/just1not2/electorz-backend).

## Configuration

The entire project configuration is defined in an environment file, of which [a template](./.env.template) is present in the repository. To bootstrap the configuration, launch the following command:

```bash
cp .env.template .env
```

You may then modify the following environment variables to configure the ElectorZ frontend:
* `REACT_APP_FRONT_URL`: URL of the frontend
* `REACT_APP_BACK_URL`: URL of the backend


## Installation

You can install the `npm` dependencies by launching the following command:

```bash
npm install
```

Besides, the ElectorZ backend must be launched for the frontend application to work. The easiest way to meet this requirement is to clone the [ElectorZ Backend repository](https://github.com/just1not2/electorz-backend) and follow its README.


## Launching the application

The ElectorZ frontend application may be launched with the following command:

```bash
npm run start
```

You may then visit http://localhost:3000 to test the website locally.


## See Also

* [ReactJS official documentation](https://reactjs.org)
* [React-Leaflet documentation](https://react-leaflet.js.org)


## Contributing to this application

This application started as personal project, but I welcome community contributions to it. If you find problems, please open an issue or create a PR against the [ElectorZ Frontend repository](https://github.com/just1not2/electorz-frontend).

You can also reach me by email at `me@just1not2.org`.


## Licensing

Mozilla Public License Version 2.0.

See [LICENSE](./LICENSE) to see the full text.


## Author Information

This application was created in 2022 by Justin Béra.