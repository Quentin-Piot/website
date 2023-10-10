
#  Quentin Piot Website Previous Version
## ⚙️ Running apps

### Prerequisites

* Add **.env** in _/packages/web_ and _/packages/api_, following .env.example of each folder to know what variables are required.

### Scripts

Be at the root level

* 1. 🪥 Clean everything up

```
yarn run clean
```

* 2. 🥪 Install all the packages:
```
yarn
``` 

* 3. 🧱 Build all dependencies:
```
yarn run build
```

* 4. 🏃 Run apps:

Front
```
yarn run dev:web
``` 
Back
```
yarn run dev:api
``` 

**OR**

Front + Back
```
yarn run dev
``` 

## 🏡 Local environment setup

Avoid using staging to test your code. Instead setup you own local environment:

* 1. 💽 Database  setup:


* 2. 
## 🧪 Formatting and linting apps

Be at the root level

### 🧾 Prettier formatter (will format all the code):

```
yarn run prettier
``` 

### 💡 Linter check (this will be normally done on every pre-commit):

```
yarn run lint
``` 

## 🧪 Testing apps

Be at the root level

```
yarn run test
``` 

## 🔌 How to install a local module

Navigate to a folder where this package is needed and proceed normally with `yarn add PACKAGE_NAME`. Package name being the name in package.json, NOT the folder in which the code is living.

## Packages

This architecture comes with apps and packages, that can be easily extended. You can add a new package or app by simply creation a new folder, run `yarn init` in the folder and start coding!

