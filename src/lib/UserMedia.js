export async function getUserMedia(constraints, success, error) {
    const cons = constraints || {
        video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
        },
        // video: true,
        audio: true,
    }
    const stream = await navigator.mediaDevices.getUserMedia(cons, success, error);

    return stream;
}