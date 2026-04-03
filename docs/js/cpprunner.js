function initCppRunners () {
  if (typeof CodeMirror === 'undefined') return

  // Definir modo C++ mejorado con keywords de la STL
  if (!CodeMirror.mimeModes['text/x-c++src-enhanced']) {
    CodeMirror.defineMode('clike-enhanced', function (config) {
      var cppBase = CodeMirror.getMode(config, 'text/x-c++src')

      // Palabras de la STL que queremos resaltar como keywords
      var stlWords = [
        'cout',
        'cin',
        'cerr',
        'endl',
        'string',
        'vector',
        'array',
        'map',
        'set',
        'pair',
        'queue',
        'stack',
        'deque',
        'list',
        'sort',
        'swap',
        'min',
        'max',
        'abs',
        'find',
        'count',
        'push_back',
        'pop_back',
        'size',
        'empty',
        'clear',
        'begin',
        'end',
        'front',
        'back',
        'insert',
        'erase',
        'getline',
        'to_string',
        'size_t',
        'nullptr',
        'main'
      ]
      var stlSet = {}
      for (var i = 0; i < stlWords.length; i++) stlSet[stlWords[i]] = true

      return {
        startState: function () {
          return { base: CodeMirror.startState(cppBase) }
        },
        token: function (stream, state) {
          var baseToken = cppBase.token(stream, state.base)
          // Si el token base no lo reconoce como keyword, verificamos si es una STL word
          if (!baseToken || baseToken === 'variable') {
            var word = stream.current()
            if (stlSet[word]) return 'keyword'
          }
          return baseToken
        },
        indent: cppBase.indent,
        electricInput: cppBase.electricInput,
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        lineComment: '//'
      }
    })
    CodeMirror.defineMIME('text/x-c++src-enhanced', 'clike-enhanced')
  }

  document
    .querySelectorAll('div.highlight > pre > code')
    .forEach(function (codeEl) {
      var pre = codeEl.parentElement
      var wrapper = pre.parentElement

      if (wrapper.dataset.cppRunner) return
      wrapper.dataset.cppRunner = 'true'

      var originalCode = codeEl.textContent
      var usesCin = /\bcin\b/.test(originalCode)

      // Contenedor principal
      var container = document.createElement('div')
      container.className = 'cpp-container'

      // Barra de herramientas ARRIBA del editor
      var toolbar = document.createElement('div')
      toolbar.className = 'cpp-toolbar'

      var langLabel = document.createElement('span')
      langLabel.className = 'cpp-toolbar-lang'
      langLabel.textContent = 'C++'

      var toolbarActions = document.createElement('div')
      toolbarActions.className = 'cpp-toolbar-actions'

      var svgPlay =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>'
      var svgCopy =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
      var svgReset =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 1 3 7"/><polyline points="3 22 3 16 9 16"/></svg>'

      var btnRun = document.createElement('button')
      btnRun.className = 'cpp-toolbar-btn cpp-toolbar-btn--run'
      btnRun.title = 'Ejecutar'
      btnRun.innerHTML = svgPlay + ' Ejecutar'

      var btnCopy = document.createElement('button')
      btnCopy.className = 'cpp-toolbar-btn cpp-toolbar-btn--copy'
      btnCopy.title = 'Copiar'
      btnCopy.innerHTML = svgCopy + ' Copiar'

      var btnReset = document.createElement('button')
      btnReset.className = 'cpp-toolbar-btn cpp-toolbar-btn--reset'
      btnReset.title = 'Restaurar'
      btnReset.innerHTML = svgReset + ' Restaurar'

      toolbarActions.appendChild(btnReset)
      toolbarActions.appendChild(btnCopy)
      toolbarActions.appendChild(btnRun)
      toolbar.appendChild(langLabel)
      toolbar.appendChild(toolbarActions)
      container.appendChild(toolbar)

      // Editor CodeMirror
      var editorDiv = document.createElement('div')
      editorDiv.className = 'cpp-editor-wrapper'
      container.appendChild(editorDiv)

      var cm = CodeMirror(editorDiv, {
        value: originalCode,
        mode: 'text/x-c++src-enhanced',
        theme: 'dracula',
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        matchBrackets: true
      })

      // Campo de entrada (solo si usa cin)
      var inputField = null
      if (usesCin) {
        var inputWrapper = document.createElement('div')
        inputWrapper.className = 'cpp-input-wrapper'

        var inputLabel = document.createElement('label')
        inputLabel.className = 'cpp-input-label'
        inputLabel.textContent =
          '✏️ Entrada (separa valores con Enter o espacio):'

        inputField = document.createElement('textarea')
        inputField.className = 'cpp-input-field'
        inputField.rows = 2
        inputField.placeholder = 'Escribe los valores que pide el programa...'

        inputWrapper.appendChild(inputLabel)
        inputWrapper.appendChild(inputField)
        container.appendChild(inputWrapper)
      }

      // Area de salida
      var outputDiv = document.createElement('div')
      outputDiv.className = 'cpp-output'

      var outputLabel = document.createElement('span')
      outputLabel.className = 'cpp-output-label'
      outputLabel.textContent = 'Salida:'

      var outputContent = document.createElement('pre')
      outputContent.className = 'cpp-output-content'

      outputDiv.appendChild(outputLabel)
      outputDiv.appendChild(outputContent)
      container.appendChild(outputDiv)

      // Ejecutar
      btnRun.addEventListener('click', function () {
        var userInput = inputField ? inputField.value : ''
        outputContent.textContent = '⏳ Compilando...'
        outputContent.classList.remove('cpp-output-error')
        outputDiv.classList.add('cpp-output--visible')
        btnRun.disabled = true

        fetch('https://wandbox.org/api/compile.json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code: cm.getValue(),
            compiler: 'gcc-head',
            stdin: userInput
          })
        })
          .then(function (res) {
            return res.json()
          })
          .then(function (data) {
            var out = data.program_output || ''
            var err = data.compiler_error || data.program_error || ''
            if (data.status !== '0' || err) {
              outputContent.textContent = '❌ ' + (err || 'Error desconocido')
              outputContent.classList.add('cpp-output-error')
            } else {
              outputContent.textContent = out || '(sin salida)'
              outputContent.classList.remove('cpp-output-error')
            }
          })
          .catch(function (e) {
            outputContent.textContent = '❌ Error de conexion: ' + e.message
            outputContent.classList.add('cpp-output-error')
          })
          .finally(function () {
            btnRun.disabled = false
          })
      })

      // Copiar
      btnCopy.addEventListener('click', function () {
        navigator.clipboard.writeText(cm.getValue())
        var svgCheck =
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
        btnCopy.innerHTML = svgCheck + ' Copiado'
        setTimeout(function () {
          btnCopy.innerHTML = svgCopy + ' Copiar'
        }, 1500)
      })

      // Restaurar
      btnReset.addEventListener('click', function () {
        cm.setValue(originalCode)
        outputDiv.classList.remove('cpp-output--visible')
      })

      // Reemplazar bloque original
      wrapper.insertAdjacentElement('afterend', container)
      wrapper.style.display = 'none'
      // Forzar que CodeMirror recalcule dimensiones ahora que esta visible
      cm.refresh()
    })
}

// Carga inicial
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCppRunners)
} else {
  initCppRunners()
}

// Soporte para navegacion instantanea del tema Material
if (typeof document$ !== 'undefined') {
  document$.subscribe(function () {
    initCppRunners()
  })
}
