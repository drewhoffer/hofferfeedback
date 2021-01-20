export function createFeedback(data) {
    return firestore.collection('feedback').add(data);
}
