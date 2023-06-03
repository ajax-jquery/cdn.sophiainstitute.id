function getParameter (name, url) {
      if (!url) url = getScriptName()
      name = name.replace(/[\[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      var results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
  
    
    function getScriptName () {
      var error = new Error(),
        source,
        lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/),
        currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/)
  
      if ((source = lastStackFrameRegex.exec(error.stack.trim())) && source[1] !== '')
        return source[1]
      else if ((source = currentStackFrameRegex.exec(error.stack.trim())))
        return source[1]
      else if (error.fileName !== undefined)
        return error.fileName
    }

alert(getParameter("UJI"))
