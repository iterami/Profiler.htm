'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'profile': {
          'onclick': profile,
        },
      },
      'info': '<table><tr><td id=average><td>Average'
        + '<tr><td id=max><td>Max'
        + '<tr><td id=min><td>Min'
        + '<tr><td id=total><td>Total</table>'
        + '<input id=profile type=button value=Profile>',
      'menu': true,
      'menu-block-events': false,
      'storage': {
        'args': '{}',
        'function': '',
        'runs': 100,
      },
      'storage-menu': '<table><tr><td><input id=function><td>Function'
        + '<tr><td><textarea id=args></textarea><td>Args'
        + '<tr><td><input id=runs min=1 type=number><td>Runs</table>',
      'title': 'Profiler.htm',
    });
}
