$(main)

function main() {
  $('canvas, div').hide()
  $('input').focus()
  images = {}
  getImages()
  function getImages() {
    images.jesse = new Image()
    images.jesse.src = 'jesse.png'
    images.rock = new Image()
    images.rock.src = 'rock.png'
  }

  $('button').on('click', function() {
    $('canvas')[0].width = $(window).width()
    $('canvas')[0].height = $(window).height()
    ctx = $('canvas')[0].getContext('2d')
    ctx.fillStyle = '#ffffff'
    $('canvas').show()
    $('body').addClass('game')
    $('button, input').hide()
    game()
  })
  /*$('button').on('click', function() {
    var elem = $('body')[0]
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
    else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen()
    }
    else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen()
    }
    else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    }
    $('input').hide()
    $('button').before('<div class=\'allow\'>Click allow if there is an \"allow fullscreen\" panel.</div>')
    $('button').html('okay')
    $('button').off('click')
    $('button').on('click', start)
  })*/

}

function start() {
  $('body').css('cursor', 'none')
  $('button, div.allow').hide()
  $('div:not(.allow)').show()
  $('body').addClass('game')
  $(window).on('resize', resizeCanvas)
  $(window).trigger('resize')
  $(window).on('resize', function() {
    $('body').css('cursor', 'auto')
  })
  $('canvas').show()
  ctx = $('canvas')[0].getContext('2d')
  cinematic()
}

function cinematic() {
  function Planet(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
  }
  var second = 0
  var time = 0
  var rotation = 0
  var again = true
  var scale = 1
  var rotSpeed = .01
  var timeFunctions = {}
  var animation = function(){}
  var centerX = $(window).width() / 2
  var centerY = $(window).height() / 2
  var planet1 = new Planet(centerX + 200, centerY, 10)
  var planet2 = new Planet(centerX - 200, centerY, 10)
  var sun = new Planet(centerX, centerY, 300)
  function cinLoop() {
    if (again) {
      requestAnimationFrame(cinLoop)
    }
    if (second == 59) {
      second = 0
      time++
      if (timeFunctions['time' + time]) {
        timeFunctions['time' + time]()
      }
    }
    else {
      second++
    }
    ctx.clearRect(0, 0, $(window).width(), $(window).height())
    ctx.fillStyle = '#ffffff'

    ctx.beginPath()
    ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()

    timeFunctions.time1 = function() {
      $('p').html('there was once a star')
    }

    timeFunctions.time2 = function() {
      animation = function() {
        sun.radius -= 1

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(rotation)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        ctx.beginPath()
        ctx.arc(planet1.x, planet1.y, planet1.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(-rotation * 2)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        ctx.beginPath()
        ctx.arc(planet2.x, planet2.y, planet2.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(rotation)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        rotation += .01
      }
    }

    timeFunctions.time4 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('that two planets orbited')
      }, 100)
    }

    timeFunctions.time5 = function() {
      animation = function() {
        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(rotation)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        ctx.beginPath()
        ctx.arc(planet1.x, planet1.y, planet1.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(-rotation * 2)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        ctx.beginPath()
        ctx.arc(planet2.x, planet2.y, planet2.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(rotation)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        rotation += rotSpeed
      }
    }

    timeFunctions.time8 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('the two planets passed each other for billions of years')
      }, 100)
    }

    timeFunctions.time12 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('but one day they were destined to collide')
      }, 100)
    }

    timeFunctions.time13 = function() {
      rotSpeed = .007
    }

    timeFunctions.time14 = function() {
      rotSpeed = .004
    }

    timeFunctions.time15 = function() {
      rotSpeed = .001
    }

    timeFunctions.time18 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('when there was approximately one second before the collision')
      }, 100)
    }

    timeFunctions.time23 = function() {
      $('p').html('')
    }

    timeFunctions.time24 = function() {
      rotSpeed = 0
      $('p').html('the planets\' magnetic poles faced each other perfectly')
    }

    timeFunctions.time30 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('they were equally repelled by their magnetic poles and attracted by their gravities')
      }, 100)
    }

    timeFunctions.time35 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('one side of the planets burned with lava')
      }, 100)
    }

    timeFunctions.time39 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('the other side froze harder than the deepest glacier')
      }, 100)
    }

    timeFunctions.time43 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('life was two dimensional')
      }, 100)
    }

    timeFunctions.time47 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('because the only habitable region was a longitude line')
      }, 100)
    }

    timeFunctions.time51 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('definately not because 3d graphics were harder')
      }, 100)
    }

    timeFunctions.time55 = function() {
      $('div').hide()
      animation = function() {
        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(rotation)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        ctx.beginPath()
        ctx.arc(planet1.x, planet1.y, planet1.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(-rotation * 2)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        ctx.beginPath()
        ctx.arc(planet2.x, planet2.y, planet2.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()

        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.rotate(rotation)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)

        rotation += rotSpeed

        ctx.translate(0, -12)
        ctx.translate($(window).width() / 2, $(window).height() / 2)
        ctx.scale(scale, scale)
        ctx.translate(-$(window).width() / 2, -$(window).height() / 2)
        scale += .001
      }
    }

    timeFunctions.time56 = function() {
      setTimeout(function() {
        again = false
        setTimeout(function() {
          game()
        }, 1000)
      }, 500)
    }

    animation()
  }
  cinLoop()
}

