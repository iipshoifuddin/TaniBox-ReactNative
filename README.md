<h1 align="center">TaniBox</h1>
<p align="center">
  <img width="250" src="./src/public/images/logo.png"/>
  <img height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png">
</p>
<p align="center">
  Built with React Native.
</p>

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Create Environment Variable](#create-environment-variable)
- [Screenshots](#screenshots)
- [Release APK](#release-apk)
- [Related Project](#related-project-backend)
- [Contributors](#contributors)

## Introduction

<b>TaniBox</b> TaniBox is an application for buying and selling fresh fruits and vegetables. The concept is that buyers can look for fruits and vegetables according to their region.

## Requirements

- [`npm`](https://www.npmjs.com/get-npm)
- [`react-native`](https://facebook.github.io/react-native/docs/getting-started)
- [`react-native-cli`](https://facebook.github.io/react-native/docs/getting-started)
- [`Backend TaniBox`](https://github.com/reihnagm/TaniBox-Backend)

## Usage for development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/iipshoifuddin/TaniBox-ReactNative`
3. Open the folder and type `npm install` for install dependencies
4. Create Environment Variable [here](#create-environment-variable)
5. Before run this, you must run backend first
6. Type `react-native run-android` for run this app. **_Make sure your device is connected with debugging mode_**.

## Create Environment Variable

```
$ cp .env.example .env
$ nano .env
```

```
# Set API KEY
API_ENDPOINT=Your endpoint API
BASE_URL=Your Base URL
ONESIGNAL_API_KEY=Your Onesignal API Key
```

## Screenshots

<div align="center">
    <img width="250" src="./src/public/screenshots/00.splashscreen.jpg">
    <img width="250" src="./src/public/screenshots/01.login.jpg">
    <img width="250" src="./src/public/screenshots/02.register.jpg">
    <img width="250" src="./src/public/screenshots/03.resetPassword.jpg">
    <img width="250" src="./src/public/screenshots/05.notification.jpg">
    <img width="250" src="./src/public/screenshots/06.product.jpg">
    <img width="250" src="./src/public/screenshots/07.addProduct.jpg">
    <img width="250" src="./src/public/screenshots/08.editStore.jpg">
    <img width="250" src="./src/public/screenshots/profileSeller.jpg">
</div>

## Release APK

<a href="https://drive.google.com/file/d/1C3gwW5q147gR0uOQyVVjwpkiTuskn1ul/view?usp=sharing">
  <img src="https://img.shields.io/badge/Download%20from-Google%20Drive-blue.svg?style=popout&logo=google-drive"/>
</a>

## Related Project (Backend)

- [`Backend TaniBox`](https://github.com/reihnagm/TaniBox-Backend)

## Contributors

<center>
<ul>

</ul>
  <table align="center">
    <tr>
      <td align="center">
        <a href="https://github.com/halim13">
          <img width="100" src="https://avatars0.githubusercontent.com/u/11336853?s=460&v=4" alt="Halim Hasanudin"><br/>
        </a>
          <sub><b>Halim Hasanudin</b></sub><br/>
          <sub>(React native)</sub>
      </td>
      <td align="center">
        <a href="https://github.com/MBambangSumantri">
          <img width="100" src="https://avatars2.githubusercontent.com/u/57070723?s=400&v=4" alt="M. Bambang Sumantri"><br/>
        </a>
          <sub><b>M. Bambang Sumantri</b></sub><br/>
          <sub>(React native)</sub>
      </td>
      <td align="center">
        <a href="https://github.com/MBambangSumantri">
          <img width="100" src="https://avatars2.githubusercontent.com/u/46220032?s=460&v=4" alt="Luhut Andreas"><br/>
        </a>
          <sub><b>Luhut Andreas</b></sub><br/>
          <sub>(React native, Express Js)</sub>
      </td>
      <td align="center">
        <a href="https://github.com/iipshoifuddin">
          <img width="100" src="https://avatars3.githubusercontent.com/u/57024333?s=400&v=4" alt="iipshoifuddin"><br/>
        </a>
          <sub><b>Iip Shoifuddin</b></sub><br/>
          <sub>(React native)</sub>
      </td>
      <td align="center">
        <a href="https://github.com/bayuyuhartono">
          <img width="100" src="https://avatars2.githubusercontent.com/u/48350051?s=460&v=4" alt="Bayu P Yuhartono"><br/>
        </a>
          <sub><b>Bayu P Yuhartono</b></sub><br/>
          <sub>(React native, Express Js)</sub>
      </td>
      <td align="center">
        <a href="https://github.com/reihnagm">
          <img width="100" src="https://avatars1.githubusercontent.com/u/17222339?s=460&v=4" alt="Reihan Agam"><br/>
        </a>
          <sub><b>Reihan Agam</b></sub><br/>
          <sub>(React native, Express Js)</sub>
      </td>
    </tr>
  </table>
</center>
