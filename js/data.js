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