function game() {
  setup()
  var stuff
  var canvasX = 0
  var canvasY = 0
  function setup() {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, $(window).width(), $(window).height())
    ctx.translate($(window).width() / 2, $(window).height() / 2)
    $.ajax({
      url: 'stuff.json',
      success: function(data) {
        stuff = data
        loop()
      }
    })
  }

  var second = 0
  var time = 0
  var timeFunctions = {}

  function loop() {
    requestAnimationFrame(loop)

    if (second == 59) {
      second = 0
      time++
      if (timeFunctions['time' + time]) {
        timeFunctions['time' + time]()
      }
    }
    else {
      second++
    }

    ctx.clearRect(0, 0, -10000, -1000)
    ctx.clearRect(0, 0, -10000, 1000)
    ctx.clearRect(0, 0, 10000, -1000)
    ctx.clearRect(0, 0, 10000, 1000)
    ctx.clearRect(11000, 0, 100000, 1000)
    ctx.clearRect(11000, 0, 100000, -1000)
    for (var name in stuff) {
      var thing = stuff[name]
      if (thing == stuff.jesse) {
        ctx.drawImage(images.jesse, thing.x, thing.y, thing.width, thing.height)
      }
      else {
        if (Math.abs(thing.x - stuff.jesse.x) < 2000) {
          ctx.drawImage(images.rock, thing.x, thing.y, thing.width, thing.height)
        }
      }
    }
    var jesseX = stuff.jesse.x + stuff.jesse.width / 2
    var jesseY = stuff.jesse.y + stuff.jesse.height / 2
    var fly = new Vector(0, jesseY / 100)
    if (key.isPressed('up')) {
      fly.y -= 2.5
    }
    if (key.isPressed('right')) {
      fly.x += 2.5
    }
    if (key.isPressed('down')) {
      fly.y += 2.5
    }
    if (key.isPressed('left')) {
      fly.x -= 2.5
    }
    stuff.jesse.x += fly.x
    stuff.jesse.y += fly.y
    for (name in stuff) {
      thing = stuff[name]
      var jessePoints = getPoints(stuff.jesse)
      if (thing != stuff.jesse) {
        var collisionPoints = getCollisionPoints(thing)
        for (var pointName in jessePoints) {
          var jessePoint = jessePoints[pointName]
          if (jessePoint.x > collisionPoints[0].x && jessePoint.y > collisionPoints[0].y && jessePoint.x < collisionPoints[1].x && jessePoint.y < collisionPoints[1].y) {
            var thingPoints = getPoints(thing)
            /*for (var thingPointName in thingPoints) {
              var thingPoint = thingPoints[thingPointName]
              if (pDistance(thingPoint, jessePoint) < 3) {
                if (Math.abs(fly.x) > Math.abs(fly.y)) {
                  stuff.jesse.x -= fly.x
                  stuff.jesse.y -= fly.y * .5
                }
                else {
                  stuff.jesse.y -= fly.y
                  stuff.jesse.x -= fly.x * .5
                }
              }
            }*/
            var min = thingPoints[0]
            for (var v = 1; v <= 3; v++) {
              if (pDistance(thingPoints[v], jessePoint) < pDistance(min, jessePoint)) {
                min = thingPoints[v]
              }
            }
            var i = thingPoints.indexOf(min);
            if(i != -1) {
            	thingPoints.splice(i, 1);
            }
            var min2 = thingPoints[0]
            for (v = 1; v <= 2; v++) {
              if (pDistance(thingPoints[v], jessePoint) < pDistance(min2, jessePoint)) {
                min2 = thingPoints[v]
              }
            }
            var thingPoints = getPoints(thing)
            if (min.x == min2.x) {
              stuff.jesse.x -= fly.x
              for (var thingPointName in thingPoints) {
                var thingPoint = thingPoints[thingPointName]
                if (pDistance(thingPoint, jessePoint) < 5) {
                  stuff.jesse.x -= fly.x * 5
                  stuff.jesse.y -= fly.y * 2
                }
              }
            }
            else  {
              stuff.jesse.y -= fly.y
              for (var thingPointName in thingPoints) {
                var thingPoint = thingPoints[thingPointName]
                if (pDistance(thingPoint, jessePoint) < 5) {
                  stuff.jesse.y -= fly.y * 5
                  stuff.jesse.x -= fly.x * 2
                }
              }
            }
          }
        }
      }
    }
    if (Math.abs(stuff.jesse.y) > 600) {
      stuff.jesse.x = -40
      stuff.jesse.y = -40
    }
    if (key.isPressed('s')) {
      stuff.jesse.x = -40
      stuff.jesse.y = -40
    }
    if (key.isPressed('d')) {
      stuff.jesse.x = 9900
      stuff.jesse.y = -40
    }
    ctx.translate((stuff.jesse.x + canvasX) * -1, 0)
    canvasX -= stuff.jesse.x + canvasX

    timeFunctions.time2 = function() {
      $('.dwarf').show()
      $('p').html('you are between the two planets')
    }

    timeFunctions.time6 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('one is above you and the other is below you')
      }, 100)
    }

    timeFunctions.time10 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('the further you move towards a planet, the more its gravity affects you')
      }, 100)
    }

    timeFunctions.time14 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('you can move with the arrow keys')
      }, 100)
    }

    timeFunctions.time18 = function() {
      $('p').html('')
      setTimeout(function() {
        $('p').html('s: suicide')
      }, 100)
    }

    timeFunctions.time22 = function() {
      $('.dwarf').hide()
    }

    ctx.font = '15px \'Open Sans\''
    ctx.fillText('d: draw', 9900, 100)

  }

  function Vector(x, y) {
    this.x = x
    this.y = y
  }

  function getPoints(thing) {
    var points = [
      new Vector(thing.x, thing.y),
      new Vector(thing.x + thing.width, thing.y + thing.height),
      new Vector(thing.x, thing.y + thing.height),
      new Vector(thing.x + thing.width, thing.y)
    ]
    return points
  }

  function getCollisionPoints(thing) {
    var points = [
      new Vector(thing.x, thing.y),
      new Vector(thing.x + thing.width, thing.y + thing.height)
    ]
    return points
  }
}

function resizeCanvas() {
  $('canvas')[0].width = $(window).width()
  $('canvas')[0].height = $(window).height()
}

function pDistance(point1, point2) {
  return(Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2)))
}
