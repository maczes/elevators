# Elevators

## HowTo

### Run app (quick steps)

#### List virtual devices and run android emulator  

osx:

```bash  
~/Library/Android/sdk/emulator/emulator -avd Pixel_2_API_28
```

linux:

```bash
~/Android/Sdk/emulator/emulator -list-avds
~/Android/Sdk/emulator/emulator -avd <avd-of-your-choice>
```

#### Deploy application into AVD

```bash
cd <project-root>/ui
react-native run-android  
```

### Debug

Open *<http://localhost:8081/debugger-ui/>*
