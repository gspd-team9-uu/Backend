'use strict';

module.exports = function(Action) {

    Action.disableRemoteMethodByName('create');
    Action.disableRemoteMethodByName('replaceOrCreate');
    Action.disableRemoteMethodByName('patchOrCreate');
    Action.disableRemoteMethodByName('exists');
    Action.disableRemoteMethodByName('findById');
    // Action.disableRemoteMethodByName('find');
    Action.disableRemoteMethodByName('findOne');
    // Action.disableRemoteMethodByName('destroyById');
    // Action.disableRemoteMethodByName('deleteById');
    Action.disableRemoteMethodByName('count');
    Action.disableRemoteMethodByName('replaceById');
    Action.disableRemoteMethodByName('prototype.patchAttributes');
    Action.disableRemoteMethodByName('createChangeStream');
    Action.disableRemoteMethodByName('updateAll');
    Action.disableRemoteMethodByName('upsertWithWhere');
    
    Action.disableRemoteMethodByName('prototype.__get__robot');

};
