﻿function Enemy(userInfo, ship, two) {
    var keys = [],
        keyMap = new Keys().keyMap;

    var destroy = function() {
        two.remove(ship.ship);
    };

    var updateFromDto = function (dto) {
        keys = dto.keys;
        ship.updateFromDto(dto);
    };

    var update = function () {
        if (keyExists(keyMap.up)) {
            ship.accelerate();
        }
        
        if (keyExists(keyMap.left)) {
            ship.leftTurn();
        }
        
        if (keyExists(keyMap.right)) {
            ship.rightTurn();
        }

        ship.update();
    };

    var keyExists = function(key) {
        return keys.indexOf(key) >= 0;
    };

    return {
        guid: userInfo.guid,
        ship: ship,
        destroy: destroy,
        updateFromDto: updateFromDto,
        update: update
    };
}