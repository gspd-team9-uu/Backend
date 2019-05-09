'use strict';

module.exports = function(Robot) {

    // Robot.disableRemoteMethodByName('create');
    Robot.disableRemoteMethodByName('replaceOrCreate');
    Robot.disableRemoteMethodByName('patchOrCreate');
    Robot.disableRemoteMethodByName('exists');
    // Robot.disableRemoteMethodByName('findById');
    // Robot.disableRemoteMethodByName('find');
    Robot.disableRemoteMethodByName('findOne');
    // Robot.disableRemoteMethodByName('destroyById');
    // Robot.disableRemoteMethodByName('deleteById');
    Robot.disableRemoteMethodByName('count');
    Robot.disableRemoteMethodByName('replaceById');
    // Robot.disableRemoteMethodByName('prototype.patchAttributes');
    Robot.disableRemoteMethodByName('createChangeStream');
    Robot.disableRemoteMethodByName('updateAll');
    Robot.disableRemoteMethodByName('upsertWithWhere');

    Robot.disableRemoteMethodByName('prototype.__create__actions');
    Robot.disableRemoteMethodByName('prototype.__destroy__actions');
    Robot.disableRemoteMethodByName('prototype.__delete__actions');
    Robot.disableRemoteMethodByName('prototype.__findById__actions');
    Robot.disableRemoteMethodByName('prototype.__updateById__actions');
    Robot.disableRemoteMethodByName('prototype.__destroyById__actions');
    Robot.disableRemoteMethodByName('prototype.__count__actions');
    
};
