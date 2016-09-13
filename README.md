#HouseRemote v2.0

HouseRemote is a server designed to manage smart devices in a house.

## Installation

This is still a very early build so the installation process is not yet properly defined. At the moment, source code of the Android application that is used to interact with the server is located [HERE](https://github.com/mateorotim/SmartHomeSystem), and will probably be joined with this server later on.

For now you need to:

1. Install MongoDB and create a new user
1. Clone this repo: `git clone https://github.com/stjepangolemac/houseremote2.0.git`
2. Install dependencies: `npm install`
3. Create and configure environmental variables: `touch .env && nano .env` (list of needed variables will be added later)
4. Start the server: `npm run it`

## Usage

TODO: Write usage instructions

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

First version is available as another repo. Bear in mind that I am working on this to learn as much as I can about JavaScript, TypeScript and all related technologies that I am using therefore all stupid or inefficient things in code are automatically forgiven.

## Credits

Thanks internet for numerous tutorials and sources that helped me write this code!

## License

[GPL-3.0](LICENSE.txt) Copyright Ⓒ 2016 Stjepan Golemac <stjepan.golemac@gmail.com>