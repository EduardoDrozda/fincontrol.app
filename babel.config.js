module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@shared": "./src/shared",
            "@routes": "./src/routes"
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  };
};
