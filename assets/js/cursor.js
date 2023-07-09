const star = [],
  star_x = [],
  star_y = [],
  star_remaining_ticks = [],
  tiny = [],
  tiny_x = [],
  tiny_y = [],
  tiny_remaining_ticks = [],
  sparkles = 250,
  sparkle_lifetime = 30,
  sparkle_distance = 30
let doc_height,
  doc_width,
  sparkles_enabled = null
window.onload = function () {
  doc_height = document.documentElement.scrollHeight
  doc_width = document.documentElement.scrollWidth
  animate_sparkles()
  sparkles_enabled === null && sparkle(true)
}
function sparkle(_0x3397ac = null) {
  _0x3397ac === null
    ? (sparkles_enabled = !sparkles_enabled)
    : (sparkles_enabled = !!_0x3397ac)
  sparkles_enabled && star.length < sparkles && sparkle_init()
}
function sparkle_destroy() {
  let _0x3de406
  while (tiny.length) {
    _0x3de406 = tiny.pop()
    _0x3de406 && document.body.removeChild(_0x3de406)
  }
  while (star.length) {
    _0x3de406 = star.pop()
    _0x3de406 && document.body.removeChild(_0x3de406)
  }
}
function sparkle_init() {
  function _0x2c94f5(_0x4d966a, _0x5a5e04) {
    const _0x4da584 = document.createElement('div')
    return (
      (_0x4da584.style.position = 'absolute'),
      (_0x4da584.style.height = _0x4d966a + 'px'),
      (_0x4da584.style.width = _0x5a5e04 + 'px'),
      (_0x4da584.style.overflow = 'hidden'),
      _0x4da584
    )
  }
  for (let _0xf8efd3 = 0; _0xf8efd3 < sparkles; _0xf8efd3++) {
    const _0x1a3e41 = _0x2c94f5(3, 3)
    _0x1a3e41.style.visibility = 'hidden'
    _0x1a3e41.style.zIndex = '999'
    tiny[_0xf8efd3] && document.body.removeChild(tiny[_0xf8efd3])
    document.body.appendChild(_0x1a3e41)
    tiny[_0xf8efd3] = _0x1a3e41
    tiny_remaining_ticks[_0xf8efd3] = null
    const _0x2efab1 = _0x2c94f5(5, 5)
    _0x2efab1.style.backgroundColor = 'transparent'
    _0x2efab1.style.visibility = 'hidden'
    _0x2efab1.style.zIndex = '999'
    const _0x13255e = _0x2c94f5(1, 5),
      _0x3a2275 = _0x2c94f5(5, 1)
    _0x2efab1.appendChild(_0x13255e)
    _0x2efab1.appendChild(_0x3a2275)
    _0x13255e.style.top = '2px'
    _0x13255e.style.left = '0px'
    _0x3a2275.style.top = '0px'
    _0x3a2275.style.left = '2px'
    star[_0xf8efd3] && document.body.removeChild(star[_0xf8efd3])
    document.body.appendChild(_0x2efab1)
    star[_0xf8efd3] = _0x2efab1
    star_remaining_ticks[_0xf8efd3] = null
  }
  window.addEventListener('resize', function () {
    for (let _0x880f54 = 0; _0x880f54 < sparkles; _0x880f54++) {
      star_remaining_ticks[_0x880f54] = null
      star[_0x880f54].style.left = '0px'
      star[_0x880f54].style.top = '0px'
      star[_0x880f54].style.visibility = 'hidden'
      tiny_remaining_ticks[_0x880f54] = null
      tiny[_0x880f54].style.top = '0px'
      tiny[_0x880f54].style.left = '0px'
      tiny[_0x880f54].style.visibility = 'hidden'
    }
    doc_height = document.documentElement.scrollHeight
    doc_width = document.documentElement.scrollWidth
  })
  document.onmousemove = function (_0x4a0339) {
    if (sparkles_enabled && !_0x4a0339.buttons) {
      const _0x353166 = Math.sqrt(
          Math.pow(_0x4a0339.movementX, 2) + Math.pow(_0x4a0339.movementY, 2)
        ),
        _0x4ca057 = (_0x4a0339.movementX * sparkle_distance * 2) / _0x353166,
        _0x5cb3d3 = (_0x4a0339.movementY * sparkle_distance * 2) / _0x353166,
        _0x487679 = _0x353166 / sparkle_distance
      let _0x5b468d = 0,
        _0x354fa3 = _0x4a0339.pageY,
        _0x35b6a6 = _0x4a0339.pageX
      while (Math.abs(_0x5b468d) < Math.abs(_0x4a0339.movementX)) {
        create_star(_0x35b6a6, _0x354fa3, _0x487679)
        let _0x437301 = Math.random()
        _0x35b6a6 -= _0x4ca057 * _0x437301
        _0x354fa3 -= _0x5cb3d3 * _0x437301
        _0x5b468d += _0x4ca057 * _0x437301
      }
    }
  }
}
function animate_sparkles(_0x12363e = 60) {
  const _0x1a465c = 1000 / _0x12363e
  let _0x434ced = 0
  for (let _0x5e7c90 = 0; _0x5e7c90 < star.length; _0x5e7c90++) {
    _0x434ced += update_star(_0x5e7c90)
  }
  for (let _0x6cb4ee = 0; _0x6cb4ee < tiny.length; _0x6cb4ee++) {
    _0x434ced += update_tiny(_0x6cb4ee)
  }
  _0x434ced === 0 && !sparkles_enabled && sparkle_destroy()
  setTimeout('animate_sparkles(' + _0x12363e + ')', _0x1a465c)
}
function create_star(_0x1a27b2, _0x1f6c08, _0x5bab4c = 1) {
  if (_0x1a27b2 + 5 >= doc_width || _0x1f6c08 + 5 >= doc_height) {
    return
  }
  if (Math.random() > _0x5bab4c) {
    return
  }
  function _0x351bb0() {
    let _0x5f012f = []
    return (
      (_0x5f012f[0] = 255),
      (_0x5f012f[1] = Math.floor(Math.random() * 256)),
      (_0x5f012f[2] = Math.floor(Math.random() * (256 - _0x5f012f[1] / 2))),
      _0x5f012f.sort(function () {
        return 0.5 - Math.random()
      }),
      'rgb(' + _0x5f012f[0] + ', ' + _0x5f012f[1] + ', ' + _0x5f012f[2] + ')'
    )
  }
  let _0x4b6f49 = sparkle_lifetime * 2 + 1,
    _0x56dbb8 = NaN
  for (let _0x42d6ee = 0; _0x42d6ee < sparkles; _0x42d6ee++) {
    if (!star_remaining_ticks[_0x42d6ee]) {
      _0x4b6f49 = null
      _0x56dbb8 = _0x42d6ee
      break
    } else {
      star_remaining_ticks[_0x42d6ee] < _0x4b6f49 &&
        ((_0x4b6f49 = star_remaining_ticks[_0x42d6ee]), (_0x56dbb8 = _0x42d6ee))
    }
  }
  _0x4b6f49 && star_to_tiny(_0x56dbb8)
  if (_0x56dbb8 >= 0) {
    return (
      (star_remaining_ticks[_0x56dbb8] = sparkle_lifetime * 2),
      (star_x[_0x56dbb8] = _0x1a27b2),
      (star[_0x56dbb8].style.left = _0x1a27b2 + 'px'),
      (star_y[_0x56dbb8] = _0x1f6c08),
      (star[_0x56dbb8].style.top = _0x1f6c08 + 'px'),
      (star[_0x56dbb8].style.clip = 'rect(0px, 5px, 5px, 0px)'),
      (star[_0x56dbb8].childNodes[0].style.backgroundColor = star[
        _0x56dbb8
      ].childNodes[1].style.backgroundColor =
        '#fff'),
      (star[_0x56dbb8].style.visibility = 'visible'),
      _0x56dbb8
    )
  }
}
function update_star(_0x12d21d) {
  if (star_remaining_ticks[_0x12d21d] === null) {
    return false
  }
  star_remaining_ticks[_0x12d21d] -= 1
  if (star_remaining_ticks[_0x12d21d] === 0) {
    return star_to_tiny(_0x12d21d), false
  }
  star_remaining_ticks[_0x12d21d] === sparkle_lifetime &&
    (star[_0x12d21d].style.clip = 'rect(1px, 4px, 4px, 1px)')
  if (star_remaining_ticks[_0x12d21d] > 0) {
    star_y[_0x12d21d] += 1 + 3 * Math.random()
    star_x[_0x12d21d] += ((_0x12d21d % 5) - 2) / 5
    if (
      star_y[_0x12d21d] + 5 < doc_height &&
      star_x[_0x12d21d] + 5 < doc_width
    ) {
      return (
        (star[_0x12d21d].style.top = star_y[_0x12d21d] + 'px'),
        (star[_0x12d21d].style.left = star_x[_0x12d21d] + 'px'),
        true
      )
    }
  }
  return (
    (star_remaining_ticks[_0x12d21d] = null),
    (star[_0x12d21d].style.left = '0px'),
    (star[_0x12d21d].style.top = '0px'),
    (star[_0x12d21d].style.visibility = 'hidden'),
    false
  )
}
function star_to_tiny(_0x27d070) {
  if (star_remaining_ticks[_0x27d070] === null) {
    return
  }
  star_y[_0x27d070] + 3 < doc_height &&
    star_x[_0x27d070] + 3 < doc_width &&
    ((tiny_remaining_ticks[_0x27d070] = sparkle_lifetime * 2),
    (tiny_y[_0x27d070] = star_y[_0x27d070]),
    (tiny[_0x27d070].style.top = star_y[_0x27d070] + 'px'),
    (tiny_x[_0x27d070] = star_x[_0x27d070]),
    (tiny[_0x27d070].style.left = star_x[_0x27d070] + 'px'),
    (tiny[_0x27d070].style.width = '2px'),
    (tiny[_0x27d070].style.height = '2px'),
    (tiny[_0x27d070].style.backgroundColor =
      star[_0x27d070].childNodes[0].style.backgroundColor),
    (star[_0x27d070].style.visibility = 'hidden'),
    (tiny[_0x27d070].style.visibility = 'visible'))
  star_remaining_ticks[_0x27d070] = null
  star[_0x27d070].style.left = '0px'
  star[_0x27d070].style.top = '0px'
  star[_0x27d070].style.visibility = 'hidden'
}
function update_tiny(_0x18810a) {
  if (tiny_remaining_ticks[_0x18810a] === null) {
    return false
  }
  tiny_remaining_ticks[_0x18810a] -= 1
  tiny_remaining_ticks[_0x18810a] === sparkle_lifetime &&
    ((tiny[_0x18810a].style.width = '1px'),
    (tiny[_0x18810a].style.height = '1px'))
  if (tiny_remaining_ticks[_0x18810a] > 0) {
    tiny_y[_0x18810a] += 1 + 2 * Math.random()
    tiny_x[_0x18810a] += ((_0x18810a % 4) - 2) / 4
    if (
      tiny_y[_0x18810a] + 3 < doc_height &&
      tiny_x[_0x18810a] + 3 < doc_width
    ) {
      return (
        (tiny[_0x18810a].style.top = tiny_y[_0x18810a] + 'px'),
        (tiny[_0x18810a].style.left = tiny_x[_0x18810a] + 'px'),
        true
      )
    }
  }
  return (
    (tiny_remaining_ticks[_0x18810a] = null),
    (tiny[_0x18810a].style.top = '0px'),
    (tiny[_0x18810a].style.left = '0px'),
    (tiny[_0x18810a].style.visibility = 'hidden'),
    false
  )
}
