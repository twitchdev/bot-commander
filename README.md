# Bot Commander Config Service Example

## Background

This is a quick example of the new config service, and how to build an extension with the service that does not rely on a backend server (EBS).

## Requirements

There is only one requirement to use this example. 

* Node.JS LTS or greater. 

You may also find that using `yarn` is easier than `npm`, so we do recommend installing that as well by running: 
```
npm i -g yarn
``` 
in an elevated command line interface.

## First time Usage

### [Developer Rig](https://dev.twitch.tv/docs/extensions/rig/) Usage

If you are using the developer rig and have used this as your basis for your extension, please ignore the below steps- the developer rig has taken care of it for you! 

### Local Development

If you're wanting to develop this locally, use the below instructions. 
To use this, simply clone the repository into the folder of your choice. 

For example, to clone this into a `<repo name here>` folder, simply run the following in a commandline interface: 
```
git clone <repo name to be fixed later>
```

Next, do the following: 

1. Change directories into the cloned folder.
2. Run `yarn install` to install all prerequisite packages needed to run the template. 
3. Run `yarn cert` to generate the needed certificates. This allows the server to be run over HTTPS vs. HTTP.
4. Run `yarn start` to run the sample. If everything works, you should be be able to go to the developer rig, create a panel view, and see `Hello world!`

## Usage

To build your finalized React JS files, simply run `yarn build` to build the various webpacked files. 

## File Structure

The file structure in the template is laid out with the following: 

### bin

The `/bin` folder holds the cert generation script. 

### conf 

The `/conf` folder holds the generated certs after the cert generation script runs. 

### dist

`/dist` holds the final JS files after building. 

### public

`/public` houses the static HTML files used for your code's entrypoint. 

### src

This folder houses all source code and relevant files (such as images). Each React class/component is given a folder to house all associated files (such as associated CSS).

Below this folder, the structure is much simpler.

This would be: 

`
components
-\App
--\App.js
--\App.test.js
--\App.css
-\Authentication
--\Authentication.js
...
`

Each component is under the `components` folder.
