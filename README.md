***In this branch: counted quantity of episodes to display in window***


# Критерии приемки.

- [x] 1. Наличие ссылки на git репозиторий содержащий исходный код задания.
- [x] 2. Наличие отдельного блока в файле README.md с указанием какие из пунктов текущего задания подлежат проверке. 
- [x] 3. Пользовательский интерфейс должен содержать элементы, представленные на макетах. 
https://drive.google.com/drive/folders/1Pk2tdkPJbDKoal--aR898wPD_SlnSnKN?usp=sharing  
    - [ ] Полная реализация страниц согласно дизайну будет дополнительным плюсом. Адаптировать необходимо только под мобильные устройства. Реализовывать desktop версию нет необходимости. 
      - [x] на ~99% согласно дизайну 
        - [ ] круг в календаре вместо квадрата
- [x] 4. Подключение и реализация поведения для источника данных - https://www.tvmaze.com/api#schedule  (country=US).  
- [x] 5. Реализация отображения original изображения по нажатию на medium будет дополнительным плюсом.
- [ ]  6. В случае web приложения наличие ссылки на развернутую версию либо инструкции по сборке в отдельном блоке файла README.md репозитория, с указанием версий необходимого для развертывания ПО.
- [x] 7. В случае React Native приложения 
  - [x] ссылка на apk файл [ссылка на apk файл](https://github.com/menzheha-maksym/react-native-super-film/releases/tag/release) или 
  - [x] инструкция по сборке в отдельном блоке файла README.md репозитория, с указанием версий необходимого для развертывания ПО. [инструкция](#build)
  - [ ] При наличии возможности предоставление доступа к iOS версии (если отсутствует опыт или необходимое окружение для сборки под iOS - не тратьте время, на рабочем месте обучим и предоставим все необходимое).


## build

### Windows

build tested on 
| Resolution  |  API  |          Target          | CPU/ABI |
| :---------: | :---: | :----------------------: | :-----: |
| 1080 x 2160 |  29   | Android 10 (Google APIs) | x86_64  |

1. Generate a private signing key using keytool
https://reactnative.dev/docs/signed-apk-android#windows
2. Setup Gradle variables
https://reactnative.dev/docs/signed-apk-android#setting-up-gradle-variables
3. cd android $$ ./gradlew assembleRelease