module.exports = class Availability{
    roomType;
    roomTypeName;
    availabilityDate;
    numberAvailable;
    numberBooked;
    totalRooms;

    constructor(roomType, roomTypeName, availabilityDate, numberAvailable, numberBooked, totalRooms){
        this.roomType = roomType;
        this.roomTypeName = roomTypeName;
        this.availabilityDate = availabilityDate;
        this.numberAvailable = numberAvailable;
        this.numberBooked = numberBooked;
        this.totalRooms = totalRooms;
    }
}