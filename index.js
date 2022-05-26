import { sendCommandToMqtt } from './helpers/sendCommandToMqtt.js';

const devices = {
    toggleLight: ['cmnd/tasmota/Power', 'TOGGLE', 'stat/tasmota/RESULT'],
    fullStatus: ['cmnd/tasmota/Status0', '', 'stat/tasmota/STATUS0'],
    sensorStatus: ['cmnd/tasmota/Status10', '10', 'stat/tasmota/STATUS10'],
};

console.log(await sendCommandToMqtt(devices.toggleLight));
