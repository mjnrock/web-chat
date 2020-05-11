export async function getDisplayMedia(constraints, success, error) {
    const cons = constraints || {
        video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
        },
    }
    const stream = await navigator.mediaDevices.getDisplayMedia(cons, success, error);

    return stream;
}