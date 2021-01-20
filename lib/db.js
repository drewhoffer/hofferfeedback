import firebase from '@/utils/firebase';
import getStripe from './stripe';


const firestore = firebase.firestore();
const app = firebase.app();

export async function createCheckoutSession(uid) {
    const checkoutSessionRef = await firestore
        .collection('users')
        .doc(uid)
        .collection('checkout_sessions')
        .add({
            price: 'price_1IBjroFfuuasTYhVVyoTIguD',
            // This can be removed if you don't want promo codes
            allow_promotion_codes: true,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
    checkoutSessionRef.onSnapshot(async (snap) => {
        const { sessionId } = snap.data();
        if (sessionId) {
            const stripe = await getStripe();
            stripe.redirectToCheckout({ sessionId });
        }
    });
}

export async function goToBillingPortal() {
    const functionRef = app
        .functions('us-central1')
        .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
    const { data } = await functionRef({
        returnUrl: `${window.location.origin}/account`,
    });
    window.location.assign(data.url);
}

export function createFeedback(data) {
    return firestore.collection('feedback').add(data);
}

export function createSite(data) {
    const site = firestore.collection('sites').doc();
    site.set(data);
    return site;
}

export function deleteFeedback(id) {
    return firestore.collection('feedback').doc(id).delete();
}

export function updateFeedback(id, newValues) {
    return firestore.collection('feedback').doc(id).update(newValues);
}
