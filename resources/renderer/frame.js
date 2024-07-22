/**
 * Frame module
 */

let frame;

document.addEventListener('DOMContentLoaded', () => {
    frame = document.querySelector('body');

    console.log('Frame element ->', frame);

    const sendTestBtn = frame.querySelector('.send-test');

    console.log(sendTestBtn);

    sendTestBtn.addEventListener('click', () => {
        eevents.ping().then((val) => {
            console.log(val);
        })
    });
});
