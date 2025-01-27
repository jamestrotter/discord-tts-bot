const APP = {
  'app.message.deprecated': 'Los comandos han sido convertidos a comandos slash y no podrás utilizarlos más con el prefijo. Puedes correr el comando que trataste de usar enviando: **/{commandName}**'
};

const ERROR = {
  'error.channel.not_viewable': 'No puedo ver tu canal de voz. ¿Tengo los suficientes permisos para verlo?',
  'error.channel.full': 'Tu canal de voz está lleno.',
  'error.channel.not_joinable': 'No puedo unirme a tu canal de voz. ¿Tengo los suficientes permisos para unirme?',
  'error.channel.not_speakable': 'No puedo hablar en tu canal de voz. ¿Tengo los suficientes permisos para hablar en él?'
};

const COMMAND = {
  'command.settings.default.no_settings': 'No existe configuración asociada a este proveedor.',
  'command.settings.default.embed.title': 'Aquí está la configuración por defecto para este servidor',
  'command.settings.default.embed.description': 'Toma en cuenta que esta configuración no refleja la tuya personal. Esta configuración será utilizada en el caso de no haber configurado la tuya.',
  'command.settings.default.current.provider': 'Proveedor actual',

  'command.settings.my.no_settings': 'No existe configuración asociada a este proveedor.',
  'command.settings.my.embed.title': 'Aquí está tu configuración actual, {name}',
  'command.settings.my.embed.description': 'Toma en cuenta que si no has configurado alguna de estas opciones verás las por defecto.',
  'command.settings.my.current.provider': 'Proveedor actual',

  'command.set.default.provider.success': 'Has cambiado el proveedor por defecto a **{name}** con éxito.',

  'command.set.my.provider.success': 'Has cambiado el proveedor por defecto a **{name}** con éxito.',

  'command.say.no_channel': 'Necesitas estar en un canal de voz.',
  'command.say.different_channel': 'Necesitas estar en mi canal de voz para decir algo.',
  'command.say.success': 'Diré eso ahora.',
  'command.say.joined.withrequest': 'Entré a {channel}.',
  'command.say.joined': 'Entré a {channel}.',

  'command.stop.no_connection': 'No estoy en un canal de voz.',
  'command.stop.different_channel': 'Necesitas estar en mi canal de voz para detenerme.',
  'command.stop.success': 'He salido del canal de voz {channel} con éxito.',

  'command.help.embed.title': 'Mensaje de ayuda de Text-to-Speech',
  'command.help.links.bug': '¿Encontraste un bug? ¡Repórtalo!',
  'command.help.links.website': 'Visita mi sitio web',

  'command.amazon.langs.embed.title': 'Lista de los idiomas disponibles para el proveedor de Amazon:',
  'command.amazon.langs.embed.description': `Esta es una lista completa de todos los idiomas disponibles para el proveedor de Amazon.
    
     Para cambiar tu propio idioma, utiliza **/amazon_set_my language LANG_CODE**.
     Puedes también utilizar **/amazon_set_default language LANG_CODE** para cambiar el idioma por defecto que se utilizará en caso de que alguien no tenga uno configurado.`,
  'command.amazon.langs.embed.page': 'Página {number}:',

  'command.amazon.voices.embed.title': 'Lista de las voces disponibles para el idioma {language}:',
  'command.amazon.voices.embed.description': `Esta es una lista completa de todas las voces disponibles para el idioma {language}.
      
      Para cambiar tu propio idioma, utiliza **/amazon_set_my voice VOICE_NAME**.
      Puedes también utilizar **/amazon_set_default voice VOICE_NAME** para cambiar la voz por defecto que se utilizará en caso de que alguien no tenga uno configurado.`,
  'command.amazon.voices.error.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Amazon. Utiliza **/amazon_langs** para obtener una lista de los idiomas disponibles.',

  'command.amazon.settings.default.language.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Amazon. Utiliza **/amazon_langs** para obtener una lista de los idiomas disponibles.',
  'command.amazon.settings.default.language.success': 'Has cambiado con éxito el idioma por defecto a **{language}** con la voz de **{voice}**.',

  'command.amazon.settings.default.voice.invalidated': 'El idioma por defecto guardado parece ser inválido. Por favor, reinicia el idioma por defecto con **/amazon_set_default language LANG_CODE**.',
  'command.amazon.settings.default.voice.unsupported': 'La voz **{voice}** no está disponible para el idioma por defecto. Utiliza **/amazon_voices** para obtener una lista de los idiomas disponibles.',
  'command.amazon.settings.default.voice.success': 'Has cambiado la voz por defecto a **{voice}** con éxito.',

  'command.amazon.settings.default.volume.success': 'Has cambiado el volumen por defecto a **{volume}** con éxito.',
  'command.amazon.settings.default.rate.success': 'Has cambiado el ritmo por defecto a **{rate}** con éxito.',
  'command.amazon.settings.default.pitch.success': 'Has cambiado el tono por defecto a **{pitch}** con éxito.',

  'command.amazon.settings.my.language.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Amazon. Utiliza **/amazon_langs** para obtener una lista de los idiomas disponibles.',
  'command.amazon.settings.my.language.success': 'Has cambiado con éxito tu idioma a **{language}** con la voz de **{voice}**.',

  'command.amazon.settings.my.voice.invalidated': 'Tu idioma guardado parece ser inválido. Por favor, reinicia tu idioma con **/amazon_set_my language LANG_CODE**.',
  'command.amazon.settings.my.voice.unsupported': 'La voz **{voice}** no está disponible para tu idioma. Utiliza **/amazon_voices** para obtener una lista de los idiomas disponibles.',
  'command.amazon.settings.my.voice.success': 'Has cambiado tu voz a **{voice}** con éxito.',

  'command.amazon.settings.my.volume.success': 'Has cambiado tu volumen a **{volume}** con éxito.',
  'command.amazon.settings.my.rate.success': 'Has cambiado tu ritmo a **{rate}** con éxito.',
  'command.amazon.settings.my.pitch.success': 'Has cambiado tu tono a **{pitch}** con éxito.',

  'command.google.settings.default.language.invalid': 'Ese no es un idioma válido. Escribe **/google_langs** para obtener una lista de los idiomas disponibles.',
  'command.google.settings.default.language.success': 'Has cambiado el idioma por defecto a **{language}** con éxito.',
  'command.google.settings.default.speed.success': 'Has cambiado la velocidad por defecto a **{speed}** con éxito.',

  'command.google.settings.my.language.invalid': 'Ese no es un idioma válido. Escribe **/google_langs** para obtener una lista de los idiomas disponibles.',
  'command.google.settings.my.language.success': 'Has cambiado tu idioma a **{language}** con éxito.',
  'command.google.settings.my.speed.success': 'Has cambiado tu velocidad a **{speed}** con éxito.',

  'command.google.langs.embed.title': 'Lista de los idiomas disponibles para el proveedor de Google:',
  'command.google.langs.embed.description': `Esta es una lista completa de todos los idiomas disponibles para el proveedor de Google Translate.
    
      Para cambiar tu propio idioma, utiliza **/google_set_my language LANG_CODE**.
      Puedes también utilizar **/google_set_default language LANG_CODE** para cambiar el idioma por defecto que se utilizará en caso de que alguien no tenga uno configurado.`,
  'command.google.langs.embed.page': 'Página {number}:',

  'command.microsoft.langs.embed.title': 'Lista de los idiomas disponibles para el proveedor de Microsoft:',
  'command.microsoft.langs.embed.description': `Esta es una lista completa de todos los idiomas disponibles para el proveedor de Microsoft.
    
     Para cambiar tu propio idioma, utiliza **/ms_set_my language LANG_CODE**.
     Puedes también utilizar **/ms_set_default language LANG_CODE** para cambiar el idioma por defecto que se utilizará en caso de que alguien no tenga uno configurado.`,
  'command.microsoft.langs.embed.page': 'Página {number}:',

  'command.microsoft.voices.embed.title': 'Lista de las voces disponibles para el idioma {language}:',
  'command.microsoft.voices.embed.description': `Esta es una lista completa de todas las voces disponibles para el idioma {language}.
      
      Para cambiar tu propio idioma, utiliza **/ms_set_my voice VOICE_NAME**.
      Puedes también utilizar **/ms_set_default voice VOICE_NAME** para cambiar la voz por defecto que se utilizará en caso de que alguien no tenga uno configurado.`,
  'command.microsoft.voices.error.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Microsoft. Utiliza **/ms_langs** para obtener una lista de los idiomas disponibles.',

  'command.microsoft.settings.default.language.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Microsoft. Utiliza **/ms_langs** para obtener una lista de los idiomas disponibles.',
  'command.microsoft.settings.default.language.success': 'Has cambiado con éxito el idioma por defecto a **{language}** con la voz de **{voice}**.',

  'command.microsoft.settings.default.voice.invalidated': 'El idioma por defecto guardado parece ser inválido. Por favor, reinicia el idioma por defecto con **/ms_set_default language LANG_CODE**.',
  'command.microsoft.settings.default.voice.unsupported': 'La voz **{voice}** no está disponible para el idioma por defecto. Utiliza **/ms_voices** para obtener una lista de los idiomas disponibles.',
  'command.microsoft.settings.default.voice.success': 'Has cambiado la voz por defecto a **{voice}** con éxito.',

  'command.microsoft.settings.default.volume.success': 'Has cambiado el volumen por defecto a **{volume}** con éxito.',
  'command.microsoft.settings.default.rate.success': 'Has cambiado el ritmo por defecto a **{rate}** con éxito.',
  'command.microsoft.settings.default.pitch.success': 'Has cambiado el tono por defecto a **{pitch}** con éxito.',

  'command.microsoft.settings.my.language.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Microsoft. Utiliza **/ms_langs** para obtener una lista de los idiomas disponibles.',
  'command.microsoft.settings.my.language.success': 'Has cambiado con éxito tu idioma a **{language}** con la voz de **{voice}**.',

  'command.microsoft.settings.my.voice.invalidated': 'Tu idioma guardado parece ser inválido. Por favor, reinicia tu idioma con **/ms_set_my language LANG_CODE**.',
  'command.microsoft.settings.my.voice.unsupported': 'La voz **{voice}** no está disponible para tu idioma. Utiliza **/ms_voices** para obtener una lista de los idiomas disponibles.',
  'command.microsoft.settings.my.voice.success': 'Has cambiado tu voz a **{voice}** con éxito.',

  'command.microsoft.settings.my.volume.success': 'Has cambiado tu volumen a **{volume}** con éxito.',
  'command.microsoft.settings.my.rate.success': 'Has cambiado tu ritmo a **{rate}** con éxito.',
  'command.microsoft.settings.my.pitch.success': 'Has cambiado tu tono a **{pitch}** con éxito.',

  'command.locale.success': 'Has cambiado el idioma del bot a **{locale}**.',

  'command.timeout.out_of_range': 'Tiempo inválido, necesitar estar entre **{min}** y **{max}**.',
  'command.timeout.success': 'Me iré del canal de voz después de **{timeout}** minutos de inactividad.'
};

