module.exports = class RoomAvailability{
    roomType;
    roomTypeName;
    availability;

    constructor(roomType, roomTypeName, availability){
        this.roomType = roomType;
        this.roomTypeName = roomTypeName;
        this.availability = availability;
    }
}