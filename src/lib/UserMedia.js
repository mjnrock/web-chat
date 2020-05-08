export async function getUserMedia(success, error) {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    return stream;
}