const CHANNEL_COMMANDS = {
  'channel_commands.set.success': 'Has cambiado el proveedor de este canal a **{name}** con éxito.',

  'channel_commands.settings.enabled.embed.title': 'Aquí está la configuración actual para el canal **#{channel}**',
  'channel_commands.settings.enabled.embed.description': 'Toma en cuenta que esta configuración se usa nada más cuando envíes mensajes regulares en este canal.',
  'channel_commands.settings.enabled.current.provider': 'Proveedor actual',
  'channel_commands.settings.enabled.no_settings': 'No existe configuración asociada a este proveedor.',

  'channel_commands.settings.disabled.embed.title': 'TTS basado en solo mensajes está desactivado en este canal',
  'channel_commands.settings.disabled.embed.description': 'Puedes activar el TTS basado en solo mensajes aquí **/set_channel_provider** y escogiendo el proveedor a usar.',

  'channel_commands.delete.already_disabled': 'TTS basado en solo mensajes ya está desactivado en este canal.',
  'channel_commands.delete.success': 'TTS basado en solo mensajes ha sido desactivado en este canal y su configuración ha sido eliminada.',

  'channel_commands.amazon.settings.language.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Amazon. Utiliza **/amazon_langs** para obtener una lista de los idiomas disponibles.',
  'channel_commands.amazon.settings.language.success': 'Has cambiado con éxito el idioma de este canal a **{language}** con la voz de **{voice}**.',

  'channel_commands.amazon.settings.voice.unsupported': 'La voz **{voice}** no está disponible para el idioma de este canal. Utiliza **/amazon_voices** para obtener una lista de los idiomas disponibles.',
  'channel_commands.amazon.settings.voice.success': 'Has cambiado la voz de este canal a **{voice}** con éxito.',

  'channel_commands.amazon.settings.volume.success': 'Has cambiado el volumen de este canal a **{volume}** con éxito.',
  'channel_commands.amazon.settings.rate.success': 'Has cambiado el ritmo de este canal a **{rate}** con éxito.',
  'channel_commands.amazon.settings.pitch.success': 'Has cambiado el tono de este canal a **{pitch}** con éxito.',

  'channel_commands.google.settings.language.invalid': 'Ese no es un idioma válido. Escribe **/google_langs** para obtener una lista de los idiomas disponibles.',
  'channel_commands.google.settings.language.success': 'Has cambiado el idioma de este canal a **{language}** con éxito.',
  'channel_commands.google.settings.speed.success': 'Has cambiado la velocidad de este canal a **{speed}** con éxito.',

  'channel_commands.microsoft.settings.language.unsupported': 'El idioma **{language}** no está disponible en el proveedor de Microsoft. Utiliza **/ms_langs** para obtener una lista de los idiomas disponibles.',
  'channel_commands.microsoft.settings.language.success': 'Has cambiado con éxito el idioma de este canal a **{language}** con la voz de **{voice}**.',

  'channel_commands.microsoft.settings.voice.unsupported': 'La voz **{voice}** no está disponible para el idioma de este canal. Utiliza **/ms_voices** para obtener una lista de los idiomas disponibles.',
  'channel_commands.microsoft.settings.voice.success': 'Has cambiado la voz de este canal a **{voice}** con éxito.',

  'channel_commands.microsoft.settings.volume.success': 'Has cambiado el volumen de este canal a **{volume}** con éxito.',
  'channel_commands.microsoft.settings.rate.success': 'Has cambiado el ritmo de este canal a **{rate}** con éxito.',
  'channel_commands.microsoft.settings.pitch.success': 'Has cambiado el tono de este canal a **{pitch}** con éxito.'
};

module.exports = {
  ...APP,
  ...ERROR,
  ...COMMAND,
  ...CHANNEL_COMMANDS
};
