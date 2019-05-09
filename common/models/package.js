'use strict';

module.exports = function(Package) {

    // Package.disableRemoteMethodByName('create');
    Package.disableRemoteMethodByName('replaceOrCreate');
    Package.disableRemoteMethodByName('patchOrCreate');
    Package.disableRemoteMethodByName('exists');
    // Package.disableRemoteMethodByName('findById');
    // Package.disableRemoteMethodByName('find');
    Package.disableRemoteMethodByName('findOne');
    // Package.disableRemoteMethodByName('destroyById');
    // Package.disableRemoteMethodByName('deleteById');
    Package.disableRemoteMethodByName('count');
    Package.disableRemoteMethodByName('replaceById');
    // Package.disableRemoteMethodByName('prototype.patchAttributes');
    Package.disableRemoteMethodByName('createChangeStream');
    Package.disableRemoteMethodByName('updateAll');
    Package.disableRemoteMethodByName('upsertWithWhere');

};
