'use strict';

function profile(){
    core_storage_save();

    const result = test_time({
      'function': eval(core_storage_data['function']),
      'function-args': JSON.parse(core_storage_data['args']),
      'runs': core_storage_data['runs'],
    });

    core_ui_update({
      'ids': {
        'average': result['average'],
        'max': result['max'],
        'min': result['min'],
        'total': result['total'],
      },
    });
}

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
        + '<button id=profile type=button>Profile</button>',
      'menu-block-events': false,
      'menu-lock': true,
      'storage': {
        'args': '{}',
        'function': '',
        'runs': 100,
      },
      'storage-menu': '<table><tr><td><input id=function type=text><td>Function'
        + '<tr><td><textarea id=args></textarea><td>Args'
        + '<tr><td><input id=runs min=1 step=any type=number><td>Runs</table>',
      'title': 'Profiler.htm',
    });
}
