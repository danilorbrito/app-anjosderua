# app-anjosderua

>Aplicativo da Ong de resgate e adoção de animais 


## Principais Tecnologias utilizadas:

Descrição | Versão
--------- | ------:
[React-Native](https://facebook.github.io/react-native/) | "0.55.2"

## Instalação

* Ao Clonar abrir o terminal de comando na pasta onde está e executar o seguinte comando `yarn importante` ou `npm run importante`
* Ao terminar abrir `android/app/src/main/AndroidManifest.xml` no editor de sua preferencia e abaixo do código '`<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>`' adicionar o código que está logo abaixo, salve e feche
    ```xml
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.CAMERA" />
    ```
* Então execute no terminal de comando o seguinte comando com o celular conectado ou emulador ligado `npm run android` ou `yarn android`
* Pode abrir o editor e editar o codigo.
    * Apos executar o último comando, quando necessitar editar o código e verificar, basta executar `npm start` ou `yarn start` com o emulador ligado ou celular conectado.

## Links Importantes

Descrição | Endereço
--------- | ------
Front-end | https://github.com/learnjsfatec/FrontEnd-AnjosdeRua
Back-end | https://github.com/learnjsfatec/BackEnd-AnjosdeRua
App Mobile | https://github.com/learnjsfatec/app-anjosderua
Servidor Teste | 
Servidor Produção | 
Gerencia de Projetos | https://trello.com/b/z5EaxWkK/anjos-de-rua



## Progresso
- [ ] Login no App
- [ ] Denúncia
- [ ] Chat com a ong
- [ ] Doação
- [ ] Compartilhar no facebook a cada nova adoção


# Colaboradores

Desenvolvedor | Thumbnail
--------- | ------:
[Vitor](https://github.com/TecladistaProd) | <img src="https://avatars1.githubusercontent.com/u/26743405?s=460&v=4" width="100"/>